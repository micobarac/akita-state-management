import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { TodoFilter, VISIBILITY_FILTER } from './filter.model';

@Component({
  selector: 'app-todos-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosFilterComponent implements OnInit, OnDestroy {
  _active: VISIBILITY_FILTER;

  @Input()
  set active(filter: VISIBILITY_FILTER) {
    this._active = filter;
    if (this.control) {
      this.control.patchValue(filter, { emitEvent: false });
    }
  }

  @Input()
  filters: TodoFilter[];

  @Output()
  update = new EventEmitter<VISIBILITY_FILTER>();

  control: FormControl;

  constructor() {}

  ngOnInit() {
    this.control = new FormControl(this._active);

    this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(value => {
      this.update.emit(value);
    });
  }

  ngOnDestroy() {}
}
