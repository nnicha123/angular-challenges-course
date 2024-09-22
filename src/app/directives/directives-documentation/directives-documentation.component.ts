import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-documentation',
  templateUrl: './directives-documentation.component.html',
  styleUrl: './directives-documentation.component.css'
})
export class DirectivesDocumentationComponent {
  log(){
    console.log('Hello World')
  }
}
