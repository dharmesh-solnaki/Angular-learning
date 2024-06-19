import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../Shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppinglistservice:ShoppingListService){

  }
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ibC0ZQ8poXAwutIsnog_YQHaGu%26pid%3DApi%26h%3D160&f=1&ipt=69f1ef7d180efd9e57cf48ddedae7643261a679175067730522dc67d7f744c9d&ipo=images',
      [new Ingredients('Potato', 10), new Ingredients('Sauce', 6)]
    ),
    new Recipe(
      'Recipe 2',
      'This is simply 2nd Recipe.',
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ibC0ZQ8poXAwutIsnog_YQHaGu%26pid%3DApi%26h%3D160&f=1&ipt=69f1ef7d180efd9e57cf48ddedae7643261a679175067730522dc67d7f744c9d&ipo=images',
      [new Ingredients('Tomato', 4), new Ingredients('Bun', 2)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); // slice will return copy of original array
  }
  setRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
  addIngredientToShoppingList(ingredients:Ingredients[]){
  this.shoppinglistservice.addMultipleIngredients(ingredients);
  }
}
