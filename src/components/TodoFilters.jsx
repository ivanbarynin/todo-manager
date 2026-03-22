function TodoFilters({ filter, onFilterChange, activeCount }) {
  return (
    <div style={{ margin: '20px 0' }}>
      <p>Осталось задач: {activeCount}</p>

      <button onClick={() => onFilterChange('all')}>
        Все
      </button>

      <button onClick={() => onFilterChange('active')}>
        Активные
      </button>

      <button onClick={() => onFilterChange('completed')}>
        Выполненные
      </button>
    </div>
  );
}

export default TodoFilters;