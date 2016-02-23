
var gisData = getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea');
var isDowntown = gisData.substr(0,8);
var isLowerDyer = gisData.substr(0,5);
if (isDowntown == 'Downtown') {
	editAppSpecific('18.40 Downtown', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

if (isLowerDyer == 'Lower') {
	editAppSpecific('18.40 Northeast', getGISInfo('Accela_map', 'Vacant Building Enforcement Area', 'Subarea'));
	}

