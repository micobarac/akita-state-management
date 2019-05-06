import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { TodosFilterComponent } from './filter/filter.component';
import { TodosPageComponent } from './page/page.component';
import { TodoComponent } from './todo/todo.component';
import { TodosRoutingModule } from './todos.routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [TodosComponent, TodoComponent, TodosFilterComponent, TodosPageComponent],
  imports: [SharedModule, TodosRoutingModule]
})
export class TodosModule {}
