import type { Pet } from "./pet.entity";

export default interface IPetRepository {
  CreatePet: (pet: Pet) => Promise<Pet>;

  GetPet(): Promise<Pet>;

  GetAllPets(): Promise<Pet[]>;
}
