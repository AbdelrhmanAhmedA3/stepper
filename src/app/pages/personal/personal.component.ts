import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TicketService } from '../../core/services/personal-information.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [FormsModule,CommonModule,ButtonModule,CardModule,InputTextModule,InputMaskModule],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.scss'
})
export class PersonalComponent implements OnInit {
  personalInformation: any;

  submitted: boolean = false;

  constructor(public pService: TicketService, private router: Router) {}

  ngOnInit() {
      this.personalInformation = this.pService.getTicketInformation().personalInformation;
  }

  nextPage() {
      if (this.personalInformation.firstname && this.personalInformation.lastname && this.personalInformation.phone) {
          this.pService.ticketInformation.personalInformation = this.personalInformation;
          this.router.navigate(['/home/seat']);

          return;
      }

      this.submitted = true;
  }
}
