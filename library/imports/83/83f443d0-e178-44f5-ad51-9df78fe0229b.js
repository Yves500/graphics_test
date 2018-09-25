"use strict";
cc._RF.push(module, '83f44PQ4XhE9a1RnfeP4CKb', 'test');
// Script/test.ts

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
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        _this.draw = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
        this.draw = this.getComponent(cc.Graphics);
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.touchBegan = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.draw.moveTo(p.x, p.y);
    };
    NewClass.prototype.touchMove = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.draw.lineTo(p.x, p.y);
        this.draw.stroke();
    };
    NewClass.prototype.touchEnded = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var a;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            cc.log("scheduleOnce1");
                            _this.scheduleOnce(function () {
                                cc.log("scheduleOnce");
                                resolve();
                            }, 1);
                        })];
                    case 1:
                        a = _a.sent();
                        cc.log("1111");
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "label", void 0);
    __decorate([
        property
    ], NewClass.prototype, "text", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();