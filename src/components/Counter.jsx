import { useEffect, useState } from "react";
import { animate } from "framer-motion";

function Counter({ from = 0, to, duration = 2, format = n => n }) {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const controls = animate(from, to, {
      duration,
      onUpdate: latest => setValue(Math.round(latest)),
    });
    return controls.stop;
  }, [from, to, duration]);

  return <span>{format(value)}</span>;
}

export default Counter;