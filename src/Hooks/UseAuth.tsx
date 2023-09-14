import { useEffect, useState } from "react";
import axios from "axios";

interface DataUser {
  create_at: string;
  date: string;
  email: string;
  image: string;
  name: string;
  token: string;
}

const userDefault = {
  token: "",
  email: "",
  name: "",
  date: "",
  create_at: "",
  image: "",
};
function useAuth() {
  const [isAuthenticate, setIsAuthenticate] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<DataUser>(userDefault);

  const validateEmail = (email: string) => {
    const expresionRegular = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return expresionRegular.test(email);
  };

  const getUsers = async (token: string) => {
    const { data } = await axios.get("../src/Auth/users.json");

    const searchUser = data.find((user: any) => user.token === token);

    if (searchUser) {
      setIsLoading(false);
      setIsAuthenticate(true);
      setUser(searchUser);
    } else {
      setIsLoading(false);
      setIsAuthenticate(false);
    }
  };

  const authenticate = async (email: string, password: string) => {
    if (email === "" || password === "") {
      return "Hay campos vacios, llena todos los campos";
    }

    if (!validateEmail(email)) {
      return "El email no es valido, ingresa un email valido";
    }

    const { data } = await axios.get("../src/Auth/auths.json");

    const confirmAuthentication = data.findIndex(
      (user: any) => user.email === email && user.password === password
    );

    if (confirmAuthentication === -1) {
      return "Los datos son invalidos, verifica el Correo y la contraseña";
    } else {
      const tokenUser: string = data[confirmAuthentication].token;
      window.localStorage.setItem("token", tokenUser);
      return "Inicio de sesión exitoso";
    }
  };

  useEffect(() => {
    const token: any = window.localStorage.getItem("token");

    if (token !== "" && token !== null && token !== undefined) {
      getUsers(token);
    } else {
      setIsLoading(false);
    }
  }, []);

  return { authenticate, user, isAuthenticate, isLoading };
}

export default useAuth;
