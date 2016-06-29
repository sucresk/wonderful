var Hand = (function (_super) {
    __extends(Hand, _super);
    function Hand(hand0, hand1) {
        if (hand0 === void 0) { hand0 = "shou1_png"; }
        if (hand1 === void 0) { hand1 = "shou2_png"; }
        _super.call(this);
        this._time = 0;
        this._curTime = 0;
        this._hand0 = this.createBitmapByName(hand0);
        this._hand1 = this.createBitmapByName(hand1);
        this.addChild(this._hand0);
        this.addChild(this._hand1);
    }
    var d = __define,c=Hand,p=c.prototype;
    p.play = function () {
        this._played = true;
    };
    p.stop = function () {
        this._played = false;
    };
    p.tick = function () {
        if (this._played) {
            this._curTime++;
            if (this._curTime > 5) {
                this._curTime = 0;
            }
            else {
                return;
            }
            if (this._time == 0) {
                this._hand0.visible = true;
                this._hand1.visible = false;
                this._time = 1;
            }
            else {
                this._hand0.visible = false;
                this._hand1.visible = true;
                this._time = 0;
            }
        }
    };
    d(p, "isPlay"
        ,function () {
            return this._played;
        }
    );
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        //result.anchorOffsetX = result.width / 2;
        //result.anchorOffsetY = result.height / 2;
        return result;
    };
    return Hand;
}(egret.Sprite));
egret.registerClass(Hand,'Hand');
//# sourceMappingURL=Hand.js.map