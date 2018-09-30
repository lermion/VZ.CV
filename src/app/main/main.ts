import { Component, OnInit } from 'angular-ts-decorators';
import { StateService } from '@uirouter/angularjs';

@Component({
  selector: 'app-dashboard',
  template: require('./main.html'),
  styles: [ require('./main.scss') ]
})
export class Main implements OnInit {


  /*@ngInject*/
  constructor (
      private $state: StateService
  ) {

  }

  ngOnInit(){

  }
}