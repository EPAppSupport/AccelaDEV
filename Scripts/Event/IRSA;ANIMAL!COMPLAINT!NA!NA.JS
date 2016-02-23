

//start replaced branch: ES_Animal_InspectionResultSubmitAfter
{
	if (appMatch('Animal/Complaint/*/*') && matches(inspType, '3206 Assist Investigation', '3202 Cruelty Investigation', '3203 Exposure Investigation', '3204 Nuisance Investigation', '3205 SOC Investigation', '3207 Stray Investigation', '3208 Trap Investigation', '3209 Wildlife Investigation') && (inspResult == 'Pending' || inspResult == 'Quarantine' || inspResult == 'Fail')) {
		updateTask('Assessment', inspResult, 'Updated via script when resulting inspection: ' + inspType);
	}

	if (appMatch('Animal/Complaint/*/*') && matches(inspType, '3206 Assist Investigation', '3202 Cruelty Investigation', '3203 Exposure Investigation', '3204 Nuisance Investigation', '3205 SOC Investigation', '3207 Stray Investigation', '3208 Trap Investigation', '3209 Wildlife Investigation') && (inspResult == 'Impound' || inspResult == 'Impound Quarantine')) {
		var newChild = createChild('Animal', 'Animal', 'NA', 'NA', '');
		var savedCapID = capId;
		capId = newChild;
		closeTask('Submittal', 'Complete', 'Updated via EMSE Script', 'Updated via EMSE Script');
		capId = savedCapID;
		copyAppSpecific(newChild);
		copyASITables(capId, newChild);
		var pCap = aa.cap.getCap(capId).getOutput();
		var cCap = aa.cap.getCap(newChild).getOutput();
		var copySuccess = aa.cap.copyComments(pCap, cCap);
		if (copySuccess.getSuccess())
			logDebug('Comments Copied');
	}

	if (appMatch('Animal/Complaint/*/*') && matches(inspType, '3206 Assist Investigation', '3202 Cruelty Investigation', '3203 Exposure Investigation', '3204 Nuisance Investigation', '3205 SOC Investigation', '3207 Stray Investigation', '3208 Trap Investigation', '3209 Wildlife Investigation') && (inspResult == 'Relocate' || inspResult == 'Cancel' || inspResult == 'Complete' || inspResult == 'RTO' || inspResult == 'Impound' || inspResult == 'Impound Quarantine')) {
		closeTask('Assessment', inspResult, 'Updated via EMSE Script', 'Updated via EMSE Script');
	}

	if (appMatch('Animal/Complaint/*/*') && matches(inspType, '3202 Cruelty Investigation', '3203 Exposure Investigation', '3204 Nuisance Investigation', '3205 SOC Investigation', '3206 Assist Investigation', '3207 Stray Investigation', '3208 Trap Investigation', '3209 Wildlife Investigation') && inspResult == 'Incomplete') {
		var inspector = lookup('LKUP_Animal_Inspector', 'LEAD');
		scheduleInspection(inspType, 0, inspector);
	}

}
//end replaced branch: ES_Animal_InspectionResultSubmitAfter;
