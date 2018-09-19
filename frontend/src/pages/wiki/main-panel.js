import React, { Component } from 'react';
import { gettext, repoID, serviceUrl, slug, siteRoot, isPro } from '../../components/constants';
import Search from '../../components/search/search';
import Account from '../../components/account';
import Notification from '../../components/notification';
import MarkdownViewer from '../../components/markdown-viewer';
import TreeDirView from '../../components/tree-dir-view/tree-dir-view';

class MainPanel extends Component {

  onMenuClick = () => {
    this.props.onMenuClick();
  }

  onEditClick = (e) => {
    // const w=window.open('about:blank')
    e.preventDefault();
    window.location.href= serviceUrl + '/lib/' + repoID + '/file' + this.props.filePath + '?mode=edit';
  }

  onMainNavBarClick = (e) => {
    this.props.onMainNavBarClick(e.target.dataset.path);
  }

  render() {

    let filePathList = this.props.filePath.split('/');
    let nodePath = "";
    let pathElem = filePathList.map((item, index) => {
      if (item === "") {
        return;
      } 
      if (index === (filePathList.length - 1)) {
        return (
          <span key={index}><span className="path-split">/</span>{item}</span>
        )
      } else {
        nodePath += "/" + item;
        return (
          <span key={index} >
            <span className="path-split">/</span>
            <a 
              className="path-link" 
              data-path={nodePath} 
              onClick={this.onMainNavBarClick}>
              {item}
            </a>
          </span>
        )
      }
    });

    return (
      <div className="wiki-main-panel o-hidden">
        <div className="main-panel-top panel-top">
          <div className="cur-view-toolbar">
            <span className="sf2-icon-menu side-nav-toggle hidden-md-up d-md-none" title="Side Nav Menu" onClick={this.onMenuClick}></span>
            { 
              this.props.permission === 'rw' && 
              <button className="btn btn-secondary top-toolbar-btn" title="Edit File" onClick={this.onEditClick}>{gettext("Edit Page")}</button>
            }
          </div>
          <div className="common-toolbar">
            {
              isPro && 
              <Search  onSearchedClick={this.props.onSearchedClick} placeholder={gettext("Search files in this wiki")}/>
            }
            <Notification />
            <Account />
          </div>
        </div>
        <div className="cur-view-main">
          <div className="cur-view-path">
            <div className="path-containter">
              <a href={siteRoot + 'wikis/'} className="normal">{gettext("Wikis")}</a>
              <span className="path-split">/</span>
              <a href={siteRoot + 'wikis/' + slug} className="normal">{slug}</a>
              {pathElem}
            </div>
          </div>
          <div className="cur-view-container table-container">
            { this.props.isViewFileState && <MarkdownViewer
              markdownContent={this.props.content}
              latestContributor={this.props.latestContributor}
              lastModified = {this.props.lastModified}
              onLinkClick={this.props.onLinkClick}
              isFileLoading={this.props.isFileLoading}
            />}
            { !this.props.isViewFileState && 
              <TreeDirView 
                node={this.props.changedNode}
                onMainNodeClick={this.props.onMainNodeClick}
              >
              </TreeDirView>
            }
          </div>
        </div>
    </div>
    )
  }
}

export default MainPanel;