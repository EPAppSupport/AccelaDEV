
if (wfTask == 'Issue' && wfStatus == 'About to Expire') {
	lic = new licenseObject(capIDString);
	lic.setStatus('About to Expire');
}
