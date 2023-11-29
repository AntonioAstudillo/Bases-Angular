import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <h3>Counter class: {{counter}}</h3>
      <button (click)="increaseBy()">+1</button>
      <button (click)="decrementBy()" >-1</button>
      <button (click)="reset()">Reset</button>`
})

export class CounterComponent  {
  public counter:number = 0;


  public increaseBy():void{
    this.counter++;
  }

  public decrementBy():void{

    if(this.counter > 0)
    {
      this.counter--;
    }
  }

  public reset():void{
    this.counter = 0;
  }
}
