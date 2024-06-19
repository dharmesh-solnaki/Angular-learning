import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reacipe-detail',
  templateUrl: './reacipe-detail.component.html',

})
export class ReacipeDetailComponent {


  @Input() recipeItem:Recipe
  getRecipeItem(){

  }
  constructor(private recipeservice:RecipeService){
  
  }
  onAddToShoppingList(){
        this.recipeservice.addIngredientToShoppingList(this.recipeItem.ingredients);
  }
}
