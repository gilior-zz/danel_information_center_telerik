import { Component, animate, style, trigger, transition, state, Input } from '@angular/core'

@Component({
    selector: 'input-error',

    animations: [
        trigger('showError', [
            state('true', style({
                opacity: 1
            })),
            state('false', style({
                opacity: 0,
                transform: 'translateX(20%)'
            })),
            transition('1 => 0', animate('.3s')),
            transition('0 => 1', [style({ transform: 'translateX(20%)' }), animate('.3s')]),
        ])
    ],
    template: `
    <div [@showError]="showError" >
      <ng-content></ng-content>            
    </div>
  `
})

export class InputInvalidMessageComponent {
    showError: boolean;
    @Input() set hideError(val: boolean) { this.showError = !val; }
}