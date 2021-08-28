import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookshelfRoutingModule } from './bookshelf-routing.module';
import { BookComponent } from './book/book.component';
import { BookShelfComponent } from './bookshelf.component';
import { MaterialUiModule } from '../../shared/material-ui/material-ui.module';

@NgModule({
  declarations: [BookShelfComponent, BookComponent],
  imports: [
    CommonModule,
    BookshelfRoutingModule,
    RouterModule,
    MaterialUiModule,
  ],
})
export class BookshelfModule {}
