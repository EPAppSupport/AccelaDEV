
val emailSubject = 'You have been assigned a Record for Review : ';
var emailBody = 'The record number is ';
var emailBody2 = ' You are requested to retrieve and process the request .';
if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed') {
	var wfDateVal = ('' + wfDue.getMonth() + '/' + wfDue.getDayOfMonth() + '/' + wfDue.getYear());
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('BPI Review')) {
	email('KaniaDJ@elpasotexas.gov;
	EstalaJO@elpasotexas.gov;
	nelighmp@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for BPI Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('Planned Land Dev Plat Review')) {
	email('dallokf@elpasotexas.gov;
	moyanx@elpasotexas.gov;
	sanchezeh@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for Planned Land Dev Plat Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('Engineering Traffic Review')) {
	email('bustillosAX@elpasotexas.gov;
	spencerMD2@elpasotexas.gov;
	padillamx@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for Engineering Traffic Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('Parks Review')) {
	email('DeLaRosaJA@elpasotexas.gov;
	binkleyMT@elpasotexas.gov;
	garciaRG@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for Parks Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('Fire Review')) {
	email('floresLU@elpasotexas.gov;
	rodelaE@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for Fire Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('ESD Review')) {
	email('rodriguez-hefnerE@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for ESD Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('Sun Metro Review')) {
	email('segovialb@elpasotexas.gov;
	garciaCK@elpasotexas.gov;
	bryantAM@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for Sun Metro Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('HLC Review')) {
	email('DeLaCruzJA@elpasotexas.gov;
	velazquezpx@elpasotexas.gov','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for HLC Review. DCC comments are due on' + wfDateVal + ' .'));
	}

if (appMatch('Planning/Zoning/Detailed Site Plan/NA') && wfTask == 'Email Notification' && wfStatus == 'Emailed' && isTaskActive('EPWU Review')) {
	email('abatista@epwu.org;
	cdominguez@epwu.org;
	flopez@epwu.org;
	garizpe@epwu.org;
	jmhaller@epwu.org;
	rvaldez@epwu.org;
	vgalindo@epwu.org','accela@elpasotexas.gov',(emailSubject + capIDString ), ('Record ' + capIDString + ' is ready for EPWU Review. DCC comments are due on' + wfDateVal + ' .'));
	}

