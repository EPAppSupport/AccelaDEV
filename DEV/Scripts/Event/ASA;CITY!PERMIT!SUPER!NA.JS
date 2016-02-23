

//start replaced branch: ES_CITY_ApplicationSubmitAfter
{
	if (AInfo['Do you need Parking Meters outside the event to bagged?'] == 'Yes') {
		comment('must add fee');
		addFee('FB0200', 'CITYSUPER', 'STANDARD', 1, 'Y');
	}

	email('CamarilloMX@elpasotexas.gov', 'accela@elpasotexas.gov', ('Record Number: ' + capIDString), 'A request for a Special Events Permit has been submitted to the City of El Paso.  Please review the documents in the record number ' + capIDString + ' at https://avprodvmext.elpasotexas.gov  Contact the City Development Department Special Events Coordinator at 915-212-1506 for any questions regarding the request.');

}
//end replaced branch: ES_CITY_ApplicationSubmitAfter;

//replaced branch(GIS DATA)
GIS_DATA();
