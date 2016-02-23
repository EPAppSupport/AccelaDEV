function ProcessPendingEMSETasks(URL, SecurityToken, CAP)
{
	// There is a syntactic ambiguity in JavaScript that will cause that to fail. Failure can be avoided by wrapping the string in parens, so that it will be interpreted as an expression rather than a block.
	var WFTasks = eval('(' + ExecWebService(URL, 'http://www.projectdox.com/', 'GetEMSEEntries', 'CAP=' + CAP + '|' + 'RemoveEntries=true' + '|' + 'SecurityToken='+ SecurityToken) + ')');
	var ParamList='', ParamValue, OperationValue;
	var ParamCount=10;
	
	for(var i=0; i<WFTasks.Entries.Entry.length; i++)
	{
		if(WFTasks.Entries.Entry[i].Operation.length > 0) // only process if we have an operation to do on it
		{
			aa.print(WFTasks.Entries.Entry[i].CAP);
			aa.print(WFTasks.Entries.Entry[i].Operation);
			
			// we must override the variables in the master script so that we can explicitly set which user is updating	IF the user is specified	
			if(WFTasks.Entries.Entry[i].AccelaUserID.length > 0)
			{
				currentUserID = WFTasks.Entries.Entry[i].AccelaUserID; 		// Current User
				systemUserObj = aa.person.getUser(currentUserID).getOutput();  	// Current User Object
				
				aa.print('User has been changed: ' + currentUserID);
			}
			
			// build param list dynamically depending on what has been passed
			for(var j=1; j<=ParamCount; j++)
			{
				ParamValue='WFTasks.Entries.Entry[' + i + '].Param' + j;				
				
				if(eval(ParamValue + '.length') > 0)
				{
					if(ParamList.length > 0)
						ParamList+=',';
					
					ParamList+="'" + eval(ParamValue) + "'";
				}
			}
			
			// execute the operation with the list of params sent in
			OperationValue=WFTasks.Entries.Entry[i].Operation + '(' + ParamList + ')';

			aa.print('Operation to execute: ' + OperationValue);
						
			eval(OperationValue);
		}
	}
}
