import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-table',
  templateUrl: './sort-table.component.html',
  styleUrl: './sort-table.component.scss'
})
export class SortTableComponent {
  tableData: any[] = [
    { age: 32, first: 'Dylan 1', living: true, dob: '10/25/1988' },
    { age: 31, first: 'Dylan 2', living: true, dob: '10/25/1990' },
    { age: 20, first: 'Dylan 3', living: false, dob: '10/25/1995' },
    { age: 35, first: 'Dylan 4', living: true, dob: '10/25/1987' },
  ];

  sortDirection = true;

  sort(headerData: { key: string, value: any }) {
    const { key, value } = headerData;
    this.sortDirection = !this.sortDirection;

    switch (true) {
      case typeof value === 'boolean':
        this.sortBoolean(key);
        break;
      case typeof value === 'number':
        this.sortNumber(key);
        break;
      case this.isDate(value):
        this.sortDate(key);
        break;
      case typeof value === 'string':
        this.sortString(key)
        break;
    }
  }

  private isDate(value: any): boolean {
    const parseDate = Date.parse(value);
    return isNaN(value) && !isNaN(parseDate);
  }

  private sortDate(key: any): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        console.log(new Date(value1[key]).getTime() - new Date(value2[key]).getTime())
        return new Date(value1[key]).getTime() - new Date(value2[key]).getTime();
      } else {
        return new Date(value2[key]).getTime() - new Date(value1[key]).getTime();
      }
    })
  }

  private sortBoolean(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key])
      }
    })
  }

  private sortNumber(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      if (this.sortDirection) {
        return Number(value1[key]) - Number(value2[key]);
      } else {
        return Number(value2[key]) - Number(value1[key])
      }
    })
  }

  private sortString(key: string): void {
    this.tableData.sort((value1: any, value2: any) => {
      const value1UpperCased = value1[key].toUpperCase();
      const value2UpperCased = value2[key].toUpperCase();

      if (this.sortDirection) {
        if (value1UpperCased > value2UpperCased) {
          return -1;
        }
        if (value2UpperCased > value1UpperCased) {
          return 1;
        }
        return 0;
      } else {
        if (value2UpperCased > value1UpperCased) {
          return -1;
        }
        if (value1UpperCased > value2UpperCased) {
          return 1;
        }
        return 0;
      }
    })
  }
}
