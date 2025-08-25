import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-future',
  imports: [],
  templateUrl: './future.html',
  styleUrl: './future.scss'
})
export class Future {
    ngOnInit(): void {
    AOS.init({ once: true });
  }
}
