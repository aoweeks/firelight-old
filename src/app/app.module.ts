import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule, HttpClient } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';

// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { BridgeWindowComponent } from './components/bridge-window/bridge-window.component';
import { SceneComponent } from './components/scene/scene.component';
import { LighttypeComponent } from './components/lighttype/lighttype.component';
import { OnoffswitchComponent } from './components/onoffswitch/onoffswitch.component';
import { FlSelectComponent } from './components/fl-select/fl-select.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ColourPickerComponent } from './components/colour-picker/colour-picker.component';
import { BridgeScreenComponent } from './components/bridge-screen/bridge-screen.component';
import { InfoScreenComponent } from './components/info-screen/info-screen.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { SettingsScreenComponent } from './components/screens/settings-screen/settings-screen.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    WebviewDirective,
    TitleBarComponent,
    BridgeWindowComponent,
    SceneComponent,
    LighttypeComponent,
    OnoffswitchComponent,
    FlSelectComponent,
    ClickOutsideDirective,
    ColourPickerComponent,
    BridgeScreenComponent,
    InfoScreenComponent,
    BackButtonComponent,
    SettingsScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
          path: '',
          pathMatch: 'full',
          component: HomeScreenComponent,
          data: { animation: 'HomeScreen'}
      },
      {
          path: 'bridge',
          component: BridgeScreenComponent,
          data: { animation: 'BridgeScreen'}
      }
    ]),
    FormsModule,
    HttpClientModule,
    // AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  providers: [ElectronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
