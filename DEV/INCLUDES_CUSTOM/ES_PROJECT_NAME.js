function ES_PROJECT_NAME() {

	if (AInfo['Program'] == 'Nuisance') {
		var projName = AInfo['Program Nuisance'];
		editAppName(projName);
	}

	if (AInfo['Program'] == 'Facilities') {
		var projName = AInfo['Program Facilities'];
		editAppName(projName);
	}

	if (AInfo['Program'] == 'Solid Waste') {
		var projName = AInfo['Program Solid Waste'];
		editAppName(projName);
	}

	if (AInfo['Program'] == 'Vector') {
		var projName = AInfo['Program Vector'];
		editAppName(projName);
	}

}
