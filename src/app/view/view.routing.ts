import { Routes } from '@angular/router';

import { ViewComponent } from './view.component';

export const ViewRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewComponent
    }]
}
];
