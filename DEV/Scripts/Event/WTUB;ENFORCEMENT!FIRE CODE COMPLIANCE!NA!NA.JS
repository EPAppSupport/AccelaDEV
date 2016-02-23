
if (wfTask == 'Close' && wfStatus == 'Closed' && (AInfo['Fire Permits Current?'] == null || AInfo['Complaint Type'] == null || AInfo['Handled By'] == null || AInfo['Building Vacant?'] == null)) {
	showMessage=true;
	comment('GENERAL Portlet needs to be filled.');
	cancel=true;
	}

