import { PetUseCase } from "application/domain/usecases/Pet";

import { CreatePetDTO, RacePetListDTO } from "~/application/domain/dto/PetDTO";
import { Pet } from "~/application/domain/entities/Pet";

export default class PetPresenter {
  constructor(readonly petUseCase: PetUseCase) {}

  /**
   * Create a Pet
   * @param pet pet data
   * @returns
   */
  async createPet(pet: CreatePetDTO): Promise<boolean> {
    return this.petUseCase.createPet(pet);
  }

  /**
   * Return all pets
   *
   * @return {*}  {Promise<Pet[]>}
   * @memberof PetPresenter
   */
  async getAllPets(): Promise<Pet[]> {
    return this.petUseCase.getAllPets();
  }

  /**
   * Return the Pet
   *
   * @return {*}  {Promise<Pet>}
   * @memberof PetPresenter
   */
  async getPet(): Promise<Pet> {
    return this.petUseCase.getPet();
  }

  /**
   * Return the Pet
   *
   * @return {*}  {Promise<Pet>}
   * @memberof PetPresenter
   */
  async getAllPetRacesByGenre(genre?: string): Promise<RacePetListDTO[]> {
    return this.petUseCase.getAllPetRacesByGenre(genre);
  }
}
