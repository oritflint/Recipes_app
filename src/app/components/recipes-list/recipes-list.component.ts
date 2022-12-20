import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {

  public recipeList: Array<IRecipe> = [];

  private subscription: Subscription = new Subscription()

  constructor(private _recipeService : RecipeService) { }

  ngOnInit(): void {
    this.subscription.add(
      this._recipeService.getRecipes().subscribe(data=>{
        this.recipeList = data
      })
    )

  }

  public onRecipeItemClick(recipe: IRecipe, index: number){
      this.recipeList.forEach(element => {
        element.selected = false
      });
      recipe.selected = true

      this.subscription.add(    
        this._recipeService.setSingleRecipe(recipe, index)
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
