import { Directive, HostListener, ElementRef, Renderer }   from '@angular/core';

@Directive({ selector: '[hover-scale]' })

export class HoverScaleDirective {

    constructor(private el: ElementRef, private renderer: Renderer) {
        //this.el.nativeElement.style.transform = 'scale(5)';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.el.nativeElement.style.transform += 'scale(1.1)';
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.el.nativeElement.style.transform = this.el.nativeElement.style.transform.replace('scale(1.1)', 'scale(1)');
    }

}