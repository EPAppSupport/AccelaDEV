
if (wfTask == 'Application Submittal' && wfStatus == 'Completed') {

	//start replaced branch: COEP_AMUSE_OCC_TAX_QTR_FEES
	{
		var gDate = new Date(wfDateMMDDYYYY);
		var gMonth = (gDate.getMonth() + 1);
		if (appMatch('Licenses/Amusement Occupation Tax/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && (gMonth == '1' || gMonth == '2' || gMonth == '3')) {
			addFee('FL089', 'LICOCCTAX', 'STANDARD', AInfo['No. of Tags'], 'N');
		}

		if (appMatch('Licenses/Amusement Occupation Tax/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && (gMonth == '4' || gMonth == '5' || gMonth == '6')) {
			addFee('FL130', 'LICOCCTAX', 'STANDARD', AInfo['No. of Tags'], 'N');
		}

		if (appMatch('Licenses/Amusement Occupation Tax/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && (gMonth == '7' || gMonth == '8' || gMonth == '9')) {
			addFee('FL131', 'LICOCCTAX', 'STANDARD', AInfo['No. of Tags'], 'N');
		}

		if (appMatch('Licenses/Amusement Occupation Tax/NA/NA') && wfTask == 'Application Submittal' && wfStatus == 'Completed' && (gMonth == '10' || gMonth == '11' || gMonth == '12')) {
			addFee('FL132', 'LICOCCTAX', 'STANDARD', AInfo['No. of Tags'], 'N');
		}

	}
	//end replaced branch: COEP_AMUSE_OCC_TAX_QTR_FEES;
}
