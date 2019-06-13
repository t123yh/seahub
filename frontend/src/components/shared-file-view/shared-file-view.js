import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Account from '../common/account';
import { gettext, siteRoot, mediaUrl, logoPath, logoWidth, logoHeight, siteTitle } from '../../utils/constants';
import { Button, ModalHeader, Modal, ModalBody, ModalFooter, Input, Alert, Row } from 'reactstrap';
import { Utils } from '../../utils/utils';
import { serviceURL } from '../../utils/constants';
import { seafileAPI } from '../../utils/seafile-api';
import FormData from 'form-data';
import SaveSharedFileDialog from '../dialog/save-shared-file-dialog';
import toaster from '../toast';
import watermark from 'watermark-dom';

import '../../css/shared-file-view.css';

const propTypes = {
  content: PropTypes.object.isRequired
};

let loginUser = window.app.pageOptions.name;
const { repoID, sharedToken, trafficOverLimit, fileName, fileSize, sharedBy, siteName, enableWatermark, download, zipped, filePath } = window.shared.pageOptions;

class SharedFileView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isVerifyDialogShow: false,
      verifyOperation: '',
      showSaveSharedFileDialog: false,
      verifyStatus: 'verifying',    // verifying, pass, veto
    };
  }

  handleSaveSharedFileDialog = () => {
    this.setState({
      showSaveSharedFileDialog: true
    });
  }

  toggleCancel = () => {
    this.setState({
      showSaveSharedFileDialog: false
    });
  }

  handleSaveSharedFile = () => {
    toaster.success(gettext('Successfully saved'), {
      duration: 3
    });
  }

  onVerifyDialogShow = (operationType) => {
    this.setState({
      isVerifyDialogShow: !this.state.isVerifyDialogShow,
      verifyOperation: operationType
    });
  }

  closeVerifyDialog = () => {
    this.setState({isVerifyDialogShow: !this.state.isVerifyDialogShow});
  }

  componentDidMount() {
    if (trafficOverLimit) {
      toaster.danger(gettext('File download is disabled: the share link traffic of owner is used up.'), {
        duration: 3
      });
    }
  }

  renderPath = () => {
    return (
      <React.Fragment>
        {zipped.map((item, index) => {
          if (index != zipped.length - 1) {
            return (
              <React.Fragment key={index}>
                <a href={`${siteRoot}d/${sharedToken}/?p=${encodeURIComponent(item.path)}`}>{item.name}</a>
                <span> / </span>
              </React.Fragment>
            );
          }
        })
        }
        {zipped[zipped.length - 1].name}
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="shared-file-view-md">
        <div className="shared-file-view-md-header d-flex">
          <React.Fragment>
            <a href={siteRoot}>
              <img src={mediaUrl + logoPath} height={logoHeight} width={logoWidth} title={siteTitle} alt="logo" />
            </a>
          </React.Fragment>
          { loginUser && <Account /> }
        </div>
        <div className="shared-file-view-md-main">
          <div className="shared-file-view-head" style={{height:'100px'}}>
            <div className="float-left">
              <h2 className="ellipsis" title={fileName}>{fileName}</h2>
              {zipped ?
                <p className="m-0">{gettext('Current path: ')}{this.renderPath()}</p> :
                <p className="share-by ellipsis">{gettext('Shared by:')}{'  '}{sharedBy}</p>
              }
              <small className="share-by ellipsis">{'发送对象：手写的对象'}</small><br/>
              <small className="share-by ellipsis">{'外发需求：手写的需求'}</small>
            </div>
            
            <div className="float-right">
              {this.state.verifyStatus == 'verifying' &&
                <Fragment>
                  <Button onClick={() => {this.onVerifyDialogShow('pass');}} color='success'>{'同意'}</Button>
                  <span>{' '}</span>
                  <Button onClick={() => {this.onVerifyDialogShow('veto');}} color='danger'>{'否决'}</Button>
                </Fragment>
              }
              {this.state.verifyStatus == 'pass' && 
                <Button disabled outline color='success'>{'审核结果：该文件已被你通过'}</Button>
              }
              {this.state.verifyStatus == 'veto' && 
                <Button disabled outline color='danger'>{'审核结果：该文件已被你否决'}</Button>
              }
              {download &&
              <span>
                {(loginUser && loginUser !== sharedBy) &&
                  <Button color="secondary" id="save"
                    onClick={this.handleSaveSharedFileDialog}>{gettext('Save as ...')}
                  </Button>
                }{' '}
                {!trafficOverLimit &&
                <a href={`?${zipped ? 'p=' + encodeURIComponent(filePath) + '&' : ''}dl=1`} className="btn btn-success">{gettext('Download')}({Utils.bytesToSize(fileSize)})</a>
                }
              </span>
              }
            </div>
          </div>
          {this.props.content}
        </div>
        {this.state.showSaveSharedFileDialog &&
          <SaveSharedFileDialog
            repoID={repoID}
            sharedToken={sharedToken}
            toggleCancel={this.toggleCancel}
            handleSaveSharedFile={this.handleSaveSharedFile}
          />
        }
        {this.state.isVerifyDialogShow && 
          <VerifyDialog 
            toggleDialog={this.closeVerifyDialog}
            verifyOperation={this.state.verifyOperation}
          />
        }
      </div>
    );
  }
}

class VerifyDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      verifyDialogInput: '',
      inputErrorInfo: '',
      isShow: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      verifyDialogInput: e.target.value,
      inputErrorInfo: '',
    });
  }

  submitVerify = () => {
    let inputStr = this.state.verifyDialogInput;
    if (inputStr == '' || inputStr.trim() == ''){
      this.setState({
        inputErrorInfo: '请输入审核意见',
      });
      return;
    }
    let status;
    if(this.props.verifyOperation == 'pass') {
      status = 1;
    }else if(this.props.verifyOperation == 'veto'){
      status = 2;
    }
    let tmpArray = document.location.toString().split('/');
    let token = tmpArray[tmpArray.length - 2];
    let url = serviceURL + '/ajax/change-download-link-status/';
    let form = new FormData();
    form.append('t', token);
    form.append('s', status);
    form.append('msg', this.state.verifyDialogInput);
    seafileAPI._sendPostRequest(url, form);
  }

  render() {
    return (
      <div>
        <Modal isOpen={true} style={{maxWidth: '420px'}} toggle={this.props.toggleDialog} centered>
          <ModalHeader toggle={this.props.toggleDialog}>{'审核意见'}</ModalHeader>
          <ModalBody>
            <Input 
              type="textarea"
              value={this.state.verifyDialogInput}
              onChange={this.handleChange}
            />
            {this.state.inputErrorInfo && 
              <Alert color="danger" className="mt-2">{this.state.inputErrorInfo}
              </Alert>
            }
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.submitVerify} className="float-left">{'提交'}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}


if (enableWatermark) {
  let watermark_txt;
  if (loginUser) {
    watermark_txt = siteName + '  ' + loginUser;
  } else {
    watermark_txt = gettext('Anonymous User');
  }
  watermark.init({
    watermark_txt: watermark_txt,
    watermark_alpha: 0.075
  });
}

SharedFileView.propTypes = propTypes;

export default SharedFileView;
