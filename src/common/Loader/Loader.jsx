import { Puff } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <Puff
      color="#fb0000ed"
      width={80}
      height={80}
      timeout={5000}
      wrapperClass={s.Loader}
    />
  );
}
