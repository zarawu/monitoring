'use strict';

exports.responseTime = function () {
    return function (req, res, next) {
        req._startTime = new Date(); // 获取时间 t1

        var calResponseTime = function () {
        var now = new Date(); //获取时间 t2
        var deltaTime = now - req._startTime;
                console.log(req.url + ':' + deltaTime);
        }

        res.once('finish', calResponseTime);
        res.once('close', calResponseTime);
        return next();
   }

}
