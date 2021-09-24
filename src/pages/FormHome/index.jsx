import { TextField, Button } from "@material-ui/core";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router";

const FormLogin = ({ setData }) => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().required("Email Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /[a-z]+/g,
        "Sua senha deve conter ao menos uma letra minuscula e um número"
      )
      .matches(
        /[^a-zA-Z0-9]+/g,
        "Sua senha deve conter ao menos um caracter especial"
      )
      .matches(/[A-Z]+/g, "Deve conter ao menos uma letra maíuscula")
      .required("Campo obrigatório"),
    checkPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas devem ser iguais"),
  });

  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const submit = (data) => {
    setData(data);
    sendTo("/profile");
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  return (
    <>
      <h2>Welcome to the page!</h2>
      <p>Put your data below, and Login to open your Homepage</p>
      <form onSubmit={handleSubmit(submit)}>
        <TextField
          label="Nome"
          variant="standard"
          {...register("name")}
          helperText={errors.name?.message}
        />
        <TextField
          label="Email"
          variant="standard"
          {...register("email")}
          helperText={errors.email?.message}
        />
        <TextField
          size="small"
          label="Senha"
          variant="standard"
          {...register("password")}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirme a sua Senha"
          variant="standard"
          size="small"
          {...register("checkPassword")}
          helperText={errors.checkPassword?.message}
        />
        <Button
          sx={{ mt: 1, p: 1 }}
          variant="contained"
          color="secondary"
          type="Submit"
        >
          Login
        </Button>
      </form>
    </>
  );
};
export default FormLogin;
