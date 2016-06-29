var PageInfo = (function (_super) {
    __extends(PageInfo, _super);
    function PageInfo() {
        _super.call(this);
    }
    var d = __define,c=PageInfo,p=c.prototype;
    p.init = function () {
        _super.prototype.init.call(this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
        this._bg = this.createBitmapByName("bg_jpg");
        this.addChild(this._bg);
        this._bg.x = this.stage.stageWidth / 2;
        this._bg.y = this.stage.stageHeight / 2;
        this._title = this.createBitmapByName("titleCover_png");
        this._title.x = this.stage.stageWidth / 2 + 10;
        this._title.y = this.stage.stageHeight / 2 + 10;
        this.addChild(this._title);
        this._btn1 = this.createBitmapByName("btn_start1_png");
        this._btn1.x = this.stage.stageWidth / 2 + 10;
        this._btn1.y = this.stage.stageHeight / 2 + 410;
        this.addChild(this._btn1);
        this._btn = this.createBitmapByName("btn_start_png");
        this._btn.x = this.stage.stageWidth / 2 + 10;
        this._btn.y = this.stage.stageHeight / 2 + 410;
        this.addChild(this._btn);
        this._btn1.visible = false;
        var manIndex = Math.floor(Math.random() * RoleManager.ROLES.length);
        var manName = RoleManager.ROLES[manIndex];
        this._man = this.createBitmapByName(manName + "_png");
        this._man.x = this.stage.stageWidth / 2;
        this._man.y = this.stage.stageHeight / 2 + 100;
        this.addChild(this._man);
        this._logo = this.createBitmapByName("logo_png");
        this._logo.x = this.stage.stageWidth / 2 + 150;
        this._logo.y = this.stage.stageHeight / 2 - 350;
        this.addChild(this._logo);
        this._txtArtist = new egret.TextField();
        this._txtArtist.text = "美术：梁栋";
        this._txtArtist.x = this.stage.stageWidth / 2 - 250;
        this._txtArtist.y = this.stage.stageHeight / 2 + 100;
        this.addChild(this._txtArtist);
        this._txtProgramer = new egret.TextField();
        this._txtProgramer.text = "程序：苏魁";
        this._txtProgramer.x = this.stage.stageWidth / 2 + 90;
        this._txtProgramer.y = this.stage.stageHeight / 2 + 100;
        this.addChild(this._txtProgramer);
    };
    p.tick = function (advancedTime) {
    };
    p.dispose = function () {
        this.removeChildren();
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
        this.stage.removeEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnd, this);
    };
    p.onTouchBegin = function (e) {
        this._btn1.visible = true;
        this._btn.visible = false;
    };
    p.onTouchEnd = function (e) {
        this.over();
    };
    p.over = function () {
        this.dispose();
        this.next("pageGame");
    };
    p.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        result.anchorOffsetX = result.width / 2;
        result.anchorOffsetY = result.height / 2;
        return result;
    };
    return PageInfo;
}(State));
egret.registerClass(PageInfo,'PageInfo');
//# sourceMappingURL=PageInfo.js.map