import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'influancerDashboard';
  isSidebarVisible: boolean = window.innerWidth >= 1024; // يظهر افتراضيًا في الشاشات الكبيرة

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSidebarVisible = window.innerWidth >= 1024; // تحديث عند تغيير حجم الشاشة
  }

  toggleSidebar() {
    if (window.innerWidth < 1024) { // السماح بالتبديل فقط في الشاشات الصغيرة
      this.isSidebarVisible = !this.isSidebarVisible;
    }
  }
}
