
if ((inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection')) {

	//start replaced branch: ES_GUIDE_SHEET_SCORE
	{
		guideSheetScore = false;
		if (matches(inspResult, 'Fail', 'Fail w ReFee')) {
			guideSheetScore = getGuideSheetTotalScore('Retail Food Establishment Insp');
		}

		if (guideSheetScore != false && guideSheetScore <= 69) {

			//start replaced branch: ES_HEALTH_FOODINSP_EMAIL_NOTICE
			{
				inspectorID = getLastInspector(inspType);
				emBody1 = 'A Retail Food Establishment Inspection Report with a low score was issued to:' + '<br />' + '<br />';
				emBody2 = emBody1 += ('CAP ID#: ' + capIDString + '<br />' + 'Establishment Name: ' + capName + '<br />' + 'Physical Address: ' + CapAddress + '<br />' + 'Date Inspected: ' + inspResultDate + '<br />' + 'San Code: ' + inspType + '<br />' + 'Score: ' + guideSheetScore + '<br />' + 'Inspected By: ' + inspectorID);
				email('David.Sublasky@elpasotexas.gov', 'accela@elpasotexas.gov', 'LOW SCORE ISSUED - Retail Food Establishment Inspection Report', emBody2);
				email('AsberryMY@elpasotexas.gov', 'accela@elpasotexas.gov', 'LOW SCORE ISSUED - Retail Food Establishment Inspection Report', emBody2);
				email('HernandezEX2@elpasotexas.gov', 'accela@elpasotexas.gov', 'LOW SCORE ISSUED - Retail Food Establishment Inspection Report', emBody2);
				email('VarelaSR@elpasotexas.gov', 'accela@elpasotexas.gov', 'LOW SCORE ISSUED - Retail Food Establishment Inspection Report', emBody2);
				email('ContrerasTX@elpasotexas.gov', 'accela@elpasotexas.gov', 'LOW SCORE ISSUED - Retail Food Establishment Inspection Report', emBody2);

			}
			//end replaced branch: ES_HEALTH_FOODINSP_EMAIL_NOTICE;
		}

	}
	//end replaced branch: ES_GUIDE_SHEET_SCORE;
}
