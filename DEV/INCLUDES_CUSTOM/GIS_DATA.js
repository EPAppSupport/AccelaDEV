function GIS_DATA() {

	editAppSpecific('Census Tract', getGISInfo('Accela_map', 'Census_Blocks', 'TRACTCE00'));
	editAppSpecific('ESD Code Inspection Areas', getGISInfo('Accela_map', 'ESD Inspection Region', 'REGION_NUM'));
	editAppSpecific('Flood Zone', getGISInfo('Accela_map', 'FloodZone', 'FLOODZONE_'));
	editAppSpecific('Historical District', getGISInfo('Accela_map', 'HistoricalDistrict', 'NAME'));
	editAppSpecific('Police Region', getGISInfo('Accela_map', 'PoliceRegion', 'DISTRICT'));
	editAppSpecific('Plan Area', getGISInfo('Accela_map', 'PlanArea', 'NAME'));
	editAppSpecific('Rep Districts', getGISInfo('Accela_map', 'RepDistricts', 'DISTRICT'));
	editAppSpecific('TIRZ', getGISInfo('Accela_map', 'TIRZ', 'TEXT'));
	editAppSpecific('Zoning', getGISInfo('Accela_map', 'Zoning', 'ZONE_'));
	editAppSpecific('Fire Inspection Areas', getGISInfo('Accela_map', 'FireCodesInpectonAreas', 'Area_'));
	editAppSpecific('Building Inspection Areas', getGISInfo('Accela_map', 'DSD Sectors', 'NAME'));
	editAppSpecific('Downtown Plan', getGISInfo('Accela_map', 'Downtown Districts', 'DISTRICTS'));
	editAppSpecific('Mountain Development', getGISInfo('Accela_map', 'Mountain_development_area', 'FID'));
	editAppSpecific('Impact Fee Area', getGISInfo('Accela_map', 'Impact Fee Areas', 'IMPACTAREA'));
	editAppSpecific('Homestead', getGISInfo('Accela_map', 'Address Point', 'HOMESTEAD'));

}
