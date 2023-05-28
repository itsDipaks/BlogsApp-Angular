import { Component } from '@angular/core';
import   { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import   { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import   { faGithub} from '@fortawesome/free-brands-svg-icons';
 
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faWhatsapp=faWhatsapp
  faLinkedin=faLinkedin
  faGithub=faGithub
}
