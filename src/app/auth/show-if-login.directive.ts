import { Directive, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Directive({ selector: '[showIfLogin]' })
export class ShowIfLoginDirective implements OnDestroy {
  @Input() showIfLogin: boolean;

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(untilDestroyed(this)).subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.viewContainer.clear();

        if (event.url === '/login') {
          if (this.showIfLogin) {
            this.viewContainer.createEmbeddedView(this.templateRef);
          } else {
            this.viewContainer.clear();
          }
        } else {
          if (this.showIfLogin) {
            this.viewContainer.clear();
          } else {
            this.viewContainer.createEmbeddedView(this.templateRef);
          }
        }
      }
    });
  }

  ngOnDestroy() {}
}
