
if (wfTask == 'Issue' && wfStatus == 'Issued' && AInfo['INFORMATION.Expiration Date'] == null && wfDateMMDDYYYY > '08/31/' + sysDate.getYear()) {
	editAppSpecific('Expiration Date','08/31/' + (sysDate.getYear() + 1));
	}

