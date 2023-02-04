import * as yup from "yup";


export const runSchemaValidator = async (
  formData: any,
  formSchema: any
): Promise<{} | yup.ValidationError[]> => {
  let validationErrors = {};

  try {
    await formSchema.validate(formData, {
      abortEarly: false,
    });

  } catch (err) {
    if (err instanceof yup.ValidationError) {
      err.inner.forEach((error) => {
        // eslint-disable-next-line
        validationErrors[error.path] = error.message;
      });
    }
  }

  return validationErrors;
};
