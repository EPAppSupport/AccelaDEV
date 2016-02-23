

//start replaced branch: ES_LIC_INSP_UPDATE_WF
{
	if (appMatch('Licenses/Alcohol/*/*') && isTaskActive('Inspection') && inspType == '1400 Site Inspection' && inspResult == 'Pass') {
		closeTask('Inspection', 'Passed', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Alcohol/*/*') && isTaskActive('Inspection') && inspType == '1400 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		branchTask('Inspection', 'Failed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Home Occupation/*/*') || appMatch('Licenses/Sexually Oriented Business/*/*')) && isTaskActive('Inspection') && inspType == '1400 Site Inspection' && inspResult == 'Pass') {
		closeTask('Inspection', 'Passed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Home Occupation/*/*') || appMatch('Licenses/Sexually Oriented Business/*/*')) && isTaskActive('Inspection') && inspType == '1400 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		updateTask('Inspection', 'Failed', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Fire/*/*') && isTaskActive('Fire Inspection') && inspType == '1500 Site Inspection' && inspResult == 'Pass') {
		closeTask('Fire Inspection', 'Passed', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Fire/*/*') && isTaskActive('Fire Inspection') && inspType == '1500 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		updateTask('Fire Inspection', 'Failed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Laundry/*/*') || appMatch('Licenses/Trailer Court/*/*')) && isTaskActive('1st Inspection') && inspType == '1600 Site Inspection' && inspResult == 'Pass') {
		closeTask('1st Inspection', 'Passed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Laundry/*/*') || appMatch('Licenses/Trailer Court/*/*')) && isTaskActive('1st Inspection') && inspType == '1600 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		updateTask('1st Inspection', 'Failed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Laundry/*/*') || appMatch('Licenses/Trailer Court/*/*')) && isTaskActive('2nd Inspection') && inspType == '1600 Site Inspection' && inspResult == 'Pass') {
		updateTask('2nd Inspection', 'Passed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Laundry/*/*') || appMatch('Licenses/Trailer Court/*/*')) && isTaskActive('2nd Inspection') && inspType == '1600 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		updateTask('2nd Inspection', 'Fail w ReFee', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/*/*') && isTaskActive('1st Inspection') && inspType == '1600 Site Inspection' && inspResult == 'Pass') {
		closeTask('1st Inspection', 'Passed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Tattoo Body Piercing Employee/*/*') || appMatch('Licenses/Swimming Pool and Spa/*/*')) && isTaskActive('1st Inspection') && inspType == '1600 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/re-fee')) {
		updateTask('1st Inspection', 'Failed', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Tattoo Body Piercing Employee/*/*') && isTaskActive('2nd Inspection') && inspType == '1600 Site Inspection' && inspResult == 'Pass') {
		updateTask('2nd Inspection', 'Passed', 'Updated via Event Script');
	}

	if ((appMatch('Licenses/Tattoo Body Piercing Employee/*/*') || appMatch('Licenses/Swimming Pool and Spa/*/*')) && isTaskActive('2nd Inspection') && inspType == '1600 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/re-fee')) {
		updateTask('2nd Inspection', 'Fail w ReFee', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Secondhand Dealer/*/*') && isTaskActive('Inspections') && inspType == '1700 Site Inspection' && inspResult == 'Pass') {
		updateTask('Inspection', 'Passed', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Secondhand Dealer/*/*') && isTaskActive('Inspections') && inspType == '1700 Site Inspection' && (inspResult == 'Fail' || inspResult == 'Fail w/refee')) {
		updateTask('Inspection', 'Cited', 'Updated via Event Script');
	}

	if (appMatch('Licenses/Swimming Pool and Spa/*/*') && isTaskActive('1st Inspection') && checkInspectionResult('1600 Site Inspection', 'Pass')) {
		showMessage = true;
		comment('Inspections are present and have passed!');
		closeTask('1st Inspection', 'Passed', 'Updated via Event Script', 'Updated Via Event Script');
	}

	if (appMatch('Licenses/Swimming Pool and Spa/*/*') && isTaskActive('2nd Inspection') && checkInspectionResult('1610 Annual Site Inspection', 'Pass')) {
		showMessage = true;
		comment('Inspections are present and have passed!');
		closeTask('2nd Inspection', 'Passed', 'Updated via Event Script', 'Updated Via Event Script');
	}

	if (appMatch('Licenses/Animal/*/*') && inspType == '1200 Site Inspection' && (inspResult == 'Passed' || inspResult == 'Pass') && isTaskActive('Inspection') == true && isTaskComplete('Inspection') == false) {
		updateTask('Inspection', 'Approved', ' ', ' ');
		deactivateTask('Inspection');
		activateTask('Issue');
	}

}
//end replaced branch: ES_LIC_INSP_UPDATE_WF;
if ((inspResult == 'Fail w/refee' || inspResult == 'Fail w/re-fee')) {

	//start replaced branch: ES_ADD_LIC_REINSP_FEES
	{
		if (appMatch('Licenses/Swimming Pool and Spa/*/*') && (inspResult == 'Fail w/refee' || inspResult == 'Fail w/re-fee')) {
			addFee('FL099', 'LICPOOL', 'STANDARD', 1, 'N');
		}

		if (appMatch('Licenses/Laundry/*/*') && inspResult == 'Fail w/re-fee') {
			addFee('FL116', 'LICLAUND', 'STANDARD', 1, 'N');
		}

		if (appMatch('Licenses/Tattoo Body Piercing Employee/*/*') && inspResult == 'Fail w/re-fee') {
			addFee('FL106', 'LICTBPEMP', 'STANDARD', 1, 'N');
		}

		if (appMatch('Licenses/Trailer Court/*/*') && (inspResult == 'Fail w/refee' || inspResult == 'Fail w/re-fee')) {
			addFee('FL114', 'LICTRAILER', 'STANDARD', 1, 'N');
		}

		if (appMatch('Licenses/Fire/*/*') && inspResult == 'Fail w/refee') {
			addFee('FL065', 'LICFIRE', 'STANDARD', 1, 'N');
		}

	}
	//end replaced branch: ES_ADD_LIC_REINSP_FEES;
}
