import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

interface CampanhaPayload {
  cam_nome: string;
  cam_desc: string;
  cam_img: string; // Base64 string
  cam_data_in: string;
  cam_data_fi: string;
}

export default function CadastroCampanha() {
  const [form, setForm] = useState<CampanhaPayload>({
    cam_nome: "",
    cam_desc: "",
    cam_img: "",
    cam_data_in: "",
    cam_data_fi: "",
  });

  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setForm(prev => ({ ...prev, cam_img: result }));
      setPreview(result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.cam_nome || !form.cam_desc || !form.cam_img || !form.cam_data_in || !form.cam_data_fi) {
      alert("Preencha todos os campos obrigatórios!");
      return;
    }

    try {
      setLoading(true);
      await api.post("/createcamp", form);
      alert("Campanha cadastrada com sucesso!");
      navigate("/");
    } catch (err) {
      console.error("Erro ao cadastrar campanha:", err);
      alert("Erro ao cadastrar campanha. Verifique o console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cadastro-campanha">
      <h1 className="titulo-campanhas">Cadastrar Campanha</h1>

      <form id="form-campanha" onSubmit={handleSubmit} noValidate>
        <input
          name="cam_nome"
          type="text"
          placeholder="Nome da campanha"
          value={form.cam_nome}
          onChange={handleChange}
          required
        />

        <input
          name="cam_desc"
          placeholder="Descrição da campanha"
          value={form.cam_desc}
          onChange={handleChange}
          required
        />

        <input
          name="cam_data_in"
          type="date"
          value={form.cam_data_in}
          onChange={handleChange}
          required
        />

        <input
          name="cam_data_fi"
          type="date"
          value={form.cam_data_fi}
          onChange={handleChange}
          required
        />

        <input
          name="cam_img"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {preview && <img src={preview} alt="Preview da campanha" className="preview-campanha" />}

        <button type="submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar Campanha"}
        </button>
      </form>
    </section>
  );
}
