import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [new Ingredient('Apple', 5)];

    getIngredients() {
        return this.ingredients.slice();
    }

     private checkProperties(obj) {
        for (const key in obj) {
            if (obj[key] !== null && obj[key] !== '') {
                return false;
            }
        }
        return true;
    }

    addIngredients(ingredient: Ingredient) {
        if (this.checkProperties(ingredient)) {
            return;
        }
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


    addIngredientsForRecipe(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}