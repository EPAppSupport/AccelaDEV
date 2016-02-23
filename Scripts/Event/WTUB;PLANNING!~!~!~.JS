	
if (wfTask == 'Task Assignment' && matches(wfStatus, 'Assign Electronic Review')) {
	docsList = new Array;
	docsList = getDocumentList();
	docCategoryArray = new Array();
	docCategoryList = lookup(docTypesStdChoice, 'ALL PLN');
	docCategoryArray = docCategoryList.split(',');
	requiredDocFound = false;
	for (doc in docsList)
		if (!requiredDocFound && docsList[doc].getDocStatus().equals('Uploaded') && exists(docsList[doc].getDocCategory().toUpperCase(), docCategoryArray))
			requiredDocFound = true;
	if (!requiredDocFound)
		cancel = true;
	if (!requiredDocFound)
		showMessage = true;
	if (!requiredDocFound)
		comment("No documents found that meet the criteria for Electronic Plan Review.  Make sure the document category is applicable for Plan Review, and that the document status is 'Uploaded'.");
}
