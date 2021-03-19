import { useTranslation } from "react-i18next";

const Translate = ({ text, ...props }) => {
  const { t } = useTranslation();
  return <span {...props}>{t(text)}</span>;
};

export default Translate;
