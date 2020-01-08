import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MenuComponent } from './component/menu/menu.component';

import {ChartsModule} from 'ng2-charts';
import {DatePipe} from '@angular/common';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {DeviceDetectorModule, DeviceDetectorService} from 'ngx-device-detector';
import { FootComponent } from './component/foot/foot.component';
import {  MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { VisualizacionPazComponent } from './component/visualizacion-paz/visualizacion-paz.component';
import { GraficaComponent } from './component/visualizacion-paz/grafica/grafica.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {DibujarComponent} from './component/visualizacion-paz/grafica/dibujar/dibujar.component';
import {TratadosInformacionComponent} from './component/visualizacion-paz/grafica/dibujar/tratados-informacion/tratados-informacion.component';
import { MundoWebComponent } from './component/visualizacion-paz/mundo-web/mundo-web.component';
import { BarComponent } from './component/visualizacion-paz/mundo-web/bar/bar.component';
import {Ng5SliderModule} from 'ng5-slider';
import { BubleChartComponent } from './component/visualizacion-paz/mundo-web/buble-chart/buble-chart.component';
import { SafeUrlPipe } from './pipe/safe-url.pipe';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FootComponent,
    VisualizacionPazComponent,
    GraficaComponent,
    DibujarComponent,
    DibujarComponent,
    TratadosInformacionComponent,
    MundoWebComponent,
    BarComponent,
    BubleChartComponent,
    SafeUrlPipe

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
    Ng5SliderModule,
    routing,
    NgxPaginationModule,
    DeviceDetectorModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, BrowserAnimationsModule // imports firebase/auth, only needed for auth features
  ],
  providers: [
DatePipe , {provide: APP_BASE_HREF, useValue: '/pruebas_master/visualizacion_de_datos/dist/'} ],
  bootstrap: [AppComponent],
  schemas:      [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
