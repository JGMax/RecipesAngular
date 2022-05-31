import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipe/recipes.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  recipes = [];
  constructor(private recipesService: RecipesService) {}

  ngOnInit() {
    this.recipes = this.recipesService.recipes;
  }
}
