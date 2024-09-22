import { Component, EventEmitter, Input, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrl: './debounce-search.component.scss'
})
export class DebounceSearchComponent {
  searchTerm = '';
  @Input() placeholder = 'Search';
  @Output() searchUpdate = new EventEmitter<string>();
  private searchUpdate$ = new Subject<string>();

  constructor() {
    this.searchUpdate$.pipe(
      debounceTime(550),
      distinctUntilChanged()
    ).subscribe(value => {
      console.log('In searchUpdate$ pipe ' + value)
      this.searchUpdate.emit(value)
    })
  }

  updateSearchTerm(term: string): void {
    console.log('in updateSearchTerm ' + term)
    this.searchUpdate$.next(term);
  }
}
