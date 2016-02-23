
if (currentUserID.indexOf('PUBLICUSER') >= -1) {
	email('AA-ElectricalPermit@elpasotexas.gov;gutierrezma@elpasotexas.gov', 'accela@elpasotexas.gov', 'A new Electrical Permit is submitted online, permit number is ' + capIDString + '.', 'A new Electrical Permit is submitted online, permit number is ' + capIDString + '.');
}

if (currentUserID.indexOf('PUBLICUSER') >= -1 && AInfo['Type of Work'] == 'Elec Permit A') {
	updateFee('FB050', 'BLDGELEC', 'STANDARD', estValue, 'N', 'N');
}

if (publicUser && AInfo['Building Permit Number'] != null) {
	addParent(AInfo['Building Permit Number']);
}

if (publicUser) {

	//replaced branch(ACA_ISSUE_BLDG_PERMITS)
	ACA_ISSUE_BLDG_PERMITS();
}
