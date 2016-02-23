
editAppSpecific('Expiration Date', dateAdd(inspManualDate, 180));
showMessage = true;
comment(inspManualDate);
childrenCapID = getChildren('*/*/*/*', capId);
showMessage = true;
comment('childrenCapID' + childrenCapID + 'typeOfChildCap:' + typeof(childrenCapID));
if ((childrenCapID != null && childrenCapID != false) && typeof(childrenCapID) == 'object') {
	for (eachchild in childrenCapID)
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
