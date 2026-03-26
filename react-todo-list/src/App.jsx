import { useState } from "react";
import { FormTarefa } from "./components/FormTarefa/FormTarefa";
import { ListaTarefas } from "./components/ListaTarefas/ListaTarefas";
import styles from "./App.module.css";

export function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(titulo) {
    const novaTarefa = {
      id: Date.now(),
      titulo: titulo,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarConclusao(id) {
    const tarefasAtualizadas = tarefas.map((tarefa) =>
      tarefa.id === id
        ? { ...tarefa, concluida: !tarefa.concluida }
        : tarefa
    );

    setTarefas(tarefasAtualizadas);
  }

  function excluirTarefa(id) {
    const tarefasFiltradas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasFiltradas);
  }

  const totalTarefas = tarefas.length;
  const totalConcluidas = tarefas.filter((tarefa) => tarefa.concluida).length;

  return (
    <main className={styles.container}>
      <section className={styles.card}>
        <h1 className={styles.titulo}>To-Do List</h1>

        <FormTarefa onAdicionarTarefa={adicionarTarefa} />

        <div className={styles.contador}>
          <p>Total: {totalTarefas}</p>
          <p>Concluídas: {totalConcluidas}</p>
        </div>

        <ListaTarefas
          tarefas={tarefas}
          onAlternarConclusao={alternarConclusao}
          onExcluirTarefa={excluirTarefa}
        />
      </section>
    </main>
  );
}