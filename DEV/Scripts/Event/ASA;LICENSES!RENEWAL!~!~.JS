
logDebug('Running ASA4Renewal');
aa.runScript('APPLICATIONSUBMITAFTER4RENEW');
logDebug('Return from ASA4Renewal: ' + aa.env.getValue('ScriptReturnMessage'));
//  call renewal script;

