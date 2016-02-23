
pCapID = getParent();
comment('Parent CAP ID is: ' + pCapID);
if (pCapID != false) {
	pCapObj = aa.cap.getCap(pCapID).getOutput();
	pGroupType = pCapObj.getCapType().getType();
	pGroupTypeString = pGroupType.toString();
	pSubType = pCapObj.getCapType().getSubType();
	pGroupTypeString = pGroupType.toString();
}

if (pCapID != false && ((pGroupTypeString == '3rd' && pSubTypeString == 'Commercial') || pGroupTypeString == 'Commercial')) {
	editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), pCapID);
}

if (pCapID != false && ((pGroupTypeString == '3rd' && pSubTypeString == 'Commercial') || pGroupTypeString == 'Commercial')) {
	siblingCapID = getChildren('*/*/*/*', pCapID);
}

if (siblingCapID != false && typeof(siblingCapID) == 'object') {
	for (eachchild in siblingCapID)
		//start replaced branch: ES_UPDATE_CHILD_EXPDATE_LOOP
	{
		eachChildCapID = childrenCapID[eachchild];
		if (eachChildCapID != null) {
			editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachChildCapID);
		}

		eachSiblingCapID = siblingCapID[eachchild];
		if (eachSiblingCapID != null) {
			editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180), eachSiblingCapID);
		}

	}
	//end replaced branch: ES_UPDATE_CHILD_EXPDATE_LOOP;
}
