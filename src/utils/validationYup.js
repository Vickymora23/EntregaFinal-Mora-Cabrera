import { object } from "yup";

let userSchema = object({
  name: string().required("El campo nombre es requerido"),
  phone: number().required().positive().integer(),
  email: string().email("Ingrese un email valido").required(),
});

const validateForm = async (dataForm) => {
  try {
    await userSchema.validate(dataForm);
    return { status: "success" };
  } catch (error) {
    return { status: "error", error: error.message };
  }
};

export default validateForm;
