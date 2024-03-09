import { Component, OnInit, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-edit-note',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [NoteComponent],
  templateUrl: './edit-note.component.html',
  styleUrl: './edit-note.component.css'
})
export class EditNoteComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  id: any;
  note: any;

  noteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl()
  });

  constructor(private notes: NoteComponent) { }

  saveNote() {
    this.note = { id: this.note.id, ...this.noteForm.value };
    this.notes.updateNote(this.note);
    this.toNotes();
  }

  deleteNote() {
    this.notes.pop(this.note);
  }

  toNotes() {
    this.router.navigateByUrl('note');
  }

  fillForm() {
    this.noteForm.patchValue({ "title": this.note.title, "text": this.note.text });
  }

  ngOnInit() {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.note = this.notes.notes.find((i) => i.id === this.id);
    if (!this.note?.id) {
      this.toNotes();
    } else {
      this.fillForm();
    }
  }
}
