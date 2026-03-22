import { useState } from "react";
import { FormTarefa } from "./components/FormTarefa/FormTarefa";
import { ListaTarefas } from "./components/ListaTarefas/ListaTarefas";
import styles from "./App.module.css";

export function App() {
  const [tarefas, setTarefas] = useState([]);

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.titulo}>To-Do List</h1>

        <FormTarefa />
        <ListaTarefas tarefas={tarefas} />
      </section>
    </main>
  );
}