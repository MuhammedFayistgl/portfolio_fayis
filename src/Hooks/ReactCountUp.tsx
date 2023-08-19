import { useCountUp } from "react-countup";

export const ReactCountUp = () => {
	useCountUp({ ref: "counter", end: 1000 });
	return <span id="counter" />;
};
