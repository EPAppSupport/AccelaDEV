
if ((inspType == '2900 Final Inspection' || inspType == '2910 Foundation' || inspType == '2905 Pre-Inspection (Sign Shop)'  || inspType == '2920 Site Investigation') && inspResult == 'Fail w/Refee') {
	addFee('FB082', 'PLNSIGNP', 'STANDARD', 1, 'N');
	}

