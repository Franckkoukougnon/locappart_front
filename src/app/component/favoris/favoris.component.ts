import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {Whistlist} from "../../model/whistlist.model";
import {Appartement} from "../../model/appartement.model";
import {FavorisService} from "../../services/favoris/favoris.service";
import {SignupService} from "../../services/signup/signup.service";

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {


  favoris: Appartement[] = [];
  userId: number | null = null;

  constructor(private favorisService: FavorisService,
              private signupService: SignupService) { }

  ngOnInit(): void {
    this.getFavoris();

  }

  getFavoris() {
    if (this.userId !== null) {
      this.favorisService.getFavoris(this.userId).subscribe(
        (response: Appartement[]) => {
          this.favoris = response;
        },
        (error) => {
          console.error('Error fetching favoris: ', error);
        }
      );
    } else {
      console.error('User ID is null or undefined');
    }
  }
}
