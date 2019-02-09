import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: {name: string; description: string, imageUrl: string, isImageVisisble: boolean}[] = [];

  constructor() { }

  ngOnInit() {
    this.projects.push(
      {
        name:'Portfolio',
        description: 'This is a website that describes details, works.',
        imageUrl: "./../../assets/portfolio.png",
        isImageVisisble: true
      }
    )
  }
}
