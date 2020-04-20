import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { VideoComponent } from './video.component';
let VideoModule = class VideoModule {
};
VideoModule = __decorate([
    NgModule({
        imports: [
            YouTubePlayerModule,
        ],
        declarations: [VideoComponent],
        exports: [VideoComponent]
    })
], VideoModule);
export { VideoModule };
//# sourceMappingURL=video.module.js.map