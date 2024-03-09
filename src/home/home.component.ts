import { Component, inject } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loremArr = ["Lorem Ipsum 1", "Lorem Ipsum 2", "Lorem Ipsum 3"];
  name = "Zuul";
  isBigger = false;
  imageURL = "https://www.sololearn.com/images/tree.jpg";
  router = inject(Router);
  test() {
    this.isBigger = !this.isBigger;
  }
  toNotes() {
    this.router.navigateByUrl('note')
  }
}
