

//replaced branch(COEP_SERVICE_REQUEST_EMAIL)
COEP_SERVICE_REQUEST_EMAIL();

//replaced branch(COEP_SERVICE_REQ_UPDATE_WORKFLOW)
COEP_SERVICE_REQ_UPDATE_WORKFLOW();

//start replaced branch: ES_SERVICEREQUEST_APPLICATIONSUBMITAFTER
{
	comment('Selected: ' + AInfo['Environmental Complaints']);
	if (AInfo['Environmental Complaints'] == 'Animal Services Duplicate Complaint') {
		assignTask('Request', 'ASFS');
	}

	if (AInfo['Environmental Complaints'] == 'Solid Waste Billing Issues') {
		assignTask('Request', 'HERNANDEZMX');
	}

	if (AInfo['Environmental Complaints'] == 'Waivers') {
		assignTask('Request', 'GDURAN');
	}

	if (AInfo['Environmental Complaints'] == 'ESD Property Liens') {
		assignTask('Request', 'REYESD');
	}

	if (AInfo['Environmental Complaints'] == 'Special/Bulk Pick-ups') {
		assignTask('Request', 'LUISA.E.BUSTAMANTE');
	}

	if (AInfo['Environmental Complaints'] == 'Missed Garbage Duplicate Complaint') {
		assignTask('Request', 'SMITHJM');
	}

	if (AInfo['Environmental Complaints'] == 'Dead Animal Pick-up') {
		assignTask('Request', 'YAMAGUCHIJ');
	}

	if (AInfo['Environmental Complaints'] == 'Fogging Requests') {
		assignTask('Request', 'SALCIDOFX');
	}

	if (AInfo['Environmental Complaints'] == 'Code Compliance') {
		assignTask('Request', 'IRROBALIBA');
	}

	if (AInfo['Environmental Complaints'] == 'Senior/Disabled Discount') {
		assignTask('Request', 'EISERTDA');
	}

	if (AInfo['Environmental Complaints'] == 'Missed Recycling Complaint') {
		assignTask('Request', 'ROSSPR');
	}

	if (AInfo['Environmental Complaints'] == 'Driver Complaints') {
		assignTask('Request', 'GDURAN');
	}

	if (AInfo['Complaint Type'] == 'Building Safety Complaint') {
		assignTask('Request', 'SPENCERNM');
	}

	if (AInfo['Complaint Type'] == 'Payday Loan Complaint') {
		assignTask('Request', 'CahalanSM');
	}

}
//end replaced branch: ES_SERVICEREQUEST_APPLICATIONSUBMITAFTER;

//start replaced branch: ES_SERVICEREQUEST_GIS_DATA
{
	editAppSpecific('Police Region', getGISInfo('Accela_map', 'PoliceRegion', 'DISTRICT'));
	editAppSpecific('Rep Districts', getGISInfo('Accela_map', 'RepDistricts', 'DISTRICT'));

}
//end replaced branch: ES_SERVICEREQUEST_GIS_DATA;

//start replaced branch: DEPARTMENT_GENERATEDBY
{
	editAppSpecific('Department', getDepartmentName(currentUserID));

}
//end replaced branch: DEPARTMENT_GENERATEDBY;

//start replaced branch: ES_CREATE_AESP_CHILD
{
	var desc = workDescGet(capId);
	if (AInfo['Environmental Complaints'] == 'Special/Bulk Pick-ups') {
		vApp = createChild('AMS', 'ESD', 'Special and Bulk Pick Up', 'NA', capIDString);
		copyOwner(capId, vApp);
		updateWorkDesc(desc, vApp);
		copyASIFields(capId, vApp, 'Assignments');
	}

	if (AInfo['Environmental Complaints'] == 'Special/Bulk Pick-ups') {
		closeTask('Request', 'Closed');
		closeTask('Close', 'Closed', 'Closed by ES_CREATE_AESP_CHILD');
		updateAppStatus('Closed', 'Closed by ES_CREATE_AESP_CHILD');
	}

	if (AInfo['Environmental Complaints'] == 'Special/Bulk Pick-ups') {
		cCapId = childGetByCapType('AMS/ESD/Special and Bulk Pick Up/NA', capId);
		assignTaskToChildRecord('Work Order Submittal', 'LUISA.E.BUSTAMANTE', cCapId);
	}

}
//end replaced branch: ES_CREATE_AESP_CHILD;

//start replaced branch: ES_CREATE_AEAP_CHILD
{
	var desc = workDescGet(capId);
	if (AInfo['Environmental Complaints'] == 'Dead Animal Pick-up') {
		vApp = createChild('AMS', 'ESD', 'Dead Animal Pick Up', 'NA', capIDString);
		copyOwner(capId, vApp);
		updateWorkDesc(desc, vApp);
		copyASIFields(capId, vApp, 'Assignments');
		assignTask('Work Order Submittal', 'currentUserID');
	}

	if (AInfo['Environmental Complaints'] == 'Dead Animal Pick-up') {
		closeTask('Request', 'Closed');
		closeTask('Close', 'Closed', 'Closed by ES_CREATE_AEAP_CHILD');
		updateAppStatus('Closed', 'Closed by ES_CREATE_AEAP_CHILD');
	}

	if (AInfo['Environmental Complaints'] == 'Dead Animal Pick-up' && AInfo['Personal Pet'] == 'Yes') {
		cCapId = childGetByCapType('AMS/ESD/Dead Animal Pick Up/NA', capId);
		assignTaskToChildRecord('Work Order Submittal', 'HERNANDEZMX', cCapId);
	}

	if (AInfo['Environmental Complaints'] == 'Dead Animal Pick-up' && AInfo['Personal Pet'] == 'No') {
		cCapId = childGetByCapType('AMS/ESD/Dead Animal Pick Up/NA', capId);
		updateTaskOfChildRecord('Work Order Submittal', 'Completed', 'Updated By Script', 'Updated by Script', cCapId);
	}

}
//end replaced branch: ES_CREATE_AEAP_CHILD;
