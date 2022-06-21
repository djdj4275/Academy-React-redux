import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, remove, toggle } from "../modules/todos";

const TodocHookContainer = () => {
  const { input, todos } = useSelector((state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }));
  // dispatch시 todos.js 에 가서 reducer에서 가져옴
  const dispatch = useDispatch();
  const onChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
  const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);

  return <Todos input={input} todos={todos} onChangeInput={onChangeInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />;
};
export default TodocHookContainer;
