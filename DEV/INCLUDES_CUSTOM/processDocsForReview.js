
function processDocsForReview(docCategories,allTasksArray) 
{
	//3/13/2013 - Updated to set the Document REC_STATUS db record value to "A", otherwise there are problems.
	//review each attached document and determine if it should be routed for review

	logDebug("Inside function processDocsForReview().  Params: docCategories: " + docCategories + ", allTasksArray: " + allTasksArray);

	var docsList = new Array();

	docsList = getDocumentList();	//Get all Documents on a Record

	var assignDocList = aa.util.newArrayList();

	for (dl in docsList) 
	{
		logDebug("Looping through docList.  Iterator = " + dl);

		var thisDocument = docsList[dl];

		logDebug("DEBUG: Doc Status | Doc Category: " + thisDocument.getDocStatus() + " | " + thisDocument.getDocCategory() );

		if(thisDocument.getDocCategory() != null && thisDocument.getDocStatus() != null)
		{
		  if (thisDocument.getDocStatus().equals("Uploaded") && exists(thisDocument.getDocCategory().toUpperCase(),docCategories)) 
		  {
		  	assignDocList.add(thisDocument);
		  	logDebug("Adding document to list to be processed.  Doc Status and Category met criteria.");
		  }
		  else
		  {
		  	logDebug("Document either did not have a status of Uploaded, or, document category does not exist in docCategories list ");
		  }
		}
		else
		{
		   logDebug("Document does not have a category");
		}
		
		logDebug("Number of Docs found to assign: " + assignDocList.size() );
	}

	if (assignDocList.size() > 0) 
	{
		logDebug("There is at least one document to review.  Call associateDoc2TaskAndReviewerDept()");

		associateDoc2TaskAndReviewerDept(assignDocList,allTasksArray);
		for (i = 0; i < assignDocList.size(); i++) 
		{
			var documentModel = assignDocList.get(i);
			documentModel.setDocStatus("Routed for Review");
			documentModel.setRecStatus("A");
			documentModel.setSource(getVendor(documentModel.getSource(),documentModel.getSourceName()));
			updateDocResult = aa.document.updateDocument(documentModel);
			if (updateDocResult.getSuccess()) 
				logDebug(documentModel.getDocName() + " status updated to Routed for Review");
			else
				logDebug("Error updating " + documentModel.getDocName() + " to a status status of Routed for Review");
		}
	}
	else 
	{
		logDebug("No documents met the doc status and doc category for review.");
		return false;
	}
}

