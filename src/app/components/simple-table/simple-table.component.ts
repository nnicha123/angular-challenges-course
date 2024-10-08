import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrl: './simple-table.component.scss'
})
export class SimpleTableComponent {
  @Input() tableData: any[] = [
    { first: 'Dylan 1', last: 'Israel', dob: '10/25/1987' },
    { first: 'Dylan 2', last: 'Israel', dob: '10/25/1987' },
    { first: 'Dylan 3', last: 'Israel', dob: '10/25/1987' },
    { first: 'Dylan 4', last: 'Israel', dob: '10/25/1987' },
  ];

  @Output() headerSelected = new EventEmitter<{ key: string, value: any }>();
  
  headerSelection(key: string, value: any): void {
    this.headerSelected.emit({ value, key });
  }
}
