import { mixed, object, string } from "yup";

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
  photo: mixed()
    .test("required", "Precisa escolher uma foto.", (value) => {
      return value != null;
    })
    .test("type", "Formatos suportados: jpeg, jpg e png.", (value) => {
      return value && /\.(?:jpeg|jpg|gif|png)/.exec(value);
    }),
});

export { registerNewPetSchema };
