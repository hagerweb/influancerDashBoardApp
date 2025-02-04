import { Component } from '@angular/core';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  activeTab: string = 'bank';
  balance: number = 200;

  bankData = {
    mobile: '',
    accountHolderName: '',
    amount: 0
  };

  stcData = {
    bankName: '',
    accountNumber: '',
    accountHolderName: '',
    accountType: '',
    iban: '',
    amount: 0
  };

  withdrawalHistory = [
    { date: 'January 10, 2025', method: 'Bank Transfer', amount: '200.00 SAR', status: 'Completed' },
    { date: 'January 5, 2025', method: 'STC', amount: '200.00 SAR', status: 'Completed' }
  ];


  switchTab(tab: string): void {
    this.activeTab = tab;
  }


  submitBankTransfer(): void {
    console.log('Bank Transfer Data:', this.bankData);
    alert('Bank Transfer request submitted.');
  }


  submitSTC(): void {
    console.log('STC Data:', this.stcData);
    alert('STC request submitted.');
  }
}
