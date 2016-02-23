
if (currentUserID.indexOf('PUBLICUSER') >= -1 && AInfo['Homeowner'] == 'Yes') {
	email('AA-WindowsPermit@elpasotexas.gov;gutierrezma@elpasotexas.gov', 'accela@elpasotexas.gov', 'A new Windows Permit is submitted online, permit number is ' + capIDString + '.', 'A new Windows Permit is submitted online, permit number is ' + capIDString + '.');
}

if (publicUser) {

	//replaced branch(ACA_ISSUE_BLDG_PERMITS)
	ACA_ISSUE_BLDG_PERMITS();
}
