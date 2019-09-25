import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {UsersGuard} from './guard/users.guard';
import {UserService} from './service/user.service';
import {ContratoService} from './service/contrato.service';
import { ListadoContratosComponent } from './component/listado-contratos/listado-contratos.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {ContratoItemComponent} from './component/listado-contratos/contrato-item/contrato-item.component';
import {ListarContratoComponent} from './component/listado-contratos/listar-contrato/listar-contrato.component';
import { RegistroComponent } from './component/registro/registro.component';
import { EjemploFacturaComponent } from './component/ejemplo-factura/ejemplo-factura.component';
import { RegisterService } from './service/register.service';

import { DetalleContratoComponent } from './component/detalle-contrato/detalle-contrato.component';
import { DataService } from './service/dataservice';
import { AceptarContratoComponent } from './component/aceptar-contrato/aceptar-contrato.component';
import { FacturasService } from './service/facturas.service';
import { FacturasContratoComponent } from './component/listado-facturas/facturas-contrato/facturas-contrato.component';
import { FacturaItemComponent } from './component/listado-facturas/factura-item/factura-item.component';
import { ListarFacturaComponent } from './component/listado-facturas/listar-factura/listar-factura.component';
import { MenuComponent } from './component/menu/menu.component';
import { UsuarioComponent } from './component/usuario/usuario.component';
import { GraphComponent } from './component/various/graph/graph.component';

import {ChartsModule} from 'ng2-charts';
import {DatePipe} from '@angular/common';
import {ListarCambioCuentaComponent} from './component/listado-cambio-cuenta/listar-cambio-cuenta/listar-cambio-cuenta.component';
import {ListadoCambioCuentaComponent} from './component/listado-cambio-cuenta/listado-cambio-cuenta.component';
import {CambioCuentaItemComponent} from './component/listado-cambio-cuenta/cambio-cuenta-item/cambio-cuenta-item.component';
import { CrearIbanComponent } from './component/crear-iban/crear-iban.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListadoContratosComponent,
    ListarContratoComponent,
    ContratoItemComponent,
    RegistroComponent,
    EjemploFacturaComponent,
    DetalleContratoComponent,
    AceptarContratoComponent,
    FacturasContratoComponent,
    FacturaItemComponent,
    ListarFacturaComponent,
    MenuComponent,
    UsuarioComponent,
    ListarCambioCuentaComponent,
    ListadoCambioCuentaComponent,
    CambioCuentaItemComponent,
    GraphComponent,
    CrearIbanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    routing,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
  ],
  providers: [UsersGuard,
    UserService,
    ContratoService,
    RegisterService,
    DataService,
    FacturasService,
    DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
