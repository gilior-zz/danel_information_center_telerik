import { Component, trigger, state, transition, style, animate, Input } from '@angular/core'

@Component
    ({
        selector: 'input-caption',
        animations: [
            trigger('showCaption', [
                state('true', style({
                    opacity: 1,
                    transform: 'translateY(0)',
                    fontSize: '90%'
                })),
                state('false', style({
                    opacity: 0,
                    transform: 'translateY(100%)',
                    fontSize: '100%'
                })),
                transition('1 => 0', animate('.3s ease-out')),
                transition('0 => 1', [style({ transform: 'translateY(100%)' }), animate('.3s ease-out')]),
            ])
        ],
        moduleId: module.id,
        templateUrl: './input-caption.component.html',
        styleUrls: ['./input-caption.component.css']
    })

export class InputCaptionComponent {

    @Input() showCaption: boolean;
}