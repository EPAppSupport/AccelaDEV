
pCapID = getParent();
comment('Parent ID is: ' + pCapID);
if (pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pCapStatus = pCapObj.getCapStatus();
	pAppTypeResult = pCapObj.getCapType();
	pAppTypeString = pAppTypeResult.toString();
	}

if (pCapID != false && wfTask == 'Issue' && wfStatus == 'Issued' && pCapStatus != 'Approved' && pAppTypeString == 'Planning/Subdivision/Plat Determination/NA') {
	showMessage = true;
	comment('Permit cannot be issued until Parent Subdivision Plat Determination CAP is approved.');
	cancel = true;
	}

