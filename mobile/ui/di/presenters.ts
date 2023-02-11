import { IUseCases } from "./usecases";

import PetPresenter from "~/application/adapter/presenters/Pet";

export interface IPresenters {
  pet: PetPresenter;
}

export default (useCases: IUseCases): IPresenters => {
  return {
    pet: new PetPresenter(useCases.pet),
  };
};
