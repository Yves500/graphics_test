const {ccclass, property} = cc._decorator;

@ccclass
export class drawGroup extends cc.Component {


    group: any = null;
    path: any = null;

    points: Array<cc.Vec2> = [];
    paths: Array<any> = []

    onLoad () {
        let group = this.getComponent('R.group');
        if (!group) {
            group = this.addComponent('R.group');
            group.strokeColor = cc.hexToColor('#0000FF');
            group.lineWidth = 5;
            group.lineWidth = 5;
        }
        group.fillColor = 'none';
        this.group = group

        let canvas = cc.find('Canvas')
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END,this.touchEnded,this);
    }
    touchBegan(event: cc.Touch){
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.points = [p];
        this.path = this.group.addPath();
        this.paths.push(this.path);
        this.path.points(this.points);
    }
    touchMove(event: cc.Touch) {
        let p = this.node.convertToNodeSpace(event.getLocation());
        this.points.push(p);
        this.path.points(this.points)
    }
    touchEnded(event: cc.Touch) {
        this.path.points(this.points)
        this.path.simplify()
    }

    clear(){
        this.group.children = [];
        this.group.refresh();
    }

    removePath(){

    }
    
    touchEvent(){
        this.group.children.shift();
        this.group.refresh();
    }
    


    // update (dt) {}
}
