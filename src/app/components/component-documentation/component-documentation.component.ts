import { Component } from '@angular/core';
import { AccordionItem } from '../accordin/accodion-item.interface';
import { LoaderType } from '../loader/loader-type.enum';
import { RibbonType } from '../ribbon/ribbon-type.enum';
import { RibbonLocation } from '../ribbon/ribbon-location.enum';
import { ButtonMeta } from '../button-toggle/button-meta.model';

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

  tabs: { title: string, active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false }
  ]

  selectedTab = 0;

  progressValue: number = 25;
  loaderType: LoaderType = LoaderType.Loading;
  toggleValue: boolean = false;

  RibbonType = RibbonType;
  RibbonLocation = RibbonLocation;
  ribbonStyle = { type: RibbonType.Info, location: RibbonLocation.TopRight }

  buttonToggleOptions:ButtonMeta[] = [
    new ButtonMeta({id:1, title:'Bold'}),
    new ButtonMeta({id:2, title:'Italic'}),
    new ButtonMeta({id:3, title:'Underline'})
  ]

  debounceExampleMethod(value: string): void {
    console.log('Component Documentation', value)
  }

}
