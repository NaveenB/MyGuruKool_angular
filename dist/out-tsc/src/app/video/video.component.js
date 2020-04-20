import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
let VideoComponent = class VideoComponent {
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
};
__decorate([
    Input()
], VideoComponent.prototype, "videoId", void 0);
VideoComponent = __decorate([
    Component({
        templateUrl: './video.component.html',
        selector: 'app-video',
        encapsulation: ViewEncapsulation.None
    })
], VideoComponent);
export { VideoComponent };
//# sourceMappingURL=video.component.js.map