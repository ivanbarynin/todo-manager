function TodoItem({ task, onToggle, onDelete }) {
  return (
    <li style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span style={{
        textDecoration: task.completed ? 'line-through' : 'none'
      }}>
        {task.text}
      </span>

      <button onClick={() => onDelete(task.id)}>
        Удалить
      </button>
    </li>
  );
}

export default TodoItem;