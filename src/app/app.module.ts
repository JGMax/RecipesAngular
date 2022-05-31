import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MainComponent } from './screens/main/main.component';
import { RecipeComponent } from './screens/recipe/recipe.component';
import { CartComponent } from './screens/cart/cart.component';
import { RecipesService } from './screens/recipe/recipes.service';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent },
      { path: 'carts', component: CartComponent },
      { path: 'recipes/:recipeId', component: RecipeComponent }
    ]),
  ],
  providers: [ RecipesService ],
  declarations: [ AppComponent, RecipeComponent, MainComponent, CartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
