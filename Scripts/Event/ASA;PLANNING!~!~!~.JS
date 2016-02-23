

//replaced branch(GIS DATA)
GIS_DATA();
if ((getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != null && getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != '' && getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME') != 'undefined')) {
	addParcelCondition('','Parcel','Applied','Historic Property','Historic Property','Notice');
	}

