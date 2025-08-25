import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Future } from "../../components/future/future";

@Component({
  selector: 'app-home',
  imports: [Hero, Future],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
