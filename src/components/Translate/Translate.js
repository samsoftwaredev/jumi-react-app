import { translate } from "../../helpers/translate";

const Translate = ({ text, ...props }) => {
  return <span {...props}>{translate(text)}</span>;
};

export default Translate;
