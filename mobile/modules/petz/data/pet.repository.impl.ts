import PetVO from "./pet.vo";
import { Pet } from "../domain/pet.entity";
import IPetRepository from "../domain/pet.repository";

export class PetRepositoryImpl implements IPetRepository {
  jsonUrl: string = "";

  constructor(jsonUrl: string) {
    this.jsonUrl = jsonUrl;
  }

  async CreatePet(pet: Pet): Promise<Pet> {
    const response = await fetch(this.jsonUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(pet),
    });

    const _pet = await response.json();

    return new PetVO(_pet);
  }

  async GetAllPets(): Promise<Pet[]> {
    const response = await fetch(this.jsonUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const _pet = await response.json();

    return _pet.map((p: PetVO) => new PetVO(p));
  }

  async GetPet(): Promise<Pet> {
    const response = await fetch(this.jsonUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const _pet = await response.json();

    return new PetVO(_pet);
  }
}
