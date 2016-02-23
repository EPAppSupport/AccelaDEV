

if (appMatch('Planning/Zoning/PWSF Communications/*') &&!matches(inspType,'400 Fire Department Final','475 Fire Suppression','480 Fire Alarm','485 Fire Sprinkler','490 Fire Pump Test','495 Fire Hydrant')) {
	addFee('FB082','BLDGPWSF','STANDARD',1,'N');
	invoiceFee('FB082','STANDARD');
	}

