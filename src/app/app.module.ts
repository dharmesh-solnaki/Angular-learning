import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MyPipePipe } from './Shared/my-pipe.pipe';
import { UserService } from './users/user.service';
import { UserRegistrationComponent } from './users/user-registration/user-registration.component';
import { CommonGridComponent } from './Shared/common-grid/common-grid.component';
import { ObservableComponent } from './observable/observable.component';
import { AllComponent } from './observable/all/all.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { DesignUtilityService } from './appServices/design-utility.service';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { EmployeeComponent } from './employee/employee.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee/employee.service';
import { RequestInterceptorService } from './Interceptors/reqInterceptor.service';
import { ResponseInterceptorService } from './Interceptors/resInterceptor.service';
import { PageNotFoundComponent } from './Shared/pagenotfound.component';
import { activeRouteGuard } from './Guards/active-route.guard';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'recipes', component: RecipesComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: 'user/:id/:name', component: UserComponent }],
  },
  { path: 'userReg/:type', component: UserRegistrationComponent },
  { path: 'ShoppingLists', component: ShoppingListComponent },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [activeRouteGuard],
    canDeactivate: [
      (com: EmployeeComponent) => {
        return com.canExit();
      },
    ],
  },
  {
    path: 'observables',
    component: ObservableComponent,
    children: [
      { path: '', component: AllComponent },
      { path: 'fromEvent', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'ofFrom', component: OfFromComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent },
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
    MyPipePipe,
    UserRegistrationComponent,
    CommonGridComponent,
    ObservableComponent,
    AllComponent,
    FromEventComponent,
    IntervalComponent,
    OfFromComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ShoppingListService,
    UserService,
    DesignUtilityService,
    EmployeeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptorService,
      multi: true,
    },
  ],
  exports: [FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
