import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InoElementsModule } from '@inovex.de/elements-angular';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    InoElementsModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
