import { Component } from '@angular/core';
import { AccordionItem } from '../accordin/accodion-item.interface';
import { LoaderType } from '../loader/loader-type.enum';

@Component({
  selector: 'app-component-documentation',
  templateUrl: './component-documentation.component.html',
  styleUrl: './component-documentation.component.css'
})
export class ComponentDocumentationComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example Content 1',
      isExpanded: false
    },
    {
      title: 'Example 2',
      content: 'Example Content 2',
      isExpanded: false
    },
  ]

  progressValue: number = 25;
  loaderType: LoaderType = LoaderType.Loading;
}
