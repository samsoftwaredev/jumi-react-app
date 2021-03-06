import i18n from "../i18n";

const Translate = ({ text, ...props }) => {
  return <span {...props}>{i18n.t(text)}</span>;
};

export default Translate;
