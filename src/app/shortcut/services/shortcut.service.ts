import { Injectable, ElementRef,Inject } from '@angular/core';
import { Shortcut } from '../models/shortcut';
import { ShortcutConfig } from '../models/shortcut-config';
import { ShortcutConfigService } from './shortcut-config.service';

@Injectable()
export class ShortcutService {
  private shortcuts: Shortcut[] = []
  private shortcutConfig: ShortcutConfig[];

  constructor(@Inject(ShortcutConfigService) private config) {
      this.shortcutConfig = config;
  }
  
  resetConfig() {
    this.shortcutConfig = [];
  }

  updateConfig(config:ShortcutConfig[]) {
    this.shortcutConfig = config;
  }

  push(shortcut: Shortcut) {
    let foundedShortcut = this.shortcutConfig.find(data=> shortcut.key === data.id && shortcut.ctrlKey === data.ctrlKey && shortcut.altKey === data.altKey && shortcut.shiftKey === data.shiftKey);

    if (foundedShortcut) {
      shortcut.key = foundedShortcut.key;
      shortcut.altKey = foundedShortcut.altKey ? foundedShortcut.altKey : false;
      shortcut.ctrlKey = foundedShortcut.ctrlKey ? foundedShortcut.ctrlKey : false;
      shortcut.shiftKey = foundedShortcut.shiftKey ? foundedShortcut.shiftKey : false;
    } else {
      shortcut.altKey = shortcut.altKey ? shortcut.altKey : false;
      shortcut.ctrlKey = shortcut.ctrlKey ? shortcut.ctrlKey : false;
      shortcut.shiftKey = shortcut.shiftKey ? shortcut.shiftKey : false;
    }

    this.shortcuts.push(shortcut);
  } 

  remove(shortcutObj: Shortcut) {
    this.shortcuts = this.shortcuts.filter(shortcut=> shortcut !== shortcutObj);
  }

  fire(event: KeyboardEvent) {
    let foundedShortcut = this.findShortcut(event);

    if (foundedShortcut) {
      if (foundedShortcut.action instanceof ElementRef) {
        foundedShortcut.action.nativeElement.click();
      } else {
        foundedShortcut.action();
      } 
 
      if (foundedShortcut.preventDefault) {
        event.preventDefault();
      }
    }
  }

  private findShortcut(event: KeyboardEvent): Shortcut {
    let foundedShortcuts = this.shortcuts
      .filter(shortcut=> shortcut.key === event.key && shortcut.ctrlKey === event.ctrlKey && shortcut.altKey === event.altKey && shortcut.shiftKey === event.shiftKey);

    let max: Shortcut = null;
    if (foundedShortcuts.length > 0) {
      max = foundedShortcuts.reduce((prev, current) => (prev.priority > current.priority) ? prev : current);
    }  

    return max;
  }
}
