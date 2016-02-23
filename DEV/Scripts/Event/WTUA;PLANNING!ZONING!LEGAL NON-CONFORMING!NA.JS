
if (wfTask == 'Issue' && wfStatus == 'Issue') {
	email('SotoMX@elpasotexas.gov', 'accela@elpasotexas.gov', (capIDString + ' has been updated'), (capIDString + ' has been Issued.'));
}

for (eachrow in GROUPHOUSING)
	//start replaced branch: ES_PLAC_CLOSE_LOOP
{
	asiRow = GROUPHOUSING[eachrow];
	subject1 = ('A group home has been verified, registered or approved. The record number is ' + capIDString + '.');
	body1 = ('A group home has been verified, registered or approved. The record number is ' + capIDString + '.');
	subject2 = ('A group home requiring local licensing has been verified, registered or approved. The record number is ' + capIDString + '.');
	body2 = ('A group home requiring local licensing has been verified, registered or approved. The record number is ' + capIDString + '.');
	if (wfTask == 'Close' && wfStatus == 'Close' && asiRow['Group Housing'] != 'null') {
		email('SotoMX@elpasotexas.gov', 'HoffmanAP@elpasotexas.gov', '[DEV] ' + 'accela@elpasotexas.gov', subject1, body1);
	}

	if (wfTask == 'Close' && wfStatus == 'Close' && asiRow['Licenses'] != 'null') {
		email('CantuBR@elpasotexas.gov', 'accela@elpasotexas.gov', '[DEV] ' + subject2, body2);
	}

}
//end replaced branch: ES_PLAC_CLOSE_LOOP;
