import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit, OnDestroy {

  public recipe: IRecipe;
  public subscription: Subscription = new Subscription();
  constructor(private _recipeService : RecipeService) { }

  ngOnInit(): void {
    this.subscription.add(
      this._recipeService.getSeingleRecipe().subscribe(data=>{
        this.recipe = data;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public onClickConfirm(): void{
    this.recipe.isConfirmed = this.recipe.isConfirmed? false : true
  }

  public onClickArchive(): void{
    this.recipe.isArchived = true   
  }
}
