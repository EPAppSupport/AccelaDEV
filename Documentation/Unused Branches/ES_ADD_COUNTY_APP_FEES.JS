
if (appMatch('Health/Food Inspections/Mobile/NA')) {
	
//start replaced branch: ES_ADD_MOBILE_COUNTY_FEE
 {
if (appMatch('Health/Food Inspections/Mobile/NA') &&  matches(AInfo['PERMIT INFO.Section'],'4(c)')) {
	addFee('FHC0004','HLTHCOUNTY','STANDARD',1,'N');
	}

if (appMatch('Health/Food Inspections/Mobile/NA') &&  matches(AInfo['PERMIT INFO.Section'],'4(d)')) {
	addFee('FHC0005','HLTHCOUNTY','STANDARD',1,'N');
	}

}
//end replaced branch: ES_ADD_MOBILE_COUNTY_FEE;
	}

if (appMatch('Health/Food Inspections/Roadside-Outdoor Market/NA') &&  matches(AInfo['Section'],'4(e)')) {
	addFee('FHC0006','HLTHCOUNTY','STANDARD',1,'N');
	}

if (appMatch('Health/Food Inspections/Temporary/NA') &&  AInfo['Section'] == '4(f)') {
	addFee('FHC0007','HLTHCOUNTY','STANDARD',1,'N');
	}

if (appMatch('Health/Food Inspections/Temporary/NA') && AInfo['Section'] =='4(g)') {
	addFee('FHC0008','HLTHCOUNTY','STANDARD',1,'N');
	}

if (appMatch('Health/Food Inspections/Roadside-Outdoor Market/NA') &&  matches(AInfo['Section'],'9.12.070L')) {
	addFee('FH054','HLTHOS','STANDARD',1,'N');
	addFee('FH057','HLTHOS','STANDARD',1,'N');
	}

