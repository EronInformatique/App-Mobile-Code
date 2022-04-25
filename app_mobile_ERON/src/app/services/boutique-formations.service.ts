import { AuthService } from 'src/app/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormationsBoutique } from '../models/boutique-formations.model';
import {Auth} from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class BoutiqueFormationsService {


// private boutiqueFormations: FormationsBoutique[]= [
//   { 
//     id: 'EDE01-i',
//     title: 'Le cerveau anatomique',
//     categories: 'medecins',
//     imageUrl:'https://m.media-amazon.com/images/I/61NN9SlsuuL._AC_SX425_.jpg',
//     description: "Formation pour mieux comprendre l'anatomie du Cerveau",
//     price: 70,
//     quantity:1,
//     hours:2,
//     validity:65
//   },
//   { 
//     id: 'EDE02-i',
//     title: 'Bases neuroscientifiques de la douleur',
//     categories: 'medecins',
//     imageUrl:'https://www.gafeo.fr/pluginfile.php/1/local_shop/catalogitemthumb/32/Neuroscientifiques.jpg',
//     description: "Plus de détails cliquez ici",
//     price: 70,
//     quantity:1,
//     hours:2,
//     validity:65
//   },
//   { 
//     id: 'EDE03-i',
//     title: 'Placebo et thérapies non médicamenteuses',
//     categories: 'medecins',
//     imageUrl:'https://www.gafeo.fr/pluginfile.php/1/local_shop/catalogitemthumb/33/placebo.jpg',
//     description: "Plus de détails cliquez ici",
//     price: 70,
//     quantity:1,
//     hours:2,
//     validity:65
//   },
//   { 
//     id: 'EDE04-i',
//     title: 'Comprendre la photothérapie',
//     categories: 'medecins',
//     imageUrl:'https://www.gafeo.fr/pluginfile.php/1/local_shop/catalogitemthumb/34/photothe%CC%81rapie.jpg',
//     description: "Plus de détails cliquez ici",
//     price: 70,
//     quantity:1,
//     hours:2,
//     validity:65
//   },
//   { 
//     id: 'MED008-i',
//     title: 'Drogues et addictions : bases neurobiologiques et approche générale des conduites addictives (MED008)',
//     categories: 'medecins',
//     imageUrl:'https://www.gafeo.fr/pluginfile.php/1/local_shop/catalogitemthumb/1/Conduites%20addictives.jpg',
//     description: "Plus de détails cliquez ici",
//     price: 190,
//     quantity:1,
//     hours:10,
//     validity:65
//   },
// ]
private _idToken:string;
userInfo: any;

constructor(private httpClient: HttpClient,
  private auth: Auth,
  private authService:AuthService,
  private alertCtrl: AlertController,
  private router: Router) {
    this.userInfo = JSON.parse(localStorage.getItem('user'))
    // this._idToken = this.userInfo.stsTokenManager.accessToken
    // console.log(this.userInfo.email)
    // console.log(this.userInfo.uid)
    // console.log(this.userInfo.stsTokenManager.accessToken) 
  }

    getFormationBoutiqueFromServer(){
    const token = this._idToken
    console.log("getFormationServer")
    // this._idToken = this.auth.currentUser.getIdToken(true)
       return this.httpClient
        .get<FormationsBoutique[]>('https://appmobile-35fbb-default-rtdb.europe-west1.firebasedatabase.app/boutiqueFormations.json?auth='+token)
    }
    

}
