import { useSelector, useDispatch } from "react-redux";
import { Increment } from "./actions/Increment";
import { Decrement } from "./actions/Decrement";
function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>counter : {counter}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  );
}

export default App;
