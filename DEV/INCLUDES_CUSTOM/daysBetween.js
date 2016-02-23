
//---------------------------------APPLICATION SPECIFIC INFO UPDATE AFTER------------------------------------------------------------------------------------------
//also need to set useAppSpecificgroupname = true in Standard Choice

function daysBetween(date1, date2) {
	if (date1.indexOf("-") !=  - 1) {
		date1 = date1.split("-");

	} else if (date1.indexOf("/") !=  - 1) {
		date1 = date1.split("/");

	} else {
		return 0;

	}
	if (date2.indexOf("-") !=  - 1) {
		date2 = date2.split("-");

	} else if (date2.indexOf("/") !=  - 1) {
		date2 = date2.split("/");

	} else {
		return 0;

	}
	if (parseInt(date1[0], 10) >= 1000) {
		var sDate = new Date(date1[0] + "/" + date1[1] + "/" + date1[2]);
	} else if (parseInt(date1[2], 10) >= 1000) {
		var sDate = new Date(date1[2] + "/" + date1[0] + "/" + date1[1]);
	} else {
		return 0;
	}
	if (parseInt(date2[0], 10) >= 1000) {
		var eDate = new Date(date2[0] + "/" + date2[1] + "/" + date2[2]);
	} else if (parseInt(date2[2], 10) >= 1000) {
		var eDate = new Date(date2[2] + "/" + date2[0] + "/" + date2[1]);
	} else {
		return 0;
	}
	var one_day = 1000 * 60 * 60 * 24;
	var daysApart = Math.abs(Math.ceil((sDate.getTime() - eDate.getTime()) / one_day));
	return daysApart;
}
