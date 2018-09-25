(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/drawGroup.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e7ab7WhFLJFaoZLNIEFGDc4', 'drawGroup', __filename);
// Script/drawGroup.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var drawGroup = /** @class */ (function (_super) {
    __extends(drawGroup, _super);
    function drawGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.group = null;
        _this.path = null;
        _this.points = [];
        _this.paths = [];
        return _this;
        // update (dt) {}
    }
    drawGroup.prototype.onLoad = function () {
        var group = this.getComponent('R.group');
        if (!group) {
            group = this.addComponent('R.group');
            group.strokeColor = cc.hexToColor('#0000FF');
            group.lineWidth = 5;
            group.lineWidth = 5;
        }
        group.fillColor = 'none';
        this.group = group;
        var canvas = cc.find('Canvas');
        canvas.on(cc.Node.EventType.TOUCH_START, this.touchBegan, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.touchEnded, this);
    };
    drawGroup.prototype.touchBegan = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.points = [p];
        this.path = this.group.addPath();
        this.paths.push(this.path);
        this.path.points(this.points);
    };
    drawGroup.prototype.touchMove = function (event) {
        var p = this.node.convertToNodeSpace(event.getLocation());
        this.points.push(p);
        this.path.points(this.points);
    };
    drawGroup.prototype.touchEnded = function (event) {
        this.path.points(this.points);
        this.path.simplify();
    };
    drawGroup.prototype.clear = function () {
        this.group.children = [];
        this.group.refresh();
    };
    drawGroup.prototype.removePath = function () {
    };
    drawGroup.prototype.touchEvent = function () {
        this.group.children.shift();
        this.group.refresh();
    };
    drawGroup = __decorate([
        ccclass
    ], drawGroup);
    return drawGroup;
}(cc.Component));
exports.drawGroup = drawGroup;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=drawGroup.js.map
        