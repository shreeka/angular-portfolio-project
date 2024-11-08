import { Component } from '@angular/core';
import {FULL_NAME} from "../../constants";

@Component({
  selector: 'header-info',
  templateUrl: './header-info.component.html',
  styleUrl: './header-info.component.css'
})
export class HeaderInfoComponent {
  headerInfo= {
    fullName: "Shreeka Shakya",
    role: "Software Developer | Lifelong Learner",
    linkedinUrl: "https://www.linkedin.com/in/shreeka-shakya/"
  };
  protected readonly FULL_NAME = FULL_NAME;
}
