import { Component, OnInit } from '@angular/core';
import { CrocodiliansService } from '../../service/crocodilians/crocodilians.service';
import { Crocodilian } from '../../interface/crocodilian';

@Component({
  selector: 'app-crocodilians',
  templateUrl: './crocodilians.component.html',
  styleUrls: ['./crocodilians.component.scss']
})
export class CrocodiliansComponent implements OnInit {
  crocodilianData: Crocodilian;
  crocodilian = [];
  errorCrocodilian = [];
  image: string;

  constructor( private crocoliansService: CrocodiliansService ) { }

  ngOnInit() {
    this.getCrocodilians();
  }

  getCrocodilians() {
    this.crocoliansService.getCrocodilians().subscribe(
      data => {
        this.crocodilianData = data;
        if (data) {
          this.setNameImages(data);
        }
      },
      error => {
        this.errorCrocodilian.push(error);
      }
    );
  }

  setNameImages(data) {
    this.crocodilian = data.map(obj =>
      Object.assign({}, obj, { image: 'assets/crocodiles-list/' + obj.image })
    );
  }

  imageSelected(image) {
    this.image = image;
  }
}
