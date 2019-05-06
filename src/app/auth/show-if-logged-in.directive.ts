import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AuthQuery } from './state';

@Directive({ selector: '[showIfLoggedIn]' })
export class ShowIfLoggedInDirective implements OnDestroy {
  @Input() showIfLoggedIn: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authQuery: AuthQuery
  ) {}

  ngOnInit() {
    this.authQuery.isLoggedIn$.pipe(untilDestroyed(this)).subscribe((isLoggedIn: boolean) => {
      this.viewContainer.clear();

      if (isLoggedIn) {
        if (this.showIfLoggedIn) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        if (this.showIfLoggedIn) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    });
  }

  ngOnDestroy() {}
}
