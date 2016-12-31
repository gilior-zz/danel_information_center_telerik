import { NgModule } from '@angular/core'
import { SharedModule } from './shared.module'
import * as components from './components.barrel'
import { AdminRoutingModule } from './admin-routing.module'
@NgModule({
    imports: [SharedModule, AdminRoutingModule],
    declarations: [components.AdminCenterComponent, components.AdminHomeComponent]
})

export class AdminModule { }