class Role extends egret.Sprite
{
    
    public armature:dragonBones.Armature;
    public name:string;
    private _scale:number;
    
    public constructor(name:string = "man1", scale:number = 1)
    {
        super();
        this.name = name;
        this._scale = scale;
        console.log("name armature",name)
        var skeletonData = RES.getRes(name + "_json");
        var textureData = RES.getRes(name + "_texture_json");
        var texture = RES.getRes(name + "_texture_png");
        
        console.log(skeletonData);
        console.log(textureData);
        console.log(texture);
        
        var factory:dragonBones.EgretFactory = new dragonBones.EgretFactory();
        factory.addSkeletonData(dragonBones.DataParser.parseDragonBonesData(skeletonData));
        factory.addTextureAtlas(new dragonBones.EgretTextureAtlas(texture, textureData));
        
        this.armature = factory.buildArmature(name);
        var armatureDisplay = this.armature.display;
        armatureDisplay.scaleX = this._scale;
        armatureDisplay.scaleY = this._scale;
        dragonBones.WorldClock.clock.add(this.armature);
        this.addChild(armatureDisplay);
    }
    
    public play(name:string):void
    {
         this.armature.animation.gotoAndPlay(name,0,-1,1);
    }
    public gotoAndStop(name:string, pos:number):void
    {
         this.armature.animation.gotoAndStop(name,pos);
    }
    
    public get totleTime():number
    {
        return this.armature.animation.lastAnimationState.totalTime;
    }
    public remove():void
    {
        dragonBones.WorldClock.clock.remove(this.armature);
    }
    
}