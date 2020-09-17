
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/storageManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzdG9yYWdlTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJzdG9yYWdlTWFuYWdlciIsInNwcml0ZUZyYW1lQ2FjaGUiLCJjYyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImhpZ2hlc3RTY29yZSIsImdldEhpZ2hlc3RTY29yZSIsInNldEhpZ2hlc3RTY29yZSIsInNjb3JlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxjQUFjLEdBQUksWUFBVztBQUM3QixNQUFJQyxnQkFBZ0IsR0FBRyxJQUF2Qjs7QUFDQSxNQUFHLENBQUNDLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxZQUF4QixFQUNBO0FBQ0lILElBQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxZQUFwQixHQUFtQyxDQUFuQztBQUNIOztBQUNELFNBQU87QUFDSEMsSUFBQUEsZUFBZSxFQUFDLDJCQUFVO0FBQ3RCLGFBQU9KLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxZQUEzQjtBQUNILEtBSEU7QUFJSEUsSUFBQUEsZUFBZSxFQUFDLHlCQUFTQyxLQUFULEVBQWU7QUFDM0JOLE1BQUFBLEVBQUUsQ0FBQ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxZQUFwQixHQUFtQ0csS0FBbkM7QUFDSDtBQU5FLEdBQVA7QUFRSCxDQWRvQixFQUFyQjs7QUFlQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCVixjQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHN0b3JhZ2VNYW5hZ2VyID0gKGZ1bmN0aW9uICgpe1xyXG4gICAgdmFyIHNwcml0ZUZyYW1lQ2FjaGUgPSBudWxsO1xyXG4gICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuaGlnaGVzdFNjb3JlKVxyXG4gICAge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuaGlnaGVzdFNjb3JlID0gMDtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZ2V0SGlnaGVzdFNjb3JlOmZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHJldHVybiBjYy5zeXMubG9jYWxTdG9yYWdlLmhpZ2hlc3RTY29yZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNldEhpZ2hlc3RTY29yZTpmdW5jdGlvbihzY29yZSl7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UuaGlnaGVzdFNjb3JlID0gc2NvcmU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufSkoKTtcclxubW9kdWxlLmV4cG9ydHMgPSBzdG9yYWdlTWFuYWdlcjsiXX0=