// 请将 fs.readFile(path[, options], callback) 手动函数 Thunk 化
var fs = require('fs');
// 普通调用方式：
function someCallback(err, data) { 
    if (err) throw err;
    console.log(data); 
}
fs.readFile('../text1','utf8', someCallback);

// Thunk方式：
function someCallback(err, data) { 
    if (err) throw err;
    console.log(data); 
}
var Thunk = function (fileName, options){
    return function (callback){
        return fs.readFile(fileName, options, callback); 
    };
};

var readFileThunk = Thunk('../text1', 'utf8');
readFileThunk(someCallback);