type IPetDTOParams = {
  id?: number | string;
  name: string;
  dob?: Date;
  photo?: string;
  neutered?: boolean;
  race?: string;
  gender?: string;
};

export type CreatePetDTO = {
  readonly name: string;
};

export type RacePetListDTO = {
  readonly label: string;
  readonly value: string | number;
};

export type IPetDTO = {
  readonly id?: number | string;
  readonly name: string;
  readonly dob?: Date;
  readonly photo?: string;
  readonly neutered?: boolean;
  readonly race?: string;
  readonly gender?: string;
};

export default class PetDTO implements IPetDTO {
  id?: number | string;
  name: string;
  dob?: Date;
  photo?: string;
  neutered?: boolean;
  race?: string;
  gender?: string;

  constructor(params: IPetDTOParams) {
    this.id = params.id;
    this.name = params.name;
    this.dob = params.dob;
    this.gender = params.gender;
    this.photo = params.photo;
    this.neutered = params.neutered;
    this.race = params.race;
  }
}
