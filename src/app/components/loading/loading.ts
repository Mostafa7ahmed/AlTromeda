import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  imports: [],
  templateUrl: './loading.html',
  styleUrl: './loading.scss'
})
export class Loading {
hideLoader = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.hideLoader = true;
      this.router.navigate(['/home']); 
    }, 3000);
  }
}
