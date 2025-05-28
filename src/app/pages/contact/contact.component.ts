import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Footer3Component } from "../../components/footer3/footer3.component";

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, Footer3Component],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isSubmited = false;
  isValid = false;
  contactForm!: FormGroup;

  contact={
    phone:'+91 120 311 6517',
    email:'unlistedequities@gmail.com'
  }


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // You can add multiple validators
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async handleSubmit() {
    if (this.contactForm.valid) {
      this.isSubmited = true;
      this.contactForm.reset();
      await this.sleep(3000); // Wait 2 seconds
      this.isSubmited = false;
    }
  }
}
