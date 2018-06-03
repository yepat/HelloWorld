cc.Class({
    extends: cc.Component,

    properties: {
        titleLabel:{
            default: null,
            type: cc.Label
        },
        contentLabel:{
            default: null,
            type: cc.Label
        },
        btn1Node:{
            default: null,
            type: cc.Node
        },
        btn2Node:{
            default: null,
            type: cc.Node
        },
        btn1Label:{
            default: null,
            type: cc.Label
        },
        btn2Label:{
            default: null,
            type: cc.Label
        },
       
    },
    // 弹出对话框
    show: function (title, content, btn1Str, btn1Cb, btn2Str, btn2Cb) {
        this.titleLabel.string = title;
        this.contentLabel.string = content;
        this.btn1Label.string = btn1Str;
        this.btn1Cb = btn1Cb;
        if(btn2Str == "") {
            this.btn1Node.x = 0;
            this.btn2Node.active = false;
        }else{
            this.btn2Label.string = btn2Str;
            this.btn2Cb = btn2Cb;
        }
    },
    btn1Click:function() {
        this.btn1Cb();
        this.node.destroy();
    },
    btn2Click:function() {
        this.btn2Cb();
        this.node.destroy();
    },

});
