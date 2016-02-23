
eachsibCapID = sibCapID[eachchild];
if (eachsibCapID != false) {
	sibCapObj = aa.cap.getCap(eachsibCapID).getOutput();
	sibCapDetailObjResult = aa.cap.getCapDetail(eachsibCapID);
	sibCapDetail = sibCapDetailObjResult.getOutput();
	sibBalanceDue = sibCapDetail.getBalance();
	sibCapIDString = eachsibCapID.getCustomID();
	}

if (eachsibCapID != false && sibBalanceDue > 0) {
	showMessage = true;
	comment('Inspection cannot be scheduled. There is a balance on sibling application (' + sibCapIDString + ') of $' + sibBalanceDue + '.');
	cancel = true;
	}

