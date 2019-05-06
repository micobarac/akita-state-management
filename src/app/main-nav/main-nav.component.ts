import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router } from '@angular/router';
import { CartQuery } from '@app/cart/state/cart.query';
import * as M from 'materialize-css';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthQuery, AuthService } from '../auth/state';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainNavComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren('dropdown')
  dropdown: QueryList<ElementRef>;

  name$: Observable<string>;
  count$: Observable<number>;

  constructor(
    private router: Router,
    private cartQuery: CartQuery,
    private authService: AuthService,
    private authQuery: AuthQuery
  ) {}

  ngOnInit() {
    this.name$ = this.authQuery.name$;
    this.count$ = this.cartQuery.selectCount();
  }

  ngAfterViewInit() {
    this.dropdown.changes
      .pipe(
        filter((dropdown: QueryList<ElementRef>) => !!dropdown.length),
        untilDestroyed(this)
      )
      .subscribe((dropdown: QueryList<ElementRef>) => {
        new M.Dropdown(dropdown.first.nativeElement, { coverTrigger: false });
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

  ngOnDestroy() {}
}
