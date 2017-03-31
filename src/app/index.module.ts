import { RootComponent, routing } from './routes';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    RootComponent,
    HelloComponent
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule {}
