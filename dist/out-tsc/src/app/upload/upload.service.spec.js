import { TestBed } from '@angular/core/testing';
import { UploadService } from './upload.service';
describe('UploadService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UploadService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=upload.service.spec.js.map