var wfs = require("webdav-fs")("http://127.0.0.1:8000", null, null);

wfs.readdir("/level1/", function(err, c){
    if(err){ console.error(err); }
    else{ console.log(c); }
}, 'node');
