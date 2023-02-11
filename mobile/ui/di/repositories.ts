import { IInfrastructures } from "./infrastructures";

import { PetRepository } from "~/application/adapter/repositories/Pet";

export interface IRepositories {
  pet: PetRepository;
}

export default (infrastructure: IInfrastructures): IRepositories => ({
  pet: new PetRepository("http://192.168.18.9:3000", infrastructure.http),
});
