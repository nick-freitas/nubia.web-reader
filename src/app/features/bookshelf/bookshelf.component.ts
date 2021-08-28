import { Observable, of } from 'rxjs';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Gamebook } from '@indigobit/nubia.common';

@Component({
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookShelfComponent implements OnInit {
  gamebooks$: Observable<Gamebook[]> | undefined;

  constructor() {}

  ngOnInit() {
    this.gamebooks$ = of([]);
  }
}
