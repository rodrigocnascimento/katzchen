import { object, ref, string } from 'yup';

export interface RegisterNewPetFormSchema {
    name?: string;
    email: string;
    password: string;
}

const registerNewPetSchema = object().shape({
    name: string().required("Esse é necessário (name)"),
    email: string().email("email inválido").required("email obrigatorio"),
});

export {
    registerNewPetSchema
}
