import { Directive,Renderer,ElementRef,HostListener }   from '@angular/core';

@Directive({ selector: '[location-printer]' })

export class LocationPrinterDirective {
    constructor(private renderer: Renderer,private elementRef:ElementRef) {

    }

    @HostListener('window:resize') onResize() {
        console.log($(this.elementRef.nativeElement).position());
    
    }
}