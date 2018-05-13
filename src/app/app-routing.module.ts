import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './views/hero/heroes/heroes.component';
import {DashboardComponent} from 'app/views/dashboard/dashboard.component';
import {HeroDetailComponent} from './views/hero/hero-detail/hero-detail.component';
import {Code404Component} from './views/code404/code404.component';

// 路由入口
const routes: Routes = [
  // 默认路由
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  // 通配
  {path: '**', component: Code404Component}
];

@NgModule({
  imports: [
    /** 提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航 */
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


