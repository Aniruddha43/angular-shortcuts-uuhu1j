import { Directive, HostListener,ElementRef, Input, OnInit, OnDestroy  } from '@angular/core';
import { Shortcut } from '../models/shortcut';
import { ShortcutService } from '../services';

@Directive({
  selector: '[shortcut]'
})
export class ShortcutDirective implements OnInit, OnDestroy {
  @Input('shortcut') key: string;
  @Input('ctrlKey') ctrlKey: boolean;
  @Input('altKey') altKey: boolean;
  @Input('shiftKey') shiftKey: boolean;
  @Input('priority') priority: number = 0;

  private shortcutObj: Shortcut;
  
  constructor(private elementRef: ElementRef, private shortcutService: ShortcutService) {}

  ngOnInit() {
    this.shortcutObj = new Shortcut(this.key, this.elementRef, {
      priority: this.priority,
      altKey: this.altKey,
      shiftKey: this.shiftKey,    
      ctrlKey: this.ctrlKey
    });

    this.shortcutService.push(this.shortcutObj);
  }

  ngOnDestroy() {
    this.shortcutService.remove(this.shortcutObj);
  }
}
