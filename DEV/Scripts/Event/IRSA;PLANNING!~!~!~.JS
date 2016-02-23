
(inspResult == 'Fail w ReFee' || inspResult == 'Fail w/Refee');
if ((inspType == '300 Elec Temporary Service' || inspType == '310 Electrical Service Release' || inspType == '300 Temporary Service Inspection' || inspType == '370 Electrical Service Change Inspection') && inspResult == 'Pass') {
	email('Laurie.Fleming@epelectric.com;Rosa.Nigro@epelectric.com;Yara.Diaz@epelectric.com;Ivonne.Escriche@epelectric.com','accela@elpasotexas.gov',('The ' + inspType +  ' has passed for permit # ' + capIDString), ('The ' + inspType + ' has passed for permit # ' + capIDString));
	}

