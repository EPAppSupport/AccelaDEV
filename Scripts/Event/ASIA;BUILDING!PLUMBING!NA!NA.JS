

//replaced branch(ES_BLDGPLUMB_ADDFEES)
ES_BLDGPLUMB_ADDFEES();

//start replaced branch: COEP_BLDG_PLUM_ADDASIT
{
	addRowArray1 = new Array;
	addRowArray1['Fixture Type'] = '';
	addRowArray1['Quantity'] = '';
	addRowArray1['Notes'] = '';
	if (PLUMBINGFIXTURES.length < 1) {
		addToASITable('PLUMBING FIXTURES', addRowArray1);
	}

}
//end replaced branch: COEP_BLDG_PLUM_ADDASIT;
