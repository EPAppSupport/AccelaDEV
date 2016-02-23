function setReviewWorkflowTasksByTsiFields(allTasksArray) {
	// Activate any review tasks where TSI Review field is "Yes", and set the Task Due Date from TSI Review Date field.
	// This assumes all review tasks are parallel, and that the Workflow Task name is synonymous with the TSI field names.  i.e. Task Name = Building Review, 
	//		TSI Review = Building Review, TSI Review Date = Building Review Date
	// Assumes TSI "Review Date" field has been set (by expression)
	
	// 05/23/2013 - If there are no Review Due Date TSI fields.  An error occurred that killed the WTUA script.  Server log showed it was an invalid date error.  Make sure date is valid before 
	//					trying to set the Workflow Task Due Date.

	logDebug("Inside function setReviewWorkflowTasksByTsiFields.  Params: " + allTasksArray);

	for (ata in allTasksArray) {
		var taskRequired = false;
		var thisTask = allTasksArray[ata];  //For each Review in list (all Review names are in List)

		logDebug("thisTask = " + thisTask + " and AInfo[thisTask] = " + AInfo[thisTask]);

		//If the Review TSI is set to Yes, set Required to True
		if(AInfo[thisTask] == "Yes") {
			taskRequired = true;
			logDebug("taskRequired was set to true");
		}

		if (taskRequired) 
		{
			logDebug("task is required so set Task Due Date");
			tDueDate = AInfo[thisTask + " Due Date"];
			
			if (convertDate(tDueDate) != null)
			{
				editTaskDueDate(thisTask, tDueDate);	//Set the Task Due Date from the TSI Review Date field
			}
			else
				logDebug("Invalid Date.  WF Task Due Date will not be set.");
		}

		if (!taskRequired) 
		{
			logDebug("task not required so deactivate");
			deactivateTask(thisTask);
		}		
	} 
}
