import { __decorate, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @title Dialog Overview
 */
let DialogOverview = class DialogOverview {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewModal, {
            width: '250px',
            data: { name: this.name, animal: this.animal }
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
};
DialogOverview = __decorate([
    Component({
        selector: 'dialog-overview',
        templateUrl: 'dialog-overview.html',
        styleUrls: ['dialog-overview.css'],
    })
], DialogOverview);
export { DialogOverview };
let DialogOverviewModal = class DialogOverviewModal {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
DialogOverviewModal = __decorate([
    Component({
        selector: 'dialog-overview-dialog',
        templateUrl: 'dialog-overview-modal.html',
    }),
    __param(1, Inject(MAT_DIALOG_DATA))
], DialogOverviewModal);
export { DialogOverviewModal };
/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 
//# sourceMappingURL=dialog-overview.js.map