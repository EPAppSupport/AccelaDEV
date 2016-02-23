

//replaced branch(GIS DATA)
GIS_DATA();
if (appMatch('Enforcement/Environmental Complaints/NA/NA') && AInfo['PCN'] == 'Yes') {
	assignTask('Receive Complaint', 'LUZ.M.MARQUEZ');
}

if ((getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != null && getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != '' && getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != 'undefined')) {
	addParcelCondition('', 'Parcel', 'Applied', 'Historic Property', 'Historic Property', 'Notice');
}

theStreet = '';
myAddressArray = new Array();
arterialStreets = '';
loadAddressAttributes(myAddressArray);
theStreet = myAddressArray['AddressAttribute.StreetName'];
arterialStreets = lookup('ES_ARTERIAL_STREETS', theStreet);
comment('Street: ' + arterialStreets);
if (arterialStreets != undefined)
	editAppSpecific('Arterials', 'Arterial');
if (arterialStreets == undefined || arterialStreets == '')
	editAppSpecific('Arterials', 'Non-Arterial');
