import React, { useState } from "react";

interface FormValues {
  recette: string;
  ingredient: string;
}

interface FormContextInterface {
  formData: FormValues[];
  setFormData: React.Dispatch<React.SetStateAction<FormValues[]>>;
}[]

export const FormContext = React.createContext<FormContextInterface>({
  formData: [{ recette: "", ingredient: "" }],
  setFormData: () => {},
});

type Props = {
  children: React.ReactNode;
};

export const FormContextProvider: React.FC<Props> = ({ children }) => {
  const [formData, setFormData] = useState<FormValues[]>([{
    recette: "",
    ingredient: "",
  }]);

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
        {children}
    </FormContext.Provider>
  );
};