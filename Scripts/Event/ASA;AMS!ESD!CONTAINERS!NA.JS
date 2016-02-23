

//start replaced branch: ES_AMS_CONTAINERS_ASSIGN_WO
 {
assignTask('Work Order Submittal', currentUserID);
closeTask('Work Order Submittal','Complete','Workflow Action Performed by Script','Workflow Action Performed by Script');
cityArea = getGISInfo('Accela_map', 'ESDContainers', 'NAME');
logDebug('GIS Area: ' + cityArea);
if ((cityArea == 'CENTRAL')) {
	assignTask('Work Order','AMADORJA2');
	}

if ((cityArea == 'LOWER VALLEY')) {
	assignTask('Work Order','GARCIALX');
	}

if ((cityArea == 'NORTHEAST')) {
	assignTask('Work Order','ORTEGARX2');
	}

if ((cityArea == 'WEST SIDE')) {
	assignTask('Work Order','RAMIREZRN');
	}

if ((cityArea == 'EAST 1')) {
	assignTask('Work Order','ESPINOZALE');
	}

if ((cityArea == 'EAST 2')) {
	assignTask('Work Order','PAYANJX2');
	}

if ((cityArea == undefined || cityArea == '')) {
	assignTask('Work Order','AMADORJA2');
	}

}
//end replaced branch: ES_AMS_CONTAINERS_ASSIGN_WO;
if (typeof(CONTAINERS) == 'object') {
	for (eachrow in CONTAINERS) 
//start replaced branch: ADD_CONTAINERS_FEES
 {
row = CONTAINERS[eachrow];
contType = row['Container Type'];
repReason = row['Replacement Reason'];
if (((contType == 'Deliver Additional' || contType == 'Deliver New' || contType == 'Pickup') && !feeExists('EC110'))) {
	logDebug(contType + ' - ' + feeExists('EC110'));
	addFee('EC110','ESDCONSCONTAINERS','STANDARD',1,'N');
	}

if (((contType == 'Replacement' && repReason == 'Burnt Container') && !feeExists('EC110'))) {
	logDebug(contType + ' - ' + feeExists('EC110'));
	addFee('EC110','ESDCONSCONTAINERS','STANDARD',1,'N');
	addFee('EC100','ESDCONSCONTAINERS','STANDARD',1,'N');
	}

if (feeExists('EC110')) {
	logDebug ('FEE EXISTS: ' + feeExists('EC110'));
	}

if (!feeExists('EC110')) {
	logDebug ('NO FEE EXISTS: ' + feeExists('EC110'));
	}

}
//end replaced branch: ADD_CONTAINERS_FEES;
	}

updateAppStatus('Submittal - Completed', 'Updated by Script');

