import {Component, OnInit} from '@angular/core';
import {Hero} from "../../models/hero.model";
import {dataFake} from "../../data/dataFake";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  heroBigCard: Hero = dataFake[0];
  herosSmallCard: Hero[] = dataFake.filter((hero: Hero) => this.getItemId(hero));

  constructor() {
  }

  ngOnInit(): void {
  }

  private getItemId(hero: Hero): Hero | null {
    if (Number(hero.id) > 1 && Number(hero.id) <= 4) return hero;
    return null;
  }
}
