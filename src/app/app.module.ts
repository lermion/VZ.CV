import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SkillsComponent } from './skills/skills.component';
import './styles.css';
import {ExperienceComponent} from './experience/experience.component';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    MainComponent,
    SkillsComponent,
      ExperienceComponent
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}