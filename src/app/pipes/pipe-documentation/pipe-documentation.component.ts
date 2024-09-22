import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-documentation',
  templateUrl: './pipe-documentation.component.html',
  styleUrl: './pipe-documentation.component.scss'
})
export class PipeDocumentationComponent {
  flattenData = [1, 2, [3], [4, [5, 6, [7]]]];
  objectArray: any[] = [];

  modifyFlatten(): void {
    this.flattenData.push(3, 5);
  }

  reassignFlatten(): void {
    this.flattenData = [...this.flattenData];
  }
}
