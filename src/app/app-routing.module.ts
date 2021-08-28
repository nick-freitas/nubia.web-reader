import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderLayoutComponent } from './core/components/header-layout/header-layout.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./features/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./features/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: '',
    component: HeaderLayoutComponent,
    children: [
      {
        path: 'bookshelf',
        loadChildren: () =>
          import('./features/bookshelf/bookshelf.module').then(
            (m) => m.BookshelfModule
          ),
      },
      {
        path: 'reading',
        loadChildren: () =>
          import('./features/reading/reading.module').then(
            (m) => m.ReadingModule
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/bookshelf',
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
