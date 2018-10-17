import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'angular2-ui-switch';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { DetailComponent } from './detail/detail.component';
import { ObjectKeysPipe } from './object-keys.pipe';
import { ShowErrorComponent } from './show-error/show-error.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TemplateDrivenComponent,
    DetailComponent,
    ObjectKeysPipe,
    ShowErrorComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: RegisterComponent},
      {path: 'details', component: DetailComponent }
    ]),
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
