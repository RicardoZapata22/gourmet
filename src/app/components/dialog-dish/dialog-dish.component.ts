import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dialog-dish',
  templateUrl: './dialog-dish.component.html',
  styleUrls: ['./dialog-dish.component.scss']
})

export class DialogDish implements OnInit {
  static random:any = null;
  static title:string = 'Platillo';
  dish: any = null;
  title: string = '';

  constructor() { }

  async ngOnInit(): Promise<any> {
    this.dish = DialogDish.random;
    this.title = DialogDish.title;

    this.dish.ingredients = [];

    for(let attr in this.dish){
      if(attr.includes('Ingredient') && this.dish[attr] != ""){
        this.dish.ingredients.push(this.dish[attr]);
      }
    }

    this.dish.ingredients = this.dish.ingredients.join(', ');
  }
}
