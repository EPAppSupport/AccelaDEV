

//start replaced branch: ES_Animal_AppSubmitAfter
 {
if (appMatch('Animal/Cage/NA/NA') && AInfo['Delivery']=='Yes') {
	addFee('EA0118','ANIMALCAGE','STANDARD',1,'Y',capId);
	}

// TODO:  branch doesn't exist
if (appMatch('Animal/*/*/*')) {
//	branch('ES_Animal_SocialMedia_AppSubmitAfter');
	}


if (appMatch('Animal/Complaint/*/*') && AInfo['Complaint Type']) {
	var inspType = lookup('LKUP_Animal_ComplaintTypeToInspectionType', String(AInfo['Complaint Type']).toUpperCase());
	var theInsp = lookup('LKUP_Animal_Inspector','LEAD');
	if(inspType!=undefined)scheduleInspection(inspType,0,theInsp);
	}

}
//end replaced branch: ES_Animal_AppSubmitAfter;

