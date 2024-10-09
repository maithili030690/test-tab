import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabDComponent } from './shared/component/tab-d/tab-d.component';
import { TabDAttriComponent } from './shared/component/tab-d-attri/tab-d-attri.component';
import { TabNgforComponent } from './shared/component/tab-ngfor/tab-ngfor.component';
import { TabNgSwitchComponent } from './shared/component/tab-ng-switch/tab-ng-switch.component';
import { TabSwitchNgforComponent } from './shared/component/tab-switch-ngfor/tab-switch-ngfor.component';
import { NgswichPComponent } from './shared/component/ngswich-p/ngswich-p.component';

@NgModule({
  declarations: [
    AppComponent,
    TabDComponent,
    TabDAttriComponent,
    TabNgforComponent,
    TabNgSwitchComponent,
    TabSwitchNgforComponent,
    NgswichPComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
