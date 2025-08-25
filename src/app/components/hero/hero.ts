import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
    ngOnInit(): void {
    AOS.init({ once: true });
  }
}
