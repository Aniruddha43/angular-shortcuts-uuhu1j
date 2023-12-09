import { ElementRef  } from '@angular/core';

export class Shortcut {
  private _key: string;
  private _priority: number = 0;
  private _action: (()=>void) | ElementRef;
  private _ctrlKey: boolean;
  private _altKey: boolean;
  private _shiftKey: boolean;
  private _preventDefault: boolean;

  constructor(
    key: string,
    action: (()=>void) | ElementRef,
    options?: {
      priority?: number,
      ctrlKey?: boolean,
      altKey?: boolean,
      shiftKey?: boolean,
      preventDefault?: boolean,
    }
  ) {
    this._key = key;
    this._action = action;
    this._priority = options && options.priority ? options.priority : 0;
    if (options) { 
      this._ctrlKey = options.ctrlKey;
      this._altKey = options.altKey;
      this._shiftKey = options.shiftKey;
      this._preventDefault = options.preventDefault;
    }

  }


  get key(): string {
    return this._key;
  }

  set key(value: string) {
    this._key = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }

  get action(): (() => void) | ElementRef<any> {
    return this._action;
  }

  set action(value: (() => void) | ElementRef<any>) {
    this._action = value;
  }

  get ctrlKey(): boolean {
    return this._ctrlKey;
  }

  set ctrlKey(value: boolean) {
    this._ctrlKey = value;
  }

  get altKey(): boolean {
    return this._altKey;
  }

  set altKey(value: boolean) {
    this._altKey = value;
  }

  get shiftKey(): boolean {
    return this._shiftKey;
  }

  set shiftKey(value: boolean) {
    this._shiftKey = value;
  }

  get preventDefault(): boolean {
    return this._preventDefault;
  }

  set preventDefault(value: boolean) {
    this._preventDefault = value;
  }
}
