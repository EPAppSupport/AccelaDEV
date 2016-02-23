

/*
Moves the record to the Issue task when the "No Review Required" status is selected in the Task Assignment task.
Record Type: Building/Siding
Original Author: David Rivera
*/
function BSID_noReviewRequired(capId)
{
	//Constant Variables (in case the number of review tasks increases or decreases).
	//The values are not inclusive.
	var START_REVIEW_TASK = 2;
	var END_REVIEW_TASK = 22;

	//Variables that hold the task object and properties.
	var taskResult = aa.workflow.getTasks(capId);
	var taskObject = taskResult.getOutput();
	var myTask;
	//General use variables.
	var dispositionDate = aa.date.getCurrentDate();
	var systemUserObj = aa.person.getUser("ADMIN").getOutput()

	for( START_REVIEW_TASK ; START_REVIEW_TASK<=END_REVIEW_TASK; START_REVIEW_TASK++)
	{
		myTask = taskObject[START_REVIEW_TASK];
		var taskDescription = myTask.getTaskDescription();
		var stepNumber = myTask.getStepNumber();
		var processID = myTask.getProcessID();
		
		//Completing and deactivating task.
		//N = Not Active | Y = Completed
		aa.workflow.adjustTask(capId,stepNumber,processID,"N","Y",null,null);
		
		//Updating current task status.
		aa.workflow.handleDisposition(capId,stepNumber,processID,"",null,"","Done by batch script",null,"Y");
	}
	
	//Completeness Check task object.
	var compCheckTaskResult = aa.workflow.getTask(capId, "Completeness Check");
	var compCheckTaskObj = compCheckTaskResult.getOutput();
	var compCheckStepnumber = compCheckTaskObj.getStepNumber();
	var compCheckProcessID = compCheckTaskObj.getProcessID();
	  
    //Completing and deactivating Completeness Check task.
	aa.workflow.adjustTask(capId,compCheckStepnumber,compCheckProcessID,"N","Y",null,null);
	
	//Updating Completeness Check task.
	aa.workflow.handleDisposition(capId,compCheckStepnumber,compCheckProcessID,"Ready to Issue",dispositionDate,"","Ready to Issue by batch script",systemUserObj,"Y");
	 
}
