var fs = require('fs')
var path = require('path')
function travel(dir, callback) {
    fs.readdirSync(dir).forEach(function (file) {
        var pathname = path.join(dir, file);

        if (fs.statSync(pathname).isDirectory()) {
            travel(pathname, callback);
        } else {
            callback(dir, file);
        }
    });
}

var i = 400
travel('C:\\Users\\admin\\Downloads', function (dir, file) {
    fs.rename(path.join(dir, file), path.join(dir, i++ + '.jpg'))
});