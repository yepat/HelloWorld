"use strict";
cc._RF.push(module, 'ff021V+f4hM/Z+B9FadBKQr', 'CommonDialg');
// Script/CommonDialg.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    titleLabel: {
      "default": null,
      type: cc.Label
    },
    contentLabel: {
      "default": null,
      type: cc.Label
    },
    btn1Node: {
      "default": null,
      type: cc.Node
    },
    btn2Node: {
      "default": null,
      type: cc.Node
    },
    btn1Label: {
      "default": null,
      type: cc.Label
    },
    btn2Label: {
      "default": null,
      type: cc.Label
    }
  },
  // 弹出对话框
  show: function show(title, content, btn1Str, btn1Cb, btn2Str, btn2Cb) {
    this.titleLabel.string = title;
    this.contentLabel.string = content;
    this.btn1Label.string = btn1Str;
    this.btn1Cb = btn1Cb;

    if (btn2Str == "") {
      this.btn1Node.x = 0;
      this.btn2Node.active = false;
    } else {
      this.btn2Label.string = btn2Str;
      this.btn2Cb = btn2Cb;
    }
  },
  btn1Click: function btn1Click() {
    this.btn1Cb();
    this.node.destroy();
  },
  btn2Click: function btn2Click() {
    this.btn2Cb();
    this.node.destroy();
  }
});

cc._RF.pop();