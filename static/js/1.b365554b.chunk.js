(this.webpackJsonpjumi=this.webpackJsonpjumi||[]).push([[1],{45:function(e,o,a){"use strict";var n=a(60),s=a(120),r=a(46),i=a(4),t=function(e){var o=e.text,a=Object(s.a)(e,["text"]);return Object(i.jsx)("span",Object(n.a)(Object(n.a)({},a),{},{children:Object(r.a)(o)}))};o.a=t},46:function(e,o,a){"use strict";a.d(o,"a",(function(){return s}));var n=a(62),s=function(e){return n.a.t(e)}},59:function(e,o,a){"use strict";var n=a(123),s=a(124),r=a(125),i=a(45),t=a(4),l=function(){return Object(t.jsx)("footer",{id:"footer",className:"bg-light mt-5",children:Object(t.jsx)(n.a,{children:Object(t.jsxs)(s.a,{className:"pt-2 align-items-center",children:[Object(t.jsx)(r.a,{md:6,children:Object(t.jsxs)("p",{className:"text-center text-muted",children:["\xa9 Copyright ",(new Date).getFullYear()," JUMI"]})}),Object(t.jsxs)(r.a,{md:6,children:[Object(t.jsxs)("h5",{children:[Object(t.jsx)(i.a,{text:"followUs.label"}),":"]}),Object(t.jsx)("ul",{className:"ml-4 list-group ",children:[{icon:"",label:"Facebook",url:"https://www.facebook.com/112283280567588/"},{icon:"",label:"YouTube",url:"https://youtube.com/channel/UCq7PXebEbR3Pw6n2LLQppmA"}].map((function(e){return Object(t.jsx)("li",{children:Object(t.jsx)("a",{target:"social-media",href:e.url,children:e.label})},e.label)}))})]})]})})})},d=a(58),u=a(0),c=a(3),p=a(10),h=a(126),m=a(127),f=a(128),y=a(129),b=a(130),g=a(134),v=a(135),j=a(136),M=a(131),S=a(49),w=a(62),C=function(){var e,o=Object(c.g)(),a=Object(u.useState)(!1),n=Object(d.a)(a,2),s=n[0],r=n[1],l=[{label:"Espa\xf1ol",abbrv:"es"},{label:"English",abbrv:"en"}],C=l.findIndex((function(e){return e.abbrv===w.a.language}));return Object(u.useEffect)((function(){S.animateScroll.scrollToTop({smooth:!0,offset:-150})}),[o.pathname]),Object(t.jsxs)(h.a,{fixed:"top",color:"light",light:!0,expand:"md",children:[Object(t.jsx)(p.c,{className:"navbar-brand",to:"/",children:Object(t.jsx)(i.a,{text:"app.shortName"})}),Object(t.jsx)(m.a,{onClick:function(){return r(!s)}}),Object(t.jsxs)(f.a,{isOpen:s,navbar:!0,children:[Object(t.jsx)(y.a,{className:"mr-auto",navbar:!0,children:[{label:"prayRosary.label",path:"/app/rosary"},{label:"religiousGroups.label",path:"/app/groups",disabled:!0}].map((function(e){return Object(t.jsx)(b.a,{active:o.pathname===e.path,children:Object(t.jsx)(p.c,{className:"nav-link ".concat(e.disabled&&"disabled"),to:e.path,children:Object(t.jsx)(i.a,{text:e.label})})},e.label)}))}),Object(t.jsxs)(g.a,{inNavbar:!0,children:[Object(t.jsx)(v.a,{nav:!0,caret:!0,children:(null===(e=l[C])||void 0===e?void 0:e.label)||Object(t.jsx)(i.a,{text:"language_label"})}),Object(t.jsx)(j.a,{right:!0,children:l.map((function(e){var o=e.abbrv,a=e.label;return Object(t.jsx)(M.a,{onClick:function(){return e=o,void w.a.changeLanguage(e).then((function(){}));var e},children:a},o)}))})]})]})]})};o.a=function(e){var o=e.children;return Object(t.jsxs)("div",{children:[Object(t.jsx)(C,{}),Object(t.jsx)(n.a,{style:{marginTop:"75px"},id:"container",className:"pt-2",children:o}),Object(t.jsx)(l,{})]})}},62:function(e,o,a){"use strict";var n=a(118),s=a(81),r=a(82),i=a(83);n.a.use(i.a).init({interpolation:{escapeValue:!1},lng:"en",resources:{en:r,es:s}}),o.a=n.a},81:function(e){e.exports=JSON.parse('{"translation":{"app":{"name":"Juventud Misionera","shortName":"JUMI"},"age":{"label":"A\xf1os"},"home":{"label":"Casa"},"name":{"label":"Nombre"},"start":{"label":"Comenzar"},"followUs":{"label":"Siguenos"},"prayRosary":{"label":"Rezar el Rosario"},"religiousGroups":{"label":"Grupos Religiosos"},"howToPrayRosary":{"label":"Aprende a Rezar"},"language":{"label":"Lenguaje"},"prayers":{"start":{"label":"La Se\xf1al de la Cruz","description":"Por la se\xf1al de la Santa Cruz, de nuestros enemigos, l\xedbranos Se\xf1or Dios nuestro. En el nombre del Padre, del Hijo y del Esp\xedritu Santo. Am\xe9n."},"intentions":{"label":"Intenciones","description":"Ofrecer el Rosario por alg\xfan motivo o persona es una tradici\xf3n muy antigua, en especial cuando se hac\xeda por los difuntos. Desde solicitar alguna gracia en particular, el \xe9xito de una operaci\xf3n o simplemente como acci\xf3n de gracias por un sinf\xedn de razones."},"actOfContrition":{"label":"Acto de Contrici\xf3n","description":"Se\xf1or m\xedo, Jesucristo, Dios y hombre verdadero, Creador y redentor m\xedo, por ser t\xfa quien eres y porque te amo sobre todas las cosas, me pesa de todo coraz\xf3n haberte ofendido. Quiero y propongo firmemente confesarme a su tiempo. Ofrezco mi vida, obras y trabajos en satisfacci\xf3n de mis pecados. Y conf\xedo en que en tu bondad y misericordia infinita, me los perdonar\xe1s y me dar\xe1s la gracia para no volverte a ofender. Am\xe9n."},"ourFather":{"label":"Padre Nuestro","description":"Padre nuestro, que est\xe1s en el cielo. Santificado sea tu nombre. Venga tu reino. H\xe1gase tu voluntad en la tierra como en el cielo.\\nDanos hoy nuestro pan de cada d\xeda. Perdona nuestras ofensas, como tambi\xe9n nosotros perdonamos a los que nos ofenden. No nos dejes caer en tentaci\xf3n y l\xedbranos del mal. Am\xe9n."},"hailMary":{"label":"Ave Mar\xeda","description":"Dios te salve, Mar\xeda. Llena eres de gracia: El Se\u0144or es contigo. Bendita t\xfa eres entre todas las mujeres. Y bendito es el fruto de tu vientre: Jes\xfas.\\nSanta Mar\xeda, Madre de Dios, ruega por nosotros pecadores, ahora y en la hora de nuestra muerte. Am\xe9n."},"glory":{"label":"El Gloria","description":"Gloria al Padre, al Hijo y al Esp\xedritu Santo. Como era en el principio, ahora y siempre, por los siglos de los siglos. Am\xe9n."},"creed":{"label":"Credo","description":"Creo en Dios, Padre todopoderoso, creador del Cielo y de la Tierra. Creo en Jesucristo su \xfanico Hijo, Nuestro Se\u0144or, que fue concebido por obra y gracia del Esp\xedritu Santo; naci\xf3 de Santa Mar\xeda Virgen; padeci\xf3 bajo el poder de Poncio Pilato; fue crucificado, muerto y sepultado; descendi\xf3 a los infiernos; al tercer d\xeda resucit\xf3 de entre los muertos; subi\xf3 a los cielos y est\xe1 a la diestra de Dios Padre; desde all\xed ha de venir a juzgar a los vivos y a los muertos. Creo en el Esp\xedritu Santo, en la Santa Iglesia Cat\xf3lica, la comumi\xf3n de los Santos en el perdon de los pecados la resurrecci\xf3n de los muertos y la vida eterna. Am\xe9n."},"signOfCross":{"label":"La Se\xf1al de la Cruz","description":"En el nombre del Padre, y del Hijo, y del Esp\xedritu Santo. Am\xe9n."},"jaculatoria2":{"label":"Dios te salve, Reina","description":"Mar\xeda, Madre de gracia, Madre de misericordia, defi\xe9ndenos de nuestros enemigos y amp\xe1ranos ahora y en la hora de nuestra muerte. Am\xe9n."},"jaculatoria3":{"label":"Jaculatoria 3","description":"Oh Jes\xfas, perd\xf3nanos nuestros pecados, s\xe1lvanos del fuego del infierno y gu\xeda todas las almas al Cielo, especialmente aquellas que necesitan m\xe1s de tu misericordia. Am\xe9n."},"fatima":{"label":"Oraci\xf3n de F\xe1tima","description":"Oh Jes\xfas m\xedo, perdona nuestros pecados y l\xedbranos del fuego del infierno, lleva al cielo a todas las almas y socorre especialmente a las m\xe1s necesitadas de tu misericordia. Am\xe9n"},"salve":{"label":"La Salve","description":"Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A Ti llamamos los desterrados hijos de Eva; a Ti suspiramos, gimiendo y llorando, en este valle de l\xe1grimas. Ea, pues, Se\xf1ora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y despu\xe9s de este destierro mu\xe9stranos a Jes\xfas, fruto bendito de tu vientre. \xa1Oh clement\xedsima, oh piadosa, oh dulce siempre Virgen Mar\xeda! Ruega por nosotros, Santa Madre de Dios, para que seamos dignos de alcanzar las promesas de Nuestro Se\xf1or Jesucristo."},"pope":{"label":"Intenciones del Papa","description":"Un Padre nuestro, Ave Mar\xeda y Gloria por las intenciones de Su Santidad el Papa y para ganar las indulgencias."},"litanies":{"label":"Letan\xedas de la Virgen Mar\xeda","description":"Se\xf1or, ten piedad\\nCristo, ten piedad\\nSe\xf1or, ten piedad.\\nCristo, \xf3yenos.\\nCristo, esc\xfachanos.\\n\\nDios, Padre celestial,\\nten piedad de nosotros.\\n\\nDios, Hijo, Redentor del mundo,\\nten piedad de nosotros.\\n\\nDios, Esp\xedritu Santo, \\nten piedad de nosotros.\\n\\nSant\xedsima Trinidad, un solo Dios,\\nten piedad de nosotros.\\n\\nSanta Mar\xeda,\\nruega por nosotros.\\n\\nSanta Madre de Dios,\\nruega por nosotros.\\n\\nSanta Virgen de las V\xedrgenes,\\nruega por nosotros.\\n\\nMadre de Cristo,\\nruega por nosotros.\\n\\nMadre de la Iglesia,\\nruega por nosotros.\\n\\nMadre de la misericordia,\\nruega por nosotros.\\n\\nMadre de la divina gracia,\\nruega por nosotros.\\n\\nMadre de la esperanza,\\nruega por nosotros.\\n\\nMadre pur\xedsima,\\nruega por nosotros.\\n\\nMadre cast\xedsima,\\nruega por nosotros.\\n\\nMadre siempre virgen,\\nruega por nosotros.\\n\\nMadre inmaculada,\\nruega por nosotros.\\n\\nMadre amable,\\nruega por nosotros.\\n\\nMadre admirable,\\nruega por nosotros.\\n\\nMadre del buen consejo,\\nruega por nosotros.\\n\\nMadre del Creador,\\nruega por nosotros.\\n\\nMadre del Salvador,\\nruega por nosotros.\\n\\nVirgen prudent\xedsima,\\nruega por nosotros.\\n\\nVirgen digna de veneraci\xf3n,\\nruega por nosotros.\\n\\nVirgen digna de alabanza,\\nruega por nosotros.\\n\\nVirgen poderosa,\\nruega por nosotros.\\n\\nVirgen clemente,\\nruega por nosotros.\\n\\nVirgen fiel,\\nruega por nosotros.\\n\\nEspejo de justicia,\\nruega por nosotros.\\n\\nTrono de la sabidur\xeda,\\nruega por nosotros.\\n\\nCausa de nuestra alegr\xeda,\\nruega por nosotros.\\n\\nVaso espiritual,\\nruega por nosotros.\\n\\nVaso digno de honor,\\nruega por nosotros.\\n\\nVaso de insigne devoci\xf3n,\\nruega por nosotros.\\n\\nRosa m\xedstica,\\nruega por nosotros.\\n\\nTorre de David,\\nruega por nosotros.\\n\\nTorre de marfil,\\nruega por nosotros.\\n\\nCasa de oro,\\nruega por nosotros.\\n\\nArca de la Alianza,\\nruega por nosotros.\\n\\nPuerta del cielo,\\nruega por nosotros.\\n\\nEstrella de la ma\xf1ana,\\nruega por nosotros.\\n\\nSalud de los enfermos,\\nruega por nosotros.\\n\\nRefugio de los pecadores,\\nruega por nosotros.\\n\\nConsuelo de los migrantes,\\nruega por nosotros.\\n\\nConsoladora de los afligidos,\\nruega por nosotros.\\n\\nAuxilio de los cristianos,\\nruega por nosotros.\\n\\nReina de los \xc1ngeles,\\nruega por nosotros.\\n\\nReina de los Patriarcas,\\nruega por nosotros.\\n\\nReina de los Profetas,\\nruega por nosotros.\\n\\nReina de los Ap\xf3stoles,\\nruega por nosotros.\\n\\nReina de los M\xe1rtires,\\nruega por nosotros.\\n\\nReina de los Confesores,\\nruega por nosotros.\\n\\nReina de las V\xedrgenes,\\nruega por nosotros.\\n\\nReina de todos los Santos,\\nruega por nosotros.\\n\\nReina concebida sin pecado original,\\nruega por nosotros.\\n\\nReina asunta a los Cielos,\\nruega por nosotros.\\n\\nReina del Sant\xedsimo Rosario,\\nruega por nosotros.\\n\\nReina de la familia,\\nruega por nosotros.\\n\\nReina de la paz.\\nruega por nosotros.\\n\\nCordero de Dios, que quitas el pecado del mundo,\\nperd\xf3nanos, Se\xf1or.\\n\\nCordero de Dios, que quitas el pecado del mundo,\\nesc\xfachanos, Se\xf1or.\\n\\nCordero de Dios, que quitas el pecado del mundo,\\nten misericordia de nosotros.\\n\\nRuega por nosotros, Santa Madre de Dios.\\nPara que seamos dignos de las promesas de Cristo.\\n\\nOraci\xf3n\\nTe rogamos nos concedas,\\nSe\xf1or Dios nuestro,\\ngozar de continua salud de alma y cuerpo,\\ny por la gloriosa intercesi\xf3n\\nde la bienaventurada siempre Virgen Mar\xeda,\\nvernos libres de las tristezas de la vida presente\\ny disfrutar de las alegr\xedas eternas.\\nPor Cristo nuestro Se\xf1or.\\nAm\xe9n."}},"mysteries":{"ordinalNumbers":{"first":"Primer Misterio","second":"Segundo Misterio","third":"Tercer Misterio","fourth":"Cuarto Misterio","fifth":"Quinto Misterio"},"joyful":{"label":"Los Misterios Gozosos","first":{"label":"La Anunciaci\xf3n","description":"El \xe1ngel le dijo: No temas, Mar\xeda, porque has hallado gracia delante de Dios, vas a concebir en el seno y vas a dar a luz un hijo, a quien pondr\xe1s por nombre Jes\xfas. El ser\xe1 grande y ser\xe1 llamado Hijo del Alt\xedsimo (...). Dijo Mar\xeda: He aqu\xed la esclava del Se\xf1or; h\xe1gase en m\xed seg\xfan t\xfa palabra."},"second":{"label":"La Visitaci\xf3n (de Mar\xeda a su prima Santa Isabel)","description":"En aquellos d\xedas, se levanto Mar\xeda y se fue con prontitud a la regi\xf3n monta\xf1osa, a una ciudad de Jud\xe1; entr\xf3 en casa de Zacar\xedas y salud\xf3 a Isabel. Y sucedi\xf3 que, en cuanto oy\xf3 Isabel el saludo de Mar\xeda, salt\xf3 de gozo el ni\xf1o en su seno, e Isabel qued\xf3 llena      del Esp\xedritu Santo; y exclamando con gran voz, dijo: bendita t\xfa entre las mujeres y bendito el fruto de tu vientre; y \xbfde donde a m\xed que la madre de mi Se\xf1or venga a visitarme?"},"third":{"label":"El Nacimiento de Jes\xfas","description":"Y sucedi\xf3 que, mientras ellos estaban all\xed se cumplieron los d\xedas del alumbramiento, y dio a luz a su hijo primog\xe9nito, le envolvi\xf3 en pa\xf1ales y le acost\xf3 en un pesebre, porque no ten\xedan sitio en el alojamiento. Hab\xeda en la misma comarca algunos pastores (...) se les present\xf3 el \xc1ngel del Se\xf1or, (...)y les dijo: no tem\xe1is, pues os anuncio una gran alegr\xeda, (...) os ha nacido (...) un salvador."},"fourth":{"label":"La Presentaci\xf3n","description":"Llevaron a Jes\xfas a Jerusal\xe9n para presentarle al Se\xf1or, como est\xe1 escrito en la Ley del Se\xf1or. (...) Y he aqu\xed que hab\xeda en Jerusal\xe9n un hombre llamado Sime\xf3n que esperaba la consolaci\xf3n de Israel; y estaba en \xe9l el Esp\xedritu Santo. (...)Sime\xf3n les bendijo y dijo a Mar\xeda, su madre: \xc9ste est\xe1 puesto para ca\xedda y elevaci\xf3n de muchos en Israel, y para ser se\xf1al de contradicci\xf3n- \xa1y a ti misma una espada te traspasar\xe1 el alma!- a fin de que queden al descubierto las intenciones de muchos corazones."},"fifth":{"label":"El Ni\xf1o Perdido y Hallado en el Templo","description":"Sus padres iban todos los a\xf1os a Jerusal\xe9n a la fiesta de la Pascua. (...) Subieron ellos como de costumbre a la fiesta y, al volverse, pasados los d\xedas, el ni\xf1o Jes\xfas se qued\xf3 en Jerusal\xe9n, sin saberlo sus padres(...). Se volvieron a Jerusal\xe9n en su busca(...). Al cabo de tres d\xedas, le encontraron en el templo sentado en medio de los maestros, escuch\xe1ndoles y pregunt\xe1ndoles; todos los que le o\xedan, estaban estupefactos por su inteligencia y sus respuestas."}},"sorrowful":{"label":"Los Misterios Dolorosos","first":{"label":"La Agon\xeda en el Huerto","description":"Va Jes\xfas con ellos a una propiedad llamada Getseman\xed, y dice a los disc\xedpulos: Sentaos aqu\xed, mientras voy all\xe1 a orar. Y tomando consigo a Pedro y a los dos hijos de Zebedeo, comenz\xf3 a sentir tristeza y angustia. Y adelant\xe1ndose un poco, cay\xf3 rostro en tierra,\u201d y dijo: \u201cPadre si quieres aparta de m\xed esta copa, pero no se haga mi voluntad sino la tuya. \u201cY sumido                     en agon\xeda, insist\xeda m\xe1s en su oraci\xf3n. Su sudor se hizo como gotas espesas de sangre que ca\xedan en tierra."},"second":{"label":"La Flagelaci\xf3n de Nuestro Se\xf1or Jesucristo","description":"(Pilato) volvi\xf3 a salir donde los jud\xedos y les dijo: Yo no encuentro ning\xfan delito en \xe9l (...). \xbfQuer\xe9is, pues, que os ponga en libertad al Rey de los jud\xedos? Ellos volvieron a gritar diciendo: \xa1A \xe9se, no; a Barrab\xe1s! (...) Pilato entonces tom\xf3 a Jes\xfas y mand\xf3 azotarle."},"third":{"label":"La Coronaci\xf3n de Espinas","description":"Los soldados trenzando una corona de espinas, se la pusieron sobre su cabeza, y en su mano derecha una ca\xf1a; y doblando la rodilla delante de \xe9l, le hac\xedan burla diciendo: \xa1Salve, Rey de los jud\xedos!; y despu\xe9s de escupirle, cogieron la ca\xf1a y le golpeaban en la cabeza."},"fourth":{"label":"Jesucristo, la cruz a cuestas y camino al Calvario","description":"Cuando se hubieron burlado de \xe9l, le quitaron el manto, le pusieron sus ropas y le llevaron a crucificarle. Y \xe9l cargando con su cruz, sali\xf3 hacia el lugar llamado Calvario. Y obligaron a uno que pasaba, a Sim\xf3n de Cirene, (...) a que llevara su cruz."},"fifth":{"label":"La Crucifixi\xf3n y Muerte de Nuestro Se\xf1or","description":"Llegados al lugar llamado Calvario, le crucificaron. (...) Jes\xfas dec\xeda: Padre, perd\xf3nales, porque no saben lo que hacen (...). Era ya cerca de la hora sexta cuando, al eclipsarse el sol, hubo oscuridad sobre toda la tierra hasta la hora nona (...). Jes\xfas, dando un fuerte grito, dijo: Padre, en tus manos encomiendo mi esp\xedritu y, dicho esto, expir\xf3.\u201d \u201cComo le vieron muerto, no le quebraron las piernas, sino que uno de los soldados le traspas\xf3 el costado con una lanza y al instante sali\xf3 sangre y agua."}},"glorious":{"label":"Los Misterios Gloriosos","first":{"label":"La Resurrecci\xf3n del Se\xf1or","description":"El \xc1ngel se dirigi\xf3 a las mujeres y les dijo: Vosotras no tem\xe1is, pues s\xe9 que busc\xe1is a Jes\xfas, el Crucificado; no est\xe1 aqu\xed, ha resucitado, como lo hab\xeda dicho. Venid, ved el lugar donde estaba. Y ahora id en seguida a decir a sus disc\xedpulos: Ha resucitado de entre los muertos"},"second":{"label":"La Ascensi\xf3n","description":"Jes\xfas \u201clos sac\xf3 hasta cerca de Betania y, alzando sus manos, los bendijo. Y sucedi\xf3 que, mientras los bendec\xeda se separ\xf3 de ellos y fue llevado al cielo.\u201d Despu\xe9s \u201csalieron a predicar por todas partes, colaborando el Se\xf1or con ellos y confirmando la Palabra con las se\xf1ales que la acompa\xf1aban."},"third":{"label":"La Venida del Esp\xedritu Santo en Pentecost\xe9s","description":"Todos ellos perseveraban en la oraci\xf3n, con un mismo esp\xedritu en compa\xf1\xeda de algunas mujeres, de Mar\xeda, la madre de Jes\xfas, y de sus hermanos. (...) Al llegar el d\xeda de Pentecost\xe9s, estaban todos reunidos en un mismo lugar. De repente vino del cielo un ruido (...) que llen\xf3 toda la casa en la que se encontraban. Se les aparecieron unas lenguas como de fuego que se repartieron y se posaron sobre cada uno de ellos; quedaron todos llenos del Esp\xedritu Santo y se pusieron a hablar en otras lenguas, seg\xfan el Esp\xedritu les conced\xeda expresarse."},"fourth":{"label":"La Asunci\xf3n de la Virgen Sant\xedsima","description":"\xa1Lev\xe1ntate, amada m\xeda, hermosa m\xeda, y vente! Porque, mira, ha pasado ya el invierno, han cesado las lluvias y se han ido. (...) Mu\xe9strame tu semblante, d\xe9jame o\xedr tu voz; porque tu voz es dulce, y bello tu semblante."},"fifth":{"label":"La Coronaci\xf3n de la Virgen Sant\xedsima como Reina de Cielos y Tierra","description":"Toda espl\xe9ndida, la hija del rey, va adentro, con vestidos en oro recamados; con sus brocados es llevada ante el rey.\u201d Y \u201cuna gran se\xf1al apareci\xf3 en el cielo; una mujer, vestida del sol, con la luna bajo sus pies, y una corona de doce estrellas sobre su cabeza."}},"luminous":{"label":"Los Misterios Luminosos","first":{"label":"Su bautismo en el Jord\xe1n","description":"Entonces aparece Jes\xfas, que viene de Galilea al Jord\xe1n donde Juan, para ser bautizado por \xe9l (...). Sali\xf3 luego del agua; y en esto se abrieron los cielos y vio al Esp\xedritu de Dios que bajaba en forma de paloma y ven\xeda sobre \xe9l. Y una voz que sal\xeda de los cielos dec\xeda: Este es mi Hijo amado, en quien yo me complazco."},"second":{"label":"Su autorrevelaci\xf3n en las bodas del Can\xe1","description":"Se celebraba una boda en Can\xe1 de Galilea y estaba all\xed la madre de Jes\xfas. Fue invitado tambi\xe9n a la boda Jes\xfas con sus disc\xedpulos. Y, como faltara vino, porque se hab\xeda acabado el vino de la boda, le dice a Jes\xfas su madre: No tienen vino. Jes\xfas le responde: \xbfQu\xe9 tengo yo contigo, mujer? Todav\xeda no ha llegado mi hora. Dice su madre a los sirvientes: Haced lo que \xe9l os diga."},"third":{"label":"Su Anuncio del Reino de Dios","description":"March\xf3 Jes\xfas a Galilea; y proclamaba la Buena Nueva de Dios: El tiempo se ha cumplido y el Reino de Dios est\xe1 cerca; convert\xedos y creed en la Buena Nueva (...). [Luego] llegan a Cafarna\xfam (...) y le vienen a traer a un paral\xedtico. (...) Al no poder present\xe1rselo a causa de la multitud, abrieron el techo (...) y a trav\xe9s de la abertura que hicieron, descolgaron la camilla donde yac\xeda el paral\xedtico. Viendo Jes\xfas la fe de ellos, dice al paral\xedtico: Hijo, tus pecados te son perdonados (...), a ti te digo, lev\xe1ntate, toma tu camilla y vete a tu casa."},"fourth":{"label":"Su Transfiguraci\xf3n","description":"Seis d\xedas despu\xe9s, toma Jes\xfas consigo a Pedro, a Santiago y a su hermano Juan, y los lleva aparte, a un monte alto. Y se transfigur\xf3 delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz. En esto, se les aparecieron Mois\xe9s y El\xedas que conversaban con \xe9l. (...) [Y] una nube luminosa los cubri\xf3 con su sombra y de la nube sal\xeda una voz que dec\xeda: Este es mi Hijo amado, en quien me complazco; escuchadle."},"fifth":{"label":"Instituci\xf3n de la Eucarist\xeda","description":"Seis d\xedas despu\xe9s, toma Jes\xfas consigo a Pedro, a Santiago y a su hermano Juan, y los lleva aparte, a un monte alto. Y se transfigur\xf3 delante de ellos: su rostro se puso brillante como el sol y sus vestidos se volvieron blancos como la luz. En esto, se les aparecieron Mois\xe9s y El\xedas que conversaban con \xe9l. (...) [Y] una nube luminosa los cubri\xf3 con su sombra y de la nube sal\xeda una voz que dec\xeda: Este es mi Hijo amado, en quien me complazco; escuchadle."}}}}}')},82:function(e){e.exports=JSON.parse('{"translation":{"app":{"name":"Missionary Youth","shortName":"JUMI"},"age":{"label":"Age"},"home":{"label":"Home"},"name":{"label":"Name"},"start":{"label":"Start"},"followUs":{"label":"Follow Us"},"prayRosary":{"label":"Pray the Rosary"},"religiousGroups":{"label":"Religious Groups"},"howToPrayRosary":{"label":"How To Pray"},"language":{"label":"Language"},"prayers":{"start":{"label":"Sign of the Cross","description":"In the name of the Father, and of the Son, and of the Holy Spirit. Amen."},"intentions":{"label":"Intentions","description":"Offering the Rosary for some reason or person is a very old tradition, especially when it was done for the deceased. From requesting a particular grace, the success of an operation or simply giving thanks for all that we have."},"actOfContrition":{"label":"Act of Contrition","description":"My God, I am sorry for my sins with all my heart. In choosing to do wrong and failing to do good, I have sinned against you whom I should love above all things.\\n I firmly intend, with your help, to do penance, to sin no more, and to avoid whatever leads me to sin.\\n Our Savior Jesus Christ suffered and died for us. In his name, my God, have mercy."},"ourFather":{"label":"Our Father","description":"Our Father, who art in heaven hallowed be thy name; thy kingdom come; thy will be done on earth as it is in heaven. Give us this day our daily bread and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen."},"hailMary":{"label":"Hail Mary","description":"Hail Mary, full of grace. The Lord is with thee. Blessed art thou amongst women, And blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, Pray for us sinners, Now and at the hour of our death. Amen."},"glory":{"label":"Glory Be","description":"Glory be to the Father, and to the Son, and to the Holy Spirit. As it was in the beginning, is now, and ever shall be, world without end. Amen."},"creed":{"label":"The Apostles Creed","description":"I believe in God, the Father Almighty, Creator of heaven and earth. I believe in Jesus Christ his only Son, our Lord. He was conceived by the power of the Holy Spirit and born of the Virgin Mary. He suffered under Pontius Pilate, was crucified, died and was buried. He descended into hell. On the third day he rose again. He ascended into heaven, and is seated at the right hand of the Father. He will come again to judge the living and the dead. I believe in the Holy Spirit, the holy catholic Church, the Communion of Saints, the forgiveness of sins, the Resurrection of the body and life everlasting. Amen."},"signOfCross":{"label":"Sign of the Cross","description":"In the name of the Father, and of the Son, and of the Holy Spirit. Amen."},"jaculatoria2":{"label":"Fatima Prayer 2","description":"My God, I believe, I adore, I hope, and I love You. I beg pardon of You for those who do not believe, do not adore, do not hope, and do not love You."},"jaculatoria3":{"label":"Let Us Pray","description":"Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that, we to whom the Incarnation of Christ, Thy Son, was made known by the message of an Angel, may by His Passion and Cross, be brought to the glory of His Resurrection. Through the same Christ our Lord. Amen."},"fatima":{"label":"Fatima Prayer","description":"O My Jesus, forgive us our sins, save us from the fires of Hell and lead all souls to Heaven, especially those who are in most need of Thy mercy. Amen."},"salve":{"label":"The Salve Regina (Hail Holy Queen)","description":"Hail Holy Queen, Mother of Mercy, our life our sweetness and our hope. To thee do we cry, poor banished children of Eve; To thee do we send up our sighs, mourning and weeping in this valley of tears. Turn then, most gracious advocate, thine eyes of mercy toward us and after this our exile show unto us the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary!"},"pope":{"label":"For The Intentions of the Holy Father","description":"Our Father, one Hail Mary, and one Glory Be for the tntentions of the Holy Father."},"litanies":{"label":"Litany of the Blessed Virgin Mary","description":"Lord, have mercy on us.\\nChrist, have mercy on us. \\n\\nLord, have mercy on us.\\nChrist, hear us.\\nChrist, graciously hear us. \\n\\nGod the Father of heaven,\\nhave mercy on us. \\n\\nGod the Son, Redeemer of the world,\\nhave mercy on us. \\n\\nGod the Holy Spirit,\\nhave mercy on us. \\n\\nHoly Trinity, one God,\\nhave mercy on us. \\n\\nHoly Mary, \\npray for us. \\n\\nHoly Mother of God,\\npray for us.\\n\\nHoly Virgin of virgins,\\npray for us.\\n\\nMother of Christ,\\npray for us.\\n\\nMother of the Church,\\npray for us.\\n\\nMother of mercy,\\npray for us.\\n\\nMother of divine grace,\\npray for us.\\n\\nMother of hope,\\npray for us.\\n\\nMother most pure,\\npray for us.\\n\\nMother most chaste,\\npray for us.\\n\\nMother inviolate,\\npray for us.\\n\\nMother undefiled,\\npray for us. \\n\\nMother most amiable,\\npray for us. \\n\\nMother most admirable,\\npray for us. \\n\\nMother of perpetual help,\\npray for us. \\n\\nMother of good counsel,\\npray for us. \\n\\nMother of our Creator,\\npray for us. \\n\\nMother of our Saviour,\\npray for us. \\n\\nVirgin most prudent,\\npray for us. \\n\\nVirgin most venerable,\\npray for us. \\n\\nVirgin most renowned,\\npray for us. \\n\\nVirgin most powerful,\\npray for us. \\n\\nVirgin most merciful,\\npray for us. \\n\\nVirgin most faithful,\\npray for us. \\n\\nMirror of justice,\\npray for us. \\n\\nSeat of wisdom,\\npray for us. \\n\\nCause of our joy,\\npray for us. \\n\\nSpiritual vessel,\\npray for us. \\n\\nVessel of honour,\\npray for us. \\n\\nSingular vessel of devotion,\\npray for us. \\n\\nMystical rose,\\npray for us. \\n\\nTower of David,\\npray for us. \\n\\nTower of ivory,\\npray for us. \\n\\nHouse of gold,\\npray for us. \\n\\nArk of the covenant,\\npray for us. \\n\\nGate of heaven,\\npray for us. \\n\\nMorning star,\\npray for us. \\n\\nHealth of the sick,\\npray for us. \\n\\nRefuge of sinners,\\npray for us. \\n\\nSolace of migrants,\\npray for us. \\n\\nComforter of the afflicted,\\npray for us. \\n\\nHelp of Christians,\\npray for us. \\n\\nQueen of Angels,\\npray for us. \\n\\nQueen of Patriarchs,\\npray for us. \\n\\nQueen of Prophets,\\npray for us. \\n\\nQueen of Apostles,\\npray for us. \\n\\nQueen of Martyrs,\\npray for us. \\n\\nQueen of Confessors,\\npray for us. \\n\\nQueen of Virgins,\\npray for us. \\n\\nQueen of all Saints,\\npray for us. \\n\\nQueen conceived without original sin,\\npray for us. \\n\\nQueen assumed into heaven,\\npray for us. \\n\\nQueen of the most holy Rosary,\\npray for us. \\n\\nQueen of Families,\\npray for us. \\n\\nQueen of Peace.\\npray for us. \\n\\nLamb of God, who takes away the sins of the world,\\nspare us, O Lord.\\n\\nLamb of God, who takes away the sins of the world,\\ngraciously hear us, O Lord. \\n\\nLamb of God, who takes away the sins of the world,\\nhave mercy on us. \\n\\nPray for us, O holy Mother of God,\\nThat we may be made worthy of the promises of Christ. \\n\\nLet us pray\\nGrant, we beseech Thee, O Lord God, that we Thy servants, may enjoy lasting health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enter into the joy of eternal happiness. Through Christ our Lord. Amen."}},"mysteries":{"ordinalNumbers":{"first":"1st Mystery","second":"2nd Mystery","third":"3rd Mystery","fourth":"4th Mystery","fifth":"5th Mystery"},"joyful":{"label":"Joyful Mystery","first":{"label":"The Annunciation of the Lord to Mary","description":"The Angel Gabriel appears to Mary, announcing she is to be the Mother of God."},"second":{"label":"The Visitation of Mary to Elizabeth","description":"Elizabeth greets Mary: \u201cBlessed art Thou amoung women and blessed is the fruit of thy womb.\u201d"},"third":{"label":"The Nativity of our Lord Jesus Christ","description":"The Virgin Mary gives birth to the Redeemer of the World. \u201cAnd this will be a sign for you: you will find an infant wrapped in swaddling clothes and lying in a manger.\u201d"},"fourth":{"label":"The Presentation of our Lord","description":"The Blessed Mother presents the Child Jesus in the Temple."},"fifth":{"label":"Finding Jesus in the Temple","description":"The Blessed Mother finds Jesus in the Temple."}},"sorrowful":{"label":"Sorrowful Mystery","first":{"label":"The Agony of Jesus in the Garden","description":"At Gethsemane, Jesus prays as He contemplates the sins of the world."},"second":{"label":"The Scourging at the Pillar","description":"Jesus is cruelly scourged until His mortified body could bear no more."},"third":{"label":"Jesus is Crowned with Thorns","description":"A crown of thorns is placed on the head of Jesus."},"fourth":{"label":"Jesus Carried the Cross","description":"Jesus carries the heavy cross upon His shoulders to Calvary."},"fifth":{"label":"The Crucifixion of our Lord","description":"Jesus is nailed to the cross and dies after hours of agony."}},"glorious":{"label":"Glorious Mystery","first":{"label":"The Resurrection of Jesus Christ","description":"Jesus rises glorious and immortal, three days after His death."},"second":{"label":"The Ascension of Jesus to Heaven","description":"Jesus ascends into Heaven forty days after His Resurrection."},"third":{"label":"The Descent of the Holy Ghost","description":"The Holy Spirit descends upon Mary and the Apostles."},"fourth":{"label":"The Assumption of Mary into Heaven","description":"Mary is united with her Divine Son in Heaven."},"fifth":{"label":"Mary is Crowned as Queen of Heaven and Earth","description":"Mary is gloriously crowned Queen of Heaven and earth."}},"luminous":{"label":"Luminous Mystery","first":{"label":"The Baptism in the Jordan","description":"The heavens open wide and the voice of the Father declares Jesus the beloved Son."},"second":{"label":"The Wedding at Cana","description":"The first of the signs, Christ changes water into wine thanks to the intervention of Mary."},"third":{"label":"The Proclamation of the Kingdom","description":"Jesus proclaims the coming of the Kingdom of God."},"fourth":{"label":"The Transfiguration","description":"The glory of the Godhead shines forth from the face of Christ as the Father."},"fifth":{"label":"The Institution of the Eucharist","description":"Christ offers his body and blood as food under the signs of bread and wine."}}}}}')}}]);
//# sourceMappingURL=1.b365554b.chunk.js.map