import { Component } from '@angular/core';

@Component({
  selector: 'app-studant-subscribe',
  templateUrl: './studant-subscribe.component.html',
  styleUrls: ['./studant-subscribe.component.css']
})
export class StudantSubscribeComponent {
  tabs = [
    {
      id: 'month',
      label: 'Month',
      active: true, // Default selected tab
      data: [
        { number: '10 Students', month: 'April', start: '02/04/2024', end: '02/05/2024' },
        { number: '20 Students', month: 'May', start: '02/05/2024', end: '02/06/2024' },
        { number: '0 Students', month: 'June', start: '-', end: '-' },
        { number: '100 Students', month: 'July', start: '02/07/2024', end: '02/08/2024' }
      ]
    },
    {
      id: 'six-months',
      label: '6-Months',
      active: false,
      data: [
        { number: '15 Students', month: 'April', start: '02/04/2024', end: '02/10/2024' },
        { number: '30 Students', month: 'May', start: '02/05/2024', end: '02/11/2024' },
        { number: '5 Students', month: 'June', start: '02/06/2024', end: '02/12/2024' },
        { number: '120 Students', month: 'July', start: '02/07/2024', end: '02/01/2025' }
      ]
    },
    {
      id: 'yearly',
      label: 'Yearly',
      active: false,
      data: [
        { number: '50 Students', month: 'April', start: '02/04/2024', end: '02/04/2025' },
        { number: '70 Students', month: 'May', start: '02/05/2024', end: '02/05/2025' },
        { number: '10 Students', month: 'June', start: '02/06/2024', end: '02/06/2025' },
        { number: '150 Students', month: 'July', start: '02/07/2024', end: '02/07/2025' }
      ]
    }
  ];

  activeTab = this.tabs[0]; // Default active tab

  setActiveTab(tab: any) {
    this.activeTab = tab;
  }
}
