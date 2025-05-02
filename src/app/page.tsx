'use client'

//import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import styles from "./page.module.css";
//import { Suspense, useState, } from 'react';
import { useState } from 'react';
import { ConfettiReal } from './ConfettiReal';


interface FooterProps {
  lang: string;
}

/*const styleScript = Style_Script({
  weight: '400',
  variable: "--style-script",
  subsets: ["latin"],
}); */

// !!!!!!!!!!!!!!!!!!! FIX TODO
// Hem d'aplicar la solució https://nextjs.org/docs/messages/missing-suspense-with-csr-bailout

/*
function RenderQueryName() {
  const searchParams = useSearchParams()
  let destinatari = searchParams.get('x')

  if (destinatari != null && typeof destinatari === 'string') {
    const words = destinatari.split(" ")
    for (let i = 0; i < words.length; i++) {
      if (words[i] != 'i' && words[i] != '&' && words[i] != 'y')
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    destinatari = words.join(" ");
  }
  return destinatari
}

function IsCat() {
  const searchParams = useSearchParams()

  const idioma = searchParams.get('lang')
  if (idioma == 'ca') return true
  else return false
}
*/


function FooterPersonalitzat({ lang }: FooterProps) {
  return (
    <footer>
      <div className={styles.footer_container_relative}>
        <Image
          className='center-fit'
          src="/joc-boda/footer_edit_d.png"
          alt="Wellcome"
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
        <h4 className={styles.footer_container_text}>
          {lang == 'ca' ? (<>Que us ho passeu pipa!</>) : (<>¡Que lo paséis en grande!
          </>)}
        </h4>
      </div>
      <div style={{ textAlign: "center", fontSize: "small", padding: "10px" }}> · Dissenyada per nosaltres amb molt  &#129505; · </div>
      <br />
    </footer>
  )
}

function LaCapcelera() {
  return (
    <div className={styles.header_background}>
      <picture>
        <source media="(max-width: 600px)" srcSet="/joc-boda/capcelera_mobile_challenge.png" />
        <img
          className='center-fit'
          src="/joc-boda/capcelera_mobile_challenge.png"
          alt="Wellcome"
          width={1280}
          height={600}
          style={{ width: '100%', height: 'auto' }}
        />
      </picture>
    </div>
  )
}

export default function Home() {



  //const totalImages = 17;
  //const horaInici = new Date();
  //const [horaFi, setHoraFi] = useState(new Date());

  const preguntes = [
    {
      id: 1,
      pregunta: 1,
      calRespondre: true,
      text: 'Quin és l\'element decoratiu més repetit a casa nostra?',
      textEs: '¿Cuál es el elemento decorativo más repetido en nuestra casa?',
      respostesCorrectes: ['Lluna', 'gossa', 'teckel', 'perra', 'luna'],
    },
    {
      id: 2,
      pregunta: 2,
      calRespondre: true,
      text: 'Quina es la marca de xocolata desfeta preferida dels nuvis? (Pista: És una marca lleidatana)',
      textEs: '¿Cuál es la marca de chocolate a la taza preferida de los novios? (Pista: Es una marca leridana)',
      respostesCorrectes: ['jolonch'],
    },
    {
      id: 3,
      pregunta: 3,
      calRespondre: true,
      text: 'Qué necessita afegir la Clàudia al seu cafè per fer-lo perfecte?',
      textEs: '¿Qué necesita añadir Clàudia a su café para que sea perfecto?',
      respostesCorrectes: ['canyella', 'canela', 'canela en rama'],
    },
    {
      id: 4,
      pregunta: 4,
      calRespondre: true,
      text: 'Nom complert del poble del Dani? (Ningú ha dit que sería un camí de roses...)',
      textEs: '¿Nombre completo del pueblo de Dani? (Nadie dijo que sería un camino de rosas...)',
      respostesCorrectes: ['Bellcaire d\'Urgell', 'bellcaire urgell', 'belcaire de urgel', 'bellcaire de urgel', 'bellcaire de urgell', 'belcaire urgel'],
    },
    {
      id: 5,
      pregunta: 5,
      calRespondre: true,
      text: 'Nom complert del poble de la Clàudia? (Double challenge! Ànims! Aquell on hi ha la piscina... Saps?)',
      textEs: '¿Nombre completo del pueblo de Clàudia? (¡Doble reto! ¡Ánimo! Aquel donde está la piscina... ¿Sabes?)',
      respostesCorrectes: ['aldehuela del codonal', 'aldehuela codonal'],
    },
    {
      id: 6,
      pregunta: 6,
      calRespondre: true,
      text: 'Quina és la marca de bombons preferits del Dani?',
      textEs: '¿Cuál es la marca de bombones favorita de Dani?',
      respostesCorrectes: ['Lindt'],
    },
    {
      id: 7,
      pregunta: 7,
      calRespondre: true,
      text: 'Quína és l\'última activitat a la que s\'ha apuntat la Clàudia aquest 2025?',
      textEs: '¿Cuál es la última actividad en la que se ha apuntado Clàudia este 2025?',
      respostesCorrectes: ['twerk', 'twerking', 'dancehall'],
    },
    {
      id: 8,
      pregunta: 8,
      calRespondre: true,
      text: 'On volem anar de viatge de noces? Pot ser que necessitis utilitzar el comodí del públic...',
      textEs: '¿A dónde queremos ir de viaje de novios? A lo mejor necesitas utilizar el comodín del público...',
      respostesCorrectes: ['Orlando', 'parcs', 'florida', 'parques temáticos', 'parcs temàtics', 'eeuu', 'universal', 'disney world'],
    },
    {
      id: 9,
      pregunta: 9,
      calRespondre: true,
      text: 'On ens vam coneixer?',
      textEs: '¿Dónde nos conocimos?',
      respostesCorrectes: ['universitat', 'uni', 'clase', 'universidad', 'economia', 'clase economia', 'upc'],
    },
    {
      id: 10,
      pregunta: 0,
      calRespondre: false,
      text: 'Enhorabona! Heu superat la primera part. Ara heu de localitzar el baül i obriu-lo. Per cert... Sabeu en quin any es va publicar el primer llibre on es parla de l\'Escola de Màgia i Bruixeria Hogwarts? (Són els 3 útlims digits)',
      textEs: '¡Enhorabuena! Habéis superado la primera parte. Ahora tenéis que localizar el baúl y abrirlo. Por cierto... ¿Sabéis en qué año se publicó el primer libro donde se habla de la Escuela de Magia y Hechicería Hogwarts? (Son los 3 últimos dígitos)',
      boto: 'Hem obert el baül!',
      botoEs: '¡Hemos abierto el baúl!',
      respostesCorrectes: ['']
    },
    {
      id: 11,
      pregunta: 10,
      calRespondre: true,
      text: 'Escriu el missatge, text o paraula secreta que has trobat dins del baül:',
      textEs: 'Escribe el mensaje, texto o palabra secreta que has encontrado dentro del baúl:',
      respostesCorrectes: ['13112015', '13-11-2015', '13/11/2015', '13 11 2015'],
    },
    {
      id: 12,
      pregunta: 0,
      calRespondre: false,
      text: 'Sou uns cracks! Heu superat la segona part. IMPORTANT: Desmonteu el puzzle, tanqueu el baül i gireu aleatoriament els números del candau després de tancar-lo.',
      textEs: '¡Sois unos cracks! Habéis superado la segunda parte. IMPORTANTE: Desmontad el puzzle, cerrad el baúl y girad aleatoriamente los números del candado tras cerrarlo.',
      boto: 'Hem tancat el baül!',
      botoEs: '¡Hemos cerrado el baúl!',
      respostesCorrectes: ['']
    },
    {
      id: 13,
      pregunta: 0,
      calRespondre: false,
      text: 'Aquesta és l\'última prova. Busqueu al Dani. Ell us donarà una pista.',
      textEs: 'Esta es la última prueba. Buscad a Dani. Él os dará una pista.',
      boto: 'Ja ho tenim!',
      botoEs: '¡Lo tenemos!',
      respostesCorrectes: ['']
    },
    {
      id: 14,
      pregunta: 11,
      calRespondre: true,
      text: 'Si us plau. Escriviu l\'última combinació numèrica a continuació. Heu desxifrat la targeta?',
      textEs: 'Por favor. Escribid la última combinación numérica a continuación. ¿Habéis descifrado la tarjeta?',
      respostesCorrectes: ['030525'],
    }
  ];


  const [lang, setLang] = useState('ca');
  const [wellcome, setWellcome] = useState(true);
  const [valorNomGrup, setNomGrup] = useState('');


  const [pasActual, setPasActual] = useState(0);
  const [respostaUsuari, setRespostaUsuari] = useState('');
  const [acabat, setAcabat] = useState(false);
  const [error, setError] = useState('');

  const changeToCa = () => {
    setLang('ca');
  }
  const changeToEs = () => {
    setLang('es');
  }


  const guardarNomGrup = () => {
    if (valorNomGrup.length > 0) {

      setWellcome(false);
    }
  }

  const comprovarResposta = () => {
    const respostesCorrectes = preguntes[pasActual].respostesCorrectes.map((r) => r.toLowerCase().trim());
    const respostaUsuariNormalitzada = respostaUsuari.toLowerCase().trim();

    if (respostesCorrectes.includes(respostaUsuariNormalitzada)) {
      setError('');
      if (pasActual < preguntes.length - 1) {
        setPasActual(pasActual + 1);
        setRespostaUsuari('');
      } else {
        //setHoraFi(new Date());
        setAcabat(true);
      }
    } else {
      if (lang == 'ca') {
        setError('Resposta incorrecta. Torna-ho a provar.');
      } else {
        setError('Respuesta incorrecta. Inténtalo de nuevo.');

      }

    }
  };

  const seguentPas = () => {
    if (pasActual < preguntes.length - 1) {
      setPasActual(pasActual + 1);
      setRespostaUsuari('');
    } else {
      //setHoraFi(new Date());
      setAcabat(true);
    }
  };

  /*
  return (
    <>
      <main>
        <div style={{ flex: '1' }}>
          <LaCapcelera />

        </div>

        <div style={{ height: 'auto' }}>
          <FooterPersonalitzat />
        </div>
      </main>
    </>
  ); */


  if (wellcome) {
    return (
      <>

        <main>
          <div style={{ flex: '1' }}>
            <LaCapcelera />

            <div className={styles.page}>

              <br />
              {lang == 'ca' ?
                <>
                  <h2 style={{ textAlign: "center" }} className="mx-3 text-center" >Només una colla pot destacar per damunt de les altres... Esteu a punt per demostrar que sou vosaltres?</h2>

                </> :
                <>
                  <h2 style={{ textAlign: "center" }} className="mx-3 text-center">Solo un grupo puede destacar sobre los demás... ¿Estáis listos para demostrar que sois vosotros?</h2>

                </>}

              {/* <div className="container">
                <br />
                <div className="row">

                  <div className="col text-center">
                    <Image
                      className='center-fit'
                      src="/joc-boda/ca.png"
                      alt="Ubicació"
                      width={0}
                      height={0}
                      style={{ width: '40%', height: 'auto', marginLeft: '30px' }}
                      onClick={changeToCa}
                    />
                  </div>
                  <div className="col text-center">
                    <Image
                      className='center-fit'
                      src="/joc-boda/es.png"
                      alt="Ubicació"
                      width={0}
                      height={0}
                      style={{ width: '40%', height: 'auto', marginRight: '30px' }}
                      onClick={changeToEs}
                    />
                  </div>

                </div>
              </div> */}
              <div className="container my-4">
                <div className="row justify-content-center align-items-center">

                  <div className="col-3 col-md-2 text-center">
                    <div
                      onClick={changeToCa}
                      style={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Image
                        src="/joc-boda/ca.png"
                        alt="Català"
                        width={48}
                        height={32}
                        style={{
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      />
                      <div style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>Català</div>
                    </div>
                  </div>

                  <div className="col-3 col-md-2 text-center">
                    <div
                      onClick={changeToEs}
                      style={{
                        cursor: 'pointer',
                        transition: 'transform 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <Image
                        src="/joc-boda/es.png"
                        alt="Castellano"
                        width={48}
                        height={32}
                        style={{
                          borderRadius: '6px',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                        }}
                      />
                      <div style={{ fontSize: '0.9rem', marginTop: '0.3rem' }}>Castellano</div>
                    </div>
                  </div>

                </div>
              </div>

              {lang == 'ca' ?
                <>
                  <h4>Instruccions:</h4>

                  <ul>
                    <li className="mx-1" ><b>Només una persona del grup</b> ha d&apos;utilitzar aquesta aplicació.</li>
                    <li className="mx-1" >Podeu dividir-vos en grups més petits si el vostre grup és massa gran, o simplement si així ho desitgeu!</li>
                    <li className="mx-1" >Heu de col·laborar entre vosaltres, com en un Escape Room.</li>
                    <li className="mx-1" >Recordeu que NO ESTEU SOLS. Si una pregunta se us fa bola, podeu demanar ajuda. 😉</li>
                  </ul>

                  <h2 className="mx-3 text-center">Trieu un nom poderós per a la vostra colla màgica!</h2>
                </> :
                <>
                  <h4>Instrucciones:</h4>

                  <ul>
                    <li className="mx-1"><b>Solo una persona del grupo</b> debe utilizar esta aplicación.</li>
                    <li className="mx-1">Podéis dividiros en grupos más pequeños si vuestro grupo es demasiado grande, o simplemente si así lo deseáis.</li>
                    <li className="mx-1">Debéis colaborar entre vosotros, como en un Escape Room.</li>
                    <li className="mx-1">Recordad que NO ESTÁIS SOLOS. Si una pregunta se os atraganta, podéis pedir ayuda. 😉</li>
                  </ul>
                  <br />
                  <h2 className="mx-3 text-center">Nombrad a vuestro aquelarre… digo, equipo:</h2>
                </>}


              <input
                type="text"
                value={valorNomGrup}
                onChange={(e) => setNomGrup(e.target.value)}
                className="border border-gray-300 rounded px-3 py-2 w-full mb-2 text-center"
              />

              <br />
              <div></div>
              {lang == 'ca' ?
                <>
                  <button
                    onClick={guardarNomGrup}
                    className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 center text-center"
                  >
                    Començar el joc
                  </button>
                </> :
                <>
                  <button
                    onClick={guardarNomGrup}
                    className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 center text-center"
                  >
                    Empezar el juego
                  </button>
                </>}

              <br /><br />

            </div>


          </div>

          <div style={{ height: 'auto' }}>
            <FooterPersonalitzat lang={lang} />
          </div>
        </main>

      </>

    );
  }

  if (acabat) {
    return (
      <>

        <main>
          <div style={{ flex: '1' }}>
            <LaCapcelera />
            <ConfettiReal />

            <div className={styles.page}>
              <br />
              <div className="p-6 text-center text-green-600 font-bold text-xl">

              </div>
              <h1>🎉 Felicitats! 🎉</h1>
              <h3>Heu completat el repte!</h3>

            </div>
          </div>

          <div style={{ height: 'auto' }}>
            <FooterPersonalitzat lang={lang} />
          </div>
        </main>

      </>

    );
  }

  return (
    <>

      <main>
        <div style={{ flex: '1' }}>
          <LaCapcelera />
          <div className={styles.page}>
            <div className="text-start" ></div>
            <br />
            <h1 className="text-center mx-3">{lang == 'ca' ? (<>Endavant <b>{valorNomGrup}!</b></>) : (<>¡Adelante <b>{valorNomGrup}!</b></>)}</h1><br />

            {preguntes[pasActual].calRespondre ? (
              <>
                <h3 className="mx-3 text-xl font-semibold mb-4">{preguntes[pasActual].pregunta}.ª pregunta</h3>
                <h6 className="mb-4 mx-4">{lang == 'ca' ? (preguntes[pasActual].text) : (preguntes[pasActual].textEs)}</h6>
                <input
                  type="text"
                  value={respostaUsuari}
                  onChange={(e) => setRespostaUsuari(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-2 w-full mb-2"
                />
                {error && <p className="text-red-500 text-sm mb-2" style={{ color: '#e52323' }}>{error}</p>}
                <br />
                <div></div>
                <div className="flex justify-center">
                  <button className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 ">
                    Comprovar
                  </button>
                </div>

              </>
            ) : (
              <>
                <h6 className="mx-3 text-xl font-semibold mb-4 text-center">{lang == 'ca' ? (preguntes[pasActual].text) : (preguntes[pasActual].textEs)}</h6>
                <br />
                <div className="flex justify-center">
                  <button
                    onClick={seguentPas}
                    className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 "
                  >
                    {preguntes[pasActual].boto}
                  </button></div>

              </>

            )}
            <br /><br />



          </div>
        </div>

        <div style={{ height: 'auto' }}>
          <FooterPersonalitzat lang={lang} />
        </div>
      </main>

    </>

  );


}


