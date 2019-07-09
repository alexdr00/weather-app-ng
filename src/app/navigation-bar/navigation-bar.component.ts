import { Component, OnInit } from '@angular/core';
import {Link} from '../../types';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

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

  ngOnInit() {
  }
}
