import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookShelfComponent } from './bookshelf.component';

const routes: Routes = [{ path: '', component: BookShelfComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookshelfRoutingModule {}
