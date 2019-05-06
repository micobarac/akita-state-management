import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ID } from '@datorama/akita';
import { Todo } from '../state/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosComponent implements OnInit {
  @Input()
  todos: Todo[];

  @Output()
  complete = new EventEmitter<Todo>();

  @Output()
  delete = new EventEmitter<ID>();

  constructor() {}

  ngOnInit() {}
}
