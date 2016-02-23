function edrHandleCheckIn() {

	if (getDocOperation(documentModelArray) == 'CHECK_IN') {
		documentModelArray.get(0).setRecStatus('A');
		documentModelArray.get(0).setSource(getVendor(documentModelArray.get(0).getSource(), documentModelArray.get(0).getSourceName()));
		documentModelArray.get(0).setDocStatus('Markup Complete');
		aa.document.updateDocument(documentModelArray.get(0));
	}

}
