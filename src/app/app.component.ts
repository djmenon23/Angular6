import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature = 'recipe';
  onNavigate(feature: string){
  this.loadedFeature = feature;
  }

  ngOnInit() {
  firebase.initializeApp({
    apiKey: "AIzaSyBlh7JyKf3g3doT4zVmvkY-8TralIuap4o",
    authDomain: "ng-recipe-book-b6ee0.firebaseapp.com",
  });
  }

}
