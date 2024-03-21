import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CardModule, ButtonModule, RouterLink],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent implements OnInit {
  personal:any;
  select:any;
  addOns:any;

  constructor(private router: Router) { }
  ngOnInit() {
    if (typeof localStorage !== 'undefined') {
      // Safely access localStorage
      this.personal = localStorage.getItem("personal");
      this.personal = this.personal ? JSON.parse(this.personal) : null;

      this.select = localStorage.getItem("select");
      this.select = this.select ? JSON.parse(this.select) : null;

      this.addOns = localStorage.getItem("add-ons");
      this.addOns = this.addOns ? JSON.parse(this.addOns) : null;
    }


  }

  nextPage() {
    this.router.navigate(['/home/thank-you']);
  }

  prevPage() {
    this.router.navigate(['/home/add-ons']);
  }
}
