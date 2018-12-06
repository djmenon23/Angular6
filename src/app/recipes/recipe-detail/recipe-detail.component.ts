import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe;
id: number;
  constructor(private recipeService: RecipeService,  private router: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.router.params
    .subscribe(
      (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.route.navigate(['edit'], {relativeTo: this.router})
  }

}
