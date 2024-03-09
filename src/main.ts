import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoteComponent } from './note/note.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditNoteComponent } from './edit-note/edit-note.component';

const routes: Routes = [
  {path: '',  component: HomeComponent},
  { path: 'home',title: "Study Project Home", component: HomeComponent },
  { path: 'note',title: "Study Project Notes", component: NoteComponent },
  { path: 'note/:id',title: "Study Project Edit Note", component: EditNoteComponent },
  { path: '**',title: "404 Page not Found", component: NotFoundComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
})
  .catch((err) => console.error(err));
//Project for learning Angular components, forms and rounting.