import React from "react";

interface AppProps {
  message?: string;
}

// ファンクションコンポーネントを使用する際は、関数に対してアノテーションを付与する
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>;
};

App.defaultProps = {
  message: "Hello, defaultProps!",
};

export default App;
