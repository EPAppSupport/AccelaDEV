
if (currentUserID.indexOf('PUBLICUSER') >= -1 && AInfo['Homeowner'] == 'Yes') {
	email('AA-ReroofPermit@elpasotexas.gov;gutierrezma@elpasotexas.gov', 'accela@elpasotexas.gov', 'A new Reroof Permit is submitted online, permit number is ' + capIDString + '.', 'A new Reroof Permit is submitted online, permit number is ' + capIDString + '.');
}

if (publicUser) {

	//replaced branch(ACA_ISSUE_BLDG_PERMITS)
	ACA_ISSUE_BLDG_PERMITS();
}
