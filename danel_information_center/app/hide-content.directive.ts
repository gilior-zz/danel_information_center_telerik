﻿import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core'
@Directive({ selector: '[hideContent]' })
export class HideContentDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set hideContent(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

}