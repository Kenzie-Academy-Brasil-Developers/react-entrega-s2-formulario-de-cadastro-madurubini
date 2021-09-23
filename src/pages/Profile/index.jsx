import { useParams, useHistory } from "react-router";

const Profile = ({ data }) => {
  const history = useHistory();

  const exit = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <p>{data.name}</p>
      <p>{data.email}</p>
      <button onClick={() => exit()}>Sair</button>
    </div>
  );
};
export default Profile;
