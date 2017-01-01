import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';



import { CommonModule } from '@angular/common';
import * as components from './components.barrel'
import { FormsModule } from '@angular/forms';
import { GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective, RemoveIfDirective } from './directives.barrel'

//import {AgGridModule} from 'ag-grid-ng2/main';

@NgModule({
    imports: [GridModule],
    declarations: [GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective, RemoveIfDirective, components.InputInvalidMessageComponent, components.InputCaptionComponent],
    exports: [
        CommonModule, FormsModule, GoogleChart, GridDirective, HideContentDirective, GoogleRecaptchaDirective, LocationPrinterDirective, HoverScaleDirective, RemoveIfDirective, components.InputInvalidMessageComponent, components.InputCaptionComponent,GridModule,GridModule]
})
export class SharedModule { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/