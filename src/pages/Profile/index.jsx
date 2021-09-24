import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

const Profile = ({ data }) => {
  const history = useHistory();

  const exit = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className="Card">
      <h2> Olá, seja bem-vinde a sua Homepage!</h2>
      <div class="Avatar">{data.name[0]}</div>
      <p>
        Nome do usuário: <span>{data.name}</span>
      </p>
      <p>
        Email Cadastrado: <span>{data.email}</span>
      </p>
      <Button
        sx={{ mt: 1, p: 1 }}
        variant="contained"
        color="secondary"
        type="Submit"
        onClick={() => exit()}
      >
        Sair
      </Button>
    </div>
  );
};
export default Profile;
