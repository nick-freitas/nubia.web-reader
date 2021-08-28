import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '@indigobit/nubia.common';

@Component({
  selector: 'reader-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  userSwitchForm: FormGroup;
  userList$: Observable<User[]> | undefined;
  @Input() pageTitle: string | undefined;
  @Input() buttonName: string | undefined;
  @Input() buttonLink: string | undefined;

  constructor(private http: HttpClient) {
    this.userSwitchForm = new FormGroup({
      user: new FormControl(''),
    });
  }

  ngOnInit() {
    // this.userList$ = this.http
    //   .get<User[]>(
    //     'http://localhost:3333/reader-api/dev-use-only/full-user-list'
    //   )
    //   .pipe(
    //     tap((users) =>
    //       this.userSwitchForm.setValue({ user: users[0]?.username })
    //     )
    //   );
  }
}
