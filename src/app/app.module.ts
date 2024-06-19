import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ReacipeListComponent } from './recipes/reacipe-list/reacipe-list.component';
import { ReacipeDetailComponent } from './recipes/reacipe-detail/reacipe-detail.component';
import { RecipeItemsComponent } from './recipes/reacipe-list/recipe-items/recipe-items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { BasicHighLighterDirective } from './Basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './Better-highlight/better-highlight.directive';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'users', component: UsersComponent , children:[
    { path: ':id/:name', component: UserComponent },
  ] },

  { path: 'ShoppingLists', component: ShoppingListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,

    ReacipeListComponent,
    ReacipeDetailComponent,
    RecipeItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    BasicHighLighterDirective,
    BetterHighlightDirective,
    FooterComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [ShoppingListService],
  bootstrap: [AppComponent],
})
export class AppModule {}
