import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CatComponent } from './cat/cat.component';
import { CatsService } from '../services/cats.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,

    FetchDataComponent,
    CatComponent
  ],
  imports: [
    MatProgressBarModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: CatComponent, pathMatch: 'full' },

      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'app-cat', component: CatComponent },
    ])
  ],
  providers: [CatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
