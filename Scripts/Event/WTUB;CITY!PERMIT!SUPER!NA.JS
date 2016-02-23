

//start replaced branch: ES_CITY_WFTASKUPDATEBEFORE
{
	if (wfTask == 'Issue' && wfStatus == 'Issue' && balanceDue > 0 && AInfo['DMD Event?'] == 'No') {
		showMessage = true;
		comment('There is a balance due on this record. Balance must be paid before permit can be issued.');
		cancel = true;
	}

}
//end replaced branch: ES_CITY_WFTASKUPDATEBEFORE;
