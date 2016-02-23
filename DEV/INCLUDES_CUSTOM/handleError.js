// function to handleError
function handleError(err,context) 
{
 logDebug("ERROR: " + err.message + " In " + context + " Line " + err.lineNumber);
 logDebug("Stack: " + err.stack);
}

