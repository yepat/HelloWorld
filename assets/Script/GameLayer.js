
var spriteCreator = require("spriteCreator");
var ConfirmDialogPrefab = require("CommonDialg");
var StorageManager = require("storageManager");


var self = null;

cc.Class({
    extends: cc.Component,

    properties: {
        landRange:cc.v2(20,300),
        landWidth:cc.v2(20,200),
        hero:cc.Node,
        firstLand:cc.Node,
        secondLand:cc.Node,
        canvas:cc.Node,  
        moveDuration:0.5,
        stickSpeed:400,
        heroMoveSpeed:400,
        stickWidth:6,
        isTouchStart:false,
        score:cc.Label,
        highScore:cc.Label,
        perfectTips:cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.log("onLoad ()");

        self = this;
        this.runLength = 0;
        this.currentLandRange = 0;
        this.heroWorldPosX = 0;
        this.heroMoveX = 0; 
        this.scoreNum = 0;
        this.winSize = cc.director.getWinSize();


        this.highScoreNum = StorageManager.getHighestScore();
        this.highScore.string = "最高得分:"+this.highScoreNum;
        this.exitDialog = false;

        // this.perfectTips.node.active = true;

        //注册触摸监听事件
        this.registerEvent();
        //创建一个新的陆地
        this.createNewLand();
        var curRange = this.getLandRange();
        this.secondLand.setPosition(curRange,0);

        //角色位置
        this.heroWorldPosX = this.firstLand.width - (1-this.hero.anchorX) * this.hero.width - this.stickWidth;
        this.hero.x = this.heroWorldPosX

        //棍子位置
        this.stick = this.createStick();
        this.stick.x = this.hero.x + this.hero.width * (1-this.hero.anchorX) + this.stick.width * this.stick.anchorX;
    },

    start () {
        cc.log("start ()");
    },
    registerEvent(){
        //触摸事件
        this.canvas.on(cc.Node.EventType.TOUCH_START, this.touchStart.bind(this), this.node);
        this.canvas.on(cc.Node.EventType.TOUCH_END,this.touchEnd.bind(this), this.node);
        this.canvas.on(cc.Node.EventType.TOUCH_CANCEL,this.touchCancel.bind(this), this.node);

        //键盘事件
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        console.log("on");
    },
    unregisterEvent(){
        this.canvas.targetOff(this.node);

        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
        console.log("off");
    },
    touchStart(event){
        // fsm.stickLengthen();
        cc.log("touchStart");
        this.isTouchStart = true; 
        return false;
    },
    touchEnd(event){
        // fsm.heroTick();
        cc.log("touchEnd");
        this.isTouchStart = false;
        this.StickFall();
    },
    touchCancel(){
        // this.touchEnd();
        cc.log("touchCancel");
        this.isTouchStart = false
    },
    onKeyDown(){
        cc.log("keyDown:"+event.keyCode);
        switch(event.keyCode) {
            case cc.KEY.backspace:
                var callFuncYes = function(){
                    cc.director.end();
                };
                var callFuncNo = function(){
                    // cc.director.loadScene('gameScene');
                    self.exitDialog = false;
                };
                if(!self.exitDialog){
                    self.exitDialog = true;
                    self.showDialog("通知","是否退出游戏!","是",callFuncYes,"",callFuncNo);
                }
                break;
        }
    },
    onKeyUp(){
        cc.log("keyUp");
        switch(event.keyCode) {
            case cc.KEY.backspace:
                break;
        }
    },
    createNewLand() {
        cc.log(">>>createNewLand")
        this.secondLand = spriteCreator.createNewLand(this.getLandWidth());
        this.secondLand.parent = this.node;
    },
    getLandRange(){
        var winSize = cc.director.getWinSize();
        this.currentLandRange = 50+(winSize.width - this.secondLand.width)*Math.random();
        if(winSize.width < this.currentLandRange + this.secondLand.width){
            this.currentLandRange = winSize.width - this.secondLand.width - 50;
        }
        return this.currentLandRange;
    },
    getLandWidth(){
        var landWidth = this.landWidth.x + (this.landWidth.y - this.landWidth.x)* Math.random();
        if(landWidth<30){
            landWidth = 30;
        }
        return landWidth;
    },
    createStick(){
        cc.log("createStick");
        var stick = spriteCreator.createStick(this.stickWidth);
        stick.parent = this.node;
        return stick;
    },
    update (dt) {
        if(this.isTouchStart)
        {
            // cc.log(">>>>>>>> dt");
            this.stick.height += dt*this.stickSpeed;
        }
    },
    //英雄移动
    HeroMoved(){
        cc.log(">>>>HeroMoved")

        this.heroMoveX = this.stick.height
        var time = this.heroMoveX/this.heroMoveSpeed;
        var heroMove = cc.moveBy(time,cc.v2(this.heroMoveX,0));

        var callFunc = cc.callFunc(function(){
            cc.log("成功失败判定");
            self.isSuccess();
        });
        var se =cc.sequence(heroMove,callFunc);
        this.hero.runAction(se);
    },
    //棍子掉落
    StickFall(){
        this.unregisterEvent();
        var stickFall = cc.rotateBy(0.5, 90);
        stickFall.easing(cc.easeIn(3));
        var callFunc = cc.callFunc(function(){
            cc.log("hero move");
            self.HeroMoved();
        });
        var se =cc.sequence(stickFall,callFunc);
        this.stick.runAction(se);

        this.stickHeight = this.stick.height;
    },
    //成功失败判定
    isSuccess(){
        var minLength = this.secondLand.x - this.firstLand.x - this.firstLand.width+2;
        var maxLength = this.secondLand.x - this.firstLand.x + this.secondLand.width - this.firstLand.width+5;

        cc.log(">>>minLength:"+minLength+">>>maxLength:"+maxLength+" height:"+this.stickHeight);

        if(this.stickHeight > minLength && this.stickHeight < maxLength)
        {
            cc.log(">>>Success")
            //完美距离判定
            var middleLength = maxLength - this.secondLand.width/2;
            if(this.stickHeight > (middleLength - 6) && this.stickHeight < (middleLength + 3)){
                this.scoreNum = this.scoreNum + 2;
                this.score.string = "得分:"+this.scoreNum;

                this.perfectTips.node.active = true;
                var callFunc = cc.callFunc(function(){
                    self.perfectTips.node.active = false;
                });
                var seq =cc.sequence(cc.delayTime(1.0),callFunc);
                this.perfectTips.node.runAction(seq);
            }else{
                this.scoreNum = this.scoreNum + 1;
                this.score.string = "得分:"+this.scoreNum;
            }

            this.Next();
        }else{
            cc.log(">>>failed")
            this.GameOver();
        }
    },
    Next(){
        var winSize = cc.director.getWinSize();
        cc.log("currentLandRange:"+this.currentLandRange)
        var length = this.currentLandRange + this.secondLand.width - 30;
        this.runLength +=length;
        var action = cc.moveBy(this.moveDuration,cc.v2(-length,0));
        this.node.runAction(action);

        this.firstLand = this.secondLand;

        this.createNewLand();

        this.stick.height = 0;
        var stickFall = cc.rotateBy(0.1, -90);
        this.stick.runAction(stickFall);

        //landRange
        var range = this.getLandRange();

        var callFunc = cc.callFunc(function(){
            self.hero.x = self.runLength+10;
            self.stick.x = self.hero.x + self.hero.width * (1-self.hero.anchorX) + self.stick.width * self.stick.anchorX;
            self.registerEvent();
        });

        //secondland;
        this.secondLand.setPosition(this.runLength+winSize.width,0);
        var l = winSize.width - range;
        var secondAction = cc.moveBy(this.moveDuration,cc.v2(-l,0));
        var seq =cc.sequence(secondAction,callFunc);
        this.secondLand.runAction(seq);
    },
    GameOver(){

        if(this.highScoreNum < this.scoreNum){
            this.highScoreNum = this.scoreNum;
            StorageManager.setHighestScore(this.highScoreNum);
            this.highScore.string = "最高得分:"+this.highScoreNum;
        }

        var stickFall = cc.rotateBy(0.5, 90);
        stickFall.easing(cc.easeIn(3));
        this.stick.runAction(stickFall);
        var action = cc.moveBy(0.5,cc.v2(0,-350));
        action.easing(cc.easeIn(3));
        this.hero.runAction(action);

        var reStarGame = function(){
            cc.director.loadScene('gameScene');
        };
        var exitGame = function(){
                    cc.director.end();
                };
        this.showDialog("通知","游戏失败!","再来一次",reStarGame,"",exitGame);
    },
    // 弹出一个确认框
    showDialog(title, content, btn1Str, btn1Cb, btn2Str, btn2Cb){
        cc.log("showDialog ");
        // 加载 Prefab
        cc.loader.loadRes("CommonDialg", function (err, prefab) {
            if (err) {
                cc.log(err);
                return;
            }
            var newNode = cc.instantiate(prefab);
            cc.director.getScene().addChild(newNode);
            newNode.getComponent(ConfirmDialogPrefab).show(title, content, btn1Str, btn1Cb, btn2Str, btn2Cb);
        });
    },
});




