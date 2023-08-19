import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'crud-app';
  newTask = {
    title: '',
    course: '',
    dueDate: '',
    fullmark: '',
    obtainmark: '',
    editing: false,
  };

  tasks: any[] = [];

  addTodo() {
    if (this.newTask.title.trim() !== '') {
      const newTask = { ...this.newTask };
      this.tasks.push(newTask);
      this.resetNewTask();
    }
  }

  editTask(index: number) {
    this.tasks[index].editing = true;
  }

  saveTask(index: number) {
    this.tasks[index].editing = false;
  }

  cancelEdit(index: number) {
    this.tasks[index].editing = false;
  }

  deleteTask(index: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.tasks.splice(index, 1);
    }
  }

  private resetNewTask() {
    this.newTask = {
      title: '',
      course: '',
      dueDate: '',
      fullmark: '',
      obtainmark: '',
      editing: false,
    };
  }
}
