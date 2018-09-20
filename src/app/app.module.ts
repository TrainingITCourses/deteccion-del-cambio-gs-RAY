import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchCriteriaComponent } from './shared/search-criteria/search-criteria.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchValuesComponent } from './shared/search-values/search-values.component';
import { LaunchesComponent } from './launches/launches.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchCriteriaComponent,
    SearchValuesComponent,
    LaunchesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
