import { TasksIniciadasComponent } from './components/tasks-iniciadas/tasks-iniciadas.component';
import { TasksFinalizadasComponent } from './components/tasks-finalizadas/tasks-finalizadas.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoRoutingModule } from './todo-routing.module';
import { TasksService } from './todo.service';
import { Store } from './todo.store';



@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TasksComponent,
    TasksFinalizadasComponent,
    TasksIniciadasComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  providers: [
    TasksService,
    Store
  ],
  exports: []
})
export class TodoModule { }
