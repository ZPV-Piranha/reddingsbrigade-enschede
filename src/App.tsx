import React, {useRef} from 'react';
import pool from './Media/pool.jpg'
import ow from './Media/ow.jpeg'
import ow2 from './Media/ow2.jpg'
import ehbo from './Media/event.jpg'
import toezicht from './Media/toezicht.jpg'
import strand from './Media/strand.jpeg'
import {FaEnvelope} from "react-icons/fa";
import './App.css';
import {InstagramEmbed} from 'react-social-media-embed';
import {Logo} from "./Components/Logo";
import Rescue from "./Media/rescue.png";

function App() {
    const becomeMember = useRef<HTMLDivElement>(null);
    const requestEvent = useRef<HTMLDivElement>(null);

    const goToMember = () => {
        becomeMember.current?.scrollIntoView({behavior: "smooth"})
    }

    const goToRequestEvent = () => {
        requestEvent.current?.scrollIntoView({behavior: "smooth"})
    }
    return (
        <div className="bg-slate-50 min-w-full min-h-full">
            <nav className="relative z-10 shadow flex justify-center py-6 px-4 bg-white">
                <div className="max-w-7xl w-full">
                    <div className="flex items-center justify-center sm:justify-between sm:flex-nowrap flex-wrap w-full">
                        <div className="flex items-center justify-center sm:justify-start flex-shrink-0 text-white sm:w-auto w-full md:w-auto">
                            <Logo association="Enschede" region="IJsselland-Twente" regionClassName="text-blue-600"
                                  associationClassName="inline text-blue-600" className="text-orange-500 xs:mx-auto mx-0  flex flex-col w-min
                                  "/>
                        </div>
                        <div className="flex items-center flex-shrink-0 text-white my-6">
                            <a href="#lid-worden"
                               onClick={goToMember}
                               className="border border-blue-400 hover:bg-blue-400 text-blue-400 hover:text-white font-bold py-2 px-4 mr-2">Lid
                                worden
                            </a>
                            <button
                                onClick={goToRequestEvent}
                                className="border border-orange-500 hover:bg-orange-500 text-orange-500 hover:text-white font-bold py-2 px-4">Toezicht
                                aanvragen
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="w-full md:h-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white flex-col-reverse sm:flex-row">
                    <div className="p-16 w-full sm:w-3/4 flex flex-col bg-orange-500 text-slate-50">
                        <h1 className="font-medium leading-loose text-2xl mt-0 ml-2 mb-2 inline">Reddingsbrigade
                            ZPV-Piranha</h1>
                        <p className="leading-loose mt-4">In het mooie Twente zijn wij sinds 2011 actief als afdeling Reddingszwemmen van Zwem- en Polovereniging Piranha en onderdeel van Reddingsbrigade Nederland.</p>
                        <p className="leading-loose my-4">Wij houden ons bezig met training, wedstrijden, waterhulpverlening, eerste hulp en toezicht.</p>
                        <p className="leading-loose">Voor toezicht en waterhulpverlening tijdens evenementen op en aan het water beschikken wij over een reddingsvlet en getrainde lifeguards.</p>
                    </div>
                    <div className="h-80 sm:h-full bg-[top_-3rem_right_0rem] sm:bg-[bottom_0rem_right_0rem] xl:bg-[bottom_0rem_right_0rem] overflow-hidden bg-cover overflow-hidden lg:w-full w-full sm:w-1/2"
                         style={{backgroundImage: `url(${ow2})`}}>
                        <div className="bg-orange-500 h-[20em] w-[80em] -left-[44em] lg:flex relative hidden rotate-[75deg]"></div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white sm:flex-row flex-col">
                    <div className="sm:px-16 sm:pt-12 sm:pb-16 w-full sm:w-1/2 h-64 sm:h-full px-8 py-6">
                        <div
                            className="w-full h-content bg-center bg-cover overflow-hidden h-full flex justify-center items-center align-center"
                            style={{backgroundImage: `url(${pool})`}}>
                        </div>
                    </div>
                    <div className="grow sm:w-1/2 text-gray-600 px-16 sm:py-12 py-0">
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 inline">Opleidingen in het
                            zwembad</h1>
                        <p className="leading-loose my-6">In het zwembad bieden wij de diploma's lifesaver 1,2 en 3 aan. Het doel van deze cursussen is om de zelfredzaamheid te vergroten en de basisvaardigheden van het zwemmend redden onder de knie te krijgen.</p>
                        <p>Tijdens praktijk- en theorielessen leer je hoe een verdrinking eruit ziet, wat je kan doen om het te voorkomen, hoe je het veiligst een redding kan uitvoeren en nog veel meer.</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white sm:flex-row flex-col-reverse">
                    <div className="grow sm:w-1/2 text-gray-600 px-16 sm:py-12 py-0">
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 inline">Lifeguard open water</h1>
                        <p className="leading-loose my-6">Het werkgebied van de reddingsbrigade Enschede bestaat voornamelijk uit open wateren zoals het Rutbeek en het Twentekanaal. Wij bieden binnen deze gebieden de opleiding lifeguard. Je leert binnen deze opleiding hoe je toezicht kan houden op evenementen op en om het water en hulp te verlenen waar nodig.</p>
                        <p className="leading-loose my-6">Wil je meer weten over opleidingen? Lees dan verder op de website van <a className="text-orange-400" href="https://www.reddingsbrigade.nl/wij/wat-wij-doen/opleidingen/">Reddingsbrigade Nederland</a>.</p>
                    </div>
                    <div className="sm:px-16 sm:pt-12 sm:pb-16 w-full sm:w-1/2 h-64 sm:h-full px-8 py-6">
                        <div
                            className="w-full h-content bg-center bg-cover overflow-hidden h-full flex justify-center items-center align-center"
                            style={{backgroundImage: `url(${ow})`}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white sm:flex-row flex-col">
                    <div className="sm:px-16 sm:pt-12 sm:pb-16 w-full sm:w-1/2 h-64 sm:h-full px-8 py-6">
                        <div
                            className="w-full h-content bg-center bg-cover overflow-hidden h-full flex justify-center items-center align-center"
                            style={{backgroundImage: `url(${strand})`}}>
                        </div>
                    </div>
                    <div className="grow sm:w-1/2 text-gray-600 px-16 sm:py-12 py-0">
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 inline">Strandwacht</h1>
                        <p className="leading-loose my-6">ZPV Piranha trekt als onderdeel van de Universiteit Twente leden uit alle windstreken aan. Lijkt het je leuk om stranddiensten te draaien in Den Helder, op Texel of misschien zelfs in Duitsland? Vanuit Reddingsbrigade Enschede is het mogelijk om met een aantal van onze leden mee te gaan om te bewaking op het strand!</p>
                        <p className="leading-loose my-6">Veel van deze externe brigades bieden ook weer opleidingen aan die je nog veel meer inzicht in het reddingsbrigade werk kunnen geven. Sommige stranden bieden zelfs de mogelijkheid tot een betaalde bijbaan als Lifeguard!</p>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white sm:flex-row flex-col-reverse ">
                    <div className="grow sm:w-1/2 text-gray-600 px-16 sm:py-12 py-0">
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 inline">Eerste Hulp & Evenenementen</h1>
                        <p className="leading-loose my-6">Het verlenen van eerste hulp is een belangrijk onderdeel van de waterhulpverlening. We werken samen met partijen als het Rode Kruis en het Oranje Kruis voor EHBO opleidingen.</p>
                        <p className="leading-loose my-6">We zijn altijd op zoek naar nieuwe enthousiaste hulpverleners! Na de lifesaver of lifeguards opleiding (of zelfs tijdens om ervaring op te doen) kan je ervoor kiezen om ingezet te worden bij leuke evenementen als Freshtival, de Rutbeek triathlon en de sinterklaas intocht.</p>
                    </div>
                    <div className="sm:px-16 sm:pt-12 sm:pb-16 w-full sm:w-1/2 h-64 sm:h-full px-8 py-6">
                        <div
                            className="w-full h-content bg-center bg-cover overflow-hidden h-full flex justify-center items-center align-center"
                            style={{backgroundImage: `url(${ehbo})`}}>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center" ref={becomeMember}>
                <div className="max-w-7xl flex space-between w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-100">
                    <div className="grow w-1/2 px-16 py-12">
                        <h1 className="text-6xl flex justify-center my-6"><img src={Rescue} className="float-left z-20" width="150em" alt=""/></h1>
                        <p className="leading-loose my-6 text-center">We zijn als reddingszwemafdeling onderdeel van ZPV Piranha.</p>
                        <p className="leading-loose my-6 text-center">Lijkt het je leuk om lid te worden? Klik dan op de knop hieronder voor meer informatie!</p>
                        <a href="https://www.zpv-piranha.nl/lid-worden"
                            className="bg-orange-500 max-w-max block mx-auto hover:bg-orange-500 text-white font-bold py-2 px-4">Lid worden
                        </a>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white">
                    <div className="grow w-1/2 text-gray-600 lg:px-16 md:px-12 py-12">
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 text-center">Social Media</h1>
                        <p className="leading-loose my-6 text-center">Volg ons op <a className="text-blue-400 font-bold"
                                                                                     href="https://www.instagram.com/reddingsbrigadeenschede/">Instagram</a> en <a
                            className="text-blue-400 font-bold"
                            href="https://www.facebook.com/ReddingsbrigadeEnschede">facebook</a></p>
                        <div className="flex align-center justify-around flex-row flex flex-wrap">
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <InstagramEmbed url="https://www.instagram.com/p/Ceg9jrJDXU-/" width={328}/>
                            </div>
                            <div style={{display: 'flex', justifyContent: 'center'}}>
                                <InstagramEmbed url="https://www.instagram.com/p/CeuCNH5Da7q/" width={328}/>
                            </div>
                            <div className="hidden xl:flex">
                                <InstagramEmbed url="https://www.instagram.com/p/CiVLm3sDduC/" width={328}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-full xl:h-[35em] flex justify-center">
                <div className="max-w-7xl flex space-between w-full bg-white flex-col sm:flex-row">
                    <div className="h-80 sm:h-full bg-[top_-3rem_right_0rem] sm:bg-[bottom_0rem_right_0rem] xl:bg-[bottom_0rem_right_7rem] overflow-hidden bg-cover overflow-hidden lg:w-full w-full sm:w-1/2"
                         style={{backgroundImage: `url(${toezicht})`}}>
                        <div className="hidden md:flex bg-orange-500 h-[20em] sm:h-full xl:w-[100em] w-[85em] xl:left-[-8em] lg:left-[-2em] md:left-[-11em] md:top-[5em] relative rotate-[-75deg]"></div>
                    </div>
                    <div className="p-16 w-full md:w-3/4 flex flex-col bg-orange-500 text-white" ref={requestEvent}>
                        <h1 className="font-medium leading-loose text-2xl mt-0 mb-2 inline">Toezicht op & aan het
                            water</h1>
                        <p className="leading-loose my-6">Voor evenementen kunnen wij gecertificeerde lifeguards met reddingsvaartuigen leveren. Met onze kennis op het gebied van verdrinkingsongevallen en het voorkomen daarvan kunnen wij u ondersteunen bij het afdichten van dit risico.</p>
                        <p className="leading-loose my-6">Heeft u vragen of bent u op zoek naar een inzetvoorstel met bijbehorende kosten dan kunt u mailen naar het onderstaande adres:</p>
                        <a href="mailto:rescue@zpv-piranha.nl"
                           className="my-6 bg-blue-500 max-w-max hover:bg-blue-500 text-white font-bold px-4 flex items-center"><FaEnvelope  className="inline w-8 pr-2 mr-2 border-r-2 border-r-slate-50"/> <span className="block my-2">rescue@zpv-piranha.nl</span>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="p-4 bg-white sm:p-6 dark:bg-gray-400 shadow rotate-180">
                <div className="rotate-180">
                    <div className="max-w-7xl mx-auto">
                        <div className="md:flex md:justify-between justify-center">
                            <div className="mb-6 md:mb-0 px-0 sm:pr-24 flex">
                                <Logo association="Enschede" region="IJsselland-Twente" regionClassName="inline-flex text-blue-600"
                                      associationClassName="inline text-blue-600" className="text-orange-500 mx-auto flex flex-col"/>
                            </div>
                            <div className="flex gap-2 px-0 xs:px-24 flex-col sm:flex-row justify-center w-fit mx-auto md:mx-0">
                                <div className="sm:mr-16 flex flex-col mb-16">
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ZPV Piranha</h2>
                                    <ul className="text-gray-600 dark:text-gray-400">
                                        <li className="mb-4">
                                            <a href="https://zpv-piranha.nl/" className="hover:underline">Website</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="https://www.instagram.com/zpv_piranha/" className="hover:underline">Instagram</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="https://www.facebook.com/zpvpiranha" className="hover:underline">Facebook</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/zpv-piranha/" className="hover:underline">LinkedIn</a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Reddingsbrigades</h2>
                                    <ul className="text-gray-600 dark:text-gray-400">
                                        <li className="mb-4">
                                            <a href="https://reddingsbrigade.nl"
                                               className="hover:underline ">Nederland</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="https://reddingsbrigadedeventer.nl/"
                                               className="hover:underline ">Deventer</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="https://reddingsbrigade-zrh.nl/"
                                               className="hover:underline">Hasselt</a>
                                        </li>
                                        <li>
                                            <a href="https://reddingsbrigaderaalte.nl/"
                                               className="hover:underline ">Raalte</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="grow-0 max-w-max">
                                    <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">&nbsp;</h2>
                                    <ul className="text-gray-600 dark:text-gray-400">
                                        <li className="mb-4">
                                            <a href="http://www.reddingsbrigadestaphorst.nl/"
                                               className="hover:underline">Staphorst</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="http://rbwierden.nl"
                                               className="hover:underline ">Wierden</a>
                                        </li>
                                        <li className="mb-4">
                                            <a href="https://www.rbzwartsluis.nl/"
                                               className="hover:underline">Zwartsluis</a>
                                        </li>
                                        <li>
                                            <a href="https://www.reddingsbrigade-zwolle.nl/"
                                               className="hover:underline">Zwolle</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
                        <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://zpv-piranha.nl/"
                                                                                            className="hover:underline">ZPV Piranha</a>
        </span>
                            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                                <a href="https://www.facebook.com/ReddingsbrigadeEnschede" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">Facebook page</span>
                                </a>
                                <a href="https://www.instagram.com/reddingsbrigadeenschede/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
