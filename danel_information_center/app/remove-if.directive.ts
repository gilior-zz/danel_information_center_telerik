import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core'

@Directive({ selector: '[removeIf]' })

export class RemoveIfDirective {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef
    ) { }

    @Input() set removeIf(condition: boolean) {
        if (!condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }
}