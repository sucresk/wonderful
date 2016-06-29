class Hand extends egret.Sprite
{
    private _hand0:egret.Bitmap;
    private _hand1:egret.Bitmap;
    private _played:boolean;
    private _time:number = 0;
    private _curTime:number = 0;

    public constructor(hand0:string = "shou1_png", hand1:string = "shou2_png")
    {
        super();
        this._hand0 = this.createBitmapByName(hand0);
        this._hand1 = this.createBitmapByName(hand1);

        this.addChild(this._hand0);
        this.addChild(this._hand1);
    }
    
    public play():void
    {
         this._played = true;
    }

    public stop():void
    {
        this._played = false;
    }
    public tick():void
    {
        if(this._played)
        {
            this._curTime++;
            if(this._curTime > 5)
            {
                this._curTime =0 ;
            }
            else
            {
                return ;
            }
            if(this._time == 0)
            {
                this._hand0.visible = true;
                this._hand1.visible = false;

                this._time = 1;
            }
            else
            {
                this._hand0.visible = false;
                this._hand1.visible = true;

                this._time = 0;
            }
        }
    }

    public get isPlay():boolean
    {
        return this._played;
    }
    private createBitmapByName(name:string):egret.Bitmap {
        var result:egret.Bitmap = new egret.Bitmap();
        var texture:egret.Texture = RES.getRes(name);
        result.texture = texture;
        
        //result.anchorOffsetX = result.width / 2;
        //result.anchorOffsetY = result.height / 2;
        
        return result;
    }
    
}