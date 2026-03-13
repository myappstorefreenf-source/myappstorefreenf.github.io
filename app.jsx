const { useState, useEffect } = React;
const { createRoot } = ReactDOM;

// ***************************************************************
// 1. OBJETO DE CONFIGURACIÓN GLOBAL (DEBES MODIFICAR ESTO PARA CADA ACTUALIZACIÓN)
// ***************************************************************
const GlobalConfig = {
    // La versión que deberían tener los usuarios (DEBE COINCIDIR con el versionName en build.gradle)
    requiredAppVersion: "1.3",                 
    // El mensaje que verán los usuarios
    updateMessage: "Descarga la nueva versión de la App Store para obtener nuevas funciones, mejoras de estabilidad y acceso a nuevas apps.",                
    // URL para descargar el NUEVO APK de la App Store (modifica este enlace)
    updateDownloadUrl: "https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/V1.3.apk",                
    // Si es una actualización OBLIGATORIA (true: el botón 'Más tarde' desaparece)
    isForced: false,                
    // CONFIGURACIÓN: CONTRASEÑA DE ADULTOS (¡CÁMBIALA!)
    adultPassword: "1234",     
    // NUEVA CONFIGURACIÓN: URL del formulario de reclamos/sugerencias
    suggestionFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdaj6_OdOOVC2Q9oqGTfP1RegI1NZNdxngbDwPGE6cjgtoTpw/viewform?usp=dialog", // <-- ¡MODIFICA ESTA URL CON TU ENLACE REAL!
};

// ***************************************************************
// 2. DATA DE APLICACIONES (APPS)
// ***************************************************************
const apps = [
    {            
        id: 'Worldtv',            
        name: 'worldtv v2.101',            
        publisher: 'WorldTv',            
        icon: 'icons/worldtv.png',            
        description: 'ofrece servicios de transmisión en vivo de diferentes canales,miara tus programas y series favoritos.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/worldtv2_101.apk',            
        isAvailable: true, // Disponible        
    },
    {            
        id: 'playteve',            
        name: 'Play Teve',            
        publisher: 'Play teve',            
        icon: 'icons/playteve.png',            
        description: 'ofrece servicios de transmisión en vivo de diferentes canales,miara tus programas y series favoritos.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Play.TV.Premium.Mod3.apk',            
        isAvailable: true, // Disponible        
    },        
    {            
        id: 'SFTV',            
        name: 'SFTV',            
        publisher: 'SFVT.',            
        icon: 'icons/sftv.png',            
        description: 'SFTV es una sencilla aplicación para conectar tu Smart TV Android, tu dispositivo móvil Android y tu ordenador. Te permite compartir películas, programas de televisión o cualquier archivo entre estos dispositivos de forma rápida y sencilla a través de tu red local.No requiere internet.' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/sftv.apkm',            
        isAvailable: false, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },
     {            
        id: 'Player pro',            
        name: 'Player pro',            
        publisher: 'Player pro.',            
        icon: 'icons/playerpro.png',            
        description: 'Disfruta de ciento de canales, series y peliculs todo desde una misma app,IMPORTABTE al iniciar la app solicita por uni vez servidor: plpro.org contraseña: p usuario :p ' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Player.Pro.apk',            
        isAvailable: true, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },
     {            
        id: '410',            
        name: '410',            
        publisher: '410',            
        icon: 'icons/410.png',            
        description: 'Disfruta de ciento de canales, series y peliculs todo desde una misma app,IMPORTABTE al iniciar la app solicita por uni vez servidor: plpro.org contraseña: p usuario :p ' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/410.apk',            
        isAvailable: true, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },
    {            
        id: 'Var Sport',            
        name: 'Var Sport',            
        publisher: 'Var Sport',            
        icon: 'icons/varsport.PNG',            
        description: 'Disfruta de todo el deporte con esta increible app' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/VAR.Sports.1.1.apk',            
        isAvailable: true, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },
     {            
        id: 'Proton vpv',            
        name: 'Proton vpn',            
        publisher: 'Proton vpn',            
        icon: 'icons/protonvpn.PNG',            
        description: 'Oculta todo el trafico de tu red con esta potente VPN' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/ProtonVPN-5.15.7.apk',            
        isAvailable: true, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },
      {            
        id: 'teleapp',            
        name: 'TeleApp',            
        publisher: 'Teleapp.',            
        icon: 'icons/teleapp.PNG',            
        description: 'Tele App, mira todos los canales desde esta sencilla y practica app, selecciona por pais o provincia para todos los canales nacionales' ,            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/tele.apk',            
        isAvailable: true, // ¡Marcada como NO DISPONIBLE para la prueba!        
    },        
    {            
        id: 'MPLUS2',            
        name: 'mplus2_sign',            
        publisher: 'mplus.',            
        icon: 'icons/mplus.png',            
        description: 'ofrece servicios de transmisión en vivo de diferentes eventos deportivos, como la Serie A italiana, la Primera división brasileña Football League, Thailand Super Football League, Singapore Super Football League, Asian League Champions Cup,  y otros eventos en vivo.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/mplus21_sign.apk',            
        isAvailable: true,        
    },
    {            
        id: 'M3u IPTV',            
        name: 'M3u IPTV',            
        publisher: 'M3u.',            
        icon: 'icons/m3u.png',            
        description: 'Un potente reproductor de listas m3u en el link  adjunto podran descargar la lista para complementar con esta app',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/SENSA.TV.m3u8', 
        isAvailable: true,        
    },
    {
    id: 'sensa-apps',
    name: 'LISTAS SENSA TV PACK',
    publisher: 'Sensa',
    icon: 'icons/lista.png',
    description: 'Pack de listas Sensa para Android TV.',
    downloads: [
        { label: 'Sensa TV', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/SENSA.TV.m3u' },
        { label: 'Sensa TV v4', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/SENSA.V4.lilac01.m3u' },
        { label: 'Sensa TV v5', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/SENSA.V5.mplus.m3u' },
        { label: 'TV hoy', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/TvHoy20s_.m3u' },
        { label: 'Listatv1', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/listaTv1.m3u' },
        { label: 'LPF_ARG', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/LPF_ARG.1.m3u' },
        { label: 'Sensaarg.2', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Sensaarg.2.m3u' },
         { label: 'Lista001', url: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/lista001.m3u' },
    ],
    isAvailable: true,
},

    {            
        id: 'Projectivy launcher',            
        name: 'PROJECTIVY LAUNCHER',            
        publisher: 'projectivy launcher',            
            icon: 'icons/projectivylauncher.png',            
        description: 'Projectivy Launcher es un lanzador (launcher) alternativo para Android TV que permite personalizar la pantalla de inicio y ofrece una experiencia sin publicidad permite a los usuarios organizar sus aplicaciones, personalizar la apariencia de la interfaz y eliminar la publicidad que a menudo se encuentra en los launchers predeterminados de Android TV.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Projectivy.Launcher.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'teo',            
        name: 'Teo Plus',            
        publisher: 'teo plus',            
            icon: 'icons/teo.png',            
        description: 'Mira tus peliculas favoritas,series y los ultimos estrenos todo desde un mismo lugar.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/TEO.PLUS.apk',            
        isAvailable: true,        
    },
    {            
        id: 'infinity',            
        name: 'Infinitys Life',            
        publisher: 'Infinitys',            
            icon: 'icons/infinity.png',            
        description: 'Mira tus peliculas favoritas,series y los ultimos estrenos todo desde un mismo lugar.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/INFINITY.apk',            
        isAvailable: true,        
    },
     {            
        id: 'xp',            
        name: 'Xp Player',            
        publisher: 'Xp player',            
            icon: 'icons/xp.png',            
        description: 'Disfruta de todo el contenido multimedia que te ofrece esta aplicacion.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/XP.Player.apk',            
        isAvailable: true,        
    },
     {            
        id: 'Magma',            
        name: 'Magma',            
        publisher: 'Magma',            
            icon: 'icons/magma.png',            
        description: 'Magma es un reproductor de listas m3u, requiere una minima configuracion inicial, al pedirte los datos ingresa servidor:http://magmaplayer.com/ usuario: m contraseña: m y disfruta de todo el contenido .',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Magma.1.0.9.apk',            
        isAvailable: true,        
    },        
    
    {            
        id: 'mgt',            
        name: 'Magis TV',            
        publisher: 'MagisTV',            
        icon: 'icons/magistv.png',            
        description: '¡¡¡Ahora magisttv se llama Xupertv!!!Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://www.xupertv.com/app/XPR_oficial1.apk',            
        isAvailable: false,        
    }, 
    
    {            
        id: 'Smartube',            
        name: 'Smartube',            
        publisher: 'smartube',            
        icon: 'icons/smartube.png',            
        description: 'Mira Mira los videos favoritos de youtube, ahora desde la comodidad de tu tv.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/smarttube.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'VAIO_TV',            
        name: 'VAIO TV',            
        publisher: 'Stream Labs',            
        icon: 'icons/vaio.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/VAIO.TV_0.1.0.apk',            
        isAvailable: true,        
    },        
    // --- INICIO APPS ADULTOS (EJEMPLOS) ---        
    {            
        id: 'allin1',            
        name: 'Allin1',            
        publisher: 'Allin1',            
        icon: 'icons/allin1.PNG', // Asume que tienes este icono            
        description: 'Sin descripcion',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/ALL.IN.1.3.3.2.apk',            
        category: 'adult',             
        isAvailable: true,        
    },        
    {            
        id: 'Eroflix',            
        name: 'Eroflix',            
        publisher: 'Adultos',            
        icon: 'icons/erotic.png', // Asume que tienes este icono            
        description: '',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Eroflix.apk',            
        category: 'adult',            
        isAvailable: false,        
    },        
    // --- FIN APPS ADULTOS ---        
    {            
        id: 'Pluto_tv',            
        name: 'Pluto TV',            
        publisher: 'plutotv',            
        icon: 'icons/plutotv.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/plutotv.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'dtv',            
        name: 'Dtv',            
        publisher: 'dtv',            
        icon: 'icons/dtv.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/dtv.2.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'Lm tv',            
        name: 'Lm tv',            
        publisher: 'Lm tv',            
        icon: 'icons/lm.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/LM.ATV.-.1.0.4.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'Ott tv',            
        name: 'Ott tv',            
        publisher: 'Ott tv',            
        icon: 'icons/ott.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/ott-navigator-1-6-9-4.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'playfy',            
        name: 'playfly',            
        publisher: 'playfy',            
        icon: 'icons/playfly.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/playfy.tv_v1.2_opt.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'playpelis',            
        name: 'playpelis',            
        publisher: 'playpelis',            
        icon: 'icons/playpelis.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/PlayPelis+.1.4.8.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'Rb',            
        name: 'Rb tv',            
        publisher: 'Rb tv',            
        icon: 'icons/rbtv.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/RBTV+.-v3.0.315.apk',            
        isAvailable: true,        
    },
    {            
        id: 'FCtv',            
        name: 'Fc tv',            
        publisher: 'FcTv',            
        icon: 'icons/fctv.PNG',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/FCTV33.TV.3.0.312.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'tvonline',            
        name: 'Tv online',            
        publisher: 'Tv online',            
        icon: 'icons/tvonline.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/TVONLINE1.apk',            
        isAvailable: true,        
    },        
    {            
        id: 'Vertex',            
        name: 'Vertex',            
        publisher: 'Vertex',            
        icon: 'icons/vertex.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/Vertex.TV+.PRO.apk',            
            isAvailable: true,        
    },        
    {            
        id: 'Tv Clasica',            
        name: 'Tv Clasica',            
        publisher: 'Tv clasica',            
        icon: 'icons/clasica.png',            
        description: 'Mira cientos de canales en vivos, disfruta de tus series y peliculas favoritas, todo desde una misma app.',            
        downloadUrl: 'https://github.com/myappstorefreenf-source/mis-apps-android/releases/download/1.0.0.0/TV.CLASICA.100-1.apk',            
        isAvailable: true,        
    },    
];

// ***************************************************************
// 3. COMPONENTE DE TARJETA DE APLICACIÓN
// ***************************************************************
const AppCard = ({ app, onPress }) => (
    <button            
        onClick={onPress}            
        className="w-[10rem] flex-none bg-gray-800 rounded-3xl p-6 shadow-xl cursor-pointer transition-transform duration-200 hover:scale-105"        
    >
        <div className="flex flex-col items-center text-center">
            <img src={app.icon} alt={`Icono de la aplicación ${app.name}`} className="w-20 h-20 rounded-2xl shadow-lg mb-4" />
            <h3 className="text-lg font-semibold text-white truncate w-full">{app.name}</h3>
            <p className="text-sm text-gray-400 truncate w-full">{app.publisher}</p>
        </div>
    </button>
);

// ***************************************************************
// COMPONENTE ACTUALIZADO: MODAL DE SUGERENCIAS Y RECLAMOS (USA IMAGEN LOCAL)
// ***************************************************************
const SuggestionModal = ({ isVisible, onClose, formUrl }) => {
    if (!isVisible) return null;

    // --- CAMBIO CLAVE: Usamos una imagen local ---
    const qrCodeLocalPath = 'icons/suggestion_qr.png'; // <--- RUTA LOCAL

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-8 z-50">
            <div className="bg-gray-800 rounded-3xl p-10 max-w-lg w-full shadow-2xl relative border-4 border-yellow-500">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold"
                >
                    &times;
                </button>
                <h3 className="text-3xl font-extrabold text-yellow-400 mb-4 text-center">
                    Reclamos o Sugerencias 📝
                </h3>
                <p className="text-gray-300 text-center mb-6">
                    Escanea el código QR con tu móvil o tableta para acceder al formulario y enviarnos tus comentarios.
                </p>
                
                {/* Contenedor del QR que apunta a la imagen local */}
                <div className="flex justify-center mb-8">
                    <img 
                        src={qrCodeLocalPath} // <--- USA LA IMAGEN LOCAL
                        alt="Código QR para formulario de sugerencias" 
                        className="w-48 h-48 border-4 border-white rounded-lg shadow-lg"
                    />
                </div>

                <p className="text-gray-400 text-sm break-words text-center mb-6">
                    Si el QR no funciona, haz clic en el siguiente link :<br/>
                    <a 
                        href={formUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-purple-400 hover:text-purple-300 underline"
                    >
                        {formUrl}
                    </a>
                </p>

                <button
                    onClick={onClose}
                    autoFocus
                    className="w-full bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                    Entendido
                </button>
            </div>
        </div>
    );
};


// ***************************************************************
// 4. COMPONENTE PRINCIPAL DE LA APLICACIÓN
// ***************************************************************
const App = () => {
    // --- ESTADOS ---
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedApp, setSelectedApp] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');                 
    
    // ESTADOS DE ACTUALIZACIÓN
    const [appVersion, setAppVersion] = useState("0.0");         
    const [updateModalVisible, setUpdateModalVisible] = useState(false); 
    
    // ESTADOS MODAL DE INDISPONIBILIDAD
    const [unavailableModalVisible, setUnavailableModalVisible] = useState(false);         
    const [unavailableAppName, setUnavailableAppName] = useState(''); 
    
    // ESTADOS DE ADULTOS
    const [isAdultAccessGranted, setIsAdultAccessGranted] = useState(false);         
    const [showPasswordModal, setShowPasswordModal] = useState(false);         
    const [passwordInput, setPasswordInput] = useState('');         
    const [passwordError, setPasswordError] = useState(false); 

    // NUEVO ESTADO: MODAL DE SUGERENCIAS
    const [showSuggestionModal, setShowSuggestionModal] = useState(false); 
    
    // --- EFECTOS ---
    useEffect(() => {
        // Verifica la versión de la App Store instalada en el dispositivo Android
        if (window.AndroidInterface && typeof window.AndroidInterface.getAppVersion === 'function') {
            const currentVersion = window.AndroidInterface.getAppVersion();
            setAppVersion(currentVersion);                                
            
            // Muestra el modal de actualización si la versión es menor a la requerida
            if (currentVersion < GlobalConfig.requiredAppVersion) {
                setUpdateModalVisible(true);
            }
        }
    }, []);                 
    // Este efecto detecta si algún modal está abierto y congela el fondo
useEffect(() => {
    if (modalVisible || showSuggestionModal || updateModalVisible || showPasswordModal || unavailableModalVisible) {
        // Bloquea el scroll
        document.body.style.overflow = 'hidden';
    } else {
        // Habilita el scroll de nuevo cuando cierras el modal
        document.body.style.overflow = 'unset';
    }
}, [modalVisible, showSuggestionModal, updateModalVisible, showPasswordModal, unavailableModalVisible]);
    // --- LÓGICA DE FILTRADO Y MANEJO DE ESTADOS ---
    const normalApps = apps.filter(app => app.category !== 'adult');
    const adultApps = apps.filter(app => app.category === 'adult');

    const filteredApps = normalApps.filter(app =>
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.publisher.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const openModal = (app) => {
        setSelectedApp(app);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
        setSelectedApp(null);
    };

    const handleDownload = (app) => {             
        // 1. Lógica de descarga (interfaz con Android)
        const isAvailable = app.isAvailable === undefined ? true : app.isAvailable;                        
        
        if (isAvailable && app.downloadUrl) {
            if (window.AndroidInterface && typeof window.AndroidInterface.startDownload === 'function') {
                window.AndroidInterface.startDownload(app.downloadUrl);
            } else {
                window.open(app.downloadUrl, '_blank');
            }
        } else {
            // App no disponible
            setUnavailableAppName(app.name);
            setUnavailableModalVisible(true);
        }

        // Cierra el modal si la app estaba disponible
        if (isAvailable || app.downloadUrl === GlobalConfig.updateDownloadUrl) {
            closeModal();
        }        
    };

    const handlePasswordSubmit = () => {
        if (passwordInput === GlobalConfig.adultPassword) {
            setIsAdultAccessGranted(true);
            setShowPasswordModal(false);
            setPasswordInput('');
            setPasswordError(false);
        } else {
            setPasswordError(true);
        }
    };

    // --- RENDERIZADO JSX ---
    return (
        <div className="p-8 pb-16 min-h-screen">
            <header className="mb-8 text-center relative">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                    <span className="text-purple-500">MY App</span><span className="text-white">Store</span>
                </h1>
                <p className="text-gray-400 text-lg mt-2 mb-6">
                    Explora y descarga aplicaciones para tu TV.
                </p>

                {/* BOTÓN DE RECLAMOS/SUGERENCIAS */}
                <button
                    onClick={() => setShowSuggestionModal(true)}
                    // Posicionamiento en Desktop/TVs (esquina superior derecha)
                    className="absolute top-0 right-0 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-xl shadow-md hover:bg-yellow-600 transition-colors hidden md:block" 
                    title="Enviar reclamos o sugerencias"
                >
                    Reclamos/Sugerencias
                </button>
                {/* Botón en el flujo normal para móviles */}
                <button
                    onClick={() => setShowSuggestionModal(true)}
                    className="md:hidden w-full bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-xl shadow-lg hover:bg-yellow-600 transition-colors mb-4"
                >
                    Reclamos/Sugerencias 📝
                </button>

                {/* Buscador */}
                <div className="mt-6 max-w-xl mx-auto">
                    <input
                        type="text"
                        placeholder="Buscar apps por nombre, editor o descripción..."
                        className="w-full p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-150"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </header>

            {/* 1. SECCIÓN DESTACADAS OCULTA AL BUSCAR */}
            {searchTerm === '' && (
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 ml-2">Destacadas</h2>
                    <div className="app-container flex overflow-x-auto space-x-6 pb-4">
                        {normalApps.filter(app => app.id.includes('mgt') || app.id === 'MPLUS2').map(app => (
                            <AppCard key={app.id} app={app} onPress={() => openModal(app)} />
                        ))}
                    </div>
                </section>
            )}

            {/* 2. SECCIÓN PRINCIPAL DE APLICACIONES / RESULTADOS DE BÚSQUEDA */}
            <section>
                <h2 className="text-2xl font-bold mb-4 ml-2">
                    {searchTerm === '' ? 'Aplicaciones' : `Resultados para "${searchTerm}"`}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
                    {filteredApps.length > 0 ? (
                        filteredApps.map(app => (
                            <div key={app.id} className="col-span-1">
                                <AppCard app={app} onPress={() => openModal(app)} />
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 text-lg col-span-full text-center py-10">
                            No se encontraron aplicaciones que coincidan con "{searchTerm}".
                        </p>
                    )}
                </div>
            </section>

            {/* 3. SECCIÓN ADULTOS */}
            {searchTerm === '' && (
                <section className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 ml-2 flex items-center">
                        Contenido Adultos 🔞
                        {!isAdultAccessGranted && (
                            <span                                 
                                onClick={() => setShowPasswordModal(true)}                                
                                className="ml-4 text-sm text-red-400 cursor-pointer hover:text-red-300 transition-colors"                                
                            >
                                (Bloqueado. Clic para desbloquear)                                
                            </span>
                        )}
                    </h2>                                                
                    {isAdultAccessGranted ? (
                        <div className="app-container flex overflow-x-auto space-x-6 pb-4">
                            {adultApps.map(app => (
                                <AppCard key={app.id} app={app} onPress={() => openModal(app)} />
                            ))}
                        </div>
                    ) : (
                        <div                                 
                            className="bg-gray-800 rounded-3xl p-10 text-center cursor-pointer transition-all duration-200 hover:bg-gray-700"                                
                            onClick={() => setShowPasswordModal(true)}
                        >
                            <p className="text-xl text-red-500 font-semibold mb-2">Acceso Restringido 🔒</p>
                            <p className="text-gray-400">Introduce la contraseña para ver este contenido.</p>
                        </div>
                    )}
                </section>
            )}

            {/* MODAL: Sugerencias/Reclamos (Usa imagen local) */}
            <SuggestionModal
                isVisible={showSuggestionModal}
                onClose={() => setShowSuggestionModal(false)}
                formUrl={GlobalConfig.suggestionFormUrl}
            />

           {/* MODAL: Detalles de la aplicación */}
{modalVisible && selectedApp && (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-8 z-50">
        <div className="bg-gray-800 rounded-3xl p-8 max-w-2xl w-full shadow-2xl relative">
           <button
    onClick={closeModal}
    autoFocus // <--- Esto hace que el control remoto "salte" aquí al abrirse
    className="absolute top-4 right-4 text-gray-400 hover:text-white focus:text-white focus:bg-gray-700 focus:ring-4 focus:ring-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold transition-all outline-none"
>
    &times;

            </button>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <img src={selectedApp.icon} alt="Icono de la aplicación" className="w-24 h-24 rounded-2xl shadow-xl"/>
                <div className="text-center md:text-left w-full">
                    <h3 className="text-4xl font-extrabold mb-2 text-white">{selectedApp.name}</h3>
                    <p className="text-gray-400 mb-4">{selectedApp.publisher}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">{selectedApp.description}</p>
                    
                    {/* --- LÓGICA DE BOTONES DINÁMICOS --- */}
                    <div className="flex flex-col space-y-3">
                        {selectedApp.downloads ? (
                           // Si existen varias opciones (Pack Sensa)
selectedApp.downloads.map((item, index) => (
    <button
        key={index}
        onClick={() => handleDownload({ downloadUrl: item.url, name: item.label })}
        // Añadimos focus:bg-blue-500, focus:ring y focus:scale
        className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 focus:bg-blue-500 focus:ring-4 focus:ring-white focus:scale-105 transition-all duration-300 transform flex justify-between items-center outline-none"
    >
        <span>Descargar {item.label}</span>
        <span className="text-xs bg-black bg-opacity-20 px-2 py-1 rounded-full ml-2">M3U</span>
    </button>
))
                          
                        ) : (
                            // Si es una descarga única (Apps normales)
                           <button
    onClick={() => selectedApp.isAvailable && handleDownload(selectedApp)}
    className={`${
        selectedApp.isAvailable 
        ? 'bg-green-500 hover:bg-green-600 focus:bg-green-400 focus:ring-4 focus:ring-white focus:scale-105' 
        : 'bg-gray-600 cursor-not-allowed'
    } text-white font-bold py-3 px-8 rounded-full transition-all duration-300 outline-none shadow-lg`}
    disabled={!selectedApp.isAvailable}
>
    {selectedApp.isAvailable ? 'DESCARGAR AHORA' : 'No Disponible'}
</button>
                        )}
                    </div>
                    {/* --- FIN LÓGICA --- */}
                </div>
            </div>
        </div>
    </div>
)}
            {/* MODAL: Notificación de Actualización de la App Store */}
            {updateModalVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm flex items-center justify-center p-8 z-50">
                    <div className="bg-purple-900 rounded-3xl p-10 max-w-lg w-full shadow-2xl relative border-4 border-purple-500">
                        <h3 className="text-3xl font-extrabold text-white mb-4 text-center">
                            ¡Nueva Versión Disponible!
                        </h3>
                        <p className="text-gray-200 text-lg mb-6 text-center">
                            Tu versión actual ({appVersion}) está desactualizada.
                        </p>
                        <p className="text-gray-100 text-base leading-relaxed mb-8">
                            {GlobalConfig.updateMessage}
                        </p>
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => handleDownload({downloadUrl: GlobalConfig.updateDownloadUrl, name: "App Store"})}
                                className="bg-green-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                            >
                                Descargar Versión {GlobalConfig.requiredAppVersion}
                            </button>
                            
                            {!GlobalConfig.isForced && (
                                <button
                                    onClick={() => setUpdateModalVisible(false)}
                                    className="bg-gray-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300"
                                >
                                    Más tarde
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* MODAL: Contraseña de Adultos */}
            {showPasswordModal && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-8 z-50">
                    <div className="bg-gray-800 rounded-3xl p-10 max-w-sm w-full shadow-2xl relative border-4 border-red-500">
                        <button
                            onClick={() => setShowPasswordModal(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white text-3xl font-bold"
                        >
                            &times;
                        </button>
                        <h3 className="text-3xl font-extrabold text-red-500 mb-4 text-center">
                            Acceso a Contenido Adulto
                        </h3>
                        <p className="text-gray-300 text-center mb-6">
                            Por favor, introduce la contraseña para continuar.
                        </p>
                        <input
                            type="password"
                            className={`w-full p-4 rounded-xl bg-gray-700 text-white placeholder-gray-400 border-2 ${passwordError ? 'border-red-500' : 'border-gray-600'} focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-150 mb-4`}
                            placeholder="Contraseña..."
                            value={passwordInput}
                            onChange={(e) => {
                                setPasswordInput(e.target.value);
                                setPasswordError(false);
                            }}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') handlePasswordSubmit();
                            }}
                        />
                        {passwordError && (
                            <p className="text-sm text-red-400 mb-4 text-center">Contraseña incorrecta. Intenta de nuevo.</p>
                        )}
                        <button
                            onClick={handlePasswordSubmit}
                            className="w-full bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Desbloquear
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL: Aplicación No Disponible */}
            {unavailableModalVisible && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm flex items-center justify-center p-8 z-50">
                    <div className="bg-red-900 rounded-3xl p-10 max-w-md w-full shadow-2xl relative border-4 border-red-500">
                        <button
                            onClick={() => setUnavailableModalVisible(false)}
                            className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl font-bold"
                        >
                            &times;
                        </button>
                        <h3 className="text-3xl font-extrabold text-white mb-4 text-center">
                            App No Disponible ⚠️
                        </h3>
                        <p className="text-gray-200 text-lg mb-6 text-center">
                            Lamentamos informarte que **{unavailableAppName}** no está disponible para descarga en este momento.
                        </p>
                        <p className="text-gray-300 text-base leading-relaxed mb-8 text-center">
                            Por favor, inténtalo más tarde. Estamos trabajando para reestablecer el servicio.
                        </p>
                        <button
                            onClick={() => setUnavailableModalVisible(false)}
                            autoFocus
                            className="w-full bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// ***************************************************************
// 5. INICIALIZACIÓN DE REACT
// ***************************************************************
const root = createRoot(document.getElementById('root'));

root.render(<App />);
































