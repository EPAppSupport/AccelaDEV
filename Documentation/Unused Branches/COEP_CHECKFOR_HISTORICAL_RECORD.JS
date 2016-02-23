
var sibCapID = childGetByCapType('Planning/Historic Preservation/Historical Admin Review/*', null);
var gisHistorical = getGISInfo('Accela_map','Zoning','HISTLABEL');
if ((appMatch('Building/*/*/*') || appMatch('Planning/Zoning/PWSF Communications/NA') || appMatch('Planning/Zoning/Sign Permit/NA')) && (!appMatch('Building/Plumbing/*/*') && !appMatch('Building/Electrical/*/*')) && wfTask == 'Application Submittal' && wfStatus == 'Completed' && gisHistorical == 'H' && sibCapID != null) {
	comment('sibCapID is : ' + sibCapID);
	}

if ((appMatch('Building/*/*/*') || appMatch('Planning/Zoning/PWSF Communications/NA') || appMatch('Planning/Zoning/Sign Permit/NA')) && (!appMatch('Building/Plumbing/*/*') && !appMatch('Building/Electrical/*/*')) && wfTask == 'Application Submittal' && wfStatus == 'Completed' && gisHistorical == 'H' && sibCapID == null) {
	showMessage=true;
	comment('Cannot Submit Application because there is no Historical child record Created ');
	cancel=true;
	}

if ((appMatch('Building/*/*/*') || appMatch('Planning/Zoning/PWSF Communications/NA') || appMatch('Planning/Zoning/Sign Permit/NA')) && (!appMatch('Building/Plumbing/*/*') && !appMatch('Building/Electrical/*/*')) && wfTask == 'Application Submittal' && wfStatus == 'Completed' && gisHistorical == 'H' && sibCapID != null) {
	sibCapObj = aa.cap.getCap(sibCapID).getOutput();
	sibCapStatus = sibCapObj.getCapStatus();
	}

if ((appMatch('Building/*/*/*') || appMatch('Planning/Zoning/PWSF Communications/NA') || appMatch('Planning/Zoning/Sign Permit/NA')) && (!appMatch('Building/Plumbing/*/*') && !appMatch('Building/Electrical/*/*')) && wfTask == 'Application Submittal' && wfStatus == 'Completed' && gisHistorical == 'H' && sibCapID != null  && (sibCapStatus != 'In Compliance' || sibCapStatus != 'Closed')) {
	showMessage=true;
	comment('Cannot Issue because child record workflow is Not completed. Historical Status is : ' + sibCapStatus);
	cancel=true;
	}

