import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  public name: string = 'Iron maden';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}` ;
  }


  public changeName():void{
    this.name = 'Spiderman';
  }

  public changeAge():void{
    this.age = 28;
  }

  public resetButtons():void{
    this.name = 'Iron maden';
    this.age = 45;
  }

}
