import { NgModule } from "@angular/core";
import { Routes, RouterModule} from '@angular/router';
import { GameComponent } from "./game.component";

export const routes: Routes = [
  {path: '', component: GameComponent, children: [
    {path: '/game/play', loadChildren: () => import('./play/play.module').then(m => m.PlayModule) }
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GameRoutingModule { }
