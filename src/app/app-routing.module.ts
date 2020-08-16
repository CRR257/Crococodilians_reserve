import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrocodiliansComponent } from './components/crocodilians/crocodilians.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { VideoComponent } from './components/video/video.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'crocodilians', component: CrocodiliansComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'video', component: VideoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
