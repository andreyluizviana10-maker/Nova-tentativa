import { 
  PreviewItem, 
  TimelineItem, 
  GalleryItem, 
  BonusItem, 
  TestimonialItem, 
  FaqItem, 
  BenefitItem 
} from '../types';

import heroMockupImg from '../assets/images/hero_atlas_mockup_1787192331082.jpg';
import caesareaImg from '../assets/images/caesarea_3d_1787192342113.jpg';
import templeHerodImg from '../assets/images/jerusalem_temple_3d_1787192351706.jpg';
import paulJourneysImg from '../assets/images/paul_journeys_map_1787192360987.jpg';
import tabernacleImg from '../assets/images/tabernacle_desert_3d_1787192369195.jpg';
import mesopotamiaImg from '../assets/images/mesopotamia_city_3d_1787192381188.jpg';
import noahArkImg from '../assets/images/noah_ark_3d_1787192392358.jpg';
import seaGalileeImg from '../assets/images/sea_galilee_3d_1787192401864.jpg';
import sevenChurchesImg from '../assets/images/seven_churches_3d_1787192410989.jpg';
import bethanyImg from '../assets/images/bethany_tomb_3d_1787192426984.jpg';
import mountMoriahImg from '../assets/images/mount_moriah_3d_1787192435826.jpg';
import samariaSycharImg from '../assets/images/samaria_sychar_3d_1787192444658.jpg';

// Asset paths bundled by Vite
export const IMAGES = {
  heroMockup: heroMockupImg,
  caesarea: caesareaImg,
  templeHerod: templeHerodImg,
  paulJourneys: paulJourneysImg,
  tabernacle: tabernacleImg,
  mesopotamia: mesopotamiaImg,
  noahArk: noahArkImg,
  seaGalilee: seaGalileeImg,
  sevenChurches: sevenChurchesImg,
  bethany: bethanyImg,
  mountMoriah: mountMoriahImg,
  samariaSychar: samariaSycharImg,
};

export const PREVIEW_ITEMS: PreviewItem[] = [
  {
    id: 'prev-1',
    number: '01',
    theme: 'Klimat i drogi świata biblijnego',
    subtitle: 'Ukształtowanie terenu, trakty kupieckie i doliny',
    description: 'Topograficzna panorama 3D ukazująca kluczowe pasma górskie, szlaki karawanowe (Droga Królewska, Via Maris) oraz doliny kształtujące życie codzienne starożytnego Bliskiego Wschodu.',
    image: IMAGES.seaGalilee,
    details: ['Trasy handlowe Via Maris', 'Rzeki i źródła Jordanu', 'Strefy klimatyczne i pustynie'],
    scriptureRef: 'Rdz 13, 10-12 • Pwt 8, 7-9'
  },
  {
    id: 'prev-2',
    number: '02',
    theme: 'Samaria, Sychar i studnia Jakuba',
    subtitle: 'Wędrówka przez serce Ziemi Świętej',
    description: 'Pionowy plan topograficzny Samarii między Górą Garizim a Górą Ebal, precyzyjnie wyjaśniający trasę wędrówki Jezusa z Judei do Galilei i historyczny kontekst studni patriarchów.',
    image: IMAGES.samariaSychar,
    details: ['Góra Garizim i Góra Ebal', 'Trasa wędrówki przez Sychar', 'Kontekst kulturowy Samarytan'],
    scriptureRef: 'J 4, 3-6 • Rdz 33, 18-20'
  },
  {
    id: 'prev-3',
    number: '03',
    theme: 'Wczesny Kościół i podróże Pawła',
    subtitle: 'Od Jerozolimy i Antiochii aż po Korynt',
    description: 'Imponująca mapa basenu Morza Śródziemnego z oznaczonymi złotymi liniami trzema podróżami misyjnymi apostoła Pawła, miastami portowymi i pierwszymi wspólnotami chrześcijańskimi.',
    image: IMAGES.paulJourneys,
    details: ['I, II i III wyprawa misyjna', 'Węzły komunikacyjne rzymskiego imperium', 'Centra wczesnochrześcijańskie'],
    scriptureRef: 'Dz 13-21 • Rz 15, 19-20'
  },
  {
    id: 'prev-4',
    number: '04',
    theme: 'Podróż Pawła do Rzymu',
    subtitle: 'Nawigacja po Morzu Śródziemnym i rozbicie statku na Malcie',
    description: 'Dokładny szlak morski ostatniej podróży Pawła jako więźnia: od Cezarei Nadmorskiej, przez Kretę, sztormowe wody Morza Adriatyckiego, wyspę Maltę, aż do stolicy Cesarstwa Rzymskiego.',
    image: IMAGES.paulJourneys,
    details: ['Kierunki dominujących wiatrów', 'Zimowanie na Malcie', 'Dotarcie do bram Rzymu'],
    scriptureRef: 'Dz 27-28'
  },
  {
    id: 'prev-5',
    number: '05',
    theme: 'Arka Noego — analiza konstrukcyjna',
    subtitle: 'Wymiary, proporcje i układ pokładów',
    description: 'Przekrój architektoniczny i trójwymiarowa wizualizacja oparta na biblijnych wymiarach w łokciach: widok boczny, rozkład trzech poziomów, wentylacja i porównanie skali.',
    image: IMAGES.noahArk,
    details: ['Wizualizacja koncepcyjna proporcji 300x50x30 łokci', 'Systemy trzech pokładów wewnętrznych', 'Góry Ararat i ukształtowanie terenu'],
    scriptureRef: 'Rdz 6, 14-16',
    isArtisticVisual: true
  },
  {
    id: 'prev-6',
    number: '06',
    theme: 'Siedem Zborów Apokalipsy',
    subtitle: 'Miasta Azji Mniejszej i orędzie Jana',
    description: 'Kinematograficzna mapa rzymskiej prowincji Azja (Efez, Smyrna, Pergamon, Tiatyra, Sardes, Filadelfia, Laodycea) wraz z wyspą Patmos i traktem pocztowym łączącym te ośrodki.',
    image: IMAGES.sevenChurches,
    details: ['Rzymski trakt okrężny', 'Wyspa Patmos i Morze Egejskie', 'Tło kulturowe każdego z 7 miast'],
    scriptureRef: 'Ap 1, 9-11; 2-3'
  },
  {
    id: 'prev-7',
    number: '07',
    theme: 'Świątynia Heroda w Jerozolimie',
    subtitle: 'Kompleks Wzgórza Świątynnego w I wieku',
    description: 'Trójwymiarowa rekonstrukcja architektoniczna świątyni jerozolimskiej: Dziedziniec Pogan, Krużgnek Salomona, Brama Piękna, Twierdza Antonia i Miejsce Najświętsze.',
    image: IMAGES.templeHerod,
    details: ['Dokładna skala murów oporowych', 'Lokalizacja Twierdzy Antonia', 'Dolina Cedronu i wejścia bramne'],
    scriptureRef: 'Mt 24, 1-2 • Łk 2, 46-49 • J 2, 19-21'
  },
  {
    id: 'prev-8',
    number: '08',
    theme: 'Betania i grób Łazarza',
    subtitle: 'Wschodnie zbocze Góry Oliwnej',
    description: 'Krajobraz starożytnej wioski Betania oddalonej o ok. 15 stadiów (3 km) od Jerozolimy. Położenie domostwa Marii, Marty i Łazarza oraz drogi prowadzącej przez Dolinę Cedronu.',
    image: IMAGES.bethany,
    details: ['Odległość od Jerozolimy (ok. 3 km)', 'Droga przez Górę Oliwną', 'Miejsca spoczynku i grobowce wykute w skale'],
    scriptureRef: 'J 11, 1-44 • Mk 11, 1'
  },
  {
    id: 'prev-9',
    number: '09',
    theme: 'Atlas Nowego Testamentu',
    subtitle: 'Od Betlejem do Rzymu',
    description: 'Globalny przewodnik geograficzny po Nowym Testamencie ukazujący świat, w którym narodziło się i rozwijało chrześcijaństwo na styku kultury żydowskiej, greckiej i rzymskiej.',
    image: IMAGES.seaGalilee,
    details: ['Nazaret, Betlejem i Judea', 'Jezioro Galilejskie i Dekapol', 'Główne prowincje cesarstwa'],
    scriptureRef: 'Łk 2, 1-4 • Mt 4, 13-16'
  },
  {
    id: 'prev-10',
    number: '10',
    theme: 'Góra Moria — serce historii',
    subtitle: 'Od ofiary Abrahama po świątynię Salomona',
    description: 'Dydaktyczna analiza terenu Góry Moria: rzeźba terenu, starożytne źródło Gichon, Miasto Dawida oraz rozwój topografii Jerozolimy na przestrzeni tysiącleci.',
    image: IMAGES.mountMoriah,
    details: ['Rzeźba wzgórza Moria i doliny Tyropeon', 'Ołtarz na klepisku Arawny', 'Rozbudowa fortyfikacji miejskich'],
    scriptureRef: 'Rdz 22, 2 • 2 Krn 3, 1'
  }
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    number: 1,
    period: 'Księga Rodzaju',
    title: 'Początek historii i świat patriarchów',
    description: 'Pierwsze ziemie, Żyzny Półksiężyc, Mezopotamia, wędrówka Abrahama z Ur Chaldejskiego przez Charan do Kanaanu, Hebronu i Beer-Szewy.',
    keyLocations: ['Ur Chaldejskie', 'Charan', 'Sychem', 'Betel', 'Hebron', 'Egipt'],
    scriptureSpan: 'Rdz 1 – 50'
  },
  {
    number: 2,
    period: 'Księga Wyjścia i Liczb',
    title: 'Wyjście z Egiptu — Droga ku wolności',
    description: 'Geografia delty Nilu (Goszen), przeprawa przez wody Morza Czerwonego, surowy krajobraz Półwyspu Synaj, Góra Synaj/Horeb i 40 lat na pustkowiu.',
    keyLocations: ['Goszen / Ramses', 'Morze Czerwone', 'Góra Synaj', 'Kadesz-Barnea', 'Moab'],
    scriptureSpan: 'Wj 1 – Pwt 34'
  },
  {
    number: 3,
    period: 'Księga Jozuego',
    title: 'Podbój Kanaanu — Ziemia Obiecana',
    description: 'Przeprawa przez Jordan naprzeciw Jerycha, kampania środkowa, południowa i północna oraz podział ziemi między dwanaście pokoleń Izraela.',
    keyLocations: ['Gilgal', 'Jerycho', 'Aj', 'Szilo', 'Dolina Ajjalon', 'Chasor'],
    scriptureSpan: 'Joz 1 – 24'
  },
  {
    number: 4,
    period: 'Księga Sędziów i Rut',
    title: 'Okres Sędziów — Naród w przemianie',
    description: 'Zmieniające się granice wpływów, lokalne zagrożenia ze strony Filistynów, Moabitów i Madianitów oraz tereny działań Gedeona, Samsona i Debory.',
    keyLocations: ['Dolina Jezreel', 'Góra Tabor', 'Gaza', 'Aszkelon', 'Betlejem'],
    scriptureSpan: 'Sdz 1 – 1 Sm 7'
  },
  {
    number: 5,
    period: 'Księgi Samuela i Królewskie',
    title: 'Zjednoczone Królestwo — Jerozolima w centrum',
    description: 'Epoka Saula, Dawida i Salomona. Zdobycie twierdzy Syjon, ustanowienie stolicy w Jerozolimie, budowa Pierwszej Świątyni i zasięg granic imperium.',
    keyLocations: ['Jerozolima / Syjon', 'Hebron', 'Gezer', 'Megiddo', 'Esjon-Geber'],
    scriptureSpan: '1 Sm 8 – 1 Krl 11'
  },
  {
    number: 6,
    period: 'Królowie i Prorocy',
    title: 'Wygnanie i powrót do ojczyzny',
    description: 'Podział na Królestwo Północne (Izrael) i Południowe (Juda), najazdy Asyrii i Babilonu, droga deportacji do Babilonii oraz szlak powrotu za Cyrusa.',
    keyLocations: ['Samaria', 'Niniwa', 'Babilon', 'Rzeka Kebar', 'Odbudowana Jerozolima'],
    scriptureSpan: '2 Krl • Ezd • Ne • Iz • Jr • Ez'
  },
  {
    number: 7,
    period: 'Ewangelie',
    title: 'Życie i służba Jezusa Chrystusa',
    description: 'Drogi Galilei, Judei, Samarii i Dekapolu: Betlejem, Nazaret, Kafarnaum, Jezioro Genezaret, rzeka Jordan, Góra Kuszenia i Jerozolima w tygodniu Paschy.',
    keyLocations: ['Betlejem', 'Nazaret', 'Kafarnaum', 'Kana', 'Cezarea Filipowa', 'Jerozolima'],
    scriptureSpan: 'Mt • Mk • Łk • J'
  },
  {
    number: 8,
    period: 'Dzieje Apostolskie i Listy',
    title: 'Rozwój pierwszego Kościoła',
    description: 'Od Jerozolimy, przez Samarię i Antiochię Syryjską, po Azję Mniejszą, Macedonię, Grecję i Rzym. Drogi rzymskie i szlaki morskie głoszenia Ewangelii.',
    keyLocations: ['Jerozolima', 'Antiochia', 'Tars', 'Efez', 'Ateny', 'Korynt', 'Rzym'],
    scriptureSpan: 'Dz 1 – 28'
  },
  {
    number: 9,
    period: 'Księga Objawienia',
    title: 'Apokalipsa — Siedem Kościołów Azji',
    description: 'Geograficzne i kulturowe tło listów do 7 zborów w Azji Mniejszej, wyspa Patmos na Morzu Egejskim oraz symbolika Nowego Jeruzalem.',
    keyLocations: ['Wyspa Patmos', 'Efez', 'Smyrna', 'Pergamon', 'Sardes', 'Laodycea'],
    scriptureSpan: 'Ap 1 – 22'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Tyr, Achzib i Akko — Północne Wybrzeże',
    subtitle: 'Fenicja i granice pokolenia Asera',
    category: 'Topografia Wybrzeża',
    image: IMAGES.seaGalilee,
    description: 'Szczegółowy model topograficzny linii brzegowej Morza Śródziemnego, portów fenickich oraz naturalnych przeszkód i dolin rzecznych wpadających do morza.',
    features: ['Starożytne porty i szlaki handlowe', 'Naturalne ukształtowanie zatok', 'Granice plemienne Ziemi Obiecanej']
  },
  {
    id: 'gal-2',
    title: 'Podróże Misyjne Apostoła Pawła',
    subtitle: 'Trasy morskie i trakty rzymskie',
    category: 'Szlaki Apostolskie',
    image: IMAGES.paulJourneys,
    description: 'Wizualizacja basenu Morza Śródziemnego z precyzyjnie naniesionymi etapami wypraw Pawła, Barnaby, Sylasa i Łukasza.',
    features: ['Drogi rzymskie (m.in. Via Egnatia)', 'Przystanie i porty przesiadkowe', 'Topografia prowincji rzymskich']
  },
  {
    id: 'gal-3',
    title: 'Starożytne Miasto Mezopotamskie',
    subtitle: 'Świat Abrahama i cywilizacja Sumeru',
    category: 'Rekonstrukcja Archeologiczna',
    image: IMAGES.mesopotamia,
    description: 'Trójwymiarowy widok starożytnego ośrodka nad Eufratem: monumentalny Ziggurat, kanały nawadniające, mury obronne i domostwa z cegły suszonej.',
    features: ['Architektura okresu wczesnobrązowego', 'Systemy kanałów rzecznych', 'Układ urbanistyczny pierwszych miast'],
    isArtisticVisual: true
  },
  {
    id: 'gal-4',
    title: 'Jerozolima w Czasach Jezusa',
    subtitle: 'Wzgórze Świątynne, Dolina Cedronu i Syjon',
    category: 'Rekonstrukcja 3D Miasta',
    image: IMAGES.templeHerod,
    description: 'Lotniczy widok Jerozolimy w I wieku n.e.: Drugi Dom (Świątynia), Pałac Heroda, Sadzawka Betesda i Sadzawka Siloe oraz mury miejskie.',
    features: ['Mury miejskie i bramy', 'Dolina Hinnom i Dolina Cedronu', 'Twierdza Antonia nadzorująca dziedzińce']
  },
  {
    id: 'gal-5',
    title: 'Przybytek Przymierza na Pustyni',
    subtitle: 'Namiot Spotkania i porządek obozowiska',
    category: 'Struktury Sakralne',
    image: IMAGES.tabernacle,
    description: 'Trójwymiarowy widok Namiotu Spotkania pośrodku obozu dwunastu plemion Izraela na pustyni Synaj: Dziedziniec, Ołtarz Całopalenia, Kadź Miedziana i Namiot.',
    features: ['Układ 12 pokoleń według stron świata', 'Precyzyjna skala dziedzińca', 'Dym i światło nad Miejscem Najświętszym'],
    isArtisticVisual: true
  },
  {
    id: 'gal-6',
    title: 'Cezarea Filipowa i Źródła Jordanu',
    subtitle: 'U stóp góry Hermon',
    category: 'Geografia Ewangelii',
    image: IMAGES.caesarea,
    description: 'Realia geograficzne miejsca, w którym Szymon Piotr wyznał wiarę w Mesjasza: masyw góry Hermon, grota bóstwa Pana, źródła rzeki Banias i rzymskie pałace.',
    features: ['Masyw góry Hermon w tle', 'Skalne urwisko i źródła wody', 'Kluczowy kontekst słów Jezusa']
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: 'Łatwiej zapamiętujesz wydarzenia',
    description: 'Mózg zapamiętuje obrazy i relacje przestrzenne znacznie szybciej niż sam suchy tekst. Połączysz osoby, miejsca i wydarzenia w jedną spójną i logiczną całość.',
    iconName: 'Brain',
    practicalExample: 'Natychmiast kojarzysz, dlaczego droga z Jerozolimy do Jerycha „schodziła w dół” o ponad 1000 metrów różnicy poziomów.'
  },
  {
    title: 'Rozumiesz realne odległości i trud trasy',
    description: 'Zobacz, jak daleko podróżowali bohaterowie Biblii na piechotę lub grzbietach zwierząt w surowym klimacie pustynnym i górzystym.',
    iconName: 'Compass',
    practicalExample: 'Wędrówka Maryi i Józefa z Nazaretu do Betlejem to ponad 130 km wymagającego marszu przez górzysty teren.'
  },
  {
    title: 'Odkrywasz głębokie znaczenie geografii',
    description: 'Góry, pustynie, rzeki i miasta w Biblii nigdy nie pojawiają się przypadkowo. Geografia stanowi tło teologiczne i praktyczne dla opisywanych wydarzeń.',
    iconName: 'Mountain',
    practicalExample: 'Góra Karmel nad Morzem Śródziemnym była idealnym punktem widocznym dla całego Izraela podczas próby z prorokami Baala.'
  },
  {
    title: 'Lepiej przygotowujesz studium i nauczanie',
    description: 'Jeżeli prowadzisz grupę domową, uczysz religii, wygłaszasz kazania lub dzielisz się wiarą z rodziną — zyskujesz gotowe, czytelne ilustracje.',
    iconName: 'Users',
    practicalExample: 'Pokaż uczestnikom spotkania mapę podróży Pawła, by ożywić czytanie Listu do Galatów lub Koryntian.'
  },
  {
    title: 'Widzisz chronologię i ciągłość historii',
    description: 'Łatwiej zrozumiesz, co wydarzyło się wcześniej, a co później oraz jak granice królestw przesuwały się pod naporem kolejnych imperiów starożytności.',
    iconName: 'Clock',
    practicalExample: 'Śledzisz płynne przejście od zjednoczonego królestwa Dawida do upadku Samarii i niewoli babilońskiej.'
  },
  {
    title: 'Uczysz się w sposób nowoczesny i wizualny',
    description: 'Zamiast gubić się w obco brzmiących nazwach miast i plemion — od razu widzisz je na mapie i w rekonstrukcjach 3D o jakości albumowej.',
    iconName: 'Eye',
    practicalExample: 'Otwierasz atlas na telefonie lub tablecie równolegle z własnym wydaniem Pisma Świętego.'
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    number: 1,
    title: 'Studium Biblii w kontekście',
    description: 'Praktyczny przewodnik metodologiczny: jak analizować fragmenty Pisma Świętego z uwzględnieniem miejsca, historii, zwyczajów i kultury epoki.',
    badgeText: 'W PREZENCIE',
    iconName: 'BookOpen',
    format: 'E-book PDF HD',
    pagesCount: '48 stron'
  },
  {
    number: 2,
    title: 'Jak uporządkować wiedzę biblijną',
    description: 'Praktyczny schemat pomagający uporządkować księgi biblijne, główne postacie, przymierza i węzłowe momenty historii zbawienia.',
    badgeText: 'W PREZENCIE',
    iconName: 'FolderKanban',
    format: 'E-book PDF HD',
    pagesCount: '36 stron'
  },
  {
    number: 3,
    title: 'Biblia w codziennym życiu',
    description: 'Prosty, przetestowany system łączenia pogłębionego studium Pisma Świętego z codzienną refleksją, modlitwą i praktycznym zastosowaniem.',
    badgeText: 'W PREZENCIE',
    iconName: 'HeartHandshake',
    format: 'Przewodnik PDF',
    pagesCount: '32 strony'
  },
  {
    number: 4,
    title: 'Codzienna podróż przez Biblię',
    description: 'Strukturalny plan czytania z podziałem na regiony geograficzne i bloki historyczne, ułatwiający regularne odkrywanie kolejnych ksiąg.',
    badgeText: 'W PREZENCIE',
    iconName: 'CalendarDays',
    format: 'Planer do druku / cyfrowy',
    pagesCount: '28 stron'
  },
  {
    number: 5,
    title: 'Karty historii biblijnych',
    description: 'Zestaw 50 przejrzystych kart wizualnych podsumowujących najważniejsze wydarzenia od stworzenia świata po zesłanie Ducha Świętego.',
    badgeText: 'W PREZENCIE',
    iconName: 'Layers',
    format: 'Karty infograficzne HD',
    pagesCount: '50 kart'
  },
  {
    number: 6,
    title: 'Namioty i ołtarze Biblii',
    description: 'Wizualny przewodnik po miejscach kultu: ołtarzach patriarchów, Przybytku Mojżesza, Namiocie Dawida i świątyniach jerozolimskich.',
    badgeText: 'W PREZENCIE',
    iconName: 'Flame',
    format: 'Album ilustrowany PDF',
    pagesCount: '44 strony'
  },
  {
    number: 7,
    title: 'Arka Noego — przewodnik wizualny',
    description: 'Zbiór rekonstrukcji, schematów inżynieryjnych i porównań skali pomagających zobaczyć opis arki w rzetelnym kontekście tekstu biblijnego.',
    badgeText: 'W PREZENCIE',
    iconName: 'Anchor',
    format: 'Opracowanie graficzne',
    pagesCount: '30 stron'
  },
  {
    number: 8,
    title: 'Podróże Pawła — mapa specjalna',
    description: 'Wielkoformatowa, ultra szczegółowa mapa zbiorcza wszystkich 4 wypraw apostolskich z tabelą odległości, przystanków i napisanymi listami.',
    badgeText: 'W PREZENCIE',
    iconName: 'Navigation',
    format: 'Plakat cyfrowy Ultra HD',
    pagesCount: 'Plik wysokiej rozdzielczości'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Marek Kamiński',
    role: 'Lider grupy biblijnej',
    city: 'Kraków',
    stars: 5,
    quote: 'Mapy pomagają dużo lepiej zrozumieć, jak poszczególne wydarzenia biblijne łączą się ze sobą w przestrzeni. Kiedy czytamy o wędrówkach Jezusa po Galilei, wreszcie widzimy realne odległości i ukształtowanie wzgórz. Niezastąpione narzędzie na naszych cotygodniowych spotkaniach.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    verifiedLabel: 'Przykładowa opinia czytelnika'
  },
  {
    id: 'test-2',
    name: 'Anna Wiśniewska',
    role: 'Katechetka i nauczycielka',
    city: 'Poznań',
    stars: 5,
    quote: 'Szczególnie podoba mi się możliwość zobaczenia tras i odległości między miejscami znanymi z Biblii. Uczniowie na lekcjach religii są zafascynowani rekonstrukcjami 3D świątyni i starożytnych miast — to natychmiast ożywia tekst i budzi szczere zainteresowanie historią.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    verifiedLabel: 'Przykładowa opinia czytelnika'
  },
  {
    id: 'test-3',
    name: 'Piotr Zieliński',
    role: 'Student teologii',
    city: 'Wrocław',
    stars: 5,
    quote: 'Materiał jest niezwykle przejrzysty i stanowi znakomite uzupełnienie osobistego studium Pisma Świętego. Układ chronologiczny od Rdz do Ap pozwala płynnie śledzić przemiany geopolityczne starożytnego Bliskiego Wschodu. Doskonała estetyka i wysoki poziom merytoryczny.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    verifiedLabel: 'Przykładowa opinia czytelnika'
  },
  {
    id: 'test-4',
    name: 'Dorota Wójcik',
    role: 'Czytelniczka Pisma Świętego',
    city: 'Gdańsk',
    stars: 5,
    quote: 'Wizualizacje 3D pomagają wyobrazić sobie miejsca, które przez lata były dla mnie tylko obcymi nazwami w tekście. Teraz czytając o podróżach Pawła do Koryntu czy Efezu, widzę topografię Morza Śródziemnego i rozumiem wyzwania tamtej epoki. Gorąco polecam!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    verifiedLabel: 'Przykładowa opinia czytelnika'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Jak otrzymam zakupione materiały?',
    answer: 'Natychmiast po sfinalizowaniu bezpiecznej płatności otrzymasz dostęp cyfrowy. Zostaniesz automatycznie przekierowany na stronę z pobieraniem materiałów, a na Twój adres e-mail prześlemy potwierdzenie wraz z bezpiecznym, nielimitowanym linkiem do pobrania wszystkich plików w formatach zoptymalizowanych (PDF HD).'
  },
  {
    id: 'faq-2',
    question: 'Czy jest to książka drukowana?',
    answer: 'Nie. Atlas Biblijny 3D jest kompletnym produktem cyfrowym (E-book / Cyfrowy Atlas HD). Dzięki temu masz do niego natychmiastowy dostęp bez czekania na kuriera i możesz wygodnie przybliżać mapy na telefonie, tablecie, laptopie lub komputerze stacjonarnym, a także wydrukować wybrane strony lub karty do użytku osobistego i edukacyjnego.'
  },
  {
    id: 'faq-3',
    question: 'Czy mogę korzystać z materiałów na telefonie i tablecie?',
    answer: 'Tak, w 100%. Wszystkie materiały, mapy i przewodniki zostały przygotowane w uniwersalnym, najwyższej jakości formacie PDF HD, który otwiera się natychmiast na każdym smartfonie (Android, iPhone), tablecie (iPad, Android), czytniku e-booków z obsługą PDF oraz komputerze PC i Mac.'
  },
  {
    id: 'faq-4',
    question: 'Czy muszę posiadać zaawansowaną wiedzę biblijną?',
    answer: 'Absolutnie nie. Atlas został zaprojektowany z myślą zarówno o osobach, które stawiają pierwsze kroki w lekturze Pisma Świętego, jak i o doświadczonych czytelnikach, katechetach czy liderach grup. Każda mapa zawiera czytelne opisy, kontekst historyczny i bezpośrednie odnośniki do wersetów.'
  },
  {
    id: 'faq-5',
    question: 'Czy Atlas zastępuje Pismo Święte?',
    answer: 'Nie. Atlas Biblijny 3D jest materiałem pomocniczym (kompendium wizualno-geograficznym), stworzonym po to, aby towarzyszyć Twojej Biblii. Możesz korzystać z dowolnego polskiego przekładu (np. Biblii Tysiąclecia, Biblii Warszawskiej, Biblii Paulistów, Biblii Gdańskiej i innych) — atlas doskonale współgra z każdym wydaniem.'
  },
  {
    id: 'faq-6',
    question: 'Jakie metody płatności są dostępne w Polsce?',
    answer: 'Obsługujemy wszystkie popularne i bezpieczne polskie metody płatności online: natychmiastowy BLIK, szybkie przelewy bankowe PayU / Przelewy24, karty płatnicze (Visa, Mastercard) oraz Apple Pay i Google Pay. Wszystkie transakcje są szyfrowane 256-bitowym certyfikatem SSL.'
  },
  {
    id: 'faq-7',
    question: 'Jak działa 30-dniowa gwarancja satysfakcji?',
    answer: 'Masz pełne 30 dni na spokojne zapoznanie się ze wszystkimi mapami, rekonstrukcjami i 8 bonusami. Jeśli z jakiegokolwiek powodu uznasz, że materiał nie spełnił Twoich oczekiwań, wystarczy krótka wiadomość e-mail do naszego działu obsługi klienta, a zwrócimy 100% wpłaconej kwoty, bez zbędnych pytań.'
  }
];

export const AUDIENCE_CATEGORIES = [
  {
    icon: 'BookOpen',
    title: 'Grupy biblijne',
    desc: 'Ożyw spotkania domowe i dyskusje dzięki czytelnym mapom i rekonstrukcjom.'
  },
  {
    icon: 'GraduationCap',
    title: 'Katecheci i nauczyciele',
    desc: 'Gotowe, atrakcyjne wizualia przyciągające uwagę dzieci, młodzieży i dorosłych.'
  },
  {
    icon: 'Church',
    title: 'Pastorzy i duchowni',
    desc: 'Precyzyjny kontekst historyczno-geograficzny do kazań, wykładów i kazań.'
  },
  {
    icon: 'Library',
    title: 'Studenci teologii i pasjonaci',
    desc: 'Spójny, chronologiczny system łączący archeologię z tekstem biblijnym.'
  }
];
