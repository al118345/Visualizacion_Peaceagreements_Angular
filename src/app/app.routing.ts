import { Routes, RouterModule } from '@angular/router';
import {UsersGuard} from './guard/users.guard';
import {HomeComponent} from './component/home/home.component';
import {LoginComponent} from './component/login/login.component';
import {ListadoContratosComponent} from './component/listado-contratos/listado-contratos.component';
import {RegistroComponent} from './component/registro/registro.component';
import {EjemploFacturaComponent} from './component/ejemplo-factura/ejemplo-factura.component';
import {DetalleContratoComponent} from './component/detalle-contrato/detalle-contrato.component';
import {AceptarContratoComponent} from './component/aceptar-contrato/aceptar-contrato.component';
import { FacturasContratoComponent } from './component/listado-facturas/facturas-contrato/facturas-contrato.component';
import {ListadoCambioCuentaComponent} from './component/listado-cambio-cuenta/listado-cambio-cuenta.component';
import {AdminComponent} from './component/admin/admin.component';
import {CompletarDatosComponent} from './component/registro/completar-datos/completar-datos.component';
import {MenuVerticalComponent} from './component/visual/menu-vertical/menu-vertical.component';
import {UsuarioComponent} from './component/admin/usuario/usuario.component';
import {FormularioComponent} from './component/subasta/formulario/formulario.component';
import {ListadoSubastaComponent} from './component/listado-subasta/listado-subasta.component';



const appRoutes: Routes = [
  { path: 'app-login', component: LoginComponent },
  { path: 'app-listado-subasta', component: ListadoSubastaComponent },
  { path: 'app-formulario', component: FormularioComponent },
  { path: 'app-admin', component: MenuVerticalComponent },
  { path: 'app-usuario', component: UsuarioComponent },
  { path: 'app-registro', component: RegistroComponent },
  { path: 'app-ejemplo-factura', component: EjemploFacturaComponent },
  { path: 'app-aceptar-contrato', component: AceptarContratoComponent },
  { path: 'app-listado-contratos', component: ListadoContratosComponent, canActivate: [UsersGuard] },
  { path: 'app-completar-datos', component: CompletarDatosComponent, canActivate: [UsersGuard] },
  { path: 'app-home', component: HomeComponent, canActivate: [UsersGuard] },
  { path: 'app-detalle-contrato', component: DetalleContratoComponent , canActivate: [UsersGuard]},
  { path: 'app-listado-cuenta', component: ListadoCambioCuentaComponent , canActivate: [UsersGuard]},
  { path: 'app-facturas-contrato', component: FacturasContratoComponent , canActivate: [UsersGuard]},
  { path: '**',  component: LoginComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
