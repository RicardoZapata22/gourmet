import { Component, OnInit } from '@angular/core';
import { IngredientsProvider} from '../../providers/ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(
    private ingredientsProvider: IngredientsProvider
  ) { }

  ngOnInit(): void {
    this.ingredientsProvider.getAll().then(resp => {
      console.log(resp);
    });
  }

}
