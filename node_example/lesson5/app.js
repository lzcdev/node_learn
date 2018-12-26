var async = require('async');

var concurrentcount = 0;
var fetchUrl = function (url, callback) {
    var delay = parseInt((Math.random() * 10000000) % 2000, 10);
    concurrentcount++;
    console.log('现在的并发数是', concurrentcount, ',正在抓取的是', url, ',耗时' + delay + '毫秒');
    setTimeout(() => {
        concurrentcount--;
        callback(null, url + ' html content');
    }, delay);
};

var urls = [];
for (var i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i);
}

async.mapLimit(urls, 5, function (url, callback) {
    fetchUrl(url, callback);
}, function (err, result) {
    console.log('final:');
    console.log(result); 
});