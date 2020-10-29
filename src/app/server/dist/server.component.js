"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ServerComponent = void 0;
var core_1 = require("@angular/core");
var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.isServerStatus = 'offline';
        this.fromMethodValue = 'This is from method';
        this.inputValue = '';
    }
    ServerComponent.prototype.ngOnInit = function () {
    };
    ServerComponent.prototype.fromMethod = function () {
        return this.fromMethodValue;
    };
    ServerComponent.prototype.getFirstName = function (event) {
        console.log(event);
        this.inputValue = event.target.value;
    };
    ServerComponent = __decorate([
        core_1.Component({
            selector: 'app-server',
            templateUrl: './server.component.html',
            styleUrls: ['./server.component.css']
        })
    ], ServerComponent);
    return ServerComponent;
}());
exports.ServerComponent = ServerComponent;
