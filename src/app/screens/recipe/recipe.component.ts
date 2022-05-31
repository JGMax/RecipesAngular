import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private recipesService: RecipesService) {}
  recipe;
  inCart: string;

  ngOnInit() {
    window.scroll(0,0);
    const requiredId = this.route.snapshot.paramMap.get('recipeId');
    this.recipe = this.recipesService.recipes.find((recipe) => recipe.id === requiredId);
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
      localStorage.setItem('cart', JSON.stringify({}));
    }
  }

  productsCount(name: string): string {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (name in cart) {
      return cart[name];
    } else {
      return "0";
    }
  }

  addProduct(name: string) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (name in cart) {
      cart[name] += 1;
    } else {
      cart[name] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  removeProduct(name: string) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (name in cart && cart[name] > 0) {
      cart[name] -= 1;
      if (cart[name] == 0) {
        delete cart[name]
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
}
