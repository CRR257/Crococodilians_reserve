import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  letsPlay() {
    this.router.navigate(["../play"],{relativeTo: this.route});
  }

}
