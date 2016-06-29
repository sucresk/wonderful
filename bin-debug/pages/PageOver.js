var PageOver = (function (_super) {
    __extends(PageOver, _super);
    function PageOver() {
        _super.call(this);
        this._txtScore = new egret.TextField();
        this._txtMaxScore = new egret.TextField();
        this._txtHit = new egret.TextField();
        this._txtMaxHit = new egret.TextField();
        this._labelHit = new egret.TextField();
        this._labelScore = new egret.TextField();
        this._labelHistory = new egret.TextField();
        this._txtScore.size = 50;
        this._txtHit.size = 50;
        this._txtMaxHit.size = 50;
        this._txtMaxScore.size = 50;
        //this._labelHistory.size = 40;
    }
    var d = __define,c=PageOver,p=c.prototype;
    p.init = function () {
        _super.prototype.init.call(this);
        this._bg = this.createBitmapByName("bg_jpg");
        this.addChild(this._bg);
        this.x = this.stage.stageWidth / 2;
        this.y = this.stage.stageHeight / 2;
        this._title = this.createBitmapByName("over_png");
        this.addChild(this._title);
        this._labelScore.text = "本次共掰弯：";
        this._labelScore.x = -180;
        this.addChild(this._labelScore);
        this._txtScore.text = ScoreManager.curScore.toString();
        //this._txtScore.text = "10"
        this._txtScore.x = -150;
        this._txtScore.y = 60;
        this.addChild(this._txtScore);
        this._scoreIcon = this.createBitmapByName("score_png");
        this._scoreIcon.x = -50;
        this._scoreIcon.y = 80;
        this.addChild(this._scoreIcon);
        this._labelHit.text = "本次点击数：";
        this._labelHit.x = 0;
        this.addChild(this._labelHit);
        this._hitIcon = this.createBitmapByName("shou2_png");
        this._hitIcon.scaleX = this._hitIcon.scaleY = 0.3;
        this._hitIcon.x = 120;
        this._hitIcon.y = 80;
        this.addChild(this._hitIcon);
        this._txtHit.text = ScoreManager.curHit.toString();
        this._txtHit.x = 20;
        this._txtHit.y = 60;
        this.addChild(this._txtHit);
        this._labelHistory.text = "最好成绩";
        this._labelHistory.y = 160;
        this._labelHistory.x = -70;
        this.addChild(this._labelHistory);
        this._txtMaxScore.text = ScoreManager.maxScore.toString();
        this._txtMaxScore.y = 220;
        this._txtMaxScore.x = -150;
        this.addChild(this._txtMaxScore);
        this._maxScoreIcon = this.createBitmapByName("score_png");
        this._maxScoreIcon.x = -50;
        this._maxScoreIcon.y = 240;
        this.addChild(this._maxScoreIcon);
        this._txtMaxHit.text = ScoreManager.maxHit.toString();
        this._txtMaxHit.x = 20;
        this._txtMaxHit.y = 220;
        this.addChild(this._txtMaxHit);
        this._maxHitIcon = this.createBitmapByName("shou2_png");
        this._maxHitIcon.scaleX = this._maxHitIcon.scaleY = 0.3;
        this._maxHitIcon.x = 120;
        this._maxHitIcon.y = 245;
        this.addChild(this._maxHitIcon);
        this._btn = this.createBitmapByName("btn_start1_png");
        this._btn.y = -300;
        this._btn.touchEnabled = true;
        this._btn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEnd, this);
        this.addChild(this._btn);
    };
    p.tick = function (advancedTime) {
    };
    p.dispose = function () {
        this.removeChildren();
        this._btn.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchEnd, this);
        //this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin,this);
    };
    p.onTouchEnd = function (e) {
        this.over();
    };
    p.over = function () {
        this.dispose();
        this.next("pageInfo");
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return PageOver;
}(State));
egret.registerClass(PageOver,'PageOver');
//# sourceMappingURL=PageOver.js.map