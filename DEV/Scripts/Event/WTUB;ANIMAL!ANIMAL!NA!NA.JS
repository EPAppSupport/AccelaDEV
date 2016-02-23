

//start replaced branch: ES_ANIMAL_WFTUB4
{
	var cPerson = aa.person.getUser(currentUserID).getOutput();
	var cDept = aa.people.getDepartmentList('').getOutput();
	var uDept = '';
	for (dItem in cDept)
		if (cDept[dItem].getDeptKey() == cPerson.getDeptOfUser() + '')
			uDept = cDept[dItem].getDeptName();

	if (wfTask == 'Completeness Check' && wfStatus == 'Euthanize' && AInfo['Pet Status'] == 'Adopted' || AInfo['Pet Status'] == 'TNR' || AInfo['Pet Status'] == 'VIP') {
		showMessage = true;
		comment('Animal will not be euthanized without supervisor clearance');
		cancel = true;
	}

	if (wfTask == 'Completeness Check' && wfStatus == 'Euthanize' && AInfo['Supervisor'] == 'RAMIREZJX2' && AInfo['Pet Status'] == 'Adopted' || AInfo['Pet Status'] == 'TNR' || AInfo['Pet Status'] == 'VIP') {
		showMessage = true;
		comment('Proper supervisor clearance has been approved');
		cancel = false;
	}

	if (wfTask == 'Completeness Check' && wfStatus == 'Euthanize' && AInfo['Type'] == 'Cat' && !AInfo['Cat FD']) {
		cancel = true;
		showMessage = true;
		comment('<font color=red><b>Cat FD must be populated before this task can be resulted.</b></font>');
	}

	if (wfTask == 'Completeness Check' && !AInfo['Meets Adoptable Criteria']) {
		cancel = true;
		showMessage = true;
		// TODO: fixed "colore" tag
		comment("<font color=red><b>ASI Field 'Meets Adoptable Criteria' must be populated before the task can be resulted.</b</font>");
	}

	if (wfTask == 'Claim' && wfStatus == 'No EU' && uDept != 'Animal Sr Shelter') {
		cancel = true;
		showMessage = true;
		comment("<font color=red><b>User must be a member of the 'Animal Sr Shelter' group inorder to result this task with the status of 'No EU'.</b</font>");
	}

	if (wfTask == 'Completeness Check' && wfStatus == 'Euthanize' && uDept != 'Animal Sr Shelter' && (AInfo['Pet Status'] == 'ADOPT' || AInfo['Pet Status'] == 'TNR' || AInfo['Pet Status'] == 'VIP')) {
		showMessage = true;
		comment('<font color=red><b>Animal will not be euthanized without supervisor clearance.</b</font>');
		cancel = true;
	}

}
//end replaced branch: ES_ANIMAL_WFTUB4;
if (wfTask == 'Medical' && wfStatus == 'Complete' && typeof(QUARANTINE) == 'object') {
	for (eachrow in QUARANTINE)
		//start replaced branch: ES_WRKF_COMPLCHK_RLSVET
	{
		asiRow = QUARANTINE[eachrow];
		if (asiRow['Released by Shelter Vet'] == 'No') {
			showMessage = true;
			comment('This record has not been Released by Shelter Vet in Quarantine ASIT');
			cancel = true;
		}

	}
	//end replaced branch: ES_WRKF_COMPLCHK_RLSVET;
}

if (wfTask == 'Claim' && wfStatus != null && typeof(QUARANTINE) == 'object') {
	for (eachrow in QUARANTINE)
		//start replaced branch: ES_WRKF_COMPLCHK_RLSVET
	{
		asiRow = QUARANTINE[eachrow];
		if (asiRow['Released by Shelter Vet'] == 'No') {
			showMessage = true;
			comment('This record has not been Released by Shelter Vet in Quarantine ASIT');
			cancel = true;
		}

	}
	//end replaced branch: ES_WRKF_COMPLCHK_RLSVET;
}
