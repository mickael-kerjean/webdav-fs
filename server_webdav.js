var jsDAV = require("jsDAV");
//jsDAV.debugMode = true;

jsDAV.createServer({
    node: __dirname + "/data"
}, 8000);
