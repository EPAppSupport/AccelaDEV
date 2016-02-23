
if (wfTask == 'SmartCode Compliance Check' && wfStatus == 'Variance Requested') {
	var newChild = createChild('Planning', 'Zoning Board of Adjustment', 'NA', 'NA', 'Child of record ID ' + capIDString);
}

if (wfTask == 'Revisions' && wfStatus == 'Revisions Requested') {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}

if (wfTask == 'Consolidated Review Committee (CRC) Review' && wfStatus == 'Recommend Approval') {
	sender = 'accela@elpasotexas.gov';
	recipient = 'gutierrezma@elpasotexas.gov';
	subject = ('Record id ' + capIDString + ' has completed CRC Review');
	content = ('Below are the comments for this review: <BR> ' + wfComment + '.');
	email(recipient, sender, subject, content);
}

if (wfTask == 'Revisions' && (wfStatus == 'No Revisions')) {
	capIdString = capId.getCustomID();
	capContactResult = aa.people.getCapContactByCapID(capId);
	conArray = capContactResult.getOutput();
	for (y in conArray)
		//replaced branch(ES_WORKFLOW_BUILDING_ACA_EMAIL)
		ES_WORKFLOW_BUILDING_ACA_EMAIL();
}
