import { Component, OnInit } from '@angular/core';
import {Link} from '../../types';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss'],
  animations: [
    trigger('slideResponsiveNav', [
      state('shown', style({
        clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 0 0)',
      })),

      state('hidden', style({
        clipPath: 'polygon(100% 0, 100% 0, 0 0, 0 0)',
      })),

      transition('shown => hidden', [
        animate('0.3s')
      ]),

      transition('hidden => shown', [
        animate('0.3s')
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
