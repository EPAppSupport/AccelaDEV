function esUpdateExpDate() {

	if (appMatch('Engineering/Special Privilege/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAdd(null, 375));
	}

	if (appMatch('Health/*/Fixed Location/*') && matches(AInfo['Section'], '2(b)', '4(a)', '4(b)', '4(h)', '4(i)', '4(j)', '4(k)', '4(l)')) {
		editAppSpecific('Expiration Date', dateAddMonths(wfDateMMDDYYYY, 12));
	}

	if (appMatch('Building/*/*/*') && !appMatch('Building/Historic/*/*') && !appMatch('Building/Property Maintenance/*/*') && !appMatch('Building/Public Education/*/*') && !appMatch('Building/Shared Parking/*/*') && !appMatch('Building/Temporary Amusement/*/*') && !appMatch('Building/Temporary Placement/*/*') && !appMatch('Building/Right of Way/NA/NA') && wfTask == 'Issue' && (wfStatus == 'Issued' || wfStatus == 'Issue per BPI Director')) {
		editAppSpecific('Expiration Date', dateAdd(null, 180));
	}

	if (appMatch('Engineering/Special Permit/*/*') && wfTask == 'Issue' && wfStatus == 'Issued') {
		editAppSpecific('Expiration Date', dateAddMonths(null, 60));
	}

}
