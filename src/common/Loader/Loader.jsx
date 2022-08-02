import { Puff } from "react-loader-spinner";
import s from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={s.Loader}>
      <Puff color="#fb0000ed" width={150} timeout={5000} />
    </div>
  );
}
