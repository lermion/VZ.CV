import { Component, OnInit } from 'angular-ts-decorators';

@Component({
  selector: 'app-heroes',
  template: require('./skills.html'),
  styles: [require('./skills.scss')]
})
export class SkillsComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}