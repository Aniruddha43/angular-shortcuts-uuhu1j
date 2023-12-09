import { InjectionToken } from '@angular/core';
import { ShortcutMap } from '../models/shortcut-map';
/**
 * This is not a real service, but it looks like it from the outside.
 * It's just an InjectionTToken used to import the config object, provided from the outside
 */
export const ShortcutConfigService = new InjectionToken<ShortcutMap>("ShortcutMap");
