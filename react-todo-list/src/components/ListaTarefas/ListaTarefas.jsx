import { ItemTarefa } from "../ItemTarefa/ItemTarefa";
import styles from "./ListaTarefas.module.css";

export function ListaTarefas({
  tarefas,
  onAlternarConclusao,
  onExcluirTarefa,
}) {
  return (
    <section className={styles.lista}>
      {tarefas.length === 0 ? (
        <p className={styles.mensagem}>Nenhuma tarefa cadastrada.</p>
      ) : (
        tarefas.map((tarefa) => (
          <ItemTarefa
            key={tarefa.id}
            tarefa={tarefa}
            onAlternarConclusao={onAlternarConclusao}
            onExcluirTarefa={onExcluirTarefa}
          />
        ))
      )}
    </section>
  );
}