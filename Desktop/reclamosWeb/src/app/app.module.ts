import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';

import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { EmailComponent } from './components/popups/email/email.component';
import { ResarcimientoComponent } from './components/popups/resarcimiento/resarcimiento.component';
import { PruebaPopComponent } from './components/popups/prueba-pop/prueba-pop.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    EmailComponent,
    ResarcimientoComponent,
    PruebaPopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    DropdownModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
