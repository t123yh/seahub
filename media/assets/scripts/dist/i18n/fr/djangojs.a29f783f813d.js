!function(e){var t=e.django||(e.django={});t.pluralidx=function(e){var t=e>1;return"boolean"==typeof t?t?1:0:t},t.catalog={"%curr% of %total%":"%curr% de %total%",'<a href="%url%" target="_blank">The image</a> could not be loaded.':'<a href="%url%" target="_blank">L\'image</a> ne peut être chargée.',"Are you sure you want to delete these selected items?":"Voulez vraiment supprimer les éléments sélectionnés ?",Cancel:"Annuler","Canceled.":"Annulé.","Close (Esc)":"Fermer (Esc)","Copy {placeholder} to:":"Copier {placeholder} vers:","Copying %(name)s":"Copie de %(name)s","Copying file %(index)s of %(total)s":"Copie du fichier %(index)s de %(total)s",Delete:"Supprimer","Delete Items":"Supprimer les éléments","Delete succeeded.":"Supprimé avec succès.","Empty file upload result":"Le résultat de l'envoi est un fichier vide",Error:"Erreur","Failed to copy %(name)s":"Échec de la copie de %(name)s","Failed to delete %(name)s and %(amount)s other items.":"Impossible de supprimer %(name)s et %(amount)s autres éléments.","Failed to delete %(name)s and 1 other item.":"Impossible de supprimer %(name)s et un autre élément.","Failed to delete %(name)s.":"Impossible de supprimer %(name)s.","Failed to get update url":"Échec de la mise à jour de l'url","Failed to get upload url":"Échec de la récupération de l'url d'envoi","Failed to move %(name)s":"Échec du déplacement de %(name)s","Failed to send to {placeholder}":"Échec de l'envoi à {placeholder}","Failed to share to {placeholder}":"Échec du partage avec {placeholder}","Failed.":"Échec.","Failed. Please check the network.":"Échec. Vérifiez le réseau","File Upload canceled":"Envoi du fichier annulé","File Upload complete":"Envoi du fichier terminé","File Upload failed":"Échec de l'envoi du fichier","File Uploading...":"Envoi du fichier en cours...","File is too big":"Le fichier est trop volumineux","File is too small":"Le fichier est trop petit","Filetype not allowed":"Type de fichier non permis","Internal error. Failed to copy %(name)s and %(amount)s other item(s).":"Erreur interne.  Échec de la copie de %(name)s et %(amount)s autres élément(s).","Internal error. Failed to copy %(name)s.":"Erreur interne.  Échec de la copie de %(name)s","Internal error. Failed to move %(name)s and %(amount)s other item(s).":"Erreur interne.  Échec du déplacement de %(name)s et %(amount)s autres élément(s).","Internal error. Failed to move %(name)s.":" Erreur interne.  Échec du déplacement de %(name)s ","Invalid destination path":"Chemin de destination invalide","It is required.":"c'est obligatoire.","Just now":"A l'instant","Loading...":"Chargement...","Max number of files exceeded":"Le nombre maximal de fichiers est dépassé","Move {placeholder} to:":"Déplacer {placeholder} vers :","Moving %(name)s":"Déplacement de %(name)s","Moving file %(index)s of %(total)s":"Déplacement du fichier %(index)s de %(total)s","Name is required":"Le nom est obligatoire","Next (Right arrow key)":"Suivant (flèche droite)","Only an extension there, please input a name.":"Une seule extension ici, saisissez un nom.","Open in New Tab":"Ouvrir dans un nouvel onglet","Password is required.":"Le mot de passe est obligatoire","Password is too short":"Le mot de passe est trop court","Passwords don't match":"Les mots de passe ne correspondent pas","Permission error":"Erreur de droits","Please check the network.":"Vérifier le réseau.","Please choose a directory":"Choisissez un répertoire","Please enter days.":"Saisissez le nombre de jours.","Please enter password":"Entrez un mot de passe","Please enter the password again":"Entrez à nouveau un mot de passe","Please enter valid days":"saisissez un nombre de jours valide","Please input at least an email.":"Saisissez au moins une adresse mel ","Please select a contact or a group.":"Sélectionnez un contact ou un groupe","Previous (Left arrow key)":"Précédent (flèche gauche)","Processing...":"Traitement en cours...","Really want to delete {lib_name}?":"Confirmez la suppression de {lib_name}?","Rename Directory":"Renommer le répertoire","Rename File":"Renommer le fichier","Replace file {filename}?":"Remplacer le fichier {filename}?","Saving...":"Enregistrement...","Search users or enter emails":"Rechercher des utilisateurs ou saisir des adresses mail","Select groups":"Sélectionner les groupes","Set {placeholder}'s permission":"Attribuer des droits à {placeholder}'s","Share {placeholder}":"Partage {placeholder}",Start:"Démarrer",Success:"Succès","Successfully copied %(name)s and %(amount)s other items.":"%(name)s et %(amount)s autres éléments copiés avec succès.","Successfully copied %(name)s and 1 other item.":"%(name)s et 1 autre élément copiés avec succès.","Successfully copied %(name)s.":"%(name)s copié avec succès.","Successfully deleted %(name)s":"%(name)s supprimé avec succès","Successfully deleted %(name)s and %(amount)s other items.":"Suppression avec succès de %(name)s et  %(amount)s autres éléments.","Successfully deleted %(name)s and 1 other item.":" Suppression avec succès de %(name)s et 1 autre élément.","Successfully deleted %(name)s.":" %(name)s supprimé avec succès.","Successfully moved %(name)s and %(amount)s other items.":"%(name)s et %(amount)s autres éléments déplacés avec succès.","Successfully moved %(name)s and 1 other item.":" %(name)s et 1 autre élément déplacés avec succès","Successfully moved %(name)s.":" %(name)s déplacé avec succès.","Successfully sent to {placeholder}":"Succès de l'envoi à {placeholder}","Successfully shared to {placeholder}":"Succès du partage avec {placeholder}","Successfully unshared {placeholder}":"Partage de {placeholder} supprimé avec succès","Successfully unstared {placeholder}":"{placeholder} suppression des favoris","Uploaded bytes exceed file size":"Le nombre de bytes envoyés dépasse la taille du fichier","You don't have any library at present.":"Vous n’avez pas actuellement de bibliothèque. ","You have not renamed it.":"Vous ne l'avez pas renommé.",canceled:"annulé",uploaded:"envoyé"},t.gettext=function(e){var s=t.catalog[e];return"undefined"==typeof s?e:"string"==typeof s?s:s[0]},t.ngettext=function(e,s,a){var n=t.catalog[e];return"undefined"==typeof n?1==a?e:s:n[t.pluralidx(a)]},t.gettext_noop=function(e){return e},t.pgettext=function(e,s){var a=t.gettext(e+""+s);return a.indexOf("")!=-1&&(a=s),a},t.npgettext=function(e,s,a,n){var r=t.ngettext(e+""+s,e+""+a,n);return r.indexOf("")!=-1&&(r=t.ngettext(s,a,n)),r},t.interpolate=function(e,t,s){return s?e.replace(/%\(\w+\)s/g,function(e){return String(t[e.slice(2,-2)])}):e.replace(/%s/g,function(e){return String(t.shift())})},t.formats={DATETIME_FORMAT:"j F Y H:i:s",DATETIME_INPUT_FORMATS:["%d/%m/%Y %H:%M:%S","%d/%m/%Y %H:%M","%d/%m/%Y","%d.%m.%Y %H:%M:%S","%d.%m.%Y %H:%M","%d.%m.%Y","%Y-%m-%d %H:%M:%S","%Y-%m-%d %H:%M:%S.%f","%Y-%m-%d %H:%M","%Y-%m-%d"],DATE_FORMAT:"j F Y",DATE_INPUT_FORMATS:["%d/%m/%Y","%d/%m/%y","%d.%m.%Y","%d.%m.%y","%Y-%m-%d"],DECIMAL_SEPARATOR:",",FIRST_DAY_OF_WEEK:"1",MONTH_DAY_FORMAT:"j F",NUMBER_GROUPING:"3",SHORT_DATETIME_FORMAT:"j N Y H:i:s",SHORT_DATE_FORMAT:"j N Y",THOUSAND_SEPARATOR:" ",TIME_FORMAT:"H:i:s",TIME_INPUT_FORMATS:["%H:%M:%S","%H:%M"],YEAR_MONTH_FORMAT:"F Y"},t.get_format=function(e){var s=t.formats[e];return"undefined"==typeof s?e:s},e.pluralidx=t.pluralidx,e.gettext=t.gettext,e.ngettext=t.ngettext,e.gettext_noop=t.gettext_noop,e.pgettext=t.pgettext,e.npgettext=t.npgettext,e.interpolate=t.interpolate,e.get_format=t.get_format}(this);