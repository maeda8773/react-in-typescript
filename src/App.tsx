import React from "react";
import CounterWithReducer from "./CounterWithReducer";

interface AppProps {
  message?: string;
}

// ファンクションコンポーネントを使用する際は、関数に対してアノテーションを付与する
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return (
    <div>
      <CounterWithReducer />
    </div>
  );
};

App.defaultProps = {
  message: "Hello, defaultProps!",
};

export default App;
