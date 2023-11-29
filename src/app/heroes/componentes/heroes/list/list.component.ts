import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent
{
  public heroNames: string[];
  public lastHero: string | undefined;

  constructor()
  {
    this.lastHero = '';
    this.heroNames = ['Spiderman' , 'Ironman' , 'Hulk' , 'Antonio','Thor' ,'Chapulin Colorado' , 'Linterna verde'].sort();
  }

  public removerLastHero():void
  {
    this.lastHero = this.heroNames.pop();
  }

}
