import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Future } from "../../components/future/future";
import { Augment } from "../../components/augment/augment";
import { Testmonial } from "../../components/testmonial/testmonial";
import { Workplace } from "../../components/workplace/workplace";

@Component({
  selector: 'app-home',
  imports: [Hero, Future, Augment, Testmonial, Workplace],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
