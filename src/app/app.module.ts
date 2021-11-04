import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MontoComponent } from './components/monto/monto.component';
import { DEditarTipoCambioComponent } from './components/d-editar-tipo-cambio/d-editar-tipo-cambio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MontoComponent,
    DEditarTipoCambioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
