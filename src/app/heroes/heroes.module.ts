import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './componentes/heroes/hero/hero.component';
import { ListComponent } from './componentes/heroes/list/list.component';



@NgModule({
    declarations:[HeroComponent , ListComponent],
    exports:[HeroComponent , ListComponent],
    imports:[CommonModule]
})
export class HeroesModule{

}
