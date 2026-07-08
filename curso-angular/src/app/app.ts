import { Component, signal } from '@angular/core';
import { ProjectCrud } from './project-crud/project-crud';
@Component({
  selector: 'app-root',
  imports: [ProjectCrud],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('curso-angualr');
}
