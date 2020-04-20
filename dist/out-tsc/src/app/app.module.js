import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MaterialModule } from './modules/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InMemoryApiService } from './in-memory-api/in-memory-api.service';
import { VideoModule } from './video/video.module';
import { ProfileComponent } from './profile/profile.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            LoginComponent,
            UserComponent,
            NavbarComponent,
            ProfileComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule,
            VideoModule,
            HttpClientModule,
            HttpClientInMemoryWebApiModule.forRoot(InMemoryApiService),
            MaterialModule,
            BrowserAnimationsModule,
            ReactiveFormsModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map