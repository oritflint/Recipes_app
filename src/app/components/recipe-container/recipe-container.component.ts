import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { NewRecipeComponent } from '../new-recipe/new-recipe.component';

@Component({
  selector: 'app-recipe-container',
  templateUrl: './recipe-container.component.html',
  styleUrls: ['./recipe-container.component.scss']
})
export class RecipeContainerComponent implements OnInit, OnDestroy {
  
  private subscription: Subscription = new Subscription()

  public recipeList: IRecipe[];
  public recipe: IRecipe;

  constructor(public dialog: MatDialog, private _recipeService : RecipeService) {}

  
  ngOnInit(): void {
    this.subscription.add(
      this._recipeService.getSelectedRecipe().subscribe((data)=>{
        this.recipe = data
      })
    );
    
    this.subscription.add(
      this._recipeService.getRecipes().subscribe(data=>{
        this.recipeList = data
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(NewRecipeComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.recipe = result;
    });
  }

}
