import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Gamebook } from '@indigobit/nubia.common';

@Component({
  selector: 'reader-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent {
  @Input() book: Gamebook | undefined;
}
