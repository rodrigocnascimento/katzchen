import { PetRepositoryImpl } from "../../data/pet.repository.impl";
import { Pet } from "../pet.entity";
import IPetRepository from "../pet.repository";

type GetPet = Pick<IPetRepository, "GetPet">;

export class GetPetUseCase implements GetPet {
  repo: IPetRepository;

  constructor(jsonUrl: string) {
    this.repo = new PetRepositoryImpl(jsonUrl);
  }

  async GetPet(): Promise<Pet> {
    return this.repo.GetPet();
  }
}
