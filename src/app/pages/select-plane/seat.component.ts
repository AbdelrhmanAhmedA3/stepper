import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-seat',
  standalone: true,
  imports: [CardModule,ButtonModule,RadioButtonModule,FormsModule,],
  templateUrl: './seat.component.html',
  styleUrl: './seat.component.scss'
})
export class SeatComponent {
  ingredient!: string;
  constructor( private router: Router) {}

  nextPage() {

    this.router.navigate(['/home/add-ons']);
}

prevPage() {
    this.router.navigate(['/home/personal']);
}
}
