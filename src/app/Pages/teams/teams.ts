import { Component } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";

import * as AOS from 'aos';
@Component({
  selector: 'app-teams',
  imports: [PageHeader],
  templateUrl: './teams.html',
  styleUrl: './teams.scss'
})
export class Teams {
 ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
  }
}
