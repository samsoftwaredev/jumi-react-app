import React, { useState } from "react";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scroller } from "react-scroll";
import { Button, Col, Row } from "reactstrap";
import { useTranslation } from "react-i18next";
import AudioPlayer from "../../../../../../../components/AudioPlayer";
import { strToId } from "../../../../../../../helpers/transform";
import BeginningView from "../BeginningView";
import PrayerInfo from "../PrayerInfo/PrayerInfo";
import RosaryButtons from "../RosaryButtons";
import AudioBackground from "../../../../../../../components/AudioPlayer/AudioBackground";
import { aveAudio } from "../../../../audio";
import RosaryPrayer from "../../../../classes/rosaryPrayer";

const RosaryMystery = ({ changeCurrentMysetry }) => {
  const rosary = new RosaryPrayer();
  const { i18n } = useTranslation();
  const language = i18n.language;
  const [currentMystery, setCurrentMystery] = useState(rosary.getMystery());
  rosary.setMystery(currentMystery);
  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(null);
  const [prayerStarted, setPrayerStarted] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [autoPlayAudio, setAutoplayAudio] = useState(true);
  const [audioMute, setAudioMute] = useState(false);
  const [listOfPrayers, setListOfPrayers] = useState(rosary.getPrayersList());
  const setId = (a, b) => `${a}_${b}`;

  const manipulatePrayerList = listOfPrayers.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: strToId(setId(p.label, index)),
  }));

  const scrollToPrayer = (prayer) => {
    const prayerIndex = rosary.getPrayerIndex();
    const elementId = strToId(setId(prayer.label, prayerIndex));
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
    bgMusic,
    audioMute,
    autoPlayAudio,
    beginningPrayers,
    endMysteryPrayers,
    endingPrayers,
  }) => {
    changeCurrentMysetry(mystery);
    setAutoplayAudio(autoPlayAudio);
    setBackgroundMusic(bgMusic);
    setAudioMute(audioMute);
    setListOfPrayers(
      rosary.getPrayersList(beginningPrayers, endMysteryPrayers, endingPrayers)
    );
  };

  // change theme based on prayer
  // useEffect(() => {
  //   if (currentMystery.theme === themes.dark) setDarkTheme();
  //   if (currentMystery.theme === themes.light) setLightTheme();
  // }, [currentMystery, setDarkTheme, setLightTheme, themes]);

  return (
    <div>
      {/* <VideoPlayer
        videoFile={currentMystery.video}
        autoPlay
        videoLoop={false}
      /> */}
      {backgroundMusic && (
        <AudioBackground audioFile={aveAudio} autoPlay={prayerStarted} />
      )}
      <Row className="flex-column align-items-center">
        <Col className="d-flex flex-column align-items-center">
          {/* the rosary welcome screen */}
          <div
            className="d-flex flex-column text-center w-100 justify-content-center"
            style={{ minHeight: "85vh" }}
          >
            <BeginningView currentMystery={currentMystery} />
            <RosaryButtons
              onStartPrayer={onStartPrayer}
              rosary={rosary}
              currentMystery={currentMystery}
              isMusicEnable={backgroundMusic}
              isAutoPlayAudio={autoPlayAudio}
              isAudioMute={audioMute}
              save={onSave}
            />
          </div>
          {/* the rosary prayers */}
          {manipulatePrayerList.map((p, index) => {
            const audio = p?.audio ? p?.audio[language] : null;
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
                    audioFile={audio}
                    autoPlay={autoPlayAudio && isCurrentPrayer}
                    audioEnded={() => nextPrayer(index)}
                    audioMute={audioMute}
                    onToggleAudioVolume={() => setAudioMute(!audioMute)}
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

export default RosaryMystery;
