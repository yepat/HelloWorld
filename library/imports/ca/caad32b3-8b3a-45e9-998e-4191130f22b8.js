"use strict";
cc._RF.push(module, 'caad3KzizpF6ZmOQZETDyK4', 'storageManager');
// Script/storageManager.js

"use strict";

var storageManager = function () {
    var spriteFrameCache = null;
    if (!cc.sys.localStorage.highestScore) {
        cc.sys.localStorage.highestScore = 0;
    }
    return {
        getHighestScore: function getHighestScore() {
            return cc.sys.localStorage.highestScore;
        },
        setHighestScore: function setHighestScore(score) {
            cc.sys.localStorage.highestScore = score;
        }
    };
}();
module.exports = storageManager;

cc._RF.pop();