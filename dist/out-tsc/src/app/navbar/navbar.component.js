import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.loginDisplayName = GlobalConstants.displayUserName;
    }
    ngOnInit() {
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map