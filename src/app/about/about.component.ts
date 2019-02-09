import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: {name: string; proficiency: number}[] = [];
  constructor() { }

  ngOnInit() {
    this.skills.push(
      {name:'ES6',proficiency: 78},
      {name:'Angular2+',proficiency: 80},
      {name:'Node.JS',proficiency: 75},
      {name:'HTML5',proficiency: 80},
      {name:'CSS3',proficiency: 70},
      {name:'Java-J2EE',proficiency: 73},
      {name:'Spring boot',proficiency: 30},
      {name:'Git',proficiency: 60}
    )
  }

}
