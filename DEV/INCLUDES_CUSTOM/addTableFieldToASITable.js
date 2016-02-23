function addTableFieldToASITable(tableName,tableField) { // optional capId
	if (arguments.length > 2)
		itemCap = arguments[2]; 
	else
		return;

	var tssmResult = aa.appSpecificTableScript.getAppSpecificTableModel(itemCap,tableName)

	if (!tssmResult.getSuccess())
		{ logDebug("**WARNING: error retrieving app specific table " + tableName + " " + tssmResult.getErrorMessage()) ; return false }

	var tssm = tssmResult.getOutput();
	var tsm = tssm.getAppSpecificTableModel();
	tsm.setTableField(tableField);
	if (tsm.setReadonlyField) tsm.setReadonlyField(null);  // check for 6.6.1.   If so need to populate with null
	addResult = aa.appSpecificTableScript.editAppSpecificTableInfos(tsm, itemCap, "ADMIN");
	if (!addResult .getSuccess())
		{ logDebug("**WARNING: error adding record to ASI Table:  " + tableName + " " + addResult.getErrorMessage()) ; return false }
	else
		logDebug("Successfully added record to ASI Table: " + tableName);

}
