
if (currentUserID.indexOf('PUBLICUSER') >= -1) {
	email('AA-SidingPermit@elpasotexas.gov;gutierrezma@elpasotexas.gov', 'accela@elpasotexas.gov', 'A new Siding Permit is submitted online, permit number is ' + capIDString + '.', 'A new Siding Permit is submitted online, permit number is ' + capIDString + '.');
}

if (publicUser) {

	//replaced branch(ACA_ISSUE_BLDG_PERMITS)
	ACA_ISSUE_BLDG_PERMITS();
}
