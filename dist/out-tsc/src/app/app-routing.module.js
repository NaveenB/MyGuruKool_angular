import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
const routes = [
    { path: 'user', component: UserComponent },
    { path: 'login', component: LoginComponent },
    { path: '', component: LoginComponent },
    { path: 'profile', component: ProfileComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map