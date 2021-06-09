import MainLayout from "../../../layout/MainLayout/MainLayout";

const listOfGroups = [
  {
    eventName: "Talleres de oracion y vida para Adultos",
    abbrv: "TOV",
    location: "Richmond, CA. USA",
    online: false,
    offline: true,
    date: new Date().toString(),
    languages: ["es"],
    image: "",
    institutionName: "TOV",
    description: "Aprenderas como orar en 15 differentes modalidades.",
    ages: "21+",
  },
  {
    eventName: "Juventud Misionera",
    abbrv: "JUMI",
    location: "Richmond, CA. USA",
    online: false,
    offline: true,
    date: new Date().toString(),
    languages: ["es"],
    image: "",
    institutionName: "HMSP",
    description:
      "Learn the about the word of God, while having fun doing activities and metting people your age.",
    ages: "18-30",
  },
  {
    eventName: "Catholicus",
    abbrv: "",
    location: "El Paso, TX. USA",
    online: true,
    offline: false,
    date: new Date().toString(),
    languages: ["es", "en"],
    image: "",
    institutionName: "",
    description: "",
    ages: "18-30",
  },
  {
    eventName: "New Mans",
    abbrv: "",
    location: "Berkely, CA. USA",
    online: true,
    offline: true,
    date: new Date().toString(),
    languages: ["en"],
    image: "",
    institutionName: "",
    description: "",
    ages: "18-30",
  },
];

const Groups = () => {
  return (
    <MainLayout>
      <h2>Meetup:</h2>
      {listOfGroups.map((i) => {
        return (
          <div className="d-flex">
            <div className="w-25">
              <img src={i?.image} alt={i?.eventName} />
            </div>
            <div>
              <small className="d-block">{i?.date}</small>
              <h5>{i?.eventName}</h5>
              <p>{i?.institutionName}</p>
            </div>
          </div>
        );
      })}
    </MainLayout>
  );
};

export default Groups;
