import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserNoteComponent} from './user-note/user-note.component';
import {MatToolbarModule} from '@angular/material/toolbar';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserNoteComponent, MatToolbarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyNotes';
}
