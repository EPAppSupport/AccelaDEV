function ES_Animal_Copy_ParentASI() {

	var animalParents = new Array();
	if (AInfo['Update ASI from Parent']) {
		var animalParents = getParentsElPaso('Animal/Complaint/NA/NA');
	}

	if (animalParents.length > 0) {
		saveCapID = capId;
		capId = animalParents[0];
		saveCapAsi = AInfo;
		loadAppSpecific(AInfo, capId);
		copyAppSpecific(saveCapID);
		capId = saveCapID;
	}

	editAppSpecific('Update ASI from Parent', 'UNCHECKED');

}
