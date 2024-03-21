import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-add-ons',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './add-ons.component.html',
  styleUrl: './add-ons.component.scss',
})
export class AddOnsComponent {
  form: FormGroup = new FormGroup({
    Online: new FormControl('', [Validators.required]),
    Larger: new FormControl('', [Validators.required]),
    profile: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  nextPage() {
    // if (
    //   this.form.controls['name'].value != '' ||
    //   this.form.controls['email'].value != '' ||
    //   this.form.controls['phone'].value != ''
    // ) {
      localStorage.setItem(
        'add-ons',
        JSON.stringify({
          Online: this.form.controls['Online'].value[0],
          Larger: this.form.controls['Larger'].value[0],
          profile: this.form.controls['profile'].value[0],
        })
      );
      this.router.navigate(['/home/summary']);
  }

  prevPage() {
    this.router.navigate(['/home/seat']);
  }
}
