import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scroller } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Button, Col, Row } from "reactstrap";
import { RosaryPrayer } from "../../classes/rosaryPrayer";
import AudioPlayer from "../../../../../components/AudioPlayer";
import { strToId } from "../../../../../helpers/transform";
import StartView from "./containers/StartView";
import PrayerInfo from "./containers/PrayerInfo";
import EditRosary from "./containers/EditRosary";
import AudioBackground from "../../../../../components/AudioPlayer/AudioBackground";
import { aveAudio } from "../../audio";
// import SelectMystery from "./SelectMystery";
// import VideoBackground from "../../../../../components/Video/VideoBackground";
// import { sunriseVideo } from "../../video";

const Prayer = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;
  const rosary = new RosaryPrayer();

  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(null);
  const [currentMystery, setCurrentMysetry] = useState(rosary.getMystery());
  const [prayerStarted, setPrayerStarted] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [autoPlayAudio, setAutoplayAudio] = useState(true);
  const [audioMute, setAudioMute] = useState(false);
  const [listOfPrayers, setListOfPrayers] = useState(rosary.getPrayersList());

  const masagePrayerList = listOfPrayers.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: strToId(`${p.label} ${index}`),
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

  const onToggleAudioAutoplay = () => {
    setAutoplayAudio(!autoPlayAudio);
    // TODO: save it to the localstorage
  };

  const onToggleAudioVolume = () => {
    setAudioMute(!audioMute);
    // TODO: save it to the localstorage
  };

  const onToggleBackgroundMusic = () => {
    setBackgroundMusic(!backgroundMusic);
    // TODO: save it to the localstorage
  };

  const onUpdateMystery = ({ value }) => {
    rosary.setMystery(value);
    setCurrentMysetry(rosary.getMystery());
    setListOfPrayers(rosary.getPrayersList());
  };

  const onResetSettings = () => {
    setAutoplayAudio(true);
    setAudioMute(false);
    setBackgroundMusic(false);
    onUpdateMystery();
    // TODO: save it to the localstorage
  };

  const nextPrayer = (prayerIndex) => {
    const prayer = rosary.jumpToPrayer(prayerIndex + 1);
    // check if the prayer is defined
    if (prayer) {
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }
  };

  return (
    <div>
      {/* <VideoBackground videoFile={sunriseVideo} autoPlay videoLoop /> */}
      {backgroundMusic && (
        <AudioBackground audioFile={aveAudio} autoPlay={prayerStarted} />
      )}
      <div className="d-flex justify-content-center">
        <EditRosary
          rosary={rosary}
          autoPlayAudio={autoPlayAudio}
          onToggleAudioAutoplay={onToggleAudioAutoplay}
          audioMute={audioMute}
          onToggleAudioVolume={onToggleAudioVolume}
          onUpdateMystery={onUpdateMystery}
          currentMystery={currentMystery}
          onResetSettings={onResetSettings}
          backgroundMusic={backgroundMusic}
          onToggleBackgroundMusic={onToggleBackgroundMusic}
        />
        {/* <SelectMystery
          currentMystery={currentMystery}
          onUpdateMystery={onUpdateMystery}
          todaysMystery={todaysMystery}
        /> */}
      </div>
      <Row className="flex-column align-items-center">
        <Col className="d-flex flex-column align-items-center">
          {/* the rosary welcome screen */}
          <div
            className="d-flex flex-column text-center w-100 justify-content-center"
            style={{ minHeight: "85vh" }}
          >
            <StartView
              onStartPrayer={onStartPrayer}
              currentMystery={currentMystery}
            />
          </div>
          {/* the rosary prayers */}
          {masagePrayerList.map((p, index) => {
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
                    onToggleAudioVolume={onToggleAudioVolume}
                  />
                  {masagePrayerList.length - 1 > index && (
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
