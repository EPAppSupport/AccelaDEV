
if (wfTask == 'Work Order Submittal' && wfStatus == 'Completed') {

	//start replaced branch: ES_AMS_ASSIGN_WORK_ORDER
	{
		var gisArea = getGISInfo('Accela_map', 'DSD Sectors', 'NAME');
		if ((gisArea == 'WEST' || gisArea == 'NORTHWEST')) {
			assignTask('Work Order', 'RAMIREZRN');
		}

		if (gisArea == 'LOWER VALLEY') {
			assignTask('Work Order', 'GARCIALX');
		}

		if (gisArea == 'CENTRAL') {
			assignTask('Work Order', 'AMADORJA2');
		}

		if (gisArea == 'NORTH EAST') {
			assignTask('Work Order', 'CASTILLOA');
		}

		if (gisArea == 'EAST') {
			assignTask('Work Order', 'AMADORJA2');
		}

		if (!matches(gisArea, 'EAST', 'NORTH EAST', 'CENTRAL', 'LOWER VALLEY', 'WEST', 'NORTHWEST')) {
			assignTask('Work Order', 'AMADORJA2');
		}

	}
	//end replaced branch: ES_AMS_ASSIGN_WORK_ORDER;
}
