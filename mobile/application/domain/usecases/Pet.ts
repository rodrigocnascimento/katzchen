import { CreatePetDTO, RacePetListDTO } from "../dto/PetDTO";
import { Pet } from "../entities/Pet";
import IPetRepository from "../repositories/Pet";

export class PetUseCase implements IPetRepository {
  constructor(private readonly repo: IPetRepository) {}

  async createPet(pet: CreatePetDTO): Promise<boolean> {
    return this.repo.createPet(pet);
  }

  async getAllPets(): Promise<Pet[]> {
    return this.repo.getAllPets();
  }

  async getPet(): Promise<Pet> {
    return this.repo.getPet();
  }

  /**
   * Return all the pets race based on genre
   *
   * @return {*}  {Promise<Pet[]>}
   * @memberof PetRepository
   */
  async getAllPetRacesByGenre(genre?: string): Promise<RacePetListDTO[]> {
    return this.repo.getAllPetRacesByGenre(genre);
  }
}
