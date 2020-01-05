import { Routes, RouterModule } from '@angular/router';

import {VisualizacionPazComponent} from './component/visualizacion-paz/visualizacion-paz.component';



const appRoutes: Routes = [
  { path: 'app-visualizacion-paz', component: VisualizacionPazComponent },
  { path: '**',  component: VisualizacionPazComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
