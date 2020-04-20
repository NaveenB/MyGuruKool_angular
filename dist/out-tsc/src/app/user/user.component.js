import { __decorate } from "tslib";
import { Component, ViewEncapsulation } from '@angular/core';
import { HostListener } from '@angular/core';
const FileSaver = require('file-saver');
let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.panelOpenState = false;
    }
    ngOnInit() {
        this.userService.getStudent().subscribe(data => {
            this.student = data;
        });
    }
    addAnswer(answer) {
        let ans = { name: 'New Name', attachmentUrl: 'www.dummy1.com' };
        answer.push(ans);
    }
    downloadPdf(pdfUrl, pdfName) {
        //const pdfUrl = './assets/sample.pdf';
        //const pdfName = 'your_pdf_file';
        FileSaver.saveAs(pdfUrl, pdfName);
        //    FileSaver.saveAs('https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_500_kB.pdf', pdfName);
        //    FileSaver.saveAs('../../assets/pdf/bruchteil-muster.pdf', pdfName);
    }
    openDoc(pdfUrl) {
        window.open(pdfUrl, '_blank', '', true);
    }
    mouseover(event) {
        if (event.target.matches('.mOver')) {
            alert('hover to editor div');
        }
    }
};
__decorate([
    HostListener('document:mouseover', ['$event'])
], UserComponent.prototype, "mouseover", null);
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css'],
        encapsulation: ViewEncapsulation.None
    })
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map