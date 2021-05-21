import React from "react";
import PropTypes from "prop-types";
import { Row } from "reactstrap";
import {
  beginningPrayersKey,
  endMysteryPrayersKey,
  endingPrayersKey,
} from "../../../../constants/prayers";
import { SideBySide } from "../../../../../../../components/Layouts";
import UpdateLangauge from "../UpdateLangauge";
import { ChangeMystery } from "../SelectMystery";
import { CheckboxContainer } from "../../../../../../../components/Fields/Checkbox";
import PrayerEditList from "../PrayerEditList";
import { useTranslation } from "react-i18next";

const EditRosary = ({
  audioMute,
  onToggleAudioVolume,
  backgroundMusic,
  onToggleBackgroundMusic,
  currentMystery,
  onUpdateMystery,
  listOfPrayers,
  onUpdatePrayers,
}) => {
  const { t } = useTranslation();
  const manipulateList = (obj) => Object.values(obj);

  const dragMessage = (
    <div className="text-md-center">
      <small className="text-muted">{t("prayerArragement.label")}</small>
    </div>
  );

  return (
    <Row className="align-items-center">
      <SideBySide title={t("language.label")} description={t("language.help")}>
        <UpdateLangauge />
      </SideBySide>
      <hr />
      {/* Audio Settings */}
      <SideBySide title={t("audio.label")} description={t("audio.help")}>
        <>
          <CheckboxContainer value={audioMute} onChange={onToggleAudioVolume}>
            Mute Audio
          </CheckboxContainer>
        </>
      </SideBySide>
      <hr />
      <SideBySide title={t("music.label")} description={t("music.help")}>
        <CheckboxContainer
          value={backgroundMusic}
          onChange={onToggleBackgroundMusic}
        >
          Background Music
        </CheckboxContainer>
      </SideBySide>
      <hr />
      {/* user can select the mystery the will like to pray */}
      <SideBySide
        title={t("mysteries.label")}
        description={t("mysteries.help")}
      >
        <ChangeMystery
          mysteryLabel={t(currentMystery.label)}
          onUpdateMystery={onUpdateMystery}
        />
      </SideBySide>
      <hr />
      {/* Rosary, starting prayers that user can select */}
      <SideBySide
        title={t("beginningPrayers.label")}
        description={t("beginningPrayers.help")}
      >
        {dragMessage}
        <PrayerEditList
          defaultList={manipulateList(listOfPrayers[beginningPrayersKey])}
          onChange={(newList) => onUpdatePrayers(newList, beginningPrayersKey)}
        />
      </SideBySide>
      <hr />
      {/* Rosary, last prayers that user can select */}
      <SideBySide
        title={t("endMysteryPrayers.label")}
        description={t("endMysteryPrayers.help")}
      >
        {dragMessage}
        <PrayerEditList
          defaultList={manipulateList(listOfPrayers[endMysteryPrayersKey])}
          onChange={(newList) => onUpdatePrayers(newList, endMysteryPrayersKey)}
        />
      </SideBySide>
      <hr />
      {/* Rosary, last prayers that user can select */}
      <SideBySide
        title={t("endingPrayers.label")}
        description={t("endingPrayers.help")}
      >
        {dragMessage}
        <PrayerEditList
          defaultList={manipulateList(listOfPrayers[endingPrayersKey])}
          onChange={(newList) => onUpdatePrayers(newList, endingPrayersKey)}
        />
      </SideBySide>
    </Row>
  );
};

EditRosary.propTypes = {
  rosary: PropTypes.shape(),
  currentMystery: PropTypes.shape(),
  isMusicEnable: PropTypes.bool,
  isAudioMute: PropTypes.bool,
  currentListOfPrayers: PropTypes.shape(),
  save: PropTypes.func,
};

export default EditRosary;
