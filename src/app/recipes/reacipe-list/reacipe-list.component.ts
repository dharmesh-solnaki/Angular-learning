import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { outputAst } from '@angular/compiler';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-reacipe-list',
  templateUrl: './reacipe-list.component.html',

})
export class ReacipeListComponent implements OnInit {
  recipes:Recipe[] = [];
  constructor(private recipeService:RecipeService) {
  }

  @Output() recipewasSelected  = new EventEmitter<Recipe>();
  // setRecipeFromList(item:Recipe){
  // this.recipewasSelected.emit(item);
  //}


  ngOnInit(): void {   
    this.recipes = this.recipeService.getRecipes();
  }
}
