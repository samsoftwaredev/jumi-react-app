import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import RichTextDisplay from "interweave";

const HowToContent = ({ menu = [] }) => {
  const { t } = useTranslation();
  return menu.map((m) => (
    <div key={m.id} id={m.id}>
      <h1>{t(m.label)}</h1>
      <p>
        <RichTextDisplay content={t(m.description)} />
      </p>
      {/* sub nav */}
      {Array.isArray(m.subMenu) &&
        m.subMenu.map((s) => (
          <div key={s.id} id={s.id} className="ml-1">
            <h5>
              <RichTextDisplay content={t(s.label)} />
            </h5>
            <div className="ml-3">
              <RichTextDisplay content={t(s.description)} />
            </div>

            {/* sub sub nav */}
            <ol className="ml-3">
              {Array.isArray(s.subMenu) &&
                s.subMenu.map((ss) => (
                  <li key={ss.id} id={ss.id}>
                    <h6>
                      <RichTextDisplay content={t(ss.label)} />
                    </h6>
                    <div className="ml-3">
                      <RichTextDisplay content={t(s.description)} />
                    </div>
                  </li>
                ))}
            </ol>
          </div>
        ))}
    </div>
  ));
};

HowToContent.propTypes = {
  menu: PropTypes.arrayOf(),
};

export default HowToContent;
