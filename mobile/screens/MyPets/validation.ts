import { object, string } from 'yup';

export interface RegisterNewPetFormSchema {
    name?: string;
    email: string;
    password: string;
}

const RegisterNewPet = object().shape({
    name: string().required("Esse é necessário"),
    race: string().required("Esse é necessário também hein!")
});

export {
    RegisterNewPet
}
