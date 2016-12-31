import {  Injectable}   from '@angular/core';
import {AdvisorProperties} from './models'
@Injectable()

export class AdvisorService {
    advisorProperties: AdvisorProperties;
    builtInMessages: Array<string>;
    constructor() { }
    loadAdvisor(): void {
        this.advisorProperties = { mail: 'mail@mail.com', name: 'name', phone: 'phone' };
        this.builtInMessages = new Array<string>();
        for (let i = 0; i < 5; i++)
            this.builtInMessages.push(`message ${i}`);
    }

    dispose() {
        this.builtInMessages = null;
    }

}