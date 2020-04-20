import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, uploadService) {
        this.formBuilder = formBuilder;
        this.uploadService = uploadService;
        this.userId = 1;
        this.uploadResponse = { status: '', message: '', filePath: '' };
    }
    //constructor() { }
    ngOnInit() {
        this.form = this.formBuilder.group({
            avatar: ['']
        });
    }
    onFileChange(event) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.form.get('avatar').setValue(file);
        }
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.form.get('avatar').value);
        this.uploadService.upload(formData, this.userId).subscribe((res) => this.uploadResponse = res, (err) => this.error = err);
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map