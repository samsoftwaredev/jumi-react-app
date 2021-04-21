import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Button, Col, Row } from "reactstrap";
import { RosaryPrayer } from "../../classes/rosaryPrayer";
import AudioPlayer from "../../../../../components/AudioPlayer";
import { strToId } from "../../../../../helpers/transform";
import BeginningView from "./containers/BeginningView";
import PrayerInfo from "./containers/PrayerInfo/PrayerInfo";
import EditRosary from "./containers/EditRosary";
import AudioBackground from "../../../../../components/AudioPlayer/AudioBackground";
import { aveAudio } from "../../audio";
import VideoPlayer from "../../../../../components/VideoPlayer";
import { sunriseVideo } from "../../video";
import {
  beginningPrayersKey,
  endingPrayersKey,
  endMysteryPrayersKey,
} from "../../constants/prayers";

const Prayer = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;
  const rosary = new RosaryPrayer();

  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(null);
  const [prayerStarted, setPrayerStarted] = useState(false);
  const [currentMystery, setCurrentMysetry] = useState(rosary.getMystery());
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [autoPlayAudio, setAutoplayAudio] = useState(true);
  const [audioMute, setAudioMute] = useState(false);
  const [listOfPrayers, setListOfPrayers] = useState(rosary.getPrayersList());

  const manipulatePrayerList = listOfPrayers.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: strToId(`${p.label}_${index}`),
  }));

  const scrollToPrayer = (prayer) => {
    const prayerIndex = rosary.getPrayerIndex();
    const elementId = strToId(`${prayer.label} ${prayerIndex}`);
    // smooth scroll to the correct prayer
    scroller.scrollTo(elementId, {
      smooth: true,
      offset: -60,
    });
  };

  const onStartPrayer = () => {
    const prayer = rosary.jumpToPrayer(0);
    if (prayer) {
      scrollToPrayer(prayer);
      setPrayerStarted(true);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }
  };

  const nextPrayer = (prayerIndex) => {
    const prayer = rosary.jumpToPrayer(prayerIndex + 1);
    // check if the prayer is defined
    if (prayer) {
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }
  };

  const onSave = ({
    mystery,
    music,
    mute,
    play,
    beginningPrayers,
    endMysteryPrayers,
    endingPrayers,
  }) => {
    setCurrentMysetry(mystery);
    setAutoplayAudio(play);
    setBackgroundMusic(music);
    setAudioMute(mute);
    setListOfPrayers(
      rosary.getPrayersList(beginningPrayers, endMysteryPrayers, endingPrayers)
    );
  };

  return (
    <div>
      <VideoPlayer videoFile={sunriseVideo} autoPlay videoLoop={false} />
      {backgroundMusic && (
        <AudioBackground audioFile={aveAudio} autoPlay={prayerStarted} />
      )}
      <div className="d-flex justify-content-center">
        <EditRosary
          rosary={rosary}
          currentMystery={currentMystery}
          isMusicEnable={backgroundMusic}
          isAutoPlayAudio={autoPlayAudio}
          isAudioMute={audioMute}
          save={onSave}
        />
      </div>
      <Row className="flex-column align-items-center">
        <Col className="d-flex flex-column align-items-center">
          {/* the rosary welcome screen */}
          <div
            className="d-flex flex-column text-center w-100 justify-content-center"
            style={{ minHeight: "85vh" }}
          >
            <BeginningView
              onStartPrayer={onStartPrayer}
              currentMystery={currentMystery}
            />
          </div>
          {/* the rosary prayers */}
          {manipulatePrayerList.map((p, index) => {
            const isCurrentPrayer = currentPrayerIndex === index;
            return (
              <Col
                md={6}
                id={p.id}
                key={p.id}
                className="d-flex flex-column justify-content-between"
                style={{ minHeight: "95vh", borderLeft: "1px solid #e3e3e3" }}
              >
                <div>
                  <PrayerInfo currentMystery={currentMystery} prayer={p} />
                </div>
                <div className="text-right mb-5">
                  <AudioPlayer
                    audioFile={p?.audio ? p?.audio[language] : null}
                    autoPlay={autoPlayAudio && isCurrentPrayer}
                    audioEnded={() => nextPrayer(index)}
                    audioMute={audioMute}
                    onToggleAudioVolume={() =>
                      setBackgroundMusic(!backgroundMusic)
                    }
                  />
                  {manipulatePrayerList.length - 1 > index && (
                    <Button
                      className="btn-circle ml-1"
                      color="info"
                      onClick={() => nextPrayer(index)}
                    >
                      <FontAwesomeIcon icon={faChevronDown} />
                    </Button>
                  )}
                </div>
              </Col>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default Prayer;
