import { NgModule } from 'angular-ts-decorators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main } from './main/main';
import { Skills } from './skills/skills';
import { MessageService } from './message.service';
import './styles.css';

@NgModule({
  id: 'AppModule',
  imports: [
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    Main,
    Skills
  ],
  providers: [
    MessageService,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}