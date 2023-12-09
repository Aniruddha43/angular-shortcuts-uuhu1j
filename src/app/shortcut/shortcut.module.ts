import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';
import { ShortcutConfig } from './models/shortcut-config';
import { ShortcutService, ShortcutConfigService } from './services';
import { ShortcutDirective } from './directives/shortcut.directive';

@NgModule({
    declarations: [ShortcutDirective],
    exports: [ShortcutDirective]
})
export class ShortcutModule {

  static forRoot(config: ShortcutConfig[]): ModuleWithProviders {
    return {
      ngModule: ShortcutModule,
      providers: [
        ShortcutService,
        {
          provide: ShortcutConfigService,
          useValue: config
        }
      ]
    }
  }
}