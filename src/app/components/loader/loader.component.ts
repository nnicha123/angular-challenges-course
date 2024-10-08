import { Component, Input, OnInit } from '@angular/core';
import { LoaderType } from './loader-type.enum';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent implements OnInit {
  @Input() public isLoading: boolean = false;
  @Input() public loaderType: LoaderType = LoaderType.Circular;
  public LoaderType = LoaderType;

  public get loadingText(){
    return `${this.loading}${this.loadingPeriods}`;
  }

  private loadingPeriods = '.\0\0'
  private loading = 'Loading';

  public ngOnInit(): void {
      if(this.loaderType === LoaderType.Loading){
        this.updateLoaderPeriods();
      }
  }

  private updateLoaderPeriods(){
    let currentStep = 0;
    setInterval(() => {
      switch(currentStep % 3){
        case 0: 
          this.loadingPeriods = "..\0";
          currentStep++;
          break;
        case 1: 
          this.loadingPeriods = "...";
          currentStep++;
          break;
        case 2: 
          this.loadingPeriods = ".\0\0";
          currentStep = 0;
          break;
      }
    }, 500);
  }
}
