import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible; // تغيير الحالة بين true/false
  }
  @Input() isSidebarVisible: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isSidebarVisible = false;
      }
    });
  }

  closeSidebar() {
    this.isSidebarVisible = false;
  }
}
