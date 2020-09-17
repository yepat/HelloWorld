
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/CommonDialg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxDb21tb25EaWFsZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInRpdGxlTGFiZWwiLCJ0eXBlIiwiTGFiZWwiLCJjb250ZW50TGFiZWwiLCJidG4xTm9kZSIsIk5vZGUiLCJidG4yTm9kZSIsImJ0bjFMYWJlbCIsImJ0bjJMYWJlbCIsInNob3ciLCJ0aXRsZSIsImNvbnRlbnQiLCJidG4xU3RyIiwiYnRuMUNiIiwiYnRuMlN0ciIsImJ0bjJDYiIsInN0cmluZyIsIngiLCJhY3RpdmUiLCJidG4xQ2xpY2siLCJub2RlIiwiZGVzdHJveSIsImJ0bjJDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBQztBQUNQLGlCQUFTLElBREY7QUFFUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkYsS0FESDtBQUtSQyxJQUFBQSxZQUFZLEVBQUM7QUFDVCxpQkFBUyxJQURBO0FBRVRGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZBLEtBTEw7QUFTUkUsSUFBQUEsUUFBUSxFQUFDO0FBQ0wsaUJBQVMsSUFESjtBQUVMSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1M7QUFGSixLQVREO0FBYVJDLElBQUFBLFFBQVEsRUFBQztBQUNMLGlCQUFTLElBREo7QUFFTEwsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNTO0FBRkosS0FiRDtBQWlCUkUsSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsSUFESDtBQUVOTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSCxLQWpCRjtBQXFCUk0sSUFBQUEsU0FBUyxFQUFDO0FBQ04saUJBQVMsSUFESDtBQUVOUCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGSDtBQXJCRixHQUhQO0FBOEJMO0FBQ0FPLEVBQUFBLElBQUksRUFBRSxjQUFVQyxLQUFWLEVBQWlCQyxPQUFqQixFQUEwQkMsT0FBMUIsRUFBbUNDLE1BQW5DLEVBQTJDQyxPQUEzQyxFQUFvREMsTUFBcEQsRUFBNEQ7QUFDOUQsU0FBS2YsVUFBTCxDQUFnQmdCLE1BQWhCLEdBQXlCTixLQUF6QjtBQUNBLFNBQUtQLFlBQUwsQ0FBa0JhLE1BQWxCLEdBQTJCTCxPQUEzQjtBQUNBLFNBQUtKLFNBQUwsQ0FBZVMsTUFBZixHQUF3QkosT0FBeEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7O0FBQ0EsUUFBR0MsT0FBTyxJQUFJLEVBQWQsRUFBa0I7QUFDZCxXQUFLVixRQUFMLENBQWNhLENBQWQsR0FBa0IsQ0FBbEI7QUFDQSxXQUFLWCxRQUFMLENBQWNZLE1BQWQsR0FBdUIsS0FBdkI7QUFDSCxLQUhELE1BR0s7QUFDRCxXQUFLVixTQUFMLENBQWVRLE1BQWYsR0FBd0JGLE9BQXhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0g7QUFDSixHQTNDSTtBQTRDTEksRUFBQUEsU0FBUyxFQUFDLHFCQUFXO0FBQ2pCLFNBQUtOLE1BQUw7QUFDQSxTQUFLTyxJQUFMLENBQVVDLE9BQVY7QUFDSCxHQS9DSTtBQWdETEMsRUFBQUEsU0FBUyxFQUFDLHFCQUFXO0FBQ2pCLFNBQUtQLE1BQUw7QUFDQSxTQUFLSyxJQUFMLENBQVVDLE9BQVY7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRpdGxlTGFiZWw6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudExhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJ0bjFOb2RlOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnRuMk5vZGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBidG4xTGFiZWw6e1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYnRuMkxhYmVsOntcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcclxuICAgICAgICB9LFxyXG4gICAgICAgXHJcbiAgICB9LFxyXG4gICAgLy8g5by55Ye65a+56K+d5qGGXHJcbiAgICBzaG93OiBmdW5jdGlvbiAodGl0bGUsIGNvbnRlbnQsIGJ0bjFTdHIsIGJ0bjFDYiwgYnRuMlN0ciwgYnRuMkNiKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZUxhYmVsLnN0cmluZyA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuY29udGVudExhYmVsLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5idG4xTGFiZWwuc3RyaW5nID0gYnRuMVN0cjtcclxuICAgICAgICB0aGlzLmJ0bjFDYiA9IGJ0bjFDYjtcclxuICAgICAgICBpZihidG4yU3RyID09IFwiXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5idG4xTm9kZS54ID0gMDtcclxuICAgICAgICAgICAgdGhpcy5idG4yTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5idG4yTGFiZWwuc3RyaW5nID0gYnRuMlN0cjtcclxuICAgICAgICAgICAgdGhpcy5idG4yQ2IgPSBidG4yQ2I7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ0bjFDbGljazpmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJ0bjFDYigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XHJcbiAgICB9LFxyXG4gICAgYnRuMkNsaWNrOmZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYnRuMkNiKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19