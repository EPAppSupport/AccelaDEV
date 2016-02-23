
if(AInfo['Term of License'] == '1 Year') updateFee('FL030R','RENEWALLICSECALM','STANDARD',0,'Y','N');
if(AInfo['Term of License'] == '1 Year') updateFee('FL021R','RENEWALLICSECALM','STANDARD',1,'Y','N');
if(AInfo['Term of License'] == '3 Year') updateFee('FL021R','RENEWALLICSECALM','STANDARD',0,'Y','N');
if(AInfo['Term of License'] == '3 Year') updateFee('FL030R','RENEWALLICSECALM','STANDARD',1,'Y','N');
if (publicUser) {
	updateFee('CCACA','RENEWALLICSECALM','STANDARD',1,'Y','N');
	}

