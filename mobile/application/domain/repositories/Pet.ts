import { CreatePetDTO, RacePetListDTO } from "../dto/PetDTO";
import type { Pet } from "../entities/Pet";

export default interface IPetRepository {
  createPet: (pet: CreatePetDTO) => Promise<Pet>;

  getPet(): Promise<Pet>;

  getAllPets(): Promise<Pet[]>;

  getAllPetRacesByGenre(genre?: string): Promise<RacePetListDTO[]>;
}
