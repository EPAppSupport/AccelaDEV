

//start replaced branch: ES_CITY_WFTASKUPDATEAFTER
{
	if (wfTask == 'Fire Review' && wfStatus == 'Approved') {
		comment('im at line 01 of  ES_CITY_WFTASKUPDATEAFTER');

		//start replaced branch: ES_CITY_FEES
		{
			if (AInfo['Training Required?'] == 'Yes') {
				addFee('FP001', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Will temporary structures (tents, canopies, etc) be erected?'] == 'Yes') {
				addFee('FL059', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Open Burning?'] == 'Yes') {
				addFee('FL049', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Will the event feature or use compressed gas?'] == 'Yes') {
				addFee('FL032', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Will the event feature or utilize pyrotechnics?'] == 'Yes') {
				addFee('FL035', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Will the event feature or utilize fireworks?'] == 'Yes') {
				addFee('FL035', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Fire Guard/Watch Required?'] == 'Yes') {
				addFee('FW001', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['For Use Permit Required?'] == 'Yes') {
				addFee('FL038', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

			if (AInfo['Do you need Parking Meters within the event to bagged?'] == 'Yes') {
				addFee('FL038', 'CITYSUPER', 'STANDARD', 1, 'Y');
			}

		}
		//end replaced branch: ES_CITY_FEES;
	}

	if (wfTask == 'Issue' && wfStatus == 'Issue') {

		//start replaced branch: ES_CITY_ScheduleInspection
		{
			nextInspDate = dateAdd(null, 1);
			if (AInfo['Building, Ele, Plm and Mech Review and Inspection Required'] == 'Yes') {
				scheduleInspectDate('Building Event Inspection', nextInspDate, 'ROTHRE';
				}

				//start replaced branch: ES_CITY_FDInspection
				{
					nextInspDate = dateAdd(null, 1);
					FDInsp = 'false';
					if (AInfo['Fire Guard/Watch Required?'] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['For Use Permit Submittals Required  '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Training Required? '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Open Burning?'] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['If Training is Yes, then the following will be required:  '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will temporary fences or barriers be erected?  '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will temporary structures (tents, canopies, etc) be erected?  '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will the event feature or use compressed gas? '] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Type of Flame?'] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will the event feature or utilize fireworks?'] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will the event feature or utilize pyrotechnics?'] == 'Yes') {
						FDInsp = 'true';
					}

					if (AInfo['Will Restaurants, Bars or Nightclubs with in the event area participate?'] == 'Yes') {
						FDInsp = 'true';
					}

					comment('FDInsp is : ' + FDInsp);
					if (FDInsp == 'true') {
						scheduleInspectDate('City Event FD Inspection', nextInspDate, 'ARRIOLAOA');
					}

				}
				//end replaced branch: ES_CITY_FDInspection;

			}
			//end replaced branch: ES_CITY_ScheduleInspection;
		}

		if (AInfo['Traffic Control End Date'] != '') {
			comment('this is trafic control End Date:  ' + AInfo['Traffic Control End Date']);
		}

		if (wfTask == 'Issue' && wfStatus == 'Issue') {
			editAppSpecific('Expiration Date', dateAdd(AInfo['Traffic Control End Date'], 1));
			comment(dateAdd(AInfo['Traffic Control End Date'], 1));
		}

		if (wfTask == 'Building Review' && wfStatus == 'Approved' && AInfo['Building, Ele, Plm and Mech Review and Inspection Required'] == 'Yes') {
			addFee('FB038', 'CITYSUPER', 'STANDARD', 1, 'Y');
		}

		//start replaced branch: ES_CITY_NOTIFICATIONS
		{
			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Fire Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Fire Review is Active', ' Please review task Fire Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Parks Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Parks Review is Active', ' Please review task Parks Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('EPDot Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task EPDot Review is Active', ' Please review task EPDot Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Police Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Police Review is Active', ' Please review task Police Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('ESD Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task ESD Review is Active', ' Please review task ESD Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('International Bridges Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task International Bridges Review is Active', ' Please review task International Bridges Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Sun Metro')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Sun Metro is Active', ' Please review task Sun Metro of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('CVB')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task CVB is Active', ' Please review task CVB of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('TxDot')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task TxDot is Active', ' Please review task TxDot of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('ADA Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task ADA Review is Active', ' Please review task ADA Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Finance Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Finance Review is Active', ' Please review task Finance Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Animal Services Review')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Animal Services Review is Active', ' Please review task Animal Services Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('Information Technology Review')) {
				email('martineza@elpasotexas.gov;escobedoga@elpasotexas.gov;	munozvj@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task Information Technology Review is Active', ' Please review task Information Technology Review of Record Number ' + capIDString);
			}

			if (wfTask == 'Task Assignment' && wfStatus == 'Completed' && isTaskActive('International Bridges')) {
				email('martineza@elpasotexas.gov', 'accela@elpasotexas.gov', 'Task International Bridges is Active', ' Please review task International Bridgesof Record Number ' + capIDString);
			}

		}
		//end replaced branch: ES_CITY_NOTIFICATIONS;

	}
	//end replaced branch: ES_CITY_WFTASKUPDATEAFTER;
