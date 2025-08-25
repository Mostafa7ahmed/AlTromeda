import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AOS from 'aos';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-page-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.scss'
})
export class PageHeader {
  @Input() title: string = '';
  @Input() breadcrumb: string = '';

    ngOnInit(): void {
    AOS.init({ once: true });
  }
}
