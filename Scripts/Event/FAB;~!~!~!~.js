
comment('estValue = ' + estValue);
comment('calcValue = ' + calcValue);
comment(calcValue + estValue);
estValue = calcValue;
comment('estValue = ' + estValue);
comment('calcValue = ' + calcValue);
estValue = estValue;
if (appMatch('Licenses/*/*/*') && !appMatch('Licenses/Sexually Oriented Business/NA/NA') && !appMatch('Licenses/Sexually Oriented Business Emp/NA/NA') && isTaskActive('Application Submittal')) {
	showMessage = true;
	message = 'You cannot add fees yet!  <BR> <BR> Go to Workflow to have fees automatically added.';
	cancel = true;
	}

