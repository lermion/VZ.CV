import { StateProvider } from '@uirouter/angularjs';
import { Ng1StateDeclaration } from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import {ExperienceComponent} from "./experience/experience.component";

export interface UiState extends Ng1StateDeclaration {
  component?: any;
}

const routes: UiState[] = [
  { name: 'index', url: '', redirectTo: 'main' },
  { name: 'main', url: '/main', component: MainComponent},
  { name: 'skills', url: '/skills', component: SkillsComponent },
  { name: 'experience', url: '/experience', component: ExperienceComponent },
];

@NgModule({
  id: 'AppRoutingModule',
  imports: [
    'ui.router'
  ],
})

export class AppRoutingModule {
  static config($stateProvider: StateProvider) {
    'ngInject';
    routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
  }
}

function getNg1StateDeclaration(state: UiState) {
  if(state.component && typeof state.component !== 'string'){
    state.component = getTypeName(state.component);
  }
  return state;
}