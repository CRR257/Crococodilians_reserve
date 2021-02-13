import { Component, OnInit } from '@angular/core';
import { PlayFormService } from './play-form.service';
import { FormGroup } from '@angular/forms';
import data from './play.json'
// import { IconsGame } from '../../../shared';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})

export class PlayComponent implements OnInit {
  gameIcons = [];
  machineIcon: string;
  userChoice: string;
  machineChoice: string;
  result: string

  get form(): FormGroup {
    return this.playFormService.form;
  }

  constructor(private playFormService: PlayFormService) {}

  ngOnInit(): void {
    this.getIcons();
  }

  /**
   * Method to get game's icons
   */
  getIcons() {
    const icons = data.iconsPlay;
    let iconsName = Object.keys(icons);
    let arrayIcons = []
    let defeats = []
    console.log(Object.keys(icons))

    for( let i in icons) {
      arrayIcons.push(icons[i].image);
      defeats.push(Object.assign({icon: icons[i].defeats}))
      //defeats.push(icons[i].defeats)
    }
    console.log(arrayIcons)
    console.log(defeats)
    this.gameIcons = arrayIcons.map(i =>
     Object.assign({}, { src: 'assets/game/' + i, icon: i.slice(0, -4)})
    );
    console.log(this.gameIcons)
  }

  /**
   * Method to submit icon selected
   */
  submit() {
    console.log(this.form.value.iconPlayer);
    this.userChoice = this.form.value.iconPlayer;
    this.getMachineIcon();
  }

   /**
   * Method to get the machine's icon
   */
  getMachineIcon() {
    let randomNumber = Math.random();
    if (randomNumber < 0.2) {
        this.machineIcon = "rock";
    } else if (randomNumber <= 0.4) {
        this.machineIcon = "paper";
    } else if (randomNumber <= 0.6) {
        this.machineIcon = "scissors";
    } else if (randomNumber <= 0.8) {
        this.machineIcon = "lizard";
    } else {
        this.machineIcon = "spock";
    }
    this.machineChoice = this.machineIcon;
    this.machineIcon = 'assets/game/' + this.machineIcon + '.jpg';
    console.log(this.machineIcon)
    if (this.machineIcon) {
    this.getResultGame();
    }
  }

  /**
   * Method to get the result's game
   */
  getResultGame() {
    if (this.userChoice === this.machineChoice) {
      this.result = 'its a tie!!!'
    } else {
      let userChoice = data.iconsPlay[this.userChoice];
      var victory = userChoice.defeats.indexOf(this.machineChoice) > -1;
      if (victory) {
        this.result = 'Congratulations! You have won!'
      } else {
        this.result = 'Sorry, Computer wins...'
      }
    }
  }

  /**
   * Method to get new game
   */
  newGame() {
    this.userChoice = '';
    this.machineChoice = '';
    this.result = '';
  }
}
