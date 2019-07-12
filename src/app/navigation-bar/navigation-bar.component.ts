import { Component, OnInit } from '@angular/core';
import {Link} from '../../types';
import {animate, state, style, transition, trigger} from '@angular/animations';

const show = 'polygon(100% 0, 100% 100%, 0 100%, 0 0)';
const hide = 'polygon(100% 0, 100% 0, 0 0, 0 0)';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('slideResponsiveNav', [
      transition(':enter', [
        style({
          clipPath: hide,
        }),
        animate('0.3s', style({
          clipPath: show,
        }))
      ]),

      transition(':leave', [
        style({
          clipPath: show,
        }),
        animate('0.3s', style({
          clipPath: hide,
        }))
      ]),
    ])
  ]
})
export class NavigationBarComponent {

  constructor() { }

  private leftLinks: Link[] = [
    { path: '', text: 'Home' },
    { path: '/history', text: 'History' }
  ];

  private rightLinks: Link[] = [
    { path: '/login', text: 'Login' }
  ];

  private showResponsiveMenu = false;

  joinLinks(): Link[] {
    return this.leftLinks.concat(this.rightLinks);
  }

  toggleResponsiveMenu(): void {
    this.showResponsiveMenu = !this.showResponsiveMenu;
  }

  log() {
    console.log('heyy');
  }
}
