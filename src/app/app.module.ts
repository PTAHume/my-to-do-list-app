import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItemInputComponent } from './todo-item-input/todo-item-input.component';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    TodoItemInputComponent,
    TodoItemComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
