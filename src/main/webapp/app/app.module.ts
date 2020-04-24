import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { MonolithoneclickapiSharedModule } from 'app/shared/shared.module';
import { MonolithoneclickapiCoreModule } from 'app/core/core.module';
import { MonolithoneclickapiAppRoutingModule } from './app-routing.module';
import { MonolithoneclickapiHomeModule } from './home/home.module';
import { MonolithoneclickapiEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    MonolithoneclickapiSharedModule,
    MonolithoneclickapiCoreModule,
    MonolithoneclickapiHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    MonolithoneclickapiEntityModule,
    MonolithoneclickapiAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class MonolithoneclickapiAppModule {}
