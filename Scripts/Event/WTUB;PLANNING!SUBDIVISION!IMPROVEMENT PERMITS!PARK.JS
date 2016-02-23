
pCapID = getParent();
comment('pCapID is : ' + pCapID);
pCapStatus = null;
if (pCapID == false) {
	showMessage = true;
	comment('The workflow task cannot be updated because there is no parent associated to this CAP type.');
	cancel = true;
	}

if (wfTask == 'Application Submittal' && wfStatus == 'Completed' && pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pCapStatus = pCapObj.getCapStatus();
	comment('pCapID is : ' + pCapID);
	}

if (pCapID!= false  &&  pCapStatus == 'Expired' && wfTask == 'Application Submittal' && wfStatus == 'Completed') {
	showMessage = true;
	comment('Improvement Permit cannot be Submitted with an Expired Parent Plat Determination permit.');
	cancel = true;
	}

