import { PetRepositoryImpl } from "../../data/pet.repository.impl";
import { Pet } from "../pet.entity";
import IPetRepository from "../pet.repository";

type GetAllPets = Pick<IPetRepository, "GetAllPets">;

export class GetAllPetsUseCase implements GetAllPets {
  repo: IPetRepository;

  constructor(jsonUrl: string) {
    this.repo = new PetRepositoryImpl(jsonUrl);
  }

  async GetAllPets(): Promise<Pet[]> {
    return this.repo.GetAllPets();
  }
}
