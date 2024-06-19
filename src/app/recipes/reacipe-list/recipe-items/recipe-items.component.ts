import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-items',
  templateUrl: './recipe-items.component.html',

})
export class RecipeItemsComponent {
 constructor(private recipeService:RecipeService){

 }

@Input() recipeItem:Recipe;

// @Output() recipeSetter = new EventEmitter<void>();
setRecipeItem(){
this.recipeService.recipeSelected.emit(this.recipeItem);
}
}
