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

  return (
    <Row className="align-items-center">
      <SideBySide
        title="Language:"
        description="You can change the language of the rosary. The audio will also update depending on the language you select."
      >
        <UpdateLangauge />
      </SideBySide>
      <hr />
      {/* Audio Settings */}
      <SideBySide
        title="Audio:"
        description="You can mute the audio if prefer to read the prayers."
      >
        <>
          <CheckboxContainer value={audioMute} onChange={onToggleAudioVolume}>
            Mute Audio
          </CheckboxContainer>
        </>
      </SideBySide>
      <hr />
      <SideBySide
        title="Music:"
        description="You can add background music while you pray the rosary. Once you start the rosary the music will autoplay."
      >
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
        title="Mystery:"
        description="Select the mystery you would like to meditate today."
      >
        <ChangeMystery
          mysteryLabel={t(currentMystery.label)}
          onUpdateMystery={onUpdateMystery}
        />
      </SideBySide>
      <hr />
      {/* Rosary, starting prayers that user can select */}
      <SideBySide
        title="Beginnig prayers:"
        description="List of prayers that you would like to pray at the beginning of the rosary."
      >
        <PrayerEditList
          defaultList={manipulateList(listOfPrayers[beginningPrayersKey])}
          onChange={(newList) => onUpdatePrayers(newList, beginningPrayersKey)}
        />
      </SideBySide>
      <hr />
      {/* Rosary, last prayers that user can select */}
      <SideBySide
        title="Prayers after each mystery:"
        description="List of prayers that you would like to pray at the end of each of the mysteries."
      >
        <PrayerEditList
          defaultList={manipulateList(listOfPrayers[endMysteryPrayersKey])}
          onChange={(newList) => onUpdatePrayers(newList, endMysteryPrayersKey)}
        />
      </SideBySide>
      <hr />
      {/* Rosary, last prayers that user can select */}
      <SideBySide
        title="Ending prayers:"
        description="List of prayers that you would like to pray at the end of the rosary."
      >
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
