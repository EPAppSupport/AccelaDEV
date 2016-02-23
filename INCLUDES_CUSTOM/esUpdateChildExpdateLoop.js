function esUpdateChildExpdateLoop() {

	eachChildCapID = childrenCapID[eachchild];
	if (eachChildCapID != null) {
		editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachChildCapID);
	}

	eachSiblingCapID = siblingCapID[eachchild];
	if (eachSiblingCapID != null) {
		editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachSiblingCapID);
	}

}
