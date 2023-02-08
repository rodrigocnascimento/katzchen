import { CreatePetUseCase } from "../domain/usecases/createpet.usecase";

import CreatePet from "~/screens/MyPets/create";

export default () => {
  const createPetUseCase = new CreatePetUseCase(
    "http://192.168.18.9:3000/pets"
  );

  return <CreatePet useCaseImpl={createPetUseCase} />;
};
