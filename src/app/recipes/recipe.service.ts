import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { from } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
        new Recipe('A Test', 'Just a test', 
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wiener-Schnitzel02.jpg/220px-Wiener-Schnitzel02.jpg',
        [
            new Ingredient('pork', 5),
            new Ingredient('fries', 20),
        ]
        )
      ];

      constructor(private slService: ShoppingListService){}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredientsForRecipe(ingredients);
      }
}