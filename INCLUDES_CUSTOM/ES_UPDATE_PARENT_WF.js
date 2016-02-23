function ES_UPDATE_PARENT_WF() {

	pCapID = getParent();
	totalCapsIncomplete = null;
	sibCapID = false;
	numCapsIncomplete = 0;
	if (pCapID != false) {
		pCapObj = aa.cap.getCap(pCapID).getOutput();
		pAppTypeResult = pCapObj.getCapType();
		pAppTypeString = pAppTypeResult.toString();
		comment('PARENT CAP Type is: ' + pAppTypeString);
	}

	if (pCapID != false && pAppTypeString == 'Planning/Subdivision/Improvement Plans/NA') {
		sibCapID = getChildren('*/*/*/*', pCapID, capId);
		comment('Sib Cap Ids exist');
	}

	if (sibCapID != false && typeof(sibCapID) == 'object') {
		for (eachchild in sibCapID)
			//start replaced branch: ES_CHECK_SIB_WF_LOOP
		{
			eachsibCapID = sibCapID[eachchild];
			sibTasksComplete = checkSiblingTasksComplete(eachsibCapID);
			if (sibTasksComplete == false) {
				numCapsIncomplete = 1;
				comment('Num caps incomplete: ' + numCapsIncomplete);
			}

			totalCapsIncomplete = totalCapsIncomplete + parseFloat(numCapsIncomplete);
			comment('total caps incomplete: ' + totalCapsIncomplete);

		}
		//end replaced branch: ES_CHECK_SIB_WF_LOOP;
	}

	if (sibCapID != false && totalCapsIncomplete == 0) {
		closeTask('Construction', 'Completed', 'Updated via event script', '', null, pCapID);
		comment('DID IT');
	}

	if (sibCapID != false && totalCapsIncomplete > 0) {
		comment('There are ' + totalCapsIncomplete + ' open sibling workflows, not updating parent CAP.');
	}

}
