import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CrocodiliansComponent } from './components/crocodilians/crocodilians.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './components/quiz/quiz.component';
import { VideoComponent } from './components/video/video.component';
import { GameComponent } from './components/game/game.component';
import { PlayComponent } from './components/game/play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    CrocodiliansComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    CarouselComponent,
    QuizComponent,
    VideoComponent,
    GameComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
