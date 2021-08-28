import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gamebook } from '@indigobit/nubia.common';

@Component({
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadingComponent implements OnInit {
  gamebook$: Observable<Gamebook | null> | undefined;
  // loading$: Observable<boolean> | undefined;

  constructor(
    private route: ActivatedRoute // private libraryDataAccessService: LibraryDataAccessService
  ) {}

  ngOnInit(): void {
    // this.loading$ = this.libraryDataAccessService.loading$;
    this.gamebook$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const selectedId = params.get('id');
        if (!selectedId) return of(null);
        return of(null);
        // return this.libraryDataAccessService.getById(selectedId);
      })
    );
  }

  makeChoice(gamebookId: string, progressionId: string) {
    // this.gamebook$ = this.libraryDataAccessService.makeProgessionChoice(
    //   gamebookId,
    //   progressionId
    // );
  }

  resetChoices(gamebookId: string) {
    // this.gamebook$ = this.libraryDataAccessService.resetChoices(gamebookId);
  }

  goBack(gamebookId: string | undefined) {
    // if (!gamebookId) return;
    // this.gamebook$ = this.libraryDataAccessService.goBack(gamebookId);
  }
}
