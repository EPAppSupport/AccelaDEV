function copyASIT(sourceCapId,targetCapId) { //optional tablenames to ignore

	var ignoreArray = new Array();
	for (var i=2; i<arguments.length;i++)
		ignoreArray.push(arguments[i])

	var gmRes = aa.appSpecificTableScript.getAppSpecificTableGroupModel(sourceCapId);
	if (gmRes.getSuccess()) {
		var gm = gmRes.getOutput();
		var ta = gm.getTablesArray()
		var tai = ta.iterator();
		while (tai.hasNext()) {
	  		var tsm = tai.next();
			var tm = tsm.getAppSpecificTableModel();
			var tName = tm.getTableName();
			if (!exists(tName,ignoreArray)) {
				var fieldArrList = tm.getTableField();
                        	var fieldArr = fieldArrList.toArray();
                        	var itemFound = false;
                        	for (xx in fieldArr) {
                             		fieldItem = fieldArr[xx];
                             		if (!((fieldItem == null) || (fieldItem == undefined) || (fieldItem == "" ) || (fieldItem == "undefined"))) {
                             			itemFound = true;
						break;
			     		}
				}
				if (itemFound) {
					addTableFieldToASITable(tName, fieldArrList, targetCapId);
				}
			}
		}
	}
}
