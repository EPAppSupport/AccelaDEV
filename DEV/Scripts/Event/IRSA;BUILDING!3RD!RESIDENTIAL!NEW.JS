
if ((inspType == '800 Final Building Inspection' || inspType == '320 Electrical Final Insp' || inspType == '630 Mechanical Final Insp' || inspType == '740 Plumbing Final Inspection')) {

	//start replaced branch: COEP_THIRDPARTY_INSPECTIONS
	{
		showMessage = true;
		if (appMatch('Building/3rd/Residential/New') && (inspType == '800 Final Building Inspection' || inspType == '320 Electrical Final Insp' || inspType == '630 Mechanical Final Insp' || inspType == '740 Plumbing Final Inspection') && checkInspectionResult('800 Final Building Inspection', 'Pass') && checkInspectionResult('320 Electrical Final Insp', 'Pass') && checkInspectionResult('630 Mechanical Final Insp', 'Pass') && checkInspectionResult('740 Plumbing Final Inspection', 'Pass')) {
			activateTask('Issue Certificate');
		}

	}
	//end replaced branch: COEP_THIRDPARTY_INSPECTIONS;
}
