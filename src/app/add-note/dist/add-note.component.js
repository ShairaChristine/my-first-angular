"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddNoteComponent = void 0;
var core_1 = require("@angular/core");
var AddNoteComponent = /** @class */ (function () {
    function AddNoteComponent() {
        this.note = '';
        this.isAddNoteClick = false;
        this.storedNotes = ['Don\'t forget to smile today', 'Dinner with friends @ 8pm'];
    }
    AddNoteComponent.prototype.ngOnInit = function () {
    };
    AddNoteComponent.prototype.addNote = function (event) {
        this.isAddNoteClick = true;
        console.log('this.isAddNoteClick : ', this.isAddNoteClick);
        if (!this.note) {
            this.isAddNoteClick = false;
        }
        else {
            this.storedNotes.push(this.note);
        }
    };
    AddNoteComponent = __decorate([
        core_1.Component({
            selector: 'app-add-note',
            templateUrl: './add-note.component.html',
            styleUrls: ['./add-note.component.css']
        })
    ], AddNoteComponent);
    return AddNoteComponent;
}());
exports.AddNoteComponent = AddNoteComponent;
