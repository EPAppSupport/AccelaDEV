
// TODO: review branching based on document group (instead of record type)

if (documentModelArray.get(0).getDocGroup() == 'PLANNING') {
	aa.debug('DUA', 'Doc Group was PLANNING');
	capIDs = documentModelArray.get(0).getCapID();
	sca = String(capIDs).split('-');
	capId = aa.cap.getCapID(sca[0],sca[1],sca[2]).getOutput();
	capIDString = capId.getCustomID();
	logDebug('branch to DUA:Planning/*/*/*');
	// replaced  branch('DUA:Planning/*/*/*');
	include("DUA:Planning/*/*/*")
	}

if (documentModelArray.get(0).getDocGroup() == 'BUILDING') {
	aa.debug('DUA', 'Doc Group was BUILDING');
	capIDs = documentModelArray.get(0).getCapID();
	sca = String(capIDs).split('-');
	capId = aa.cap.getCapID(sca[0],sca[1],sca[2]).getOutput();
	capIDString = capId.getCustomID();
	logDebug('branch to DUA:Building/*/*/*');
	// replaced branch('DUA:Building/*/*/*');
	include('DUA:Building/*/*/*');
	}
