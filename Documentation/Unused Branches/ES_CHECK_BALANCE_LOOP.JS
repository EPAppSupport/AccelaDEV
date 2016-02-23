
eachchildCapID = childCapID[eachchild];
if (eachchildCapID != false) {
	childCapObj = aa.cap.getCap(eachchildCapID).getOutput();
	childCapDetailObjResult = aa.cap.getCapDetail(eachchildCapID);
	childCapDetail = childCapDetailObjResult.getOutput();
	childBalanceDue = childCapDetail.getBalance();
	childCapIDString = eachchildCapID.getCustomID();
	}

if (eachchildCapID != false && childBalanceDue > 0) {
	showMessage = true;
	comment('Inspection cannot be scheduled. There is a balance on child application (' + childCapIDString + ') of $' + childBalanceDue + '.');
	cancel = true;
	}

