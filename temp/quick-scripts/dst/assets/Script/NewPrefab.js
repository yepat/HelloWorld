
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/NewPrefab.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4711a++kmdLQJMm3Cvu/qN4', 'NewPrefab');
// Script/NewPrefab.js

"use strict";

var spriteCreator = function () {
  var spriteFrameCache = null;
  return {
    createNewLand: function createNewLand(width) {
      //create new land.
      var newLand = new cc.Node("Land");
      newLand.anchorX = 0;
      newLand.anchorY = 0;
      var sprite = newLand.addComponent(cc.Sprite);
      sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      newLand.color = cc.Color.BLACK;
      newLand.height = 300;
      newLand.width = width; //create red land.

      var redLand = new cc.Node("Red Land");
      redLand.anchorY = 1;
      var redSprite = redLand.addComponent(cc.Sprite);
      redSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      redLand.color = cc.Color.RED;
      redLand.parent = newLand;
      redLand.height = 10;
      redLand.width = 10;
      redLand.setPosition(newLand.width / 2, newLand.height);

      if (spriteFrameCache) {
        sprite.spriteFrame = spriteFrameCache;
        redSprite.spriteFrame = spriteFrameCache;
      } else {
        cc.loader.loadRes("hero/blank", cc.SpriteFrame, function (err, SpriteFrame) {
          sprite.spriteFrame = SpriteFrame;
          redSprite.spriteFrame = SpriteFrame;
          spriteFrameCache = SpriteFrame;
        });
      }

      newLand.center = redLand;
      return newLand;
    },
    createStick: function createStick(width) {
      var stick = new cc.Node("stick");
      stick.anchorY = 0;
      stick.y = 300;
      var sprite = stick.addComponent(cc.Sprite);
      sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      sprite.spriteFrame = spriteFrameCache;
      stick.color = cc.Color.BLACK;
      stick.width = width;
      stick.height = 0;
      return stick;
    }
  };
}();

module.exports = spriteCreator;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxOZXdQcmVmYWIuanMiXSwibmFtZXMiOlsic3ByaXRlQ3JlYXRvciIsInNwcml0ZUZyYW1lQ2FjaGUiLCJjcmVhdGVOZXdMYW5kIiwid2lkdGgiLCJuZXdMYW5kIiwiY2MiLCJOb2RlIiwiYW5jaG9yWCIsImFuY2hvclkiLCJzcHJpdGUiLCJhZGRDb21wb25lbnQiLCJTcHJpdGUiLCJzaXplTW9kZSIsIlNpemVNb2RlIiwiQ1VTVE9NIiwiY29sb3IiLCJDb2xvciIsIkJMQUNLIiwiaGVpZ2h0IiwicmVkTGFuZCIsInJlZFNwcml0ZSIsIlJFRCIsInBhcmVudCIsInNldFBvc2l0aW9uIiwic3ByaXRlRnJhbWUiLCJsb2FkZXIiLCJsb2FkUmVzIiwiU3ByaXRlRnJhbWUiLCJlcnIiLCJjZW50ZXIiLCJjcmVhdGVTdGljayIsInN0aWNrIiwieSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFJLFlBQVc7QUFDNUIsTUFBSUMsZ0JBQWdCLEdBQUcsSUFBdkI7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLGFBQWEsRUFBQyx1QkFBU0MsS0FBVCxFQUFnQjtBQUM5QjtBQUNBLFVBQUlDLE9BQU8sR0FBRyxJQUFJQyxFQUFFLENBQUNDLElBQVAsQ0FBWSxNQUFaLENBQWQ7QUFDQUYsTUFBQUEsT0FBTyxDQUFDRyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FILE1BQUFBLE9BQU8sQ0FBQ0ksT0FBUixHQUFrQixDQUFsQjtBQUNBLFVBQUlDLE1BQU0sR0FBR0wsT0FBTyxDQUFDTSxZQUFSLENBQXFCTCxFQUFFLENBQUNNLE1BQXhCLENBQWI7QUFDQUYsTUFBQUEsTUFBTSxDQUFDRyxRQUFQLEdBQWtCUCxFQUFFLENBQUNNLE1BQUgsQ0FBVUUsUUFBVixDQUFtQkMsTUFBckM7QUFDQVYsTUFBQUEsT0FBTyxDQUFDVyxLQUFSLEdBQWdCVixFQUFFLENBQUNXLEtBQUgsQ0FBU0MsS0FBekI7QUFDQWIsTUFBQUEsT0FBTyxDQUFDYyxNQUFSLEdBQWlCLEdBQWpCO0FBQ0FkLE1BQUFBLE9BQU8sQ0FBQ0QsS0FBUixHQUFnQkEsS0FBaEIsQ0FUOEIsQ0FXOUI7O0FBQ0EsVUFBSWdCLE9BQU8sR0FBRyxJQUFJZCxFQUFFLENBQUNDLElBQVAsQ0FBWSxVQUFaLENBQWQ7QUFDQWEsTUFBQUEsT0FBTyxDQUFDWCxPQUFSLEdBQWtCLENBQWxCO0FBQ0EsVUFBSVksU0FBUyxHQUFHRCxPQUFPLENBQUNULFlBQVIsQ0FBcUJMLEVBQUUsQ0FBQ00sTUFBeEIsQ0FBaEI7QUFDQVMsTUFBQUEsU0FBUyxDQUFDUixRQUFWLEdBQXFCUCxFQUFFLENBQUNNLE1BQUgsQ0FBVUUsUUFBVixDQUFtQkMsTUFBeEM7QUFDQUssTUFBQUEsT0FBTyxDQUFDSixLQUFSLEdBQWdCVixFQUFFLENBQUNXLEtBQUgsQ0FBU0ssR0FBekI7QUFDQUYsTUFBQUEsT0FBTyxDQUFDRyxNQUFSLEdBQWlCbEIsT0FBakI7QUFDQWUsTUFBQUEsT0FBTyxDQUFDRCxNQUFSLEdBQWlCLEVBQWpCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ2hCLEtBQVIsR0FBZ0IsRUFBaEI7QUFDQWdCLE1BQUFBLE9BQU8sQ0FBQ0ksV0FBUixDQUFvQm5CLE9BQU8sQ0FBQ0QsS0FBUixHQUFjLENBQWxDLEVBQW9DQyxPQUFPLENBQUNjLE1BQTVDOztBQUNBLFVBQUdqQixnQkFBSCxFQUFvQjtBQUNoQlEsUUFBQUEsTUFBTSxDQUFDZSxXQUFQLEdBQXFCdkIsZ0JBQXJCO0FBQ0FtQixRQUFBQSxTQUFTLENBQUNJLFdBQVYsR0FBd0J2QixnQkFBeEI7QUFDSCxPQUhELE1BR0s7QUFDREksUUFBQUEsRUFBRSxDQUFDb0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDckIsRUFBRSxDQUFDc0IsV0FBbkMsRUFBZ0QsVUFBQ0MsR0FBRCxFQUFNRCxXQUFOLEVBQXNCO0FBQ2xFbEIsVUFBQUEsTUFBTSxDQUFDZSxXQUFQLEdBQXFCRyxXQUFyQjtBQUNBUCxVQUFBQSxTQUFTLENBQUNJLFdBQVYsR0FBd0JHLFdBQXhCO0FBQ0ExQixVQUFBQSxnQkFBZ0IsR0FBRzBCLFdBQW5CO0FBQ0gsU0FKRDtBQUtIOztBQUNEdkIsTUFBQUEsT0FBTyxDQUFDeUIsTUFBUixHQUFpQlYsT0FBakI7QUFDQSxhQUFPZixPQUFQO0FBQ0gsS0FsQ007QUFtQ1AwQixJQUFBQSxXQUFXLEVBQUcscUJBQVMzQixLQUFULEVBQWU7QUFDekIsVUFBSTRCLEtBQUssR0FBRyxJQUFJMUIsRUFBRSxDQUFDQyxJQUFQLENBQVksT0FBWixDQUFaO0FBQ0F5QixNQUFBQSxLQUFLLENBQUN2QixPQUFOLEdBQWdCLENBQWhCO0FBQ0F1QixNQUFBQSxLQUFLLENBQUNDLENBQU4sR0FBVSxHQUFWO0FBQ0EsVUFBSXZCLE1BQU0sR0FBR3NCLEtBQUssQ0FBQ3JCLFlBQU4sQ0FBbUJMLEVBQUUsQ0FBQ00sTUFBdEIsQ0FBYjtBQUNBRixNQUFBQSxNQUFNLENBQUNHLFFBQVAsR0FBa0JQLEVBQUUsQ0FBQ00sTUFBSCxDQUFVRSxRQUFWLENBQW1CQyxNQUFyQztBQUNBTCxNQUFBQSxNQUFNLENBQUNlLFdBQVAsR0FBcUJ2QixnQkFBckI7QUFDQThCLE1BQUFBLEtBQUssQ0FBQ2hCLEtBQU4sR0FBY1YsRUFBRSxDQUFDVyxLQUFILENBQVNDLEtBQXZCO0FBQ0FjLE1BQUFBLEtBQUssQ0FBQzVCLEtBQU4sR0FBY0EsS0FBZDtBQUNBNEIsTUFBQUEsS0FBSyxDQUFDYixNQUFOLEdBQWUsQ0FBZjtBQUNBLGFBQU9hLEtBQVA7QUFDSDtBQTlDTSxHQUFQO0FBK0NILENBakRtQixFQUFwQjs7QUFrREFFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxDLGFBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3ByaXRlQ3JlYXRvciA9IChmdW5jdGlvbiAoKXtcclxuICAgIHZhciBzcHJpdGVGcmFtZUNhY2hlID0gbnVsbDtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY3JlYXRlTmV3TGFuZDpmdW5jdGlvbih3aWR0aCkge1xyXG4gICAgICAgIC8vY3JlYXRlIG5ldyBsYW5kLlxyXG4gICAgICAgIHZhciBuZXdMYW5kID0gbmV3IGNjLk5vZGUoXCJMYW5kXCIpO1xyXG4gICAgICAgIG5ld0xhbmQuYW5jaG9yWCA9IDA7XHJcbiAgICAgICAgbmV3TGFuZC5hbmNob3JZID0gMDtcclxuICAgICAgICB2YXIgc3ByaXRlID0gbmV3TGFuZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIG5ld0xhbmQuY29sb3IgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICBuZXdMYW5kLmhlaWdodCA9IDMwMDtcclxuICAgICAgICBuZXdMYW5kLndpZHRoID0gd2lkdGg7XHJcblxyXG4gICAgICAgIC8vY3JlYXRlIHJlZCBsYW5kLlxyXG4gICAgICAgIHZhciByZWRMYW5kID0gbmV3IGNjLk5vZGUoXCJSZWQgTGFuZFwiKTtcclxuICAgICAgICByZWRMYW5kLmFuY2hvclkgPSAxO1xyXG4gICAgICAgIHZhciByZWRTcHJpdGUgPSByZWRMYW5kLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgIHJlZFNwcml0ZS5zaXplTW9kZSA9IGNjLlNwcml0ZS5TaXplTW9kZS5DVVNUT007XHJcbiAgICAgICAgcmVkTGFuZC5jb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICByZWRMYW5kLnBhcmVudCA9IG5ld0xhbmQ7XHJcbiAgICAgICAgcmVkTGFuZC5oZWlnaHQgPSAxMDtcclxuICAgICAgICByZWRMYW5kLndpZHRoID0gMTA7XHJcbiAgICAgICAgcmVkTGFuZC5zZXRQb3NpdGlvbihuZXdMYW5kLndpZHRoLzIsbmV3TGFuZC5oZWlnaHQpO1xyXG4gICAgICAgIGlmKHNwcml0ZUZyYW1lQ2FjaGUpe1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZUNhY2hlO1xyXG4gICAgICAgICAgICByZWRTcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZUNhY2hlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImhlcm8vYmxhbmtcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIFNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIHJlZFNwcml0ZS5zcHJpdGVGcmFtZSA9IFNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlRnJhbWVDYWNoZSA9IFNwcml0ZUZyYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3TGFuZC5jZW50ZXIgPSByZWRMYW5kO1xyXG4gICAgICAgIHJldHVybiBuZXdMYW5kO1xyXG4gICAgfSxcclxuICAgIGNyZWF0ZVN0aWNrIDogZnVuY3Rpb24od2lkdGgpe1xyXG4gICAgICAgIHZhciBzdGljayA9IG5ldyBjYy5Ob2RlKFwic3RpY2tcIik7XHJcbiAgICAgICAgc3RpY2suYW5jaG9yWSA9IDA7XHJcbiAgICAgICAgc3RpY2sueSA9IDMwMDtcclxuICAgICAgICB2YXIgc3ByaXRlID0gc3RpY2suYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZUNhY2hlO1xyXG4gICAgICAgIHN0aWNrLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgc3RpY2sud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBzdGljay5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHJldHVybiBzdGljaztcclxuICAgIH19O1xyXG59KSgpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZUNyZWF0b3I7XHJcbiJdfQ==