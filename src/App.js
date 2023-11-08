import React from "react";
import { useReducer } from "react";
import reducer from "./reducers";
import { initialState } from "./reducers"; // this is new
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import {
  applyNumber,
  changeOperation,
  clearDisplay,
  memoryPlus,
  memoryRecall,
} from "./actions";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clickHandler = (e) => {
    const { value } = e.target;
    const numberValue = Number(value);
    dispatch(applyNumber(numberValue));
  };

  const operationHandler = (e) => {
    dispatch(changeOperation(e.target.value));
  };
  const clearHandler = (e) => {
    dispatch(clearDisplay());
  };
  const memoryHandler = (e) => {
    dispatch(memoryPlus());
  };
  const memoryRecallHandler = (e) => {
    dispatch(memoryRecall());
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={0} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {state.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {state.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={memoryHandler} />
              <CalcButton value={"MR"} onClick={memoryRecallHandler} />
              <CalcButton value={"MC"} />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={clickHandler} />
              <CalcButton value={2} onClick={clickHandler} />
              <CalcButton value={3} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={clickHandler} />
              <CalcButton value={5} onClick={clickHandler} />
              <CalcButton value={6} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={clickHandler} />
              <CalcButton value={8} onClick={clickHandler} />
              <CalcButton value={9} onClick={clickHandler} />
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={operationHandler} />
              <CalcButton value={"*"} onClick={operationHandler} />
              <CalcButton value={"-"} onClick={operationHandler} />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearHandler} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
