import { object, ref, string } from 'yup';

export interface RegisterNewPetFormSchema {
    name?: string;
    email: string;
    password: string;
}

const registerNewPetSchema = object().shape({
    name: string().required("Esse é necessário (name)"),
    race: string().required("Raça é obrigatório!"),
    dob: string().required("Data de nascimento é obrigatório!"),
    castrado: string().required("Castrado é obrigatório!"),
});

export {
    registerNewPetSchema
}
