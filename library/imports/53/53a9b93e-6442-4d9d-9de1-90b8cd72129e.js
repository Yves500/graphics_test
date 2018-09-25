"use strict";
cc._RF.push(module, '53a9bk+ZEJNnZ3hkLjNchKe', 'rope');
// Script/rope.ts

// Learn TypeScript:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var rope = /** @class */ (function (_super) {
    __extends(rope, _super);
    function rope() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pointNum = 25;
        _this.spacing = 20;
        _this.path = null;
        _this.points = [];
        _this.testId = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    rope.prototype.onLoad = function () {
        this.path = this.getComponent('R.path');
        this.path.fillColor = 'none';
        for (var i = 0; i < this.pointNum; i++) {
            this.points.push(cc.v2((i - this.pointNum / 2) * this.spacing, 0));
        }
        this.path.points(this.points);
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);
    };
    rope.prototype.start = function () {
    };
    rope.prototype.judgePoints = function (pos) {
        this.points[0] = pos;
        for (var i = 0; i < this.points.length - 1; i++) {
            var segment = this.points[i];
            var nextSegment = this.points[i + 1];
            var vector = segment.sub(nextSegment);
            vector.normalizeSelf();
            vector.mulSelf(this.spacing);
            this.points[i + 1] = segment.sub(vector);
        }
        this.path.points(this.points);
    };
    rope.prototype.touchBegan = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.judgePoints(p);
    };
    rope.prototype.touchMove = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        cc.log(p.x, p.y);
        this.judgePoints(p);
    };
    rope.prototype.touchEnded = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.judgePoints(p);
    };
    rope.prototype.touchEvent = function () {
        // async function aa() {
        //     let handle = await BBAudio.playSound('audio/UI/1')
        //     cc.log("touchEvent", handle)
        // }
        // aa()
        this.testId = BBAudio.playSound('audio/UI/1', true);
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
    };
    rope.prototype.touchEvent1 = function () {
        cc.log('=======touchEvent1' + this.testId);
        BBAudio.stopSound(this.testId);
    };
    __decorate([
        property(Number)
    ], rope.prototype, "pointNum", void 0);
    __decorate([
        property(Number)
    ], rope.prototype, "spacing", void 0);
    rope = __decorate([
        ccclass
    ], rope);
    return rope;
}(cc.Component));
exports.rope = rope;

cc._RF.pop();