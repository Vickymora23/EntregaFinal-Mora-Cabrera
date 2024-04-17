const productos = [
    {
        id:'tribiotic',
        title: 'Tribiotic',
        description:'Suspensión acuosa estéril, Antibiótico de amplio espectro para Equinos, Bovinos, Ovinos, Porcinos, Caprinos, Caninos y Felinos. Para el tratamiento de enfermedades infectocontagiosas producidas por gérmenes Gram (+) y Gram (-) sensibles a la penicilina y a la estreptomicina.',
        stock:'20',
        category: 'antibioticos',
        price: '$9500',
        pictureUrl:'https://www.afford.com.ar/wp-content/uploads/2020/11/tribioticLA-inyectable-banner-02.jpg'

    },
    {
        id:'doxi',
        title: 'Doxiciclina',
        description:'La Doxiciclina es un antibiótico de Amplísimo espectro, perteneciente al grupo de las tetraciclinas, y junto a la minociclina, representa la segunda generación de dicha familia. Dado su altísimo grado de liposolubilidad, penetra en forma de droga activa al interior de diversos agentes infecciosos que van desde bacterias Gram Positivas y Gram Negativas, a Clamidias, Ricketsias, Erlichias y Micoplasmas. ',
        stock:'10',
        category: 'antibioticos',
        price: '$2290',
        pictureUrl: 'https://veterinariaonline.com.ar/wp-content/uploads/2021/09/doxiciclina-200-mg.png'
    },
    {
        id:'cefa',
        title: 'Cefalexina ',
        description:'Cefalexina está indicada en infecciones de piel, tejidos blandos, duros, vías respiratorias y aparato genitourinario. De elección en tratamientos prolongados ( de mas de 30 días) para dermopatías infecciosas.',
        stock:'10',
        category: 'antibioticos',
        price: '$2800',
        pictureUrl:'https://www.jcfinelli.com.ar/436-large_default/idv-cefalexina-pyo-500-idv-x-100-comp.jpg'
    },
    {
        id:'enro',
        title: 'Enrofloxacina',
        description:'Tratamiento de infecciones provocadas por bacterias Gram (+), Gram (-) y Mycoplasmas. No administrar en animales en crecimiento, hembras preñadas ni lactantes.',
        stock:'5',
        category: 'antibioticos',
        price: '$3000',
        pictureUrl:'https://www.zoovet.com.ar/media/k2/items/cache/1d73e13563b8be946c0f00bab252d7ea_XL.jpg'
    },
    {
        id:'spectryl',
        title: 'Spectryl',
        description:': Spectryl está indicado para el tratamiento de todas aquellas infecciones producidas por agentes microbiológicos susceptibles a la ciprofloxacina y/o metronidazol. ',
        stock:'20',
        category: 'antibioticos',
        price: '$5400',
        pictureUrl:'https://farcovetsa.com/wp-content/uploads/2019/05/Spectryl.png'
    },
    {
        id:'amoxi',
        title: 'Amoxicilina',
        description:'Antibiótico bactericida derivado semisintético de la penicilina, de espectro ampliado y con mayor resistencia al jugo gástrico, mejor absorción intestinal y vida media mayor que la ampicilina.',
        stock:'39',
        category: 'antibioticos',
        price: '$5000',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/04/amox100-lamar-1.png'
    },
    
    {
        id:'trama',
        title: 'Tramadol ALGEN ',
        description:'El Algen comprimidos, está indicado para el control del dolor somático y/o visceral de grado moderado a severo y de origen agudo o crónico (fracturas, luxaciones, contusiones, osteoartritis, neuropatías, DTVG). Es muy utilizado en el tratamiento del dolor postquirúrgico de pacientes ambulatorios, presentándose como una alternativa eficaz en la mayoría de las cirugías de abdomen, mastectomías, traumatologías y de columna. La combinación de Algen comprimidos con antiinflamatorios no esteroides, aumenta la eficacia del mismo, produciendo una acción de alivio del dolor multimodal.',
        stock:'50',
        category: 'analgesicos',
        price: '$2300',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/04/Render-Algen-60-Comp-V1-1.png'
    },
    {
        id:'tramadol',
        title: 'Tramadol JHON MARTIN',
        description:'Uso en caninos para el tratamiento del dolor moderado a severo de diversas etiologías. Para tratamiento del dolor en traumas agudos, dolores de tipo crónico, dolor refractario a otros tratamientos, en estados cancerosos, dolores osteoarticulares y musculares, dolores viscerales en general y síndromes urológicos en las distintas especies, síndrome posterior a la amputación, “miembro fantasma”.',
        stock:'5',
        category: 'analgesicos',
        price: '$2800',
        pictureUrl:'https://john-martin.com.ar/wp-content/uploads/2024/03/MOCK-UP-TRAMADOL-INYECTABLE.jpg'
    },
    {
        id:'butormin',
        title: 'Butormin INY. X 10ml.',
        description:'Analgésico, opioide sintético agonista-antagonista, con una potencia mayor a la de la morfina y mínimos efectos cardiovasculares.AGONISTA KAPPA: El estimulo de los receptores Kappa produce analgesia espinal y sedación con menor depresión respiratoria y miosis. ANTAGONISTA MU El estímulo de los receptores MU provoca analgesia supraespinal, depresión respiratoria y miosis, dependecia física y euforia.',
        stock:'15',
        category: 'analgesicos',
        price: '$33500',
        pictureUrl:'https://www.sani.com.ar/usr/timthumb.php?src=https://www.sani.com.ar/productos/fotos/5163.jpg&w=188&h=250&zc=1'
    },
    {
        id:'oxicam',
        title: 'Oxicam B12',
        description:'Analgésico y antiinflamatorio no esteroide indicado en perros y gatos, para el manejo del dolor en osteoartritis, dolor post quirúrgico y otros trastornos inflamatorios donde se requiera una acción analgésica potente',
        stock:'26',
        category: 'analgesicos',
        price: '$27200',
        pictureUrl:'https://richmondvet.com.ar/wp-content/uploads/2019/06/Oxicam.jpg'
    },
    {
        id:'pipetapower',
        title: 'POWER ULTRA',
        description:'lPower Ultra Spot-on se indica para la prevención y tratamiento de las infestaciones de diversos ectoparásitos, colaborando en la prevención de las enfermedades y zoonosis que estos transmiten. ',
        stock:'20',
        category: 'antiparasitarios',
        price: '$2700',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/09/Sin-titulo-5.png'
    },
    {
        id:'pipetaosspret',
        title: 'PIPETA OSSPRET',
        description:'La Pipeta Osspret es un antiparasitario externo (spot on) para combatir las pulgas y garrapatas en perros y gatos. Coadyuvante en la repelencia de moscas y mosquitos. Efectivo contra: Ctenocephalides felis, Ctenocephalides canis, Dermacentor andersoni, Dermacentor variabilis y Rhipicephalus sanguineus',
        stock:'13',
        category: 'antiparasitarios',
        price: '$2000',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/08/descarga-5.jpg'
    },
    {
        id:'pipetafrontline',
        title: 'FRONTLINE PLUS',
        description:'Para el control y prevención de infestaciones por pulgas, garrapatas y piojos. Se recomienda el uso de FRONTLINE PLUS® como terapia complementaria en el tratamiento de la dermatitis alérgica por pulgas.',
        stock:'10',
        category: 'antiparasitarios',
        price: '$5500',
        pictureUrl:'https://http2.mlstatic.com/D_NQ_NP_838463-MLM42652888167_072020-O.webp'
    },
    {
        id:'simparica',
        title: 'SIMPARICA COMPRIMIDOS',
        description:'Simparica, es un comprimido palatable para perros, que ofrece una rápida y eficaz acción en el tratamiento y control de pulgas y garrapatas, ayudando a mejorar la calidad de vida de su mascota.',
        stock:'5',
        category: 'antiparasitarios',
        price: '$12000',
        pictureUrl:'https://www2.ar.zoetis.com/content/es/pages/Microsites/simparica/_assets/Cajas-Simparica.png'
    },
    {
        id:'bravecto',
        title: 'BAVECTO PERROS',
        description:'Es una tableta que actúa contra pulgas, garrapatas y ácaros de la sarna muy eficiente y de muy alta calidad ya que protege a tu mascota hasta por 12 semanas.',
        stock:'7',
        category: 'antiparasitarios',
        price: '$25000',
        pictureUrl:'https://www.msd-salud-animal.com.ar/wp-content/uploads/sites/44/2020/01/Bravecto-perros-cajas-nuevas.png'
    },
    {
        id:'nexgard',
        title: 'NEX GARD',
        description:'NexGard es un bocado masticable con sabor a carne que brinda protección a los perros contra pulgas, garrapatas y ácaros. NexGard protege a los perros contra las garrapatas. Consultá el prospecto del producto para conocer las indicaciones de uso.2',
        stock:'Sin Stock',
        category: 'antiparasitarios',
        price: '$12000',
        pictureUrl:'https://nexgard.com.ar/sites/default/files/2023-07/4_16-Nexgard-Range-Shot.jpg'
    },
    {
        id:'teacollar',
        title: 'TEA COLLAR',
        description:'Collar pulguicida, garrapaticida y piojicida para caninos.',
        stock:'8',
        category: 'antiparasitarios',
        price: '$45000',
        pictureUrl:'https://www.koniglab.com/new_site/wp-content/uploads/2015/09/Collares-TEA-Perros.jpg'
    },
    {
        id:'repexxincollar',
        title: 'REPEXXIN COLLAR',
        description:'Collar repelente e insecticida con máxima protección. Los 3 activos de repexxin se liberan (de forma progresiva) a concentraciones efectivas, de la matriz plástica sobresaturada del collar hacia el perro. De este modo, estas sustancias repelentes, acaricidas/insecticidas están presentes en el pelaje distribuyéndose desde la (región cervical) hasta la totalidad de la superficie (del animal).',
        stock:'2',
        category: 'antiparasitarios',
        price: '$12500',
        pictureUrl:'https://www.koniglab.com/new_site/wp-content/uploads/2022/11/Repexxin-nuevo-600x581.jpg'
    },
    {
        id:'totalfullcg',
        title: 'TOTAL FULL CG SUSPENSIÓN PERROS Y GATOS',
        description:'Antiparasitario interno. Contra coccidios, giardias y nematodos.',
        stock:'9',
        category: 'antiparasitarios',
        price: '$4000',
        pictureUrl:'https://dcdn.mitiendanube.com/stores/001/321/621/products/total-full-cg1-99a39be96e7178298816015180419162-1024-1024.webp'
    },
    {
        id:'totalfulllc',
        title: 'TOTAL FULL LC',
        description:'lEl Total Full LC para caninos es un antiparasitario interno de administración oral para perros de talla grande, mediana y pequeña de liberación lenta. Son comprimidos palatables, con liberación controlada, indicados para la prevención y tratamiento de cestodes, nematodes y giardias.',
        stock:'10',
        category: 'antiparasitarios',
        price: '$2500',
        pictureUrl:'https://www.animalia.com.ar/wp-content/uploads/2019/07/total-full-antiparasitario.jpeg'
    },
    {
        id:'feline',
        title: 'FELINE ENDOSPOT',
        description:'Feline Endospot, antiparasitario interno de aplicación spot-on. Su efectiva formulación elimina los parásitos internos que frecuentemente afectan a los gatos.',
        stock:'16',
        category: 'antiparasitarios',
        price: '$5100',
        pictureUrl:'https://aculi.pe/wp-content/uploads/2022/12/feline-endo.png'
    },
    {
        id:'meltra',
        title: 'MELTRA SPOT ON (FELINO)',
        description:'Antiparasitario interno para el control de nematodes y tenias, Ppra felinos. Pipeta spot-on.',
        stock:'4',
        category: 'antiparasitarios',
        price: '$3500',
        pictureUrl:'https://brouwer.com.ar/wp-content/uploads/2017/01/Meltra-spot-on-felinos-412x412.jpg'
    },
    {
        id:'aprax',
        title: 'APRAX RAZAS GRANDES/MEDIANAS',
        description:'Antiparasitario interno de amplio espectro. Comprimidos saborizados. Tratamiento y control de las parasitosis internas en Perros y Gatos causadas por nematodes y cestodes.',
        stock:'5',
        category: 'antiparasitarios',
        price: '$3000',
        pictureUrl:'https://farcovetsa.com/wp-content/uploads/2019/05/aprax.png'
    },
    {
        id:'toltra',
        title: 'TOLTRAZOL',
        description:'Tratamiento y prevención de la coccidiosis intestinal. Tratamiento de Hepatozoon canis.',
        stock:'5',
        category: 'antiparasitarios',
        price: '$8000',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/04/toltrazol-comp-hosp-300x300-1.png'
    },
    {
        id:'ivermectina',
        title: 'IVERVET INYECTABLE',
        description:'Control efectivo y prolongado de los parásitos gastrointestinales adultos y juveniles, pulmonares, ura, piojos y ácaros de la sarna. Ayuda en el control de la garrapata común del bovino y piojos masticadores.',
        stock:'5',
        category: 'antiparasitarios',
        price: '$10000',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/04/Ivervet-Endectodicine-9-934x1024-1-1.png'
    },
    {
        id:'cestodan',
        title: 'CESTODAN INYECTABLE INDOLORO X 10 ML',
        description:'Tratamiento de las parasitosis causadas por Echinococcus granulosus (agente de la hidatidosis humana), Echinococcus multilocuralis, Dipillydium caninum y tenias en general en caninos y felinos tanto en sus estadios maduros e inmaduros.',
        stock:'5',
        category: 'antiparasitarios',
        price: '$9500',
        pictureUrl:'https://www.koniglab.com/new_site/wp-content/uploads/2015/09/Cestodan-Inyectable.jpg'
    },
    {
        id:'basken',
        title: 'BASKEN PLUS PERROS/GATOS',
        description:'Antihelmíntico de amplio espectro para caninos y felinos, de administración oral. Tratamiento de las parasitosis por nematodes (Toxocara canis; Ancylostoma caninum; Uncinaria stenocephala; Trichuris vulpis) y cestodes (Echinococcus granulosus, Dipillydium caninum y tenias en general) en caninos, a partir de los 21 días de edad. Posee actividad larvicida y adulticida.',
        stock:'9',
        category: 'antiparasitarios',
        price: '$1600',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/10/plus.png'
    },
    {
        id:'clinda',
        title: 'CLINDAMICINA',
        description:'En caninos y felinos, para infecciones producidas por Gram positivos, anaerobios y micoplasmas. De primera elección en enfermedad periodontal, heridas infectadas, osteomielitis, abscesos, piodermitis profundas, etc. Antibiótico de alternativa en piodermias superficiales o resistentes a los antibióticos de primera elección, infeccio-nes pulmonares, y otitis. ',
        stock:'10',
        category: 'antibioticos',
        price: '$5000',
        pictureUrl:'https://tienda.faunatikos.com.ar/img/articulos/3189.jpg'
    },
    {
        id:'dexa',
        title: 'DEXAMETASONA INYECTABLE JOHN MARTIN',
        description:'Antiinflamatorio esteroide indicado para Dermatitis atópica, artritis, bursitis, sinovitis, espondilitis, conjuntivitis alérgica, hiperplasia adrenal congénita, edema cerebral, lupus eritematoso sistémico, hipersensibilidad a drogas, tratamiento de shock, afecciones reumáticas, tiroiditis no supurativa, anemia hemolítica autoinmune y las indicaciones generales de los antiinflamatorios corticoides.',
        stock:'4',
        category: 'antiinflamatorios',
        price: '$6000',
        pictureUrl:'https://john-martin.com.ar/wp-content/uploads/2024/03/MOCK-UP-DEXA4-INYECTABLE.jpg'
    },
    {
        id:'dexametasona',
        title: 'DEXAMETASONA 20 MG X 20 ML',
        description:' Antiinflamatorio Glucocorticoide de alta concentración y efecto rápido',
        stock:'5',
        category: 'antiinflamatorios',
        price: '$8700',
        pictureUrl:'https://richmondvet.com.ar/wp-content/uploads/2020/03/Render-Dexa20-20mL-V1.png'
    },
    {
        id:'prednisolona',
        title: 'PREDNISOLONA IDV',
        description:'La Prednisolona Pyo del Instituto Dermatológico Veterinario (IDV) es un glucocorticoide – antiinflamatorio de uso veterinario que contiene prednisolona base y está indicado para perros y gatos con procesos inflamatorios y alérgicos. Prurito. Enfermedades autoinmunes. Lupus eritematoso sistémico. Enfermedades perifigoideas, etc. Como coadyuvante en la terapéutica antineoplásica: neoplasias linfoideas. Terapia de sustitución.',
        stock:'8',
        category: 'antiinflamatorios',
        price: '$1500',
        pictureUrl:'https://bruncas.com.ar/wp-content/uploads/2022/04/pred-pyo-20mg-500-1.png'
    },
    {    
    id:'predni',
    title: 'PREDNISOLONA HOLLIDAY',
    description: 'Glucocorticoide sintético no fluorado con una potencia glucocorticoidea 4 veces mayor al Cortisol, pero con un efecto mineralocorticoide casi nulo, Antiinflamatorio. Antipruriginoso. Antialérgico. Inmunosupresor.',
    stock:'3',
    category: 'antiinflamatorios',
    price: '$1500',
    pictureUrl:'https://holliday-scott.com/images/w441_h441_at__20220615110651truca_prednisolona.png'
    },
    {  
    id:'triamcinolona',
    title: 'ATRIBEN INY X 20ML',
    description:'Antiinflamatorio esteroide. La triamcinolona, es un sintético fluorado con una potencia glucocorticoidea 5 veces mayor al cortisol, sin efecto mineralocorticoideo (retención de sodio) y con una duración de acción prolongada por la sal que la acompaña.',
    stock:'19',
    category: 'antiinflamatorios',
    price: '$7000',
    pictureUrl:'https://holliday-scott.com/images/w441_h441_at__20170721111447Producto-10.jpg'
    },




]


const getProducts = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve (productos);
    }, 2000);
});

export default getProducts