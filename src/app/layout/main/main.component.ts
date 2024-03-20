import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { StepsModule } from 'primeng/steps';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet,StepsModule, RouterModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MainComponent {
  items!: MenuItem[] ;

  activeIndex: number = 0;

  constructor() {}

  onActiveIndexChange(event: number) {
      this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'YOUR INFO',
        routerLink: '/home/personal'
      },
      {
        label: 'SELECT PLAN',
        routerLink: '/home/seat'
      },
      {
        label: 'ADD ONS',
        routerLink: '/home/add-ons'
      },
      {
        label: 'SUMMARY',
        routerLink: '/home/summary'
      },

    ];

  }
}
