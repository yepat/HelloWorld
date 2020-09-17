
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/spriteCreator.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49624PfUNxIn4PbioE+QWiM', 'spriteCreator');
// Script/spriteCreator.js

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
      cc.log(">>>createStick");
      var stick = new cc.Node("stick");
      stick.anchorY = 0;
      stick.y = 300;
      var sprite = stick.addComponent(cc.Sprite);
      sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM; // sprite.spriteFrame = spriteFrameCache;

      if (spriteFrameCache) {
        sprite.spriteFrame = spriteFrameCache;
      } else {
        cc.loader.loadRes("hero/blank", cc.SpriteFrame, function (err, SpriteFrame) {
          sprite.spriteFrame = SpriteFrame;
          spriteFrameCache = SpriteFrame;
        });
      }

      stick.color = cc.Color.BLACK;
      stick.width = width; //width

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzcHJpdGVDcmVhdG9yLmpzIl0sIm5hbWVzIjpbInNwcml0ZUNyZWF0b3IiLCJzcHJpdGVGcmFtZUNhY2hlIiwiY3JlYXRlTmV3TGFuZCIsIndpZHRoIiwibmV3TGFuZCIsImNjIiwiTm9kZSIsImFuY2hvclgiLCJhbmNob3JZIiwic3ByaXRlIiwiYWRkQ29tcG9uZW50IiwiU3ByaXRlIiwic2l6ZU1vZGUiLCJTaXplTW9kZSIsIkNVU1RPTSIsImNvbG9yIiwiQ29sb3IiLCJCTEFDSyIsImhlaWdodCIsInJlZExhbmQiLCJyZWRTcHJpdGUiLCJSRUQiLCJwYXJlbnQiLCJzZXRQb3NpdGlvbiIsInNwcml0ZUZyYW1lIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwiY2VudGVyIiwiY3JlYXRlU3RpY2siLCJsb2ciLCJzdGljayIsInkiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBSSxZQUFXO0FBQzVCLE1BQUlDLGdCQUFnQixHQUFHLElBQXZCO0FBQ0EsU0FBTztBQUNIQyxJQUFBQSxhQUFhLEVBQUMsdUJBQVNDLEtBQVQsRUFBZ0I7QUFDOUI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsSUFBSUMsRUFBRSxDQUFDQyxJQUFQLENBQVksTUFBWixDQUFkO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQ0csT0FBUixHQUFrQixDQUFsQjtBQUNBSCxNQUFBQSxPQUFPLENBQUNJLE9BQVIsR0FBa0IsQ0FBbEI7QUFDQSxVQUFJQyxNQUFNLEdBQUdMLE9BQU8sQ0FBQ00sWUFBUixDQUFxQkwsRUFBRSxDQUFDTSxNQUF4QixDQUFiO0FBQ0FGLE1BQUFBLE1BQU0sQ0FBQ0csUUFBUCxHQUFrQlAsRUFBRSxDQUFDTSxNQUFILENBQVVFLFFBQVYsQ0FBbUJDLE1BQXJDO0FBQ0FWLE1BQUFBLE9BQU8sQ0FBQ1csS0FBUixHQUFnQlYsRUFBRSxDQUFDVyxL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QUNBZSxNQUFBQSxLQUFLLENBQUM3QixLQUFOLEdBQWNBLEtBQWQsQ0FyQnlCLENBcUJKOztBQUNyQjZCLE1BQUFBLEtBQUssQ0FBQ2QsTUFBTixHQUFlLENBQWY7QUFDQSxhQUFPYyxLQUFQO0FBQ0g7QUEzRE0sR0FBUDtBQTRESCxDQTlEbUIsRUFBcEI7O0FBK0RBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQyxhQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHNwcml0ZUNyZWF0b3IgPSAoZnVuY3Rpb24gKCl7XHJcbiAgICB2YXIgc3ByaXRlRnJhbWVDYWNoZSA9IG51bGw7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNyZWF0ZU5ld0xhbmQ6ZnVuY3Rpb24od2lkdGgpIHtcclxuICAgICAgICAvL2NyZWF0ZSBuZXcgbGFuZC5cclxuICAgICAgICB2YXIgbmV3TGFuZCA9IG5ldyBjYy5Ob2RlKFwiTGFuZFwiKTtcclxuICAgICAgICBuZXdMYW5kLmFuY2hvclggPSAwO1xyXG4gICAgICAgIG5ld0xhbmQuYW5jaG9yWSA9IDA7XHJcbiAgICAgICAgdmFyIHNwcml0ZSA9IG5ld0xhbmQuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XHJcbiAgICAgICAgc3ByaXRlLnNpemVNb2RlID0gY2MuU3ByaXRlLlNpemVNb2RlLkNVU1RPTTtcclxuICAgICAgICBuZXdMYW5kLmNvbG9yID0gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgbmV3TGFuZC5oZWlnaHQgPSAzMDA7XHJcbiAgICAgICAgbmV3TGFuZC53aWR0aCA9IHdpZHRoO1xyXG5cclxuICAgICAgICAvL2NyZWF0ZSByZWQgbGFuZC5cclxuICAgICAgICB2YXIgcmVkTGFuZCA9IG5ldyBjYy5Ob2RlKFwiUmVkIExhbmRcIik7XHJcbiAgICAgICAgcmVkTGFuZC5hbmNob3JZID0gMTtcclxuICAgICAgICB2YXIgcmVkU3ByaXRlID0gcmVkTGFuZC5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICByZWRTcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIHJlZExhbmQuY29sb3IgPSBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgcmVkTGFuZC5wYXJlbnQgPSBuZXdMYW5kO1xyXG4gICAgICAgIHJlZExhbmQuaGVpZ2h0ID0gMTA7XHJcbiAgICAgICAgcmVkTGFuZC53aWR0aCA9IDEwO1xyXG4gICAgICAgIHJlZExhbmQuc2V0UG9zaXRpb24obmV3TGFuZC53aWR0aC8yLG5ld0xhbmQuaGVpZ2h0KTtcclxuICAgICAgICBpZihzcHJpdGVGcmFtZUNhY2hlKXtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVDYWNoZTtcclxuICAgICAgICAgICAgcmVkU3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWVDYWNoZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJoZXJvL2JsYW5rXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBTcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gU3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICByZWRTcHJpdGUuc3ByaXRlRnJhbWUgPSBTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lQ2FjaGUgPSBTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5ld0xhbmQuY2VudGVyID0gcmVkTGFuZDtcclxuICAgICAgICByZXR1cm4gbmV3TGFuZDtcclxuICAgIH0sXHJcbiAgICBjcmVhdGVTdGljayA6IGZ1bmN0aW9uKHdpZHRoKXtcclxuXHJcbiAgICAgICAgY2MubG9nKFwiPj4+Y3JlYXRlU3RpY2tcIilcclxuXHJcbiAgICAgICAgdmFyIHN0aWNrID0gbmV3IGNjLk5vZGUoXCJzdGlja1wiKTtcclxuICAgICAgICBzdGljay5hbmNob3JZID0gMDtcclxuICAgICAgICBzdGljay55ID0gMzAwO1xyXG4gICAgICAgIHZhciBzcHJpdGUgPSBzdGljay5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICBzcHJpdGUuc2l6ZU1vZGUgPSBjYy5TcHJpdGUuU2l6ZU1vZGUuQ1VTVE9NO1xyXG4gICAgICAgIC8vIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lQ2FjaGU7XHJcblxyXG4gICAgICAgIGlmKHNwcml0ZUZyYW1lQ2FjaGUpe1xyXG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZUNhY2hlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImhlcm8vYmxhbmtcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIFNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIHNwcml0ZUZyYW1lQ2FjaGUgPSBTcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGljay5jb2xvciA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIHN0aWNrLndpZHRoID0gd2lkdGg7IC8vd2lkdGhcclxuICAgICAgICBzdGljay5oZWlnaHQgPSAwO1xyXG4gICAgICAgIHJldHVybiBzdGljaztcclxuICAgIH19O1xyXG59KSgpO1xyXG5tb2R1bGUuZXhwb3J0cyA9IHNwcml0ZUNyZWF0b3I7XHJcbiJdfQ==