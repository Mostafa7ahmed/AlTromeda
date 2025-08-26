import { Component } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import { Future } from "../../components/future/future";

@Component({
  selector: 'app-services',
  imports: [PageHeader, Future],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {

}
