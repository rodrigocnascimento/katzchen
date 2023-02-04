import * as Yup from "yup";
import { runSchemaValidator } from "./yup.validator";

function useFormValidation() {
  const validateFormData = async (
    formParams: unknown,
    schemaValidator: Yup.BaseSchema
  ) => {
    if (schemaValidator instanceof Yup.ObjectSchema) {
      return runSchemaValidator(formParams, schemaValidator);
    }
  };

  return { validateFormData };
}

export default useFormValidation;
