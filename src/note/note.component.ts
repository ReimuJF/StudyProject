import { Component, inject } from '@angular/core';
import { NOTES } from './notes'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-note',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './note.component.html',
  styleUrl: './note.component.css'

})
export class NoteComponent {
  notes = NOTES;
  router = inject(Router)
  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl()
  });

  getLastId() {
    return this.notes[this.notes.length - 1]?.id
  }

  addNote() {
    if (this.noteForm.valid) {
      this.push(this.noteForm.value.title, this.noteForm.value.text);
      this.noteForm.reset();
    }
  }

  push(title: any, text: string) {
    this.notes.push({ id: (this.getLastId() ? this.getLastId() : 0) + 1, title: title, text: text });
  }

  getIndex(note: any) {
    return this.notes.findIndex(el => el.id === note.id);
  }

  pop(note: any) {
    this.notes.splice(this.getIndex(note), 1);
  }

  back() {
    this.router.navigateByUrl('/')
  }
  
  editNote(id:any) {
    this.router.navigateByUrl(`note/${id}`);
  }

  updateNote(note: any) {
    this.notes[this.getIndex(note)] = {...note}
  }
}
