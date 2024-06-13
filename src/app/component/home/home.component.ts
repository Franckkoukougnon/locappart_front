import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Appartement} from 'src/app/model/appartement.model';
import {Categorie} from 'src/app/model/categorie.model';
import {AppartementService} from 'src/app/services/appartement/appartement.service';
import {CategorieService} from "../../services/categorie/categorie.service";
import {VilleService} from "../../services/ville/ville.service";
import {Ville} from "../../model/ville.model";
import {UserService} from "../../services/user/user.service";
import {Whistlist} from "../../model/whistlist.model";
import {SignupService} from "../../services/signup/signup.service";
import {FavorisService} from "../../services/favoris/favoris.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  villes: Ville[] = []; // Liste des villes
  appartements: Appartement[] = []; // Liste des appartements
  selectedCategories: { [key: number]: boolean } = {}; // Catégories sélectionnées
  selectedAppartement: Appartement | null = null; // Appartement sélectionné
  selectedVilleId!: Number; // ID de la ville sélectionnée
  categories: Categorie[] = [];
  whistlist: Whistlist | null = null;


  constructor(
    private appartementService: AppartementService,
    private router: Router,
    private categorieService: CategorieService,
    private villeService: VilleService,
    private signupService: SignupService,
    private favorisService: FavorisService,
  ) {
  }

  ngOnInit(): void {
    this.loadAppartements();
    this.loadCategories();
    this.loadVille();
    this.getUserId();
    const userId = this.signupService.getUserId();

    if (userId === undefined) {
      console.error('User ID is undefined');
      return;
    }

  }

  public loadAppartements(): void {
    this.appartementService.getAllAppartements().subscribe(
      (response: Appartement[]) => {
        this.appartements = response;
        console.log(this.appartements);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  getUserId() {
    const userId = this.signupService.getUserId();

  }



  afficherDetails(appartement: Appartement) {
    this.selectedAppartement = appartement;
    console.log("Afficher les détails de l'appartement:", this.selectedAppartement);
    this.router.navigate(['detail', appartement.id]);
  }

  tronquerDescription(description: string, nombreDeMots: number): string {
    const mots = description.split(' ');
    const descriptionTronquee = mots.slice(0, nombreDeMots).join(' ');
    return descriptionTronquee + (mots.length > nombreDeMots ? '...' : '');
  }

  loadCategories(): void {
    this.categorieService.getCategorie().subscribe(
      (data: Categorie[]) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  loadVille(): void {
    this.villeService.getVille().subscribe(
      (data: Ville[]) => {
        this.villes = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching villes: ', error);
      }
    )
  }


  filterByCategorie(): void {


    // Récupérer les identifiants des catégories sélectionnées
    const selectedCategoryIds = Object.keys(this.selectedCategories)
      .filter(key => this.selectedCategories[parseInt(key, 10)])
      .map(key => parseInt(key, 10));

    // Appeler le service pour récupérer les appartements filtrés par ville et catégorie
    this.appartementService.getAppartementsByVillesAndCategories( selectedCategoryIds)
      .subscribe(
        (response: Appartement[]) => {
          this.appartements = response;
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors du filtrage des appartements:', error);
        }
      );
  }

  resetFilter(): void {
    // Réinitialiser les catégories sélectionnées à un objet vide
    this.selectedCategories = {};

    // Recharger tous les appartements
    this.loadAppartements();
  }

  addAppartementToFavoris(appartementId: number) {
    const userId = this.signupService.getUserId();
    if (userId === undefined) {
      console.error('User ID is undefined');
      return;
    }
    this.favorisService.addFavoris(userId, appartementId)
      .subscribe(
        () => {
          this.router.navigate(['/favoris']);
          console.log('Appartement ajouté aux favoris avec succès');
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout de l\'appartement aux favoris:', error);
        }
      );
  }

  filterByVille(): void {
    if (this.selectedVilleId !== null) {
      this.appartements = this.appartements.filter(appartement => appartement.ville.id == this.selectedVilleId);
    } else {
      // Si aucune ville n'est sélectionnée, rechargez tous les appartements
      this.loadAppartements();
    }
  }













}
