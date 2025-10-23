import './telalogin.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Images/assets/Geral/logo.png';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { api } from '../../api/api';
import Cookies from "js-cookie";

export default function Login_Cadastro() {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [termos, setTermos] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const [usu_nome, setName] = useState('');
    const [usu_cnpj, setCpf] = useState('');
    const [usu_email, setEmail] = useState('');
    const [usu_senha, setPassword] = useState('');
    const [usu_tipo, setTipo] = useState('');

    const navigate = useNavigate();

    // ==================== VALIDAÇÕES ====================
    const validarEmail = (valor: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
    const validarSenha = (valor: string) => valor.length >= 6;
    const validarNome = (valor: string) => valor.trim().length > 0;
    const validarCnpj = (valor: string) => /^[0-9]{11,14}$/.test(valor.replace(/\D/g, ''));

    const revelarsenha = () => setShowPassword(secreto => !secreto);

    const getInputClass = (valor: string, tipo: 'nome' | 'email' | 'senha' | 'cnpj') => {
        if (valor === '') return '';
        switch (tipo) {
            case 'nome': return validarNome(valor) ? 'input-valid' : 'input-invalid';
            case 'email': return validarEmail(valor) ? 'input-valid' : 'input-invalid';
            case 'senha': return validarSenha(valor) ? 'input-valid' : 'input-invalid';
            case 'cnpj': return validarCnpj(valor) ? 'input-valid' : 'input-invalid';
        }
    };

    const toggleForm = () => {
        setIsTransitioning(true);
        setTimeout(() => setIsLoginActive(!isLoginActive), 100);
        setTimeout(() => setIsTransitioning(false), 800);
    };

    // ==================== CADASTRO ====================
    async function Dados_insert(e: React.FormEvent) {
        e.preventDefault();
        const dados = { usu_nome, usu_email, usu_senha, usu_cnpj, usu_tipo };

        try {
            await api.post('criar', dados);
            setPassword(''); setCpf(''); setName(''); setEmail('');
            setIsTransitioning(true);
            setTimeout(() => setIsLoginActive(true), 100);
            setTimeout(() => setIsTransitioning(false), 800);
            alert("Usuário cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar:", error);
            alert("Erro ao cadastrar usuário. Tente novamente.");
        }
    }

    // ==================== LOGIN ====================
    async function login(e: React.FormEvent) {
        e.preventDefault();

        if (!usu_email || !usu_senha) {
            alert("Preencha todos os campos.");
            return;
        }
        const credenciais = { usu_email, usu_senha };
        const response = await api.post('login', credenciais);

        const { token, usu_tipo } = response.data;

        if (token && usu_tipo) {
            Cookies.set('authToken', token, { expires: 1 });
            localStorage.setItem('usu_tipo', usu_tipo);

            alert(`Bem-vindo(a) novamente!`);

            switch (usu_tipo.toLowerCase()) {
                case 'ong':
                    navigate('/ong');
                    break;
                case 'voluntário':
                    navigate('/Volun');
                    break;
                case 'doador':
                    navigate('/Doador');
                    break;
                default:
                    navigate('/');
                    break;
            }

        } else {
            alert("Usuário ou senha inválidos.");
            console.error(response.data)
        }
    }

    // ==================== INTERFACE ====================
    return (
        <div className="page-container">
            <div className={`main-box ${isLoginActive ? 'login-mode' : 'register-mode'} ${isTransitioning ? 'transitioning' : ''}`}>
                {/* PAINEL AZUL */}
                <div className="side-panel">
                    <img src={Logo} alt="logo" className="logo" />
                    {isLoginActive ? (
                        <>
                            <h1>Bem-vindo novamente!</h1>
                            <h3>Digite seus dados para acessar sua conta e continuar aproveitando nossos recursos.</h3>
                            <h5>Não tem uma conta?</h5>
                            <button className='move' onClick={toggleForm}>Cadastre-se</button>
                        </>
                    ) : (
                        <>
                            <h1>Bem-vindo!</h1>
                            <h3>Explore nossos recursos e aproveite ao máximo tudo o que nossa plataforma pode oferecer.</h3>
                            <h5>Já tem uma conta?</h5>
                            <button className='move' onClick={toggleForm}>Login</button>
                        </>
                    )}
                </div>

                {/* FORM BOX */}
                <div className="form-box">
                    {isLoginActive ? (
                        <article className="form-area">
                            <h1 className='title'>Área de login!</h1>
                            <form onSubmit={login}>
                                <label>E-mail:</label><br />
                                <input
                                    className={`input-login ${getInputClass(usu_email, 'email')}`}
                                    type="email"
                                    placeholder="Insira seu Email"
                                    value={usu_email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                /><br />
                                <label>Senha:</label><br />
                                <div className="input-wrapper">
                                    <input
                                        className={`input-login ${getInputClass(usu_senha, 'senha')}`}
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Insira sua Senha"
                                        value={usu_senha}
                                        onChange={e => setPassword(e.target.value)}
                                        required
                                    />
                                    <span className="icon-login" onClick={revelarsenha}>
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </div>
                                <br /><br />
                                <p className="forgot">Esqueci minha senha!</p><br />
                                <div className="buttons">
                                    <button type="submit" className="white-btn">Entrar</button>
                                    <button type="button" className="white-btn"><FcGoogle /> Google</button>
                                </div>
                            </form>
                        </article>
                    ) : (
                        <article className="form-area">
                            <h1 className='title'>Área de cadastro!</h1>
                            <div className="divisor">Tipo de Usuário</div>
                            <div className="user-type-buttons">
                                <button className={usu_tipo === 'ong' ? 'ativo' : ''} onClick={() => setTipo('ong')}>ONG</button>
                                <button className={usu_tipo === 'voluntário' ? 'ativo' : ''} onClick={() => setTipo('voluntário')}>Voluntário</button>
                                <button className={usu_tipo === 'doador' ? 'ativo' : ''} onClick={() => setTipo('doador')}>Doador</button>
                            </div>
                            <form onSubmit={Dados_insert}>
                                <div className="two-columns">
                                    <div>
                                        <label>Nome:</label>
                                        <input
                                            className={`input ${getInputClass(usu_nome, 'nome')}`}
                                            type="text"
                                            placeholder="Insira seu Nome"
                                            value={usu_nome}
                                            onChange={e => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label>E-mail:</label>
                                        <input
                                            className={`input ${getInputClass(usu_email, 'email')}`}
                                            type="email"
                                            placeholder="Insira seu Email"
                                            value={usu_email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="two-columns">
                                    <div>
                                        <label>Senha:</label>
                                        <div className="input-wrapper">
                                            <input
                                                className={`input ${getInputClass(usu_senha, 'senha')}`}
                                                type={showPassword ? "text" : "password"}
                                                placeholder="XXXXXXXX"
                                                value={usu_senha}
                                                onChange={e => setPassword(e.target.value)}
                                                required
                                            />
                                            <span className="icon-top" onClick={revelarsenha}>
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <label>CPF/CNPJ:</label>
                                        <input
                                            className={`input ${getInputClass(usu_cnpj, 'cnpj')}`}
                                            type="text"
                                            placeholder="000.000.000-00"
                                            value={usu_cnpj}
                                            onChange={(e) => {
                                                let valor = e.target.value.replace(/\D/g, '');
                                                if (valor.length <= 11) {
                                                    valor = valor
                                                        .replace(/(\d{3})(\d)/, '$1.$2')
                                                        .replace(/(\d{3})(\d)/, '$1.$2')
                                                        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
                                                } else {
                                                    valor = valor
                                                        .replace(/^(\d{2})(\d)/, '$1.$2')
                                                        .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
                                                        .replace(/\.(\d{3})(\d)/, '.$1/$2')
                                                        .replace(/(\d{4})(\d)/, '$1-$2');
                                                }
                                                setCpf(valor);
                                            }}
                                            pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{2}\.\d{3}\.\d{3}/\d{4}-\d{2})$"
                                            title="Digite um CPF (000.000.000-00) ou CNPJ (00.000.000/0000-00) válido"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='termss'>
                                    <input
                                        type="checkbox"
                                        checked={termos}
                                        className='terms'
                                        onChange={(e) => setTermos(e.target.checked)}
                                        required
                                    />
                                    <p className='terms-color'>Li e aceito os termos de uso</p>
                                </div><br />
                                <button
                                    type="submit"
                                    className="blue-btn"
                                    disabled={!termos || !validarEmail(usu_email) || !validarSenha(usu_senha) || !validarNome(usu_nome) || !validarCnpj(usu_cnpj)}
                                >
                                    Cadastrar
                                </button>
                            </form>
                        </article>
                    )}
                </div>
            </div>
        </div>
    );
}