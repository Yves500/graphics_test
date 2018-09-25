
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
export default class NewClass extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';


    draw:cc.Graphics = null;
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.draw = this.getComponent(cc.Graphics)
        
        let canvas = cc.find('Canvas')
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);
    }

    start () {

    }

    touchBegan(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.draw.moveTo(p.x, p.y);
    }
    touchMove(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.draw.lineTo(p.x, p.y);
        this.draw.stroke();
    }
    async touchEnded(event: cc.Touch) {
        let a = await new Promise((resolve, reject) => {
                cc.log("scheduleOnce1") 
            this.scheduleOnce(function() {
                cc.log("scheduleOnce") 
                resolve()
            }, 1)
        })
        
        cc.log("1111") 
    }

    // update (dt) {}
}
