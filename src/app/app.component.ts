import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserNoteComponent} from './user-note/user-note.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserNoteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyNotes';
}
