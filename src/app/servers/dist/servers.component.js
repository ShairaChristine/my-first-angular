"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServersComponent = void 0;
var core_1 = require("@angular/core");
var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.newServerStatus = false;
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.createServer = function () {
        return this.newServerStatus = true;
    };
    ServersComponent = __decorate([
        core_1.Component({
            selector: 'app-servers',
            templateUrl: './servers.component.html',
            styleUrls: ['./servers.component.css']
        })
    ], ServersComponent);
    return ServersComponent;
}());
exports.ServersComponent = ServersComponent;
