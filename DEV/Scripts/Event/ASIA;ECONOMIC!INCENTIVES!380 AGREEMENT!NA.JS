
if (KEYDATES.length > 0) {
	for(eachrow in KEYDATES) var isCompleted = false;
	
//start replaced branch: ES_ECONOMIC_INCENTIVES_GET_KEYDATE
 {
var x = 0;
var theDate = KEYDATES[x]['Required Date'];
if ((theDate != null || theDate != '')) {
	editAppSpecific('Key Date',dateAdd(theDate,0));
	showMessage=true;
	comment('dates ' + theDate);
	}

}
//end replaced branch: ES_ECONOMIC_INCENTIVES_GET_KEYDATE;
	}

