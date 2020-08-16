import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../../service/images/images.service';
import { Images } from '../../interface/images';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  images: Array<Images>;
  imagesCarrousel = [];
  imagesError = [];

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.getImages();
  }

  getImages() {
    this.imageService.getImages().subscribe(
      data => {
        if (data) {
          this.getNameImages(data);
        }
      },
      error => {
        this.imagesError.push(error);
      }
    );
  }

  getNameImages(data) {
    data.forEach(element => {
      this.imagesCarrousel.push('assets/carousel/' + element.name);
    });
  }
}
