// Créez un modèle pour JwtPayload
export interface JwtPayload {
  userId : number; // Identifiant de l'utilisateur
    sub: string;
    exp: number; // Date d'expiration du token (timestamp)
    roles: string[]; // Rôles de l'utilisateur

  }
