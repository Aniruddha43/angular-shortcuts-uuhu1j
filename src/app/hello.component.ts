import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
  <h1>Hello {{name}}!</h1>
  <button (click)="test()" [shortcut]="'save'" [priority]="1">F1 Priority 1</button>
  `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  { 
  @Input() name: string;

  test() {
    alert("F1 Priority 1 Clicked");
  }

}

