import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfcComponent } from './rfc/rfc.component';
import { TfcComponent } from './tfc/tfc.component';
import { SfcComponent } from './sfc/sfc.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TdfComponent,
    RfcComponent,
    TfcComponent,
    SfcComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
