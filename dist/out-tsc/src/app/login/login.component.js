import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { GlobalConstants } from '../common/global-constants';
let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        /*    if(this.username == 'admin' && this.password == 'admin'){
              this.router.navigate(["user"]);
         */
        if (this.username != '') {
            GlobalConstants.displayUserName = this.username;
            this.router.navigate(["user"]);
        }
        else {
            alert("Invalid credentials");
        }
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css'],
        encapsulation: ViewEncapsulation.None
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map