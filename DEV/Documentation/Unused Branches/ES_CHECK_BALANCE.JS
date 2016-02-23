
pCapID = false;
sibCapID = false;
childCapID = null;
pCapID = getParent();
comment('pCapID is : ' + pCapID);
if (pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pCapDetailObjResult = aa.cap.getCapDetail(pCapID);
	pCapDetail = pCapDetailObjResult.getOutput();
	pBalanceDue = pCapDetail.getBalance();
	pCapIDString = pCapID.getCustomID();
	}

if (pCapID != false && pBalanceDue > 0) {
	showMessage = true;
	comment('Inspection cannot be scheduled. There is a balance on parent application (' + pCapIDString + ') of $' + pBalanceDue + '.');
	cancel = true;
	}

if (balanceDue > 0) {
	showMessage = true;
	comment('Inspection cannot be scheduled. There is a balance on the application of $' + balanceDue + '.');
	cancel = true;
	}

