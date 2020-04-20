import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpEventType } from '@angular/common/http';
import { map } from 'rxjs/operators';
let UploadService = class UploadService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "http://localhost:3000";
    }
    // constructor() { }
    upload(data, userId) {
        let uploadURL = '${this.SERVER_URL}/auth/${userId}/avatar';
        return this.httpClient.post(uploadURL, data, {
            reportProgress: true,
            observe: 'events'
        }).pipe(map((event) => {
            switch (event.type) {
                case HttpEventType.UploadProgress:
                    const progress = Math.round(100 * event.loaded / event.total);
                    return { status: 'progress', message: progress };
                case HttpEventType.Response:
                    return event.body;
                default:
                    return `Unhandled event: ${event.type}`;
            }
        }));
    }
};
UploadService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UploadService);
export { UploadService };
//# sourceMappingURL=upload.service.js.map