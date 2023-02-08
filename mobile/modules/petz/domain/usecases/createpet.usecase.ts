import { PetRepositoryImpl } from "../../data/pet.repository.impl";
import { Pet } from "../pet.entity";
import IPetRepository from "../pet.repository";

type CreatePet = Pick<IPetRepository, "CreatePet">;

export class CreatePetUseCase implements CreatePet {
  repo: IPetRepository;

  constructor(jsonUrl: string) {
    this.repo = new PetRepositoryImpl(jsonUrl);
  }

  async CreatePet(pet: Pet): Promise<Pet> {
    return this.repo.CreatePet(pet);
  }
}
