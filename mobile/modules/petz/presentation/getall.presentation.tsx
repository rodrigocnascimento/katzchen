import { GetAllPetsUseCase } from "../domain/usecases/getall.usecase";

import ListPet from "~/screens/MyPets/list";

export default () => {
  const getAllPetsUseCase = new GetAllPetsUseCase(
    "http://192.168.18.9:3000/pets"
  );

  return <ListPet useCaseImpl={getAllPetsUseCase} />;
};
