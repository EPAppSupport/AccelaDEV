
sender = 'accela@elpasotexas.gov';
recipient = 'GibsonEk@elpasotexas.gov';
subject = ('TEST A City Special Privilege Permit is non-compliant with contract, permit number is ' + capIDString + '.');
content = ('TEST A City Special Privilege License is non-compliant with contract, permit number is ' + capIDString + '.');
if (wfTask == 'Tracking' && wfStatus == 'Not Compliant') {
	email(recipient, sender, subject, content);
	}

if (wfTask == 'Issue' && wfStatus == 'Cancelled') {
	updateTask('Close','Closed','Closed via Script','Closed via script');
	updateAppStatus('Closed', 'Status set by script');
	deactivateTask('Close');
	closeTask('Close','Closed','Closed by Script due to Cancelled Status',' ');
	}

if (wfTask == 'Issue Certificate' && wfStatus == 'Issued') {
	if(AInfo['License Term'] == 'One') editAppSpecific('Expiration Date', dateAdd(null,365));
	if(AInfo['License Term'] == 'Five') editAppSpecific('Expiration Date', dateAdd(null,1825));
	}

