import { Appartement } from "./appartement.model";
import { Role } from "./role.model";

export interface User {
    id: number;
    username: string;
    password: string;
    email: string;
    enabled: boolean;
    roles: Role[];
    tokenExpiration: Date;
    claimToken: string;
    appartements: Appartement[];
  }