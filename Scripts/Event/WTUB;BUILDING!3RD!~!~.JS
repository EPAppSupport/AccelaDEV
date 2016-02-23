
if (wfTask == 'Inspection'  && wfStatus == 'Extension Issued' && wfGetHistCount(capId,'Inspection','Extension Issued') >= 4) {
	showMessage = true;
	comment('Cannot allow more than 4 Inspection Extensions');
	cancel = true;
	}

if ((wfTask == 'Issue Certificate' && wfStatus == 'Issued' && AInfo['Conditional Release'] == 'Yes')) {
	showMessage=true;
	comment('Cannot continue due to Conditional Release, please contact Barbra Shipp or Brenda Cantu for more details');
	cancel=true;
	}

