
sender = 'accela@elpasotexas.gov';
recipient = 'Rodriguez-HefnerE@elpasotexas.gov;SarateJX@elpasotexas.gov';
subject = ('TEST A City Special Privilege Permit has been issued, permit number is ' + capIDString + '.');
content = ('TEST A City Special Privilege Permit has been issued, permit number is ' + capIDString + '.');
revokedTitle = ('TEST A City Special Privilege Permit has been revoked, permit number is ' + capIDString + '.');
revokedContent = ('TEST A City Special Privilege Permit has been revoked, permit number is ' + capIDString + '.');
if (wfTask == 'Issue' && wfSstatus == 'Issued') {
	email(recipient,sender,subject,content);
	}

if (wfTask == 'Issue' && wfStatus == 'Revoked') {
	email(recipient,sender,revokedTitle, revokedContent);
	}

if (wfTask == 'Issue' && wfStatus == 'Cancelled') {
	updateTask('Close','Closed',' ',' ');
	deactivateTask('Close');
	}

