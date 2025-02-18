import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isSidebarVisible: boolean = false;
  currentTitle: string = 'Dashboard';
  currentFilter: string = '';
  currentUrl: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private selectionService: SelectionService
  ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          this.currentUrl = this.router.url; // حفظ مسار الصفحة الحالية
          return this.getTitle(this.router.routerState.root);
        })
      )
      .subscribe(title => {
        this.currentTitle = title;
      });

    this.selectionService.selectedFilter$.subscribe(filter => {
      this.currentFilter = filter;
    });
  }

  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }

  private getTitle(route: ActivatedRoute): string {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route.snapshot.data['title'] || 'Dashboard';
  }
}
