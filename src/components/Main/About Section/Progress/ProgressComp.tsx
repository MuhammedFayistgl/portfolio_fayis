import { Progress } from "rsuite";
type ProgressLineProps = { percent?: number | undefined; status?: "success" | "fail" | "active" | undefined };


const ProgressComp = ({ percent, status }: ProgressLineProps) => {
	return <Progress.Line percent={percent} status={status} />;
};

export default ProgressComp;
