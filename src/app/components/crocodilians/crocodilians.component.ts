import { Component, OnInit } from '@angular/core';
import { CrocodiliansService } from '../../service/crocodilians/crocodilians.service';
import { Crocodilian } from '../../shared';

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

  /**
   * Method to get all crocodilians
   */
  getCrocodilians() {
    this.crocoliansService.getCrocodilians().subscribe(
      data => {
        this.crocodilianData = data;
        console.log(data);
        console.log(data[0]);
        if (data) {
          this.setNameImages(data);
        }
      },
      error => {
        this.errorCrocodilian.push(error);
      }
    );
  }

  /**
   * Method to change image's route
   */
  setNameImages(data) {
    this.crocodilian = data.map(obj =>
      Object.assign({}, obj, { image: 'assets/crocodiles-list/' + obj.image })
    );
  }

  /**
   * Method to get image selected
   */
  imageSelected(image) {
    this.image = image;
  }
}
