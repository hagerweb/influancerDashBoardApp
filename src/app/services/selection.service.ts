import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {
  private selectedFilterSource = new BehaviorSubject<string>('Month');
  selectedFilter$ = this.selectedFilterSource.asObservable();

  setSelectedFilter(filter: string) {
    this.selectedFilterSource.next(filter);
  }
  
}
