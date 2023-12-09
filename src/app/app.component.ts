import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ShortcutService } from './shortcut/services';
import { Shortcut } from './shortcut/models/shortcut';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular';
  isHelloShow: boolean = false;

  constructor(private shortcutService: ShortcutService) {}

  ngOnInit() {
    console.log('AppComponent Init');
    this.shortcutService.push(new Shortcut('1', () => alert('yenile')));
    this.shortcutService.push(
      new Shortcut('3', () => alert('press 3 nd other'))
    );
    this.shortcutService.push(new Shortcut('3', () => alert('press new')));
  }

  show() {
    alert('F1 Priority 0 Clicked');
    this.isHelloShow = true;
  }

  hide() {
    this.isHelloShow = false;
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    this.shortcutService.fire(event);
  }
}
