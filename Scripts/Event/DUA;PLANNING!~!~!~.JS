
if (getDocOperation(documentModelArray) == 'CHECK_IN') {
	documentModelArray.get(0).setRecStatus('A');
	documentModelArray.get(0).setSource(getVendor(documentModelArray.get(0).getSource(),documentModelArray.get(0).getSourceName()));
	documentModelArray.get(0).setDocStatus('Markup Complete');
	aa.document.updateDocument(documentModelArray.get(0));
	}


//replaced branch(ES_NEWDOCUMENT_CASE_NOTIFICATION)
ES_NEWDOCUMENT_CASE_NOTIFICATION();

