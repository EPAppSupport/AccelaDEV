

//start replaced branch: ES_HEALTH_INSPRESULTSUBMITAFTER
{
	if (appMatch('Health/Food Inspections/Fixed Location/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Pass') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Passed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Roadside-Outdoor Market/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Pass') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Passed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Seasonal/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Pass') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Passed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && inspType == '1300 Site Assessment' && inspResult == 'Fail w ReFee' && matches(AInfo['Section'], '9.12.070B', '9.12.070E', '9.12.070F', '9.12.070K0', '9.12.070K1', '9.12.070K2', '9.12.070K3', '9.12.070K4', '9.12.070N', '9.12.070O', '9.12.070P') && matches(AInfo['Permit Type'], 'Food Product Establishment', 'Food Service Establishment') && AInfo['Square Footage'] > 0 && !(AInfo['Permit Type'] == 'Food Product Establishment' && AInfo['Section'] == '9.12.070K0')) {
		addFee('FH014', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && inspType == '1300 Site Assessment' && inspResult == 'Fail w ReFee' && matches(AInfo['Section'], '9.12.070B', '9.12.070E', '9.12.070F', '9.12.070K0', '9.12.070K1', '9.12.070K2', '9.12.070K3', '9.12.070K4', '9.12.070N', '9.12.070O', '9.12.070P') && matches(AInfo['Permit Type'], '(5-8) Personal Care Home', '(9-18) Personal Care Home', 'Adult Foster Care Home or Private Care Home', 'Day Care Center', 'Federal or State Inspected', 'Home Child Care Facility', 'Retail Food Store', 'Food Product Establishment')) {
		addFee('FH014B', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && inspType == '1300 Site Assessment' && inspResult == 'Fail w ReFee' && matches(AInfo['Section'], '9.12.070F') && matches(AInfo['Permit Type'], 'Day Care Center')) {
		removeFee('FH014B', 'STANDARD');
		addFee('FH014A', 'HLTHFIXED', 'STANDARD', 1, 'N');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Fail' || inspResult == 'Fail w ReFee') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Failed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Roadside-Outdoor Market/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Fail' || inspResult == 'Fail w ReFee') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Failed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Seasonal/NA') && (inspType == '1310 Routine Inspection' || inspType == '1320 Re-inspection') && (inspResult == 'Fail' || inspResult == 'Fail w ReFee') && isTaskActive('Inspection')) {
		updateTask('Inspection', 'Failed', 'Updated vis ES_HEALTH_INSPRESULTSUBMITAFTER from the Investigation inspection with a result of ' ' + inspResult + '.'', 'via early passing of inspection');
	}

	if (appMatch('Health/Food Inspections/Fixed Location/NA') && inspType == '1350 Permitting Inspection' && inspResult == 'Approve' && isTaskActive('Site Assessment')) {
		updateTask('Site Assessment', 'Approved', 'Updated via Hlth_inspresultsubmitafter');
		closeTask('Site Assessment', 'Approved', 'Closed by script ES_HEALTH_INSPRESULTSUBMITAFTER');
	}

}
//end replaced branch: ES_HEALTH_INSPRESULTSUBMITAFTER;
