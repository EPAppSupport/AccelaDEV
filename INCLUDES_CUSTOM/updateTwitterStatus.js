// ------ Custom function for El Paso Twitter posting --------
// Sample of Post request
function updateTwitterStatus()
{
   var client = aa.oAuthClient;
   var oauthProviderCode = 'TWITTER';
   var url = 'https://api.twitter.com/1/statuses/update.tpsdjb';
   var params = client.initPostParameters();
   params.put('status', 'This is a message sent from V360!');
   var scriptResult = client.post(oauthProviderCode, url, params);
   if (scriptResult.getSuccess())
   {
      aa.print("Success: " + scriptResult.getOutput());
   }
   else
   {
      aa.print("Failure: " + scriptResult.getErrorMessage());
   }
}

