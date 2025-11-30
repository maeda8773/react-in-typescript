import React, { useEffect, useRef, useState } from "react";

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });
  const ref = useRef<HTMLInputElement>(null!); // non-nullアサーション演算子を使ってnullではないことを伝える
  const focusInput = () => {
    ref.current.focus();
    // nullかもしれない場合は,foucs()を呼び出せないのでオプショナルチェイニングを使う
    // ref.current?.focus();
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;
