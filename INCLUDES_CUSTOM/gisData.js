function gisData() {

	editAppSpecific('Census Tract', getGISInfo('Accela_map', 'Census_Blocks', 'TRACTCE00'));
	editAppSpecific('Plan Area', getGISInfo('Accela_map', 'PlanArea', 'NAME'));
	editAppSpecific('Rep Districts', getGISInfo('Accela_map', 'RepDistricts', 'DISTRICT'));
	editAppSpecific('Subdivisions', getGISInfo('Accela_map', 'Subdivisions', 'NAME'));
	editAppSpecific('TIRZ', getGISInfo('Accela_map', 'TIRZ', 'TEXT'));
	editAppSpecific('Zoning', getGISInfo('Accela_map', 'Zoning', 'ZONE_'));
	editAppSpecific('Food Inspection Areas', getGISInfo('Accela_map', 'Health Inspection Areas', 'HealthArea'));
	editAppSpecific('Fire Inspection Areas', getGISInfo('Accela_map', 'FireCodesInpectonAreas', 'Area_'));
	editAppSpecific('Building Inspection Areas', getGISInfo('Accela_map', 'DSD Sectors', 'NAME'));
	editAppSpecific('Downtown Plan', getGISInfo('Accela_map', 'Downtown Districts', 'DISTRICTS'));
	editAppSpecific('Mountain Development', getGISInfo('Accela_map', 'Mountain_development_area', 'FID'));
	editAppSpecific('GIS DATA.Municipal Bounds', getGISInfo('Accela_map', 'Municipal Bounds', 'NAME'));
	editAppSpecific('Impact Fee Area', getGISInfo('Accela_map', 'Impact Fee Areas', 'IMPACTAREA'));
	editAppSpecific('Homestead', getGISInfo('Accela_map', 'Address Point', 'HOMESTEAD'));
	arterialField = getGISInfo('Accela_Map', 'Centerline', 'Class');
	if (arterialField != undefined || arterialField != '') {
		editAppSpecific('Arterials', 'Arterial');
	}

	if (arterialField == undefined || arterialField == '') {
		editAppSpecific('Arterials', 'Non-Arterial');
	}

	editAppSpecific('ESD Code Inspection Areas', getGISInfo('Accela_map', 'ESD Inspection Region', 'REGION_NUM'));
	editAppSpecific('Annex History', getGISInfo('Accela_map', 'Annex History', 'DATE_'));
	editAppSpecific('Association Boundary', getGISInfo('Accela_map', 'Association Boundary', 'NAME'));
	editAppSpecific('CDBG Eligible Area', getGISInfo('Accela_map', 'CDBG Eligible Area', 'CDBG_ELIGI'));
	editAppSpecific('Flood Zone', getGISInfo('Accela_map', 'FloodZone', 'FLOODZONE_'));
	editAppSpecific('Historical District', getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME'));
	editAppSpecific('Police Region', getGISInfo('Accela_map', 'PoliceRegion', 'DISTRICT'));

}
