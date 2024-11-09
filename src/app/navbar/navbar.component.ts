import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  languages = [
    {"shortForm":"en", "fullForm": "English"},
    {"shortForm": "de", "fullForm": "Deutsch"}];
  constructor(private translate: TranslateService) {
    this.translate.addLangs(this.languages.map(lang => lang.shortForm));
    this.translate.setDefaultLang('en');
    this.translate.use('en'); //Set initial lang to en
  }

  switchLanguage(language:string) {
    this.translate.use(language);
  }
}
