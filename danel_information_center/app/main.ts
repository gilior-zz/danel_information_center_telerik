import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {ParameterService} from './parameter.service'
import { AppModule } from './app.module';



platformBrowserDynamic().bootstrapModule(AppModule, ParameterService);
