import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import * as AOS from 'aos';
@Component({
  selector: 'app-workplace',
  imports: [CommonModule],
  templateUrl: './workplace.html',
  styleUrls: ['./workplace.scss']
})
export class Workplace implements OnInit {
  outerIcons = [
    'Icons/Angular.svg',
    'Icons/Android.svg',
    'Icons/Bootstrap.svg',
    'Icons/Flutter.svg',
  ];

  innerIcons = [
    'Icons/C.svg',
    'Icons/Swagger.svg',
    'Icons/PostgresSQL.svg',
    'Icons/NET core.svg',
    'Icons/Azure SQL Database.svg',

  ];
  outerPositions: { x: number, y: number }[] = [];
  innerPositions: { x: number, y: number }[] = [];

  private angleOuter = 0;
  private angleInner = 0;

  private radiusOuter = 160;
  private radiusInner = 100;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.outerPositions = this.outerIcons.map(() => ({ x: 0, y: 0 }));
    this.innerPositions = this.innerIcons.map(() => ({ x: 0, y: 0 }));
      AOS.init({ once: true });

    this.animate();
  }

  private animate() {
    this.angleOuter += 0.5;
    this.angleInner -= 0.7;

    this.outerIcons.forEach((_, index) => {
      const offset = (360 / this.outerIcons.length) * index;
      const rad = (this.angleOuter + offset) * (Math.PI / 180);
      this.outerPositions[index] = {
        x: 200 + this.radiusOuter * Math.cos(rad) - 25,
        y: 200 + this.radiusOuter * Math.sin(rad) - 25
      };
    });

    this.innerIcons.forEach((_, index) => {
      const offset = (360 / this.innerIcons.length) * index;
      const rad = (this.angleInner + offset) * (Math.PI / 180);
      this.innerPositions[index] = {
        x: 200 + this.radiusInner * Math.cos(rad) - 20,
        y: 200 + this.radiusInner * Math.sin(rad) - 20
      };
    });

    this.cdr.detectChanges();

    requestAnimationFrame(() => this.animate());
  }


   
}
