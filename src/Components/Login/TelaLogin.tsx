import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { api } from "../../api/URL";

const Entrar = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const Login = async () => {
    if (!email || !senha) {
      setError("Preencha todos os campos.");
      return;
    }
    try {
      const credenciais = { email, senha };
      const response = await api.post('userauth', credenciais);
      const Token = response.data.token;

      if (Token) {
        Cookies.set('Token', Token, { expires: 0.5 });
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch (error) {
      setError("Falha no login.");
    }
  };
}