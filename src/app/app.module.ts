import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HeroesComponent} from './views/hero/heroes/heroes.component';
import {HeroDetailComponent} from './views/hero/hero-detail/hero-detail.component';
import {MessagesComponent} from './views/message/messages.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';

import {HeroService} from './service/hero.service';
import {MessageService} from './service/message.service';

import {AppRoutingModule} from './app-routing.module';
import {HeroSearchComponent} from './views/hero/hero-search/hero-search.component';

@NgModule({
  // 声明
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  // 外部模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  // 提供
  providers: [
    MessageService,
    HeroService,
    HttpClient
  ],
  // 元数据
  schemas: [],
  bootstrap: [AppComponent]
})

// 声明了应用中的所有组件
export class AppModule {
}
