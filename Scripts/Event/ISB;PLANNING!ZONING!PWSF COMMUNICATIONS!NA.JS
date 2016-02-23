
if (inspType == '800 Final Building Inspection' && balanceDue > 0) {
	cancel = true;
	showMessage=true;
	comment('Pending/Unpaid fees prevented this inspection to be scheduled. <br> Please pay any unpaid fees.');
	}

