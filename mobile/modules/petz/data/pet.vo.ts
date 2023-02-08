import { Pet } from "../domain/pet.entity";

export default class PetVO implements Pet {
  id: number | string | undefined;
  name: string;
  dob?: Date;
  photo?: string;
  neutered?: boolean;
  race?: string;
  gender?: string;

  constructor({ id, name, dob, gender, photo, neutered, race }: Pet) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.photo = photo;
    this.neutered = neutered;
    this.race = race;
  }
}
