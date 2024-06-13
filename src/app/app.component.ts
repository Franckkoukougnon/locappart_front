import { Component, OnInit } from '@angular/core';

import { Categorie } from './model/categorie.model';
import { CategorieService } from './services/categorie/categorie.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  categories: Categorie[] = [];


  ngOnInit(): void {
  

  }

  constructor() { }
 


}
