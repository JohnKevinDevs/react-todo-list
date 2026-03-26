import styles from "./ItemTarefa.module.css";

export function ItemTarefa({
  tarefa,
  onAlternarConclusao,
  onExcluirTarefa,
}) {
  return (
    <article className={styles.item}>
      <label className={styles.conteudo}>
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => onAlternarConclusao(tarefa.id)}
        />
        <span
          className={
            tarefa.concluida ? styles.textoConcluido : styles.textoPendente
          }
        >
          {tarefa.titulo}
        </span>
      </label>

      <button
        className={styles.botaoExcluir}
        type="button"
        onClick={() => onExcluirTarefa(tarefa.id)}
      >
        Excluir
      </button>
    </article>
  );
}