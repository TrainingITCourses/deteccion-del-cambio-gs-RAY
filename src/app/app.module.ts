import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchCriteriaComponent } from './shared/search-criteria/search-criteria.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchCriteriaComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
