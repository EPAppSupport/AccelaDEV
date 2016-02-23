

//start replaced branch: ES_ENFORCEMENT_WORKFLOWTASKUPDATEAFTER
 {
showMessage=true;
if (appMatch('Enforcement/Solid Waste/Residential/Recycling') && wfTask == 'Investigation' && wfStatus == 'Removal Ordered') {
	updateTask('Close','Closed','','');
	closeTask('Close','Closed','Closed by Script',' ');
	closeTask('Investigation',wfStatus,'Closed by Script',' ');
	addParcelCondition('', 'Parcel','Applied(Applied)','Recycling Program Violation','Recycling service not allowed at this location until condition expired (6 months from effective date) due to repeat violations','Notice');
	updateAppStatus('Removal Ordered', 'Status set by script');
	
//start replaced branch: ES_ENF_CREATE_AECU_CHILD
 {
var canSerialNumber = AInfo['Can Serial No.'];
var assignToUser = 'CONTRERASBX';
var newChild = createChild('AMS','ESD','Containers','Pick up','Child of record ID ' + capIDString);
var tempCapId = capId;
capId = newChild;
editAppSpecific('Can Serial No.', canSerialNumber);
assignCap(assignToUser);
assignTask('Work Order Submittal',assignToUser);
capId = tempCapId;

}
//end replaced branch: ES_ENF_CREATE_AECU_CHILD;
	}

if (appMatch('Enforcement/Solid Waste/Residential/Recycling') && wfTask == 'Investigation' && (wfStatus == 'Tag 1' || wfStatus == 'Tag 2')) {
	updateTask('Close','Closed','','');
	closeTask('Close','Closed','Closed by Script',' ');
	closeTask('Investigation',wfStatus,'Closed by Script',' ');
	updateAppStatus('Tagged', 'Status set by script');
	}

if (appMatch('Enforcement/Fire Code Compliance/NA/NA') && wfTask == 'Investigate' && wfStatus == 'Vacant') {
	assignTask('Investigate','HARRELLKD');
	}

if (appMatch('Enforcement/Fire Code Compliance/NA/NA') && wfTask == 'Investigate' && wfStatus == 'Vacant') {
	
//start replaced branch: ES_ENFORCEMENT_ASSIGN_1115INVESTIGATION_INSP
 {
assignedInsp = 'HARRELLKD';
comment('Assigned Inspector is: ' +assignedInsp);
nextInspDate = dateAdd(null,1);
comment('nextInspDate is: ' + nextInspDate);
inspType='1115 Investigation';
scheduleInspectDate(inspType,nextInspDate,assignedInsp);

}
//end replaced branch: ES_ENFORCEMENT_ASSIGN_1115INVESTIGATION_INSP;
	}

if (appMatch('Enforcement/Fire Code Compliance/Codes/NA') && wfTask == 'Investigate' && wfStatus == 'Referred') {
	
//start replaced branch: ES_ASG_TSK_CHILDREN
 {
if (appMatch('Enforcement/Fire Code Compliance/Codes/NA')) {
	var newChild = createChild('Enforcement','Property Maintenance','Housing Safety','NA','Child of record ID ' + capIDString);
	}

var tempCapId = capId;
capId = newChild;
assignTask('Complaint Received','RODRIGUEZ-HEFNERE');

}
//end replaced branch: ES_ASG_TSK_CHILDREN;
	}

}
//end replaced branch: ES_ENFORCEMENT_WORKFLOWTASKUPDATEAFTER;

//replaced branch(ES_WORKFLOWTASKUPDATEAFTER_ALL)
ES_WORKFLOWTASKUPDATEAFTER_ALL();

