import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Appartement } from 'src/app/model/appartement.model';
import { Categorie } from 'src/app/model/categorie.model';
import { AppartementService } from 'src/app/services/appartement/appartement.service';
import { CategorieService } from 'src/app/services/categorie/categorie.service';
import { Bailleur } from '../../model/bailleur.model';
import { BailleurService } from '../../services/bailleur/bailleur.service';
import { Ville } from '../../model/ville.model';
import { VilleService } from '../../services/ville/ville.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteConfirmationModalComponentComponent } from '../modal/delete-confirmation-modal-component/delete-confirmation-modal-component.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class DashboardComponent implements OnInit {
  // Déclaration des variables
  selectedAppartement: Appartement | null = null;
  appartements: Appartement[] = [];
  categorie: Categorie[] = [];
  bailleur: Bailleur[] = [];
  ville: Ville[] = [];

  // Déclaration d'un nouvel appartement
  newAppartement: Appartement = {
    name: '',
    description: '',
    categorie: {
      id: 0,
      name: '',
      appartements: [],
    },
    bailleur: {
      id: 0,
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      appartements: [],
    },
    ville: {
      id: 0,
      nom: '',
      appartements: [],
    },
    loyer: 0,
    nbChambres: 0,
    nbSallesDeBain: 0,
    id: 0,
    imageUrl: undefined,
    imageUrl2: undefined,
    imageUrl3: undefined,
  };

  // Constructeur
  constructor(
    private appartementService: AppartementService,
    private router: Router,
    private categorieService: CategorieService,
    private bailleurService: BailleurService,
    private villeService: VilleService,
    private modalService: NgbModal
  ) {}

  // Méthode d'initialisation
  ngOnInit(): void {
    this.loadAppartements();
    this.loadCategories();
    this.loadBailleur();
    this.loadVille();
  }

  // Méthode pour charger les appartements
  loadAppartements() {
    this.appartementService.getAllAppartements().subscribe(
      (data: Appartement[]) => {
        this.appartements = data;
      },
      (error) => {
        console.error('Error fetching appartements: ', error);
      }
    );
  }

  // Afficher les détails de l'appartement
  viewElement(appartement: Appartement) {
    this.selectedAppartement = appartement;
    console.log(
      "Afficher les détails de l'appartement:",
      this.selectedAppartement
    );
    this.router.navigate(['detail', appartement.id]);
  }

  // Ajouter un appartement
  addAappartement() {
    console.log('Ajouter un appartement');
    this.router.navigate(['addAppart']);
  }

  // Ajouter un appartement
  addBailleur() {
    console.log('Ajouter un Bailleur');
    this.router.navigate(['addBailleur']);
  }

  //Ajouter une ville
  addVille() {
    console.log('Ajouter une ville');
    this.router.navigate(['addVille']);
  }

  // Ajouter une catégorie
  addCategorie() {
    console.log('Ajouter une catégorie');
    this.router.navigate(['addTypeAppart']);
  }

  // Supprimer un appartement
  supprimerAppartement(appartement: Appartement) {
    // Afficher la modal de confirmation
    const confirmation = confirm(
      'Êtes-vous sûr de vouloir supprimer cet appartement ?'
    );

    if (confirmation) {
      // Appelez le service pour supprimer l'appartement
      this.appartementService
        .deleteAppartement(appartement.id)
        .subscribe(() => {
          // Mettez à jour la liste d'appartements après la suppression
          this.appartements = this.appartements.filter(
            (a) => a.id !== appartement.id
          );
          console.log('Appartement supprimé avec succès');
        });
    }
  }

  supprimerAppartement_test(appartement: Appartement) {
    const modalRef = this.modalService.open(
      DeleteConfirmationModalComponentComponent
    );
    modalRef.result
      .then((confirmed) => {
        if (confirmed) {
          // Appelez le service pour supprimer l'appartement
          this.appartementService
            .deleteAppartement(appartement.id)
            .subscribe(() => {
              // Mettez à jour la liste d'appartements après la suppression
              this.appartements = this.appartements.filter(
                (a) => a.id !== appartement.id
              );
              console.log('Appartement supprimé avec succès');
            });
        }
      })
      .catch((error) => {
        console.log('Modal dismissed');
      });
  }

  // Méthode pour charger les catégories

  loadCategories(): void {
    this.categorieService.getCategorie().subscribe(
      (data: Categorie[]) => {
        this.categorie = data;
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  loadBailleur(): void {
    this.bailleurService.getAllBailleur().subscribe(
      (data: Bailleur[]) => {
        this.bailleur = data;
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  loadVille(): void {
    this.villeService.getVille().subscribe(
      (data: Ville[]) => {
        this.ville = data;
      },
      (error) => {
        console.error('Error fetching categories: ', error);
      }
    );
  }

  editElement(appartement: Appartement) {
    this.selectedAppartement = appartement;
  }

  cancelEdit() {
    this.selectedAppartement = null;
  }

  saveEdit() {
    console.log(
      'Selected Appartement before saving:',
      this.selectedAppartement
    );
    if (this.selectedAppartement) {
      this.appartementService
        .updateAppartement(
          this.selectedAppartement.id,
          this.selectedAppartement
        )
        .subscribe(
          (updatedAppartement: Appartement) => {
            // Logique de traitement après la modification réussie
            console.log('Appartement modifié avec succès:', updatedAppartement);
            // Réinitialisez la sélection
            this.selectedAppartement = null;
          },
          (error) => {
            console.error(
              "Erreur lors de la modification de l'appartement:",
              error
            );
          }
        );
      console.log(
        'Selected Appartement after saving:',
        this.selectedAppartement
      );
    }
  }
}
