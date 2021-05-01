import React, { useState } from "react";
import { scroller } from "react-scroll";
import { Col, Row } from "reactstrap";
import PropTypes from "prop-types";
import { strToId } from "../../../../../../../helpers/transform";
import BeginningSection from "../BeginningSection";
import RosaryButtons from "../RosaryButtons";
import AudioBackground from "../../../../../../../components/AudioPlayer/AudioBackground";
import { aveAudio } from "../../../../audio";
import RosarySection from "../RosarySection";

const RosaryList = ({ rosary, language }) => {
  const mystery = rosary.getMystery();
  rosary.setMystery(mystery);

  const [currentMystery, setCurrentMystery] = useState(mystery);
  const [currentPrayerIndex, setCurrentPrayerIndex] = useState(null);
  const [prayerStarted, setPrayerStarted] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState(false);
  const [autoPlayAudio, setAutoplayAudio] = useState(true);
  const [audioMute, setAudioMute] = useState(false);
  const [listOfPrayers, setListOfPrayers] = useState([
    rosary.getPrayersList()[0],
    rosary.getPrayersList()[1],
  ]);

  const manipulatePrayerList = listOfPrayers.map((p, index) => ({
    ...p,
    // create a unique ID for all prayers in the rosary
    id: strToId(p.label, index),
  }));

  const scrollToPrayer = (prayer) => {
    const prayerIndex = rosary.getPrayerIndex();
    const elementId = strToId(prayer.label, prayerIndex);
    // smooth scroll to the correct prayer
    scroller.scrollTo(elementId, {
      smooth: true,
      offset: -60,
    });
  };

  const onStartPrayer = () => {
    // start the rosary
    setPrayerStarted(true);

    setTimeout(() => {
      // wait a couple of seconds and
      // after all the prayers have been loaded in the page
      // navigate user to the first prayer
      const prayer = rosary.jumpToPrayer(0);
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
    }, 1000);
  };

  const getNextPrayer = (prayerIndex) => {
    const nextIndex = prayerIndex + 2;
    const prayer = rosary.getPrayersList()[nextIndex];
    // prayer is defined
    if (prayer && nextIndex >= manipulatePrayerList.length) {
      setListOfPrayers([...listOfPrayers, prayer]);
    }
  };

  const nextPrayer = (prayerIndex) => {
    const prayer = rosary.jumpToPrayer(prayerIndex + 1);
    // check if the prayer is defined
    if (prayer) {
      scrollToPrayer(prayer);
      setCurrentPrayerIndex(rosary.getPrayerIndex());
      getNextPrayer(prayerIndex);
    }
  };

  const onSave = ({
    mystery = currentMystery,
    bgMusic = backgroundMusic,
    mute = audioMute,
    autoPlay = autoPlayAudio,
    beginningPrayers,
    endMysteryPrayers,
    endingPrayers,
  }) => {
    console.log("saved");
    // when the user click the save button
    // update all the parameters
    setCurrentMystery(mystery);
    setAutoplayAudio(mute);
    setBackgroundMusic(bgMusic);
    setAudioMute(autoPlay);
    rosary.setPrayersList(beginningPrayers, endMysteryPrayers, endingPrayers);
    setListOfPrayers(rosary.getPrayersList());
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
            <BeginningSection currentMystery={currentMystery} />
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
          {prayerStarted &&
            manipulatePrayerList.map((p, index) => (
              <RosarySection
                key={p.id}
                size={manipulatePrayerList.length}
                prayer={p}
                nextPrayer={nextPrayer}
                language={language}
                currentMystery={currentMystery}
                autoPlayAudio={autoPlayAudio}
                currentPrayerIndex={currentPrayerIndex}
                index={index}
                audioMute={audioMute}
                setAudioMute={setAudioMute}
              />
            ))}
        </Col>
      </Row>
    </div>
  );
};

RosaryList.propTypes = {
  currentMystery: PropTypes.shape().isRequired,
  onStartPrayer: PropTypes.func.isRequired,
};

export default RosaryList;
