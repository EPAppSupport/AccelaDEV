function esPlanningAmendmentAcaAddFees() {

	if (publicUser) {
		updateFee('FP004', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
		updateFee('CC003', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
		updateFee('TF001A', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
	}

}
