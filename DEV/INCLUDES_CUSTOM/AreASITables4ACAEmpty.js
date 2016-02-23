
function AreASITables4ACAEmpty() {

 	//
 	// Loads App Specific tables into their own array of arrays.  Creates global array objects
	//
	// Optional parameter, cap ID to load from.  If no CAP Id specified, use the capModel
	//

	var itemCap = capId;
	if (arguments.length == 1)
		{
		itemCap = arguments[0]; // use cap ID specified in args
		var gm = aa.appSpecificTableScript.getAppSpecificTableGroupModel(itemCap).getOutput();
		}
	else
		{
		var gm = cap.getAppSpecificTableGroupModel()
		}

	var ta = gm.getTablesMap();


	var tai = ta.values().iterator();

	while (tai.hasNext())
	  {
	  var tsm = tai.next();

	  if (tsm.rowIndex.isEmpty()) 
          return true;  //empty table
          else
              return false;  //not empty table

	  }

	}

