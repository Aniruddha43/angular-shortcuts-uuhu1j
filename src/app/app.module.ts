import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ShortcutModule } from './shortcut/shortcut.module';

const shortcutConfig = [
  {
    id: "save",
    key: "F1" 
  }
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ShortcutModule.forRoot(shortcutConfig) ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
