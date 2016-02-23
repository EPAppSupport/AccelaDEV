function ES_AMO_ASSIGN_SUPERVISOR() {

	if (AInfo['Rep Districts'] == 1 || AInfo['Rep Districts'] == 8) {
		assignTask('Completeness Check', 'HERNANDEZDB');
	}

	if (AInfo['Rep Districts'] == 2 || AInfo['Rep Districts'] == 4) {
		assignTask('Completeness Check', 'RAMIREZVM');
	}

	if (AInfo['Rep Districts'] == 3 || AInfo['Rep Districts'] == 7) {
		assignTask('Completeness Check', 'MANUEL.A.MORALES');
	}

	if (AInfo['Rep Districts'] == 5 || AInfo['Rep Districts'] == 6) {
		assignTask('Completeness Check', 'CASTANEDACV1');
	}

}
