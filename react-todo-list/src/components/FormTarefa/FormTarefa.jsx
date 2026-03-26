import { useState } from "react";
import styles from "./FormTarefa.module.css";

export function FormTarefa({ onAdicionarTarefa }) {
  const [titulo, setTitulo] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (titulo.trim() === "") {
      return;
    }

    onAdicionarTarefa(titulo);
    setTitulo("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Digite uma tarefa"
        value={titulo}
        onChange={(event) => setTitulo(event.target.value)}
      />

      <button className={styles.botao} type="submit">
        Adicionar
      </button>
    </form>
  );
}