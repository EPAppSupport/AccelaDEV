
if (AInfo['Flood Plain'] == 'Yes') {

	//start replaced branch: ES_BLDG_ADDASITBL_SITEPLN
	{
		addRowArray1 = new Array;
		addRowArray1['Type'] = 'Final Flood Plain Cert';
		addRowArray1['Date Submitted'] = '';
		addRowArray1['Received By'] = '';
		addRowArray1['Surveyor/Engineer Name'] = '';
		addRowArray1['Status'] = '';
		addRowArray1['Comments'] = '';
		addRowArray2 = new Array;
		addRowArray2['Type'] = 'In Construction';
		addRowArray2['Date Submitted'] = '';
		addRowArray2['Received By'] = '';
		addRowArray2['Surveyor/Engineer Name'] = '';
		addRowArray2['Status'] = '';
		addRowArray2['Comments'] = '';
		addRowArray3 = new Array;
		addRowArray3['Type'] = 'Preliminary Flood Plain Cert';
		addRowArray3['Date Submitted'] = '';
		addRowArray3['Received By'] = '';
		addRowArray3['Surveyor/Engineer Name'] = '';
		addRowArray3['Status'] = '';
		addRowArray3['Comments'] = '';
		if (SITEINFORMATION.length < 1) {
			addToASITable('SITE INFORMATION', addRowArray1);
			addToASITable('SITE INFORMATION', addRowArray2);
			addToASITable('SITE INFORMATION', addRowArray3);
		}

	}
	//end replaced branch: ES_BLDG_ADDASITBL_SITEPLN;
}

//replaced branch(GIS DATA)
GIS_DATA();
comment('GIS HISTORICAL ' + getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME'));
if (getParent() != '') {
	editAppSpecific(AInfo['Cloned Record'], 'Yes');
}
