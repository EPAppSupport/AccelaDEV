function ES_PLANNING_AMENDMNT_ACA_ADD_FEES() {

	if (publicUser) {
		updateFee('FP004', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
		updateFee('CC003', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
		updateFee('TF001A', 'PLNCNDAMND', 'STANDARD', 1, 'Y', 'N');
	}

}
