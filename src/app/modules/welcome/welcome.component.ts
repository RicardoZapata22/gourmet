import { Component, Input, OnInit } from '@angular/core';
import { GourmetProvider } from 'src/app/providers/gourmet.service';
import {MatDialog} from '@angular/material/dialog';
import { random } from 'lodash';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  random: any = null;

  constructor(
    private dialog: MatDialog,
    private gourmetProvider: GourmetProvider,
  ) { }

  async ngOnInit(): Promise<any> {
    const resp = await this.gourmetProvider.getRandomDish();
    this.random = resp.meals.pop();
    this.openDialog();
  }

  async openDialog() {
    DialogRandomDish.random = this.random;
    this.dialog.open(DialogRandomDish);
  }
}

@Component({
  selector: 'dialog-dish',
  templateUrl: './dialog-dish.html',
  styleUrls: ['./welcome.component.scss']
})

export class DialogRandomDish implements OnInit {
  static random:any = null;
  dish: any = null;

  constructor() { }

  async ngOnInit(): Promise<any> {
    this.dish = DialogRandomDish.random;

    this.dish.ingredients = [];

    for(let attr in this.dish){
      if(attr.includes('Ingredient') && this.dish[attr] != ""){
        this.dish.ingredients.push(this.dish[attr]);
      }
    }

    this.dish.ingredients = this.dish.ingredients.join(', ');
  }
}
