import { escapeCPF } from "@/utils/escapeCpf";
import { useState } from "react";

type Props = {
  onSearchButton: (cpf: string) => void;
  loading: boolean;
};

export const SearchForm = ({ onSearchButton, loading }: Props) => {
  const [cpfInput, setCpfInput] = useState("");

  return (
    <div>
      <p className="mb-3 text-xl">Qual seu cpf?</p>
      <input
        type="text"
        inputMode="numeric"
        placeholder="Digite seu cpf"
        className="w-full p-3 bg-white text-black text-center text-4xl outline-none rounded-lg disabled:opacity-50"
        autoFocus
        value={cpfInput}
        onChange={(e) => setCpfInput(escapeCPF(e.target.value))}
        disabled={loading}
      />
      <button
        className="w-full p-3 mt-3 rounded-lg bg-blue-800 text-white text-4xl border-b-4 border-blue-600 active:border-0 active:border-t-4 disabled:opacity-50"
        onClick={() => onSearchButton(cpfInput)}
        disabled={loading}
      >
        {loading ? "Buscando" : "Entrar"}
      </button>
    </div>
  );
};
