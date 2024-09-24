import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.scss'
})
export class TabComponent {
  @Input() tabs: { title: string, active: boolean }[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();

  selectTab(selected: {title:string, active:boolean}, index:number):void{
    this.tabs.forEach((tab) => {
      tab.active = (selected === tab);
    });
    this.selectedTabIndex.emit(index);
  }
}
