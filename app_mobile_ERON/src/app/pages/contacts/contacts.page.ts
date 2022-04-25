// import { google } from 'google-maps';
import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpenText, faMapMarkerAlt, faPhone, faChevronCircleDown} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.page.html',
  styleUrls: ['./contacts.page.scss'],
})
export class ContactsPage implements OnInit {
  faPhone = faPhone;
  faEnvelope = faEnvelopeOpenText;
  faMap = faMapMarkerAlt;
  faChevronDown = faChevronCircleDown;


  constructor() {
  }

 
 
  ngOnInit() {

  }



}
