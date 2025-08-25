import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-augment',
  imports: [],
  templateUrl: './augment.html',
  styleUrl: './augment.scss'
})
export class Augment {

      ngOnInit(): void {
      AOS.init({ once: true });
    }
}
