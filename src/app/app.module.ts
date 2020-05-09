import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { B2cStorefrontModule } from '@spartacus/storefront';

import { translations, translationChunksConfig } from '@spartacus/assets';
import { HeroComponent } from './hero/hero.component';

import { KapilfeatureModule } from './kapilfeature/kapilfeature.module';

import { KapillayoutModule } from './kapilfeature/kapillayout/kapillayout.module';

import { KapildatabindingModule } from './kapilfeature/kapildatabinding/kapildatabinding.module';

@NgModule({
  imports: [
    BrowserModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          //baseUrl : 'https://storefront.c39j2-walkersde1-d4-public.model-t.cc.commerce.ondemand.com'
          baseUrl: 'https://electronics.local:9002',
        },
      },
      context: {
        baseSite: ['electronics-spa'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    //KapilfeatureModule,
    // KapillayoutModule,
    KapildatabindingModule,
  ],
  declarations: [AppComponent, HeroComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
