"use strict";
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