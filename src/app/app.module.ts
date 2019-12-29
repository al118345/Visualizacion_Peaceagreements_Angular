import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { DetalleContratoComponent } from './component/detalle-contrato/detalle-contrato.component';
import { DataService } from './service/dataservice';
import { AceptarContratoComponent } from './component/aceptar-contrato/aceptar-contrato.component';
import { FacturasService } from './service/facturas.service';
import { FacturasContratoComponent } from './component/listado-facturas/facturas-contrato/facturas-contrato.component';
import { FacturaItemComponent } from './component/listado-facturas/factura-item/factura-item.component';
import { ListarFacturaComponent } from './component/listado-facturas/listar-factura/listar-factura.component';
import { MenuComponent } from './component/menu/menu.component';
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
import { AdminComponent } from './component/admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {CompletarDatosComponent} from './component/registro/completar-datos/completar-datos.component';
import { MenuVerticalComponent } from './component/visual/menu-vertical/menu-vertical.component';
import {DeviceDetectorModule, DeviceDetectorService} from 'ngx-device-detector';
import {UsuarioComponent} from './component/admin/usuario/usuario.component';
import { FootComponent } from './component/foot/foot.component';
import { ListadoSubastaComponent } from './component/listado-subasta/listado-subasta.component';
import { ListarSubastaComponent } from './component/listado-subasta/listar-subasta/listar-subasta.component';
import { SubastaItemComponent } from './component/listado-subasta/subasta-item/subasta-item.component';
import { FormularioComponent } from './component/subasta/formulario/formulario.component';
import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { MostrarSubastaComponent } from './component/subasta/mostrar-subasta/mostrar-subasta.component';
import { VisualizacionPazComponent } from './component/visualizacion-paz/visualizacion-paz.component';


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
    CrearIbanComponent,
    AdminComponent,
    CompletarDatosComponent,
    MenuVerticalComponent,
    FootComponent,
    ListadoSubastaComponent,
    ListarSubastaComponent,
    SubastaItemComponent,
    FormularioComponent,
    MostrarSubastaComponent,
    VisualizacionPazComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule,
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    ChartsModule,
    routing,
    NgxPaginationModule,
    DeviceDetectorModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, BrowserAnimationsModule // imports firebase/auth, only needed for auth features
  ],
  providers: [UsersGuard,
    UserService,
    ContratoService,
    DataService,
    FacturasService,
    DatePipe ],
  bootstrap: [AppComponent],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
