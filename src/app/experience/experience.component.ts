import {Component, OnInit} from 'angular-ts-decorators';

@Component({
    selector: 'app-experience',
    template: require('./experience.html'),
    styles: [ require('./experience.scss') ]
})
export class ExperienceComponent implements OnInit {


    /*@ngInject*/
    constructor (
    ) {

    }

    ngOnInit(){

    }
}