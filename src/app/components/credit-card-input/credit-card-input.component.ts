import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-credit-card-input',
  templateUrl: './credit-card-input.component.html',
  styleUrl: './credit-card-input.component.scss'
})
export class CreditCardInputComponent {
  @Input() creditCardNumber: string = '';
  private readonly = false;
  get isReadOnly() {
    return this.readonly;
  }
  @Input() set isReadOnly(value: boolean) {
    this.creditCardNumber = value ? this.formatReadOnlyCCNum(this.creditCardNumber) : this.creditCardNumber;
    this.readonly = value;
  }

  private formatReadOnlyCCNum(ccNum:string):string{
    const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
    const onlyLast4Shown = parts.map((part, index) => {
      if(index === parts.length -1){
        return part;
      }
      return 'xxxx';
    })
    return onlyLast4Shown.join('-')
  }
}
