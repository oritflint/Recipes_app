
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IRecipe } from 'src/app/recipe.interface';
import { RecipeService } from 'src/app/services/recipe.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  @ViewChild("f") form: NgForm; 
  constructor(public dialog: MatDialog, private _recipeService : RecipeService ) { }

  ngOnInit(): void {

  }

  public onNewRecipeSubmit(): void{
    
    const formView = this.form.form.value
    const newRecipe: IRecipe = {
      id: uuidv4(),
      title: formView['title'],
      img_url: formView['img_url'],
      duration_time: formView['duration_time'],
      ingredients: formView['ingredients'],
      preperation: formView['preperation'],
      isConfirmed: false,
      isArchived: false,
      selected: false
    };

    this._recipeService.addNewRecipe(newRecipe);
    console.log(newRecipe)
    this.dialog.closeAll();
  }
}

