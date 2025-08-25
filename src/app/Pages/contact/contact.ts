import { Component, OnInit } from '@angular/core';
import { PageHeader } from "../../components/page-header/page-header";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as AOS from 'aos';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PageHeader, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      address: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    AOS.init({ duration: 1000, once: true });
      this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        AOS.refresh();
      }
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Message Sent!');
    }
  }
}
