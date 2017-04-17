import { RootComponent, routing } from './routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HelloComponent } from './hello.component';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';


@NgModule({
  imports: [
    BrowserModule,
    routing,
    UserModule
  ],
  declarations: [
    RootComponent,
    HelloComponent
  ],
  bootstrap: [ RootComponent ]
})
export class AppModule {}
