
// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export class rope extends cc.Component {

    @property(Number)
    pointNum: number = 25;
    @property(Number)
    spacing: number = 20;


    path:any = null;

    points: Array<cc.Vec2> = [];


    testId: number = null;

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.path = this.getComponent('R.path');
        this.path.fillColor = 'none';


        for (let i = 0; i < this.pointNum; i++) {
            this.points.push(cc.v2((i - this.pointNum/2)*this.spacing,0));
        }
        this.path.points(this.points);

        let canvas = cc.find('Canvas')
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);

    }

    start () {
    }

    judgePoints(pos:cc.Vec2){
        this.points[0] = pos;
        for (let i = 0; i < this.points.length-1; i++) {
            let segment = this.points[i];
            let nextSegment = this.points[i+1];
            let vector = segment.sub(nextSegment);
            vector.normalizeSelf();
            vector.mulSelf(this.spacing);
            this.points[i + 1] = segment.sub(vector);
        }
        this.path.points(this.points)
    }

    touchBegan(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.judgePoints(p);
    }
    touchMove(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        cc.log(p.x,p.y);
        this.judgePoints(p);
    }
    touchEnded(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.judgePoints(p);
    }

    touchEvent(){
        // async function aa() {
        //     let handle = await BBAudio.playSound('audio/UI/1')
        //     cc.log("touchEvent", handle)
        // }
        // aa()

        this.testId = BBAudio.playSound('audio/UI/1',true)

        // this.scheduleOnce(function(){
        //     cc.log("touchEvent", handle)
        // },1)
        // cc.loader.loadRes('audio/UI/1', cc.AudioClip, function (err, clip) {
        //     cc.audioEngine.play(clip);
        // });

        // function pathformat() {
        //     return new Promise((resolve, reject) => {
        //         cc.loader.loadRes('audio/UI/1', <any>cc.AudioClip, function (err, clip) {
        //             resolve(clip)
        //         });
        //     })
        // }
        // let result = await pathformat();
        // cc.audioEngine.play(<any>result,true,1);
    }

    touchEvent1() {
        cc.log('=======touchEvent1'+this.testId)
        BBAudio.stopSound(this.testId);

    }
    // update (dt) {}
}
