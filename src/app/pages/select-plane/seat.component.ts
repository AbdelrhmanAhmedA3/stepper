import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [
    CardModule,
    ButtonModule,
    RadioButtonModule,
    FormsModule,
    InputSwitchModule,
    NgIf,
    NgClass,
    ReactiveFormsModule,
  ],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss',
})
export class SeatComponent {
  checked: boolean = false;
  Arcade: boolean = false;
  Advanced: boolean = false;
  Pro: boolean = false;

  form: FormGroup = new FormGroup({
    selectPlan: new FormControl('', [Validators.required]),
    radio: new FormControl(false, [Validators.required]),
  });

  constructor( private router: Router) {}

  changeStyleAdvanced() {
    this.Arcade = false;
    this.Advanced = true;
    this.Pro = false;
  }

  changeStyleArcade() {
    this.Arcade = true;
    this.Advanced = false;
    this.Pro = false;
  }

  changeStylePro() {
    this.Arcade = false;
    this.Advanced = false;
    this.Pro = true;
  }

  changeLableColor(){
    this.checked=!this.checked;
  }

  nextPage() {
    if (this.form.value) {
      localStorage.setItem("select", JSON.stringify(this.form.value));
      this.router.navigate(['/home/add-ons']);
    } else {
      this.form.markAllAsTouched();
    }
  }

  prevPage() {
    this.router.navigate(['/home/personal']);
  }
}
