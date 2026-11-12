import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'element' },
  {
    path: 'element',
    loadComponent: () =>
      import('./pages/element-picker/element-picker').then((m) => m.ElementPickerPage),
  },
  {
    path: 'ngx-mart',
    loadComponent: () =>
      import('./pages/ngx-mart/ngx-mart').then((m) => m.NgxMartPage),
  },
  {
    path: 'emoji-mart',
    loadComponent: () =>
      import('./pages/emoji-mart-picker/emoji-mart-picker').then((m) => m.EmojiMartPage),
  },
];
