
if (publicUser && AInfo['Building Permit Number'] != null) {
	addParent(AInfo['Building Permit Number']);
}

if (publicUser) {

	//replaced branch(ACA_ISSUE_BLDG_PERMITS)
	ACA_ISSUE_BLDG_PERMITS();
}
