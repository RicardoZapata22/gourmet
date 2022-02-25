import { Component, OnInit, ViewChild } from '@angular/core';
import { IngredientsProvider} from '../../providers/ingredients.service';
import { GourmetProvider} from '../../providers/gourmet.service';
import * as _l from 'lodash';
import { LoaderComponent } from 'src/app/components/loader/loader.component';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  ingredients: any = null;
  finder: string = '';
  dish:any = null;
  @ViewChild('loader') loader!: LoaderComponent;

  constructor(
    private ingredientsProvider: IngredientsProvider,
    private gourmetProvider: GourmetProvider
  ) { }

  async ngOnInit(): Promise<void> {
    setTimeout(async () => {
      this.loader.show('Cargando ingredientes');
      const resp = await this.ingredientsProvider.getAll();
      this.ingredients = resp.meals;
      this.loader.hide();
    },0);
  }

  getListIngredients() {
    return _l.filter(this.ingredients, item => {
      return item.strIngredient.toLowerCase().includes(this.finder.toLowerCase());
    });
  }

  async getDishesByIngredient(ingredient: any) {
    if(!ingredient.Dishes) {
      const resp = await this.gourmetProvider.getDishesByIngredient(ingredient.strIngredient);
      ingredient.Dishes = resp.meals;
    }
  }

  async openDishDetail(id:any){
    const resp = await this.gourmetProvider.getDishDetailById(id);
    this.dish = resp.meals.pop();


  }

}
