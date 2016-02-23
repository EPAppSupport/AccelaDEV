
//Always call with param "E" for El Paso
function autoRouteReviews(reviewType,initial, reviewStdChoice) {
	//reviewType is "E" for El Paso, no "P" at this time
	// E - Electronic
	// P - Physical
	//initial will be a Y/N, Y if the first time through the review process, because we only want to create the Doc Review Tasks one time.
	
	logDebug("Inside autoRouteReviews().  Params: " + reviewType + ", " + initial + ", " + reviewStdChoice);

	reviewListArray = new Array();
	
	//5/22/2013 - We need a way to differentiate the Plan Review List from the Building Review list because they will share this function.  Update: New Param.  ALL BLDG or ALL PLN
	reviewList = lookup(requiredReviewsStdChoice, reviewStdChoice);	//requiredReviewsStdChoice ... Get Reviews Required by Record Type from Standard Choice
	reviewListArray = reviewList.split(",")

	logDebug("About to call function setReviewWorkflowTasksByTsiFields(reviewListArray)");
	
	setReviewWorkflowTasksByTsiFields(reviewListArray);	//Activate Review Task and set Due Date from TSI.

	// If an electronic review and this is the first pass of Plan Review, create the document review tasks
	if (reviewType == "E" && initial == "Y") 
	{
		logDebug("reviewType is E and initial is Y, get doc category list from standard choice");
		docCategoryArray = new Array();
		
		//07/09/2013 - We need a way to differentiate the Plan Review List from the Building Review list because they will share this function.  Update: New Param.  ALL BLDG or ALL PLN
		docCategoryList = lookup(docTypesStdChoice,reviewStdChoice);	//Retrieves a list of Document Categories that are allowed to have Plan Review.
		if(docCategoryList == undefined)
		{
		  logDebug("ERROR: " + docTypesStdChoice + " standard choice has no values.  Values are required for the Plan Check process to work.");
		}
		else
		{
			docCategoryArray = docCategoryList.split(",");
			logDebug("docCategoryArray (list of Categories that can be processed by Plan Review): " + docCategoryArray + ".  Call processDocsForReview()");

			processDocsForReview(docCategoryArray,reviewListArray);
		}
	}
}


