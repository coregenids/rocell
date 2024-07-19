import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'sorting',
        loadComponent: () => import('./sorting/sorting.component')
      },
      {
        path: 'kiln',
        loadComponent: () => import('./kiln/kiln.component')
      },
      {
        path: 'glazing',
        loadComponent: () => import('./glazing/glazing.component')
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapse/collapse.component')
      },
      {
        path: 'tabs-pills',
        loadComponent: () => import('./tabs-pills/tabs-pills.component')
      },
      {
        path: 'typography',
        loadComponent: () => import('./typography/typography.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}
