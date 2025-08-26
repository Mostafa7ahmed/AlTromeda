import { Component } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import * as AOS from 'aos';
@Component({
  selector: 'app-about',
  imports: [PageHeader],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }
}
