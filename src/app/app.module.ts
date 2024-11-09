import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { LightingComponent } from './Pages/lighting/lighting.component';
import { FramesComponent } from './Pages/frames/frames.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ImageModalComponent } from './Layout/image-modal/image-modal.component';
import { BoxesComponent } from './Pages/boxes/boxes.component';
import { AccessoriesComponent } from './Pages/accessories/accessories.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, 'localization/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LightingComponent,
    FramesComponent,
    ImageModalComponent,
    BoxesComponent,
    AccessoriesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
