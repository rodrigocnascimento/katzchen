import { BaseSchema } from "yup";
import { Button } from "react-native";
import { ReactNode, useCallback, useRef } from "react";

import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import useFormValidation from "../../hooks/useFormValidation";

import { iconCreator } from "../../components/helpers/icon.creator";
import ButtonIcon from "../ButtonIcon";
import { FontAwesome5 } from "@expo/vector-icons";

function icon(name: string) {
  return iconCreator(FontAwesome5, name, 16);
}
type FormType = {
  children: ReactNode;
  schemaValidation: BaseSchema;
  submitButtonTitle: string;
};

export default ({
  children,
  schemaValidation,
  submitButtonTitle,
}: FormType) => {
  const formRef = useRef<FormHandles>(null);

  const { validateFormData } = useFormValidation();

  const handleFormSubmission = useCallback(async (formData: unknown) => {
    const formValidation = await validateFormData(formData, schemaValidation);

    formRef.current!.setErrors(formValidation || {});
  }, []);

  const submitForm = useCallback(() => {
    formRef.current!.submitForm();
  }, []);

  return (
    <Form ref={formRef} onSubmit={handleFormSubmission}>
      {children}
      <ButtonIcon
        icon={icon("home")}
        title={submitButtonTitle}
        onPress={submitForm}
      />
    </Form>
  );
};
