
if ((InspectorFirstName == '' || InspectorFirstName == 'Selectron') && appMatch('Building/*/*/*')) {

	//start replaced branch: ES_BLDG_AUTO_ASSIGN_INSPECTOR
	{
		var areaInspector = '';
		var gisArea = getGISInfo('Accela_map', 'RES BLD INSP AREA', 'NAME');
		if (appMatch('Building/Residential/*/*') && !appMatch('*/Residential/Swimming Pool/*') && matches(gisArea, 'NORTHWEST', 'NORTHEAST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FANNINWB';
		}

		if (appMatch('Building/Residential/*/*') && !appMatch('*/Residential/Swimming Pool/*') && matches(gisArea, 'LV', 'LOWER VALLEY', 'EAST', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Electrical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHWEST', 'CENTRAL', 'EAST', 'COUNTY WEST', '')) {
			areaInspector = 'FanninWB';
		}

		if (appMatch('Building/Electrical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Plumbing/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHWEST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FanninWB';
		}

		if (appMatch('Building/Plumbing/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHEAST', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Plumbing/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'EAST')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Electrical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'EAST')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Mechanical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHWEST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FanninWB';
		}

		if (appMatch('Building/Mechanical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Mechanical/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential') && matches(gisArea, 'EAST')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Residential/Swimming Pool/*') && matches(gisArea, 'NORTHWEST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FANNINWB';
		}

		if (appMatch('Building/Residential/Swimming Pool/*') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Residential/Swimming Pool/*') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Placement/*/*') && matches(gisArea, 'NORTHWEST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FanninWB';
		}

		if (appMatch('Building/Placement/*/*') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Placement/*/*') && matches(gisArea, 'EAST')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Commercial/*/*')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Temporary Placement/*/*')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Temporary Amusement/*/*') && matches(inspType, '800 Final Building Inspection', '1100 ESD Code Inspection')) {
			areaInspector = 'CAHALANSM';
		}

		if (appMatch('Building/Irrigation/*/*')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Demolition/*/*')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Plumbing/Consumer Health Protection/NA')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Mechanical/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Fences/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Plumbing/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Windows/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Siding/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Right of Way/*/*') && matches(gisArea, 'EAST')) {
			areaInspector = 'GARCIAAA';
		}

		if (appMatch('Building/Right of Way/*/*') && matches(gisArea, 'NORTHEAST', 'LV', 'COUNTY EAST', 'COUNTY LV')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (appMatch('Building/Right of Way/*/*') && matches(gisArea, 'NORTHWEST', 'NORTHEAST', 'CENTRAL', 'COUNTY WEST')) {
			areaInspector = 'FanninWB';
		}

		if (appMatch('Building/Retaining Wall/*/*')) {
			areaInspector = 'CHESAKRX';
		}

		if (appMatch('Planning/Grading/*/*')) {
			areaInspector = 'CHESAKRX';
		}

		if (appMatch('Planning/Subdivision/Improvement Permits/*')) {
			areaInspector = 'CHESAKRX';
		}

		if (appMatch('Building/Electrial/*/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'PEDREGONOA';
		}

		if (appMatch('Planning/Zoning/Sign/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'PEDREGONOA';
		}

		if (appMatch('Planning/Zoning/Sign Demo/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'PEDREGONOA';
		}

		if (appMatch('Planning/Zoning/PWSF Communications/*') && (AInfo['Type of Use'] == 'Commercial' || AInfo['Type of Work'] == 'Commercial')) {
			areaInspector = 'PEDREGONOA';
		}

		if (matches(inspType, '400 Fire Department Final', '485 Fire Sprinkler', '480 Fire Alarm', '475 Fire Suppression', '490 Fire Pump test', '470 Underground Fire System', '473 Aboveground Fire System', '495 Fire Hydrant')) {
			areaInspector = 'DANIELSBC';
		}

		if (areaInspector == '' && appMatch('Building/Commercial/*/*')) {
			areaInspector = 'GARCIAAA';
		}

		if (areaInspector == '' && appMatch('Building/Residential/*/*')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (areaInspector == '' && appMatch('Building/*/*/*') && !appMatch('Building/3rd/*/*') && (AInfo['Type of Work'] == 'Residential' || AInfo['Type of Use'] == 'Residential' || AInfo['Type of Use'] == '130 - Residential')) {
			areaInspector = 'FIERROGUZMAN';
		}

		if (areaInspector != '') {
			assignInspection(inspId, areaInspector);
		}

	}
	//end replaced branch: ES_BLDG_AUTO_ASSIGN_INSPECTOR;
}

if ((InspectorFirstName == '' || InspectorFirstName == 'Selectron') && appMatch('Engineering/Pavement Cut/*/*')) {
	assignInspection(inspId, 'Robert Shadrick');
}

if ((InspectorFirstName == '' || InspectorFirstName == 'Selectron') && appMatch('License/*/*/*')) {

	//start replaced branch: ES_LICENSE_AUTO_ASSIGN_INSPECTOR
	{
		if (inspType == '1400 Site Inspection') {
			areaInspector = 'CAHALANSM';
		}

		if (inspType == '1500 Site Inspection') {
			areaInspector = 'TERESA.CONTRERAS';
		}

		if (inspType == '1505 Fire Dept') {
			areaInspector = 'ORTIZMD';
		}

		if (inspType == '1700 Site Inspection') {
			areaInspector = 'PD CODE';
		}

	}
	//end replaced branch: ES_LICENSE_AUTO_ASSIGN_INSPECTOR;
}

if (appMatch('Animal/*/*/*')) {

	//start replaced branch: ES_Animal_InspectionScheduleAfter
	{
		if ((appMatch('Animal/Animal/*/*') || appMatch('Animal/Complaint/*/*')) && getDepartmentName(currentUserID) == '311') {
			var theInsp = lookup('LKUP_Animal_Inspector', 'LEAD');
			assignInspection(InspectionIdList, theInsp);
		}

	}
	//end replaced branch: ES_Animal_InspectionScheduleAfter;
}

// TODO: branch doesn't exist
/*
if (appMatch('Enforcement/Environmental Complaints/NA/NA')) {
branch('ES_AMO_SCHEDULE_INSP');
}
*/
