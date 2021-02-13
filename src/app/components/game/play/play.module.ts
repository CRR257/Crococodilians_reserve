import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play.component';
import { PlayRoutingModule } from './play-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PlayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PlayRoutingModule
  ]
})

export class PlayModule { }
