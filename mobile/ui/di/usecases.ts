import { IRepositories } from "./repositories";

import { PetUseCase } from "~/application/domain/usecases/Pet";

export interface IUseCases {
  pet: PetUseCase;
}

export default (repositories: IRepositories): IUseCases => {
  return {
    pet: new PetUseCase(repositories.pet),
  };
};
