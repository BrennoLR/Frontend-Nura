import { useEffect, useState } from 'react';
import { api } from '../../api/api';
import './users.css'

interface Usuario {
  usu_cod: number;
  usu_nome: string;
  usu_email: string;
  usu_senha: string;
  usu_telefone: string;
  usu_genero: string;
  usu_data: string;
  usu_cnpj: string;
  usu_criacao: string;
  usu_tipo: string;
}

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const response = await api.get('/');
        setUsuarios(response.data);
      } catch (err: any) {
        console.error(err);
        setError('Não foi possível carregar os usuários. Faça login novamente.');
      } finally {
        setLoading(false);
      }
    }
    fetchUsuarios();
  }, []);

  if (loading) return <p>Carregando usuários...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section className='users'>
      <div>
      <h1 className='table-title-users'>Lista de Usuários</h1>
      <table className='align-table'>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
            <th>Telefone</th>
            <th>Gênero</th>
            <th>Data criação</th>
            <th>CPF/CNPJ</th>
            <th>Data</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map(u => (
            <tr>
              <td>{u.usu_cod}</td>
              <td>{u.usu_nome}</td>
              <td>{u.usu_email}</td>
              <td>{u.usu_senha}</td>
              <td>{u.usu_telefone}</td>
              <td>{u.usu_genero}</td>
              <td>{u.usu_data}</td>
              <td>{u.usu_cnpj}</td>
              <td>{u.usu_criacao}</td>
              <td>{u.usu_tipo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div></section>

  );
}