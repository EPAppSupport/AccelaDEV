

//replaced branch(GIS DATA)
GIS_DATA();

//start replaced branch: LIC Establish Links to Reference Contacts
{
	iArr = new Array();
	//attributes to ignore;
	contactTypeArray = new Array();
	// ignored.  Uses std choice REF_CONTACT_CREATION_RULES;
	createRefContactsFromCapContactsAndLinkForElPasoTX(capId, contactTypeArray, iArr, false, false, comparePeopleStandard);

}
//end replaced branch: LIC Establish Links to Reference Contacts;
if (appMatch('Licenses/Sexually Oriented Business/NA/NA') || appMatch('Licenses/Sexually Oriented Business Emp/NA/NA')) {

	//start replaced branch: SEX_LIC_POPULATE_CREATED_ON_DATE
	{
		editAppSpecific('Created On', sysDate.getMonth() + '/' + sysDate.getDayOfMonth() + '/' + sysDate.getYear());

	}
	//end replaced branch: SEX_LIC_POPULATE_CREATED_ON_DATE;
}

theStreet = '';
myAddressArray = new Array();
arterialStreets = '';
loadAddressAttributes(myAddressArray);
theStreet = myAddressArray['AddressAttribute.StreetName'];
arterialStreets = lookup('ES_ARTERIAL_STREETS', theStreet);
logDebug(arterialStreets);
if (arterialStreets != undefined)
	editAppSpecific('Arterials', 'Arterial');
if (arterialStreets == undefined)
	editAppSpecific('Arterials', 'Not Arterial');
