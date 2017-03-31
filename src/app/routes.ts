import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HelloComponent } from './hello.component';

@Component({
  selector: 'fountain-root',
  template: '<router-outlet></router-outlet>'
})
export class RootComponent {}

export const routes: Routes = [{
  path: '',
  component: HelloComponent
}];

export const routing = RouterModule.forRoot(routes);
