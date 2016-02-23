
if (currentUserID.indexOf('PUBLICUSER') >= -1 && capStatus == 'In Review') {
	showMessage = true;
	comment('<b>You cannot upload documents while your application status is In Review.</b>');
	cancel = true;
}
