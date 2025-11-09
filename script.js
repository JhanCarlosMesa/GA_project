// Comprehensive Game Awards data
const gameAwardsData = [
    // 2014 Game of the Year nominees
    { 
        id: 1, 
        year: 2014, 
        category: "Game of the Year", 
        nominee: "Dragon Age: Inquisition", 
        winner: false, 
        additionalInfo: "Published by Electronic Arts",
        releaseDate: "18 de Noviembre de 2014",
        description: "Cada elección importa mientras luchas para salvar Thedas. Crea a tu héroe, elige sus habilidades y reúne un equipo para erradicar el mal del reino.",
        genre: "RPG",
        platforms: "PC, PS3, PS4, Xbox 360, Xbox One",
        developer: "BioWare",
        publisher: "Electronic Arts",
        imageUrl: "https://gaming-cdn.com/images/products/399/orig/dragon-age-inquisition-pc-juego-origin-cover.jpg?v=1651137991",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 7 SP1, Processor: Intel Core i3-530 @ 2.93GHz, Memory: 6 GB RAM, Graphics: NVIDIA GeForce GTS 450 or AMD Radeon HD 6770, DirectX: Version 11, Storage: 45 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1222690/Dragon_Age_Inquisition/",
            origin: "https://www.origin.com/store/dragon-age/dragon-age-inquisition"
        }
    },
    { 
        id: 2, 
        year: 2014, 
        category: "Game of the Year", 
        nominee: "Bayonetta 2", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "24 Octubre de 2014",
        description: "Bayonetta 2 es un videojuego de acción hack and slash para Wii U y Nintendo Switch, desarrollado por PlatinumGames y publicado por Nintendo. Se caracteriza por su sistema de combate intenso y satisfactorio, protagonizado por la carismática bruja Bayonetta que usa sus poderes para luchar contra ángeles y demonios.",
        genre: "Action",
        platforms: "Wii U, Nintendo Switch",
        developer: "PlatinumGames",
        publisher: "Nintendo",
        imageUrl: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Bayonetta2.jpg",
        price: "$49.99",
        requirements: {
            switch: "Nintendo Switch system"
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/store/products/bayonetta-2-switch/"
        }
    },
    { 
        id: 3, 
        year: 2014, 
        category: "Game of the Year", 
        nominee: "Dark Souls II", 
        winner: false, 
        additionalInfo: "Published by Bandai Namco Games",
        releaseDate: "11 de Marzo de 2014",
        description: "Dark Souls II es un videojuego de rol y acción desarrollado por FromSoftware que continúa la fórmula de dificultad de la saga; ambientado en el decrépito reino de Drangleic. El jugador encarna a un no-muerto maldito que busca una cura para su maldición, viajando por un mundo hostil repleto de enemigos desafiantes y jefes formidables.",
        genre: "Action RPG",
        platforms: "PC, PS3, Xbox 360",
        developer: "FromSoftware",
        publisher: "Bandai Namco Games",
        imageUrl: "https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/dark-souls-ii-file-5146e523.jpeg.webp",
        price: "$29.99",
        requirements: {
            pc: "OS: Windows 7, Processor: Intel Core i5-2400 or AMD FX-6300, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7850, DirectX: Version 11, Storage: 25 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/236430/DARK_SOULS_II/"
        }
    },
    { 
        id: 5, 
        year: 2014, 
        category: "Game of the Year", 
        nominee: "Middle-earth: Shadow of Mordor", 
        winner: false, 
        additionalInfo: "Published by Warner Bros. Interactive Entertainment",
        releaseDate: "29 de Mayo de 2014",
        description: "Middle-earth: Shadow of Mordor es un videojuego de acción y rol en mundo abierto ambientado en la Tierra Media de J.R.R. Tolkien. El jugador controla a Talion, un montaraz cuya familia es asesinada por los sirvientes de Sauron. Este resucita fusionado con el espectro de un elfo llamado Celebrimbor, lo que le otorga poderes sobrehumanos para vengarse de Sauron.",
        genre: "Action Adventure",
        platforms: "PC, PS3, PS4, Xbox 360, Xbox One",
        developer: "Monolith Productions",
        publisher: "Warner Bros. Interactive Entertainment",
        imageUrl: "https://gepig.com/game_cover_460w/2197.jpg",
        price: "$14.99",
        requirements: {
            pc: "OS: Windows Vista/7/8 64-bit, Processor: Intel Core i5-750 or AMD Phenom II X4 965, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 460 or AMD Radeon HD 6850, DirectX: Version 11, Storage: 45 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/241930/Middle-earth_Shadow_of_Mordor/"
        }
    },
    { 
        id: 6, 
        year: 2014, 
        category: "Game of the Year", 
        nominee: "Hearthstone", 
        winner: true, 
        additionalInfo: "Published by Blizzard Entertainment",
        releaseDate: "11 de marzo de 2014",
        description: "Hearthstone es un juego de cartas coleccionables estratégico y gratuito ambientado en el universo de Warcraft. Los jugadores eligen un héroe de clase específica y compiten en duelos por turnos, lanzando hechizos, invocando esbirros y utilizando las habilidades de su héroe para derrotar al oponente.",
        genre: "Card Game",
        platforms: "PC, Mac, iPad, Android, iOS",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        imageUrl: "https://d39zum0jwvcigt.cloudfront.net/_next/static/images/default-4fff3c606c794dc03a915b9071f562d3.jpg",
        price: "Gratis (con compras dentro de la app)",
        requirements: {
            pc: "OS: Windows 7 or later, Processor: Intel Core i3 or AMD Athlon 64 X2, Memory: 2 GB RAM, Graphics: NVIDIA GeForce 8600 GT or AMD Radeon HD 2600 Pro, Storage: 5 GB available space"
        },
        purchaseLinks: {
            battleNet: "https://shop.battle.net/es-es/product/hearthstone"
        }
    },
    { 
        id: 7,
        year: 2015,
        category: "Game of the Year",
        nominee: "Bloodborne", 
        winner: false, 
        additionalInfo: "Published by Sony Computer Entertainment",
        releaseDate: "24 de marzo de 2015",
        description: "Un RPG de acción con ambientación gótica y victoriana, donde encarnas a un cazador que debe explorar la ciudad de Yharnam, enfrentarse a criaturas aberrantes y descubrir el origen de una plaga sanguínea que la consume.",
        genre: "RPG de acción",
        platforms: "PS4",
        developer: "FromSoftware",
        publisher: "Sony Computer Entertainment",
        imageUrl: "https://image.api.playstation.com/vulcan/img/rnd/202010/2614/KKLEVc2SIIgrFVjsZChZJk1d.jpg",
        price: "$19.99",
        requirements: {
            ps4: "PlayStation 4 system"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-CUSA00900_00-BLOODBORNE000000"
        }
    },
    { 
        id: 8, 
        year: 2015, 
        category: "Game of the Year", 
        nominee: "The Witcher 3: Wild Hunt", 
        winner: true, 
        additionalInfo: "Published by CD Projekt",
        releaseDate: "19 de mayo de 2015",
        description: "Un juego de rol de mundo abierto donde interpretas a Geralt de Rivia, un cazador de monstruos en un mundo devastado por la guerra. Ofrece una narrativa expansiva, personajes complejos y cientos de horas de contenido.",
        genre: "RPG",
        platforms: "PC, PS4, Xbox One",
        developer: "CD Projekt RED",
        publisher: "CD Projekt",
        imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2015/01/437490-avance-witcher-3-wild-hunt.png?tf=3840x",
        price: "$39.99",
        requirements: {
            pc: "OS: 64-bit Windows 7, 8.1, 10, Processor: Intel Core i5-2500K 3.3GHz or AMD FX-6300, Memory: 6 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7870, DirectX: Version 11, Storage: 50 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/",
            gog: "https://www.gog.com/game/the_witcher_3_wild_hunt"
        }
    },
    { 
        id: 9, 
        year: 2015, 
        category: "Game of the Year", 
        nominee: "Metal Gear Solid V: The Phantom Pain", 
        winner: false, 
        additionalInfo: "Published by Konami",
        releaseDate: "1 de septiembre de 2015",
        description: "Un juego de acción y sigilo en mundo abierto que concluye la saga Metal Gear. Incluye construcción de bases, espionaje táctico y una narrativa compleja.",
        genre: "Stealth Action",
        platforms: "PC, PS3, PS4, Xbox 360, Xbox One",
        developer: "Kojima Productions",
        publisher: "Konami",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/287700/capsule_616x353.jpg?t=1727849445",
        price: "$29.99",
        requirements: {
            pc: "OS: Windows 7 64-bit, Processor: Intel Core i5-4460 or AMD FX-6300, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7850, DirectX: Version 11, Storage: 50 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/235870/Metal_Gear_Solid_V_The_Phantom_Pain/"
        }
    },
    { 
        id: 10, 
        year: 2015, 
        category: "Game of the Year", 
        nominee: "Fallout 4", 
        winner: false, 
        additionalInfo: "Published by Bethesda Softworks",
        releaseDate: "10 de noviembre de 2015",
        description: "Un RPG de mundo abierto ambientado en un Boston postapocalíptico. Ofrece construcción de asentamientos, sistema de diálogos y exploración de un vasto yermo.",
        genre: "RPG",
        platforms: "PC, PS4, Xbox One",
        developer: "Bethesda Game Studios",
        publisher: "Bethesda Softworks",
        imageUrl: "https://images.ctfassets.net/rporu91m20dc/68gQE4hZur69gIGGV6zHHF/6161d388005eac9ff3cdc8bef1042fe1/FO4_ART_AnniversaryEdition_16x9_GUN_Logo_sjwc8z.png",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-2400 or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 550 Ti or AMD Radeon HD 7870, DirectX: Version 11, Storage: 30 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/377160/Fallout_4/",
            xbox: "https://www.xbox.com/es-co/games/store/fallout-4-game-of-the-year-edition-pc/9p3dbptx98px"
        }
    },
    { 
        id: 11, 
        year: 2015, 
        category: "Game of the Year", 
        nominee: "Super Mario Maker", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "11 de septiembre de 2015",
        description: "Un sistema de creación de juegos que permite a los jugadores diseñar y compartir niveles personalizados de Super Mario. Incluye herramientas para crear, jugar y compartir cursos.",
        genre: "Platformer",
        platforms: "Wii U",
        developer: "Nintendo",
        publisher: "Nintendo",
        imageUrl: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_SuperMarioMaker_v01_image1600w.jpg",
        price: "$59.99",
        requirements: {
            wiiu: "Wii U system"
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/us/store/products/super-mario-maker-2-switch/"
        }
    },
    { 
        id: 12, 
        year: 2016, 
        category: "Game of the Year", 
        nominee: "Titanfall 2", 
        winner: false, 
        additionalInfo: "Published by Electronic Arts",
        releaseDate: "28 de octubre de 2016",
        description: "Un shooter en primera persona con combate de mechas. Combina el control del piloto y del titán con una campaña centrada en el vínculo entre ambos.",
        genre: "First-Person Shooter",
        platforms: "PC, PS4, Xbox One",
        developer: "Respawn Entertainment",
        publisher: "Electronic Arts",
        imageUrl: "https://i.ytimg.com/vi/Q8mIJhqC8Hg/maxresdefault.jpg",
        price: "$29.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-6600 or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 960 or AMD Radeon R9 380, DirectX: Version 11, Storage: 45 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1237970/Titanfall_2/",
            origin: "https://www.origin.com/store/titanfall/titanfall-2"
        }
    },
    { 
        id: 13, 
        year: 2016, 
        category: "Game of the Year", 
        nominee: "Uncharted 4: A Thief's End", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "10 de mayo de 2016",
        description: "La última aventura de Nathan Drake, obligado a regresar al mundo de los ladrones. Combina narrativa cinematográfica, plataformas y disparos en tercera persona.",
        genre: "Action Adventure",
        platforms: "PS4",
        developer: "Naughty Dog",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://www.hd-tecnologia.com/imagenes/articulos/2021/05/Uncharted-4-llegara-a-PC-lo-confirma-Sony-en-una-nueva-presentacion-2.jpg",
        price: "$19.99 en steam y Solo disponible con PS PLUS Extra en Play Station",
        requirements: {
            ps4: "PlayStation 4 system"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-CUSA00341_00-UNCHARTED0000000",
            steam: "https://store.steampowered.com/app/1659420/UNCHARTED_Coleccin_Legado_de_ladrones/"
        }
    },
    { 
        id: 14, 
        year: 2016, 
        category: "Game of the Year", 
        nominee: "Overwatch", 
        winner: true, 
        additionalInfo: "Published by Blizzard Entertainment",
        releaseDate: "24 de mayo de 2016",
        description: "Un shooter multijugador en primera persona basado en equipos con héroes diversos y habilidades únicas. Enfatiza el trabajo en equipo y objetivos cooperativos.",
        genre: "First-Person Shooter",
        platforms: "PC, PS4, Xbox One",
        developer: "Blizzard Entertainment",
        publisher: "Blizzard Entertainment",
        imageUrl: "https://i.blogs.es/d8597b/lineup-standard/1366_2000.jpg",
        price: "Gratis (con compras dentro de la app)",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i3-3225 or AMD FX-4300, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 460 or AMD Radeon HD 4850, DirectX: Version 11, Storage: 50 GB available space"
        },
        purchaseLinks: {
            battleNet: "https://shop.battle.net/es-es/product/overwatch",
            steam: "https://store.steampowered.com/app/2357570/Overwatch_2/"
        }
    },
    { 
        id: 15, 
        year: 2016, 
        category: "Game of the Year", 
        nominee: "Inside", 
        winner: false, 
        additionalInfo: "Published by Playdead",
        releaseDate: "29 de junio de 2016",
        description: "Un juego de plataformas y puzles con una narrativa ambiental mínima. Combina una estética oscura con mecánicas desafiantes y una historia que se descubre a través de la exploración.",
        genre: "Puzzle Platformer",
        platforms: "PC, Xbox One",
        developer: "Playdead",
        publisher: "Playdead",
        imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000005804/d0a1b4fa8c16aebc0283c329c42804b0a6dabc6622cfeb956f2eddb3059576bd",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 7 SP1+, Processor: Intel Core 2 Quad Q6600 or AMD Phenom II X4 940, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 460 or AMD Radeon R7 260, DirectX: Version 11, Storage: 5 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/304430/INSIDE/"
        }
    },
    { 
        id: 16, 
        year: 2016, 
        category: "Game of the Year", 
        nominee: "Firewatch", 
        winner: false, 
        additionalInfo: "Published by Panic",
        releaseDate: "9 de febrero de 2016",
        description: "Un juego de aventura en primera persona sobre un guardabosques llamado Henry en un parque nacional de Wyoming. Combina narrativa conducida por diálogos con exploración visualmente impresionante.",
        genre: "Adventure",
        platforms: "PC, PS4, Xbox One, Nintendo Switch",
        developer: "Campo Santo",
        publisher: "Panic",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/383870/capsule_616x353.jpg?t=1755789801",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 7, Processor: Intel Core i3-2100 or AMD FX-6100, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 560 or AMD Radeon HD 6850, DirectX: Version 11, Storage: 4 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/383870/Firewatch/"
        }
    },
    { 
        id: 17, 
        year: 2017, 
        category: "Game of the Year", 
        nominee: "Horizon: Zero Dawn", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "28 de febrero de 2017",
        description: "Un RPG de acción ambientado en un mundo postapocalíptico donde las máquinas dominan. Juegas como Aloy, una cazadora que busca descubrir su pasado en una tierra de bestias mecánicas.",
        genre: "Action RPG",
        platforms: "PS4, PC",
        developer: "Guerrilla Games",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_wide-2560x1440-bd312be05c49cf339097777c493cb899.jpg",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 10 64-bit, Processor: Intel Core i5-2500K or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 780 or AMD Radeon R9 290, DirectX: Version 12, Storage: 75 GB available space"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-PPSA13428_00-HORIZONREMASTER1",
            steam: "https://store.steampowered.com/app/1151640/Horizon_Zero_Dawn_Complete_Edition/"
        }
    },
    { 
        id: 18, 
        year: 2017, 
        category: "Game of the Year", 
        nominee: "The Legend of Zelda: Breath of the Wild", 
        winner: true, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "3 de marzo de 2017",
        description: "Un juego de acción y aventura en mundo abierto que presenta a Link explorando el reino de Hyrule. Enfatiza la exploración, la física basada en el juego y la libertad de elección.",
        genre: "Action Adventure",
        platforms: "Nintendo Switch, Wii U",
        developer: "Nintendo",
        publisher: "Nintendo",
        imageUrl: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/wiiu_14/SI_WiiU_TheLegendOfZeldaBreathOfTheWild.jpg",
        price: "$59.99",
        requirements: {
            switch: "Nintendo Switch system",
            wiiu: "Wii U system"
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/store/products/the-legend-of-zelda-breath-of-the-wild-switch/"
        }
    },
    { 
        id: 19, 
        year: 2017, 
        category: "Game of the Year", 
        nominee: "Super Mario Odyssey", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "27 de octubre de 2017",
        description: "Un juego de plataformas en 3D que presenta a Mario viajando por varios reinos con su nuevo compañero Cappy. Introduce mecánicas de captura y exploración abierta.",
        genre: "Platformer",
        platforms: "Nintendo Switch",
        developer: "Nintendo",
        publisher: "Nintendo",
        imageUrl: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000001130/c42553b4fd0312c31e70ec7468c6c9bccd739f340152925b9600631f2d29f8b5",
        price: "$59.99",
        requirements: {
            switch: "Nintendo Switch system"
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/store/products/super-mario-odyssey-switch/"
        }
    },
    { 
        id: 20, 
        year: 2017, 
        category: "Game of the Year", 
        nominee: "PlayerUnknown's Battlegrounds", 
        winner: false, 
        additionalInfo: "Published by PUBG Corporation",
        releaseDate: "20 de diciembre de 2017",
        description: "Un shooter battle royale donde 100 jugadores compiten para ser la última persona en pie. Combina estrategia táctica con disparos en primera persona y entornos dinámicos.",
        genre: "Battle Royale",
        platforms: "PC, Xbox One",
        developer: "PUBG Corporation",
        publisher: "PUBG Corporation",
        imageUrl: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2018/06/pubg.jpg?w=1200&h=675&fit=crop",
        price: "$29.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-4430 or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 660 or AMD Radeon HD 7850, DirectX: Version 11, Storage: 30 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/578080/PUBG_BATTLEGROUNDS/"
        }
    },
    { 
        id: 21, 
        year: 2017, 
        category: "Game of the Year", 
        nominee: "Persona 5", 
        winner: false, 
        additionalInfo: "Published by Atlus",
        releaseDate: "4 de abril de 2017",
        description: "Un JRPG donde juegas como un estudiante de secundaria por el día y ladrón fantasma por la noche. Combina simulación social con combate por turnos y una presentación estilizada.",
        genre: "JRPG",
        platforms: "PS3, PS4",
        developer: "Atlus",
        publisher: "Atlus",
        imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000043147/684bd8b00abcbf6dd122727a27c01a337f667bef825f4f4662efad9854b72fd4",
        price: "$59.99",
        requirements: {
            ps4: "PlayStation 4 system"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP2611-CUSA05877_00-PERSONA512345678",
            steam: "https://store.steampowered.com/app/1687950/Persona_5_Royal/"
        }
    },
    { 
        id: 22, 
        year: 2018, 
        category: "Game of the Year", 
        nominee: "God of War", 
        winner: true, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "20 de abril de 2018",
        description: "Una reinvención de la serie God of War que presenta a Kratos y su hijo Atreus en un viaje por la mitología nórdica. Combina combate brutal con narrativa emocional.",
        genre: "Action Adventure",
        platforms: "PS4, PC",
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://i.ytimg.com/vi/ZPeXjt6t0dc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCeVT1hWd_ZOF64b0r8HXqJ9fMrCg",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 10 64-bit, Processor: Intel Core i5-2500K or AMD Ryzen 5 1600X, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 960 or AMD Radeon R9 290, DirectX: Version 11, Storage: 70 GB available space"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-CUSA07408_00-00000000GODOFWAR",
            steam: "https://store.steampowered.com/app/1593500/God_of_War/"
        }
    },
    { 
        id: 23, 
        year: 2018, 
        category: "Game of the Year", 
        nominee: "Monster Hunter: World", 
        winner: false, 
        additionalInfo: "Published by Capcom",
        releaseDate: "26 de enero de 2018",
        description: "Un RPG de caza de acción donde los jugadores rastrean y cazan monstruos masivos. Combina juego cooperativo con personalización de armas y exploración de ecosistemas.",
        genre: "Action RPG",
        platforms: "PS4, Xbox One, PC",
        developer: "Capcom",
        publisher: "Capcom",
        imageUrl: "https://www.planetagaming.com/wp-content/uploads/2017/12/monster-hunter-world-planeta-gaming.png",
        price: "$29.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-4460 or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 760 or AMD Radeon R7 260x, DirectX: Version 11, Storage: 57 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/582010/MONSTER_HUNTER_WORLD/",
            playstation: "https://store.playstation.com/es-co/product/UP0102-CUSA07713_00-0000000000000000"
        }
    },
    { 
        id: 24, 
        year: 2018, 
        category: "Game of the Year", 
        nominee: "Red Dead Redemption 2", 
        winner: false, 
        additionalInfo: "Published by Rockstar Games",
        releaseDate: "26 de octubre de 2018",
        description: "Un juego de acción y aventura épico que sigue a Arthur Morgan en los últimos días del Salvaje Oeste. Combina un mundo abierto inmersivo con narrativa conducida por la historia.",
        genre: "Action Adventure",
        platforms: "PS4, Xbox One, PC",
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        imageUrl: "https://img.hype.games/cdn/015aa2f2-81d5-4b5f-b081-57f344734450Red-Dead-Redemption-2-Cover.jpg",
        price: "$59.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-2500K or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 770 or AMD Radeon R9 290, DirectX: Version 11, Storage: 150 GB available space"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/UP1004-CUSA03041_00-REDEMPTIONFULL02",
            steam: "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/"
        }
    },
    { 
        id: 25, 
        year: 2018, 
        category: "Game of the Year", 
        nominee: "Celeste", 
        winner: false, 
        additionalInfo: "Published by Matt Makes Games",
        releaseDate: "25 de enero de 2018",
        description: "Un juego de plataformas desafiante sobre una joven que escala una montaña. Combina plataformeo preciso con una historia conmovedora sobre la salud mental y la autodescubrimiento.",
        genre: "Platformer",
        platforms: "PC, PS4, Xbox One, Nintendo Switch",
        developer: "Matt Makes Games",
        publisher: "Matt Makes Games",
        imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000006442/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252",
        price: "$19.99",
        requirements: {
            pc: "OS: Windows 7, Processor: Intel Core i3-530 or AMD A4-3400, Memory: 2 GB RAM, Graphics: Intel HD Graphics 4000 or AMD Radeon R5, DirectX: Version 10, Storage: 1 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/504230/Celeste/"
        }
    },
    { 
        id: 26, 
        year: 2018, 
        category: "Game of the Year", 
        nominee: "Marvel's Spider-Man", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "7 de septiembre de 2018",
        description: "Un juego de acción y aventura que presenta a Peter Parker como Spider-Man. Balancea a través de la ciudad de Nueva York mientras lucha contra el crimen y enfrenta villanos icónicos.",
        genre: "Action Adventure",
        platforms: "PS4",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202011/0402/pZ2pIEEnH7YhEtpxh1CY6KDz.png",
        price: "$39.99",
        requirements: {
            ps4: "PlayStation 4 system"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-CUSA02299_00-MARVELSSMGOTY000",
            steam: "https://store.steampowered.com/app/1817070/Marvels_SpiderMan_Remastered/"
        }
    },
    { 
        id: 27, 
        year: 2019, 
        category: "Game of the Year", 
        nominee: "Borderlands 3", 
        winner: false, 
        additionalInfo: "Published by 2K Games",
        releaseDate: "13 de septiembre de 2019",
        description: "Un shooter de botín secuela que presenta cuatro nuevos Cazadores de Vaults. Combina elementos de RPG con disparos caóticos y multijugador cooperativo.",
        genre: "First-Person Shooter",
        platforms: "PC, PS4, Xbox One",
        developer: "Gearbox Software",
        publisher: "2K Games",
        imageUrl: "https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg",
        price: "$59.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-5575R or AMD Ryzen 5 1600, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 1060 or AMD Radeon RX 580, DirectX: Version 11, Storage: 75 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/397540/Borderlands_3/",
            epic: "https://www.epicgames.com/store/es-ES/p/borderlands-3"
        }
    },
    { 
        id: 28, 
        year: 2019, 
        category: "Game of the Year", 
        nominee: "Death Stranding", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "8 de noviembre de 2019",
        description: "Un juego de acción donde juegas como Sam Porter Bridges entregando suministros a través de una América fracturada. Combina mecánicas únicas con la narrativa de Hideo Kojima.",
        genre: "Action",
        platforms: "PS4, PC",
        developer: "Kojima Productions",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://cdn1.epicgames.com/offer/0a9e3c5ab6684506bd624a849ca0cf39/EGS_DeathStrandingDirectorsCut_KOJIMAPRODUCTIONS_S3_2560x1440-fe4e51f1801fba36e452aa3466625789",
        price: "$59.99",
        requirements: {
            pc: "OS: Windows 10 64-bit, Processor: Intel Core i5-3470 or AMD Ryzen 3 1200, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 1050 or AMD Radeon RX 560, DirectX: Version 12, Storage: 80 GB available space"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-cr/product/UP9000-PPSA01969_00-DEATHSTRANDINGUS",
            steam: "https://store.steampowered.com/app/1850570/DEATH_STRANDING_DIRECTORS_CUT/"
        }
    },
    { 
        id: 29, 
        year: 2019, 
        category: "Game of the Year", 
        nominee: "Control", 
        winner: false, 
        additionalInfo: "Published by 505 Games",
        releaseDate: "27 de agosto de 2019",
        description: "Un juego de acción y aventura sobrenatural donde te conviertes en la Directora de la Oficina Federal de Control. Combina poderes psíquicos con entornos cambiantes y misterio.",
        genre: "Action Adventure",
        platforms: "PC, PS4, Xbox One",
        developer: "Remedy Entertainment",
        publisher: "505 Games",
        imageUrl: "https://controlgame.com/wp-content/uploads/2019/03/control_keyart.jpg",
        price: "$39.99",
        requirements: {
            pc: "OS: Windows 7 64-bit, Processor: Intel Core i5-4670 or AMD Ryzen 3 1200, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 780 or AMD Radeon R9 280, DirectX: Version 11, Storage: 35 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/870780/Control_Ultimate_Edition/",
            epic: "https://www.epicgames.com/store/es-ES/p/control"
        }
    },
    { 
        id: 30, 
        year: 2019, 
        category: "Game of the Year", 
        nominee: "Resident Evil 2", 
        winner: false, 
        additionalInfo: "Published by Capcom",
        releaseDate: "25 de enero de 2019",
        description: "Un remake del clásico de 1998 de survival horror. Combina gráficos actualizados con una cámara sobre el hombro y jugabilidad modernizada manteniendo la tensión del original.",
        genre: "Survival Horror",
        platforms: "PC, PS4, Xbox One",
        developer: "Capcom",
        publisher: "Capcom",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/883710/capsule_616x353.jpg?t=1728438541",
        price: "$39.99",
        requirements: {
            pc: "OS: Windows 7/8/10 64-bit, Processor: Intel Core i5-4460 or AMD FX-6300, Memory: 8 GB RAM, Graphics: NVIDIA GeForce GTX 760 or AMD Radeon R7 260x, DirectX: Version 11, Storage: 45 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/883710/Resident_Evil_2/",
            playstation: "https://store.playstation.com/es-cr/product/UP0102-PPSA04288_00-BH2R000000000001"
        }
    },
    { 
        id: 31, 
        year: 2019, 
        category: "Game of the Year", 
        nominee: "Sekiro: Shadows Die Twice", 
        winner: true, 
        additionalInfo: "Published by Activision",
        releaseDate: "22 de marzo de 2019",
        description: "Un juego de acción y aventura samurái ambientado en el Japón feudal. Combina combate preciso con una mecánica única de resurrección y desafiantes batallas contra jefes.",
        genre: "Action Adventure",
        platforms: "PC, PS4, Xbox One",
        developer: "FromSoftware",
        publisher: "Activision",
        imageUrl: "https://gaming-cdn.com/images/products/3520/orig/sekiro-shadows-die-twice-xbox-one-game-microsoft-store-cover.jpg?v=1732117146",
        price: "$59.99",
        requirements: {
            pc: "OS: Windows 7 SP1 or later, Processor: Intel Core i3-2100 or AMD FX-6300, Memory: 4 GB RAM, Graphics: NVIDIA GeForce GTX 760 or AMD Radeon R7 260x, DirectX: Version 11, Storage: 25 GB available space"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/814380/Sekiro_Shadows_Die_Twice/",
            playstation: "https://store.playstation.com/es-cr/product/UP0002-CUSA12047_00-SEKIROGAME000001"
        }
    },
    { 
        id: 32, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "Hades", 
        winner: false, 
        additionalInfo: "Published by Supergiant Games",
        releaseDate: "17 de septiembre de 2020",
        description: "Hades es un videojuego roguelike de acción desarrollado y publicado por Supergiant Games. Los jugadores asumen el papel de Zagreus, hijo de Hades, mientras intenta escapar del inframundo.",
        genre: "Acción, Roguelike",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch",
        developer: "Supergiant Games",
        publisher: "Supergiant Games",
        imageUrl: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/store/software/switch/70010000033131/dbc8c55a21688b446a5c57711b726956483a14ef8c5ddb861f897c0595ccb6b5",
        price: "$24.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Dual Core 2.4 GHz | MEMORIA: 4 GB RAM | GRÁFICOS: NVIDIA GTX 460 / AMD Radeon HD 5770 | ALMACENAMIENTO: 15 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1145360/Hades/?l=spanish",
            epic: "https://store.epicgames.com/es/p/hades"
        }
    },
    { 
        id: 33, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "Ghost of Tsushima", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "17 de julio de 2020",
        description: "Ghost of Tsushima es un juego de acción y aventura en mundo abierto desarrollado por Sucker Punch Productions. Ambientado en el Japón feudal, sigue a Jin Sakai, un samurái que lucha por liberar Tsushima de la invasión mongola.",
        genre: "Acción, Aventura",
        platforms: "PS4, PS5, PC",
        developer: "Sucker Punch Productions",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/https%3A%2F%2Fasmeristationfs.prisasd.com%2Fasmeristation%2Fimagenes%2F20207%2F14%2F20200714154218_1594734286_still.jpg?auth=0a552926df8895e34c638ba1fd047d36f15b5396152e0a1a985bc2dee3ae0efa&width=1472&height=828&smart=true",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-6600 / Ryzen 5 1600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 1060 / AMD RX 580 | ALMACENAMIENTO: 75 GB disponibles | SSD recomendado"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA05030_00-GHOSTDCPS5PSPLUS"
        }
    },
    { 
        id: 34, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "The Last of Us part II", 
        winner: true, 
        additionalInfo: "Published by Naughty Dog",
        releaseDate: "19 de julio de 2020",
        description: "The Last of Us Part II es un videojuego de terror de acción y aventura de disparos en tercera persona de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment.",
        genre: "Action",
        platforms: "PC, PS4, PS5",
        developer: "Naughty Dog",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://locosxlosjuegos.com/wp-content/uploads/2024/01/tlou2-scaled.jpg",
        price: "$49.99",
        requirements: {
            pc: "SO: Windows 10/11 64-bit (version 1909 or higher) PROCESADOR: Intel Core i5-8600, AMD Ryzen 5 3600 MEMORIA: 16 GB de RAM GRÁFICOS: NVIDIA GeForce RTX 3060 AMD Radeon RX 5700 ALMACENAMIENTO: 150 GB de espacio disponible NOTAS ADICIONALES: SSD Required"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2531310/The_Last_of_Us_Parte_II_Remastered/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA10662_00-THELASTOFUSPART2"
        }
    },
    { 
        id: 35, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "Doom Eternal", 
        winner: false, 
        additionalInfo: "Published by Bethesda Softworks",
        releaseDate: "20 de marzo de 2020",
        description: "Doom Eternal es un videojuego de disparos en primera persona desarrollado por id Software. Los jugadores asumen el rol del Doom Slayer en una batalla épica contra las fuerzas del infierno.",
        genre: "Acción, Shooter",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch",
        developer: "id Software",
        publisher: "Bethesda Softworks",
        imageUrl: "https://www.theouterhaven.net/wp-content/uploads/2020/02/doom-eternal-2020-top-625x352-1.jpg",
        price: "$39.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-4430 / AMD Ryzen 3 1200 | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 970 / AMD RX 470 | ALMACENAMIENTO: 50 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/782330/DOOM_Eternal/?l=spanish",
            bethesda: "https://bethesda.net/es/game/doom"
        }
    },
    { 
        id: 36, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "Final Fantasy VII Remake", 
        winner: false, 
        additionalInfo: "Published by Square Enix",
        releaseDate: "10 de abril de 2020",
        description: "Final Fantasy VII Remake es una reinterpretación del clásico JRPG de 1997. Desarrollado y publicado por Square Enix, el juego sigue a Cloud Strife en su lucha contra la corporación Shinra en la ciudad de Midgar.",
        genre: "JRPG, Acción",
        platforms: "PS4, PS5, PC",
        developer: "Square Enix",
        publisher: "Square Enix",
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/4KZ6YMTOXBK2FFAQIQRLEHOXI4.jpg?auth=362088173c81d061f6bb7b1f1694d850d1b2a0e6ac73ebdcb7b73e720c5f4106&width=644&height=362&smart=true",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-3330 / AMD FX-8350 | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 780 / AMD Radeon RX 480 | ALMACENAMIENTO: 100 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1462040/FINAL_FANTASY_VII_REMAKE_INTERGRADE/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP0082-CUSA07211_00-FFVIIREMAKE00000"
        }
    },
    { 
        id: 37, 
        year: 2020, 
        category: "Game of the Year", 
        nominee: "Animal Crossing: New Horizons", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "20 de marzo de 2020",
        description: "Animal Crossing: New Horizons es un simulador de vida desarrollado y publicado por Nintendo. Los jugadores se mudan a una isla desierta y crean su propio paraíso personal junto a personajes adorables.",
        genre: "Simulación, Social",
        platforms: "Nintendo Switch",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        imageUrl: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000027619/9989957eae3a6b545194c42fec2071675c34aadacd65e6b33fdfe7b3b6a86c3a",
        price: "$59.99",
        requirements: {
            pc: "No disponible. Exclusivo de Nintendo Switch."
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/es-cl/store/products/animal-crossing-new-horizons-switch/"
        }
    },
    { 
        id: 38, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "Metroid Dread", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "8 de octubre de 2021",
        description: "Metroid Dread es un videojuego de acción y aventuras en desplazamiento lateral desarrollado por MercurySteam y Nintendo. Samus Aran regresa para enfrentar una nueva amenaza en el misterioso planeta ZDR.",
        genre: "Acción, Aventura, Metroidvania",
        platforms: "Nintendo Switch",
        developer: "MercurySteam, Nintendo EPD",
        publisher: "Nintendo",
        imageUrl: "https://i.ytimg.com/vi/bbSdDDp9CNQ/sddefault.jpg",
        price: "$59.99",
        requirements: {
            pc: "No disponible. Exclusivo de Nintendo Switch."
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/es-cl/store/products/metroid-dread-switch/"
        }
    },
    { 
        id: 39, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "Deathloop", 
        winner: false, 
        additionalInfo: "Published by Bethesda Softworks",
        releaseDate: "14 de septiembre de 2021",
        description: "Deathloop es un shooter en primera persona desarrollado por Arkane Studios. Los jugadores controlan a Colt, atrapado en un bucle temporal donde debe eliminar a ocho objetivos antes de reiniciar el día.",
        genre: "Acción, Shooter, Aventura",
        platforms: "PC, PS5, Xbox Series X/S",
        developer: "Arkane Studios",
        publisher: "Bethesda Softworks",
        imageUrl: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DEATHLOOP_ArkaneStudios_S1_2560x1440-bf6d342edbd2411ccf24e326852fca93",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 5 1600 | MEMORIA: 12 GB RAM | GRÁFICOS: NVIDIA GTX 1060 / AMD RX 580 | ALMACENAMIENTO: 30 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1252330/DEATHLOOP/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP1003-PPSA01302_00-DEATHLOOP0000000"
        }
    },
    { 
        id: 40, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "It Takes Two", 
        winner: true, 
        additionalInfo: "Published by Electronic Arts (EA Originals)",
        releaseDate: "26 de marzo de 2021",
        description: "It Takes Two es un videojuego de aventuras cooperativo desarrollado por Hazelight Studios. Los jugadores asumen el papel de una pareja transformada en muñecos que deben superar obstáculos trabajando juntos.",
        genre: "Aventura, Cooperativo, Plataformas",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch",
        developer: "Hazelight Studios",
        publisher: "Electronic Arts",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1426210/header.jpg?t=1749142249",
        price: "$39.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-6600K / AMD Ryzen 3 1300X | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 660 / AMD R7 260X | ALMACENAMIENTO: 50 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1426210/It_Takes_Two/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP0006-PPSA02342_00-ITTAKESTWORETAIL"
        }
    },
    { 
        id: 41, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "Psychonauts 2", 
        winner: false, 
        additionalInfo: "Published by Xbox Game Studios",
        releaseDate: "25 de agosto de 2021",
        description: "Psychonauts 2 es un juego de plataformas y aventuras desarrollado por Double Fine Productions. Sigue a Razputin Aquato, un joven psíquico que se une a los Psychonauts para desentrañar una conspiración mental.",
        genre: "Aventura, Plataformas",
        platforms: "PC, PS4, Xbox One, Xbox Series X/S",
        developer: "Double Fine Productions",
        publisher: "Xbox Game Studios",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/607080/capsule_616x353.jpg?t=1745521663",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i3-3225 / AMD Phenom II X6 1100T | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 1050 / AMD Radeon RX 560 | ALMACENAMIENTO: 30 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/607080/Psychonauts_2/?l=spanish",
            xbox: "https://www.xbox.com/es-co/games/store/psychonauts-2/9nbr2vxt87sj"
        }
    },
    { 
        id: 42, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "Ratchet & Clank: Rift Apart", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "11 de junio de 2021",
        description: "Ratchet & Clank: Rift Apart es un videojuego de acción y aventuras desarrollado por Insomniac Games. Los jugadores viajan entre dimensiones mientras enfrentan enemigos y descubren nuevos mundos coloridos.",
        genre: "Acción, Aventura, Plataformas",
        platforms: "PS5, PC",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202102/0318/xExpA5z9v78FGcO0PIPLtDxK.jpg",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i3-8100 / AMD Ryzen 3 3100 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2060 / AMD RX 5700 | ALMACENAMIENTO: 75 GB disponibles | SSD obligatorio"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1895880/Ratchet__Clank_Rift_Apart/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA01473_00-RIFTDIGITALDELUX"
        }
    },
    { 
        id: 43, 
        year: 2021, 
        category: "Game of the Year", 
        nominee: "Resident Evil Village", 
        winner: false, 
        additionalInfo: "Published by Capcom",
        releaseDate: "7 de mayo de 2021",
        description: "Resident Evil Village es un juego de terror y supervivencia desarrollado y publicado por Capcom. Ethan Winters regresa para enfrentar horrores sobrenaturales en una aldea remota plagada de misterios.",
        genre: "Terror, Supervivencia, Aventura",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
        developer: "Capcom",
        publisher: "Capcom",
        imageUrl: "https://www.residentevil.com/village/assets/images/common/share.png",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-7500 / AMD Ryzen 3 1200 | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 1050 Ti / AMD Radeon RX 560 | ALMACENAMIENTO: 50 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP0102-PPSA01556_00-VILLAGEFULLGAMEX"
        }
    },
    { 
        id: 44, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "A Plague Tale: Requiem", 
        winner: false, 
        additionalInfo: "Published by Focus Entertainment",
        releaseDate: "18 de octubre de 2022",
        description: "A Plague Tale: Requiem es un videojuego de acción y aventura desarrollado por Asobo Studio. Continúa la historia de Amicia y Hugo mientras huyen de la Inquisición y enfrentan la plaga de ratas que azota al mundo.",
        genre: "Aventura, Sigilo, Acción",
        platforms: "PC, PS5, Xbox Series X/S, Nintendo Switch (cloud)",
        developer: "Asobo Studio",
        publisher: "Focus Entertainment",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1182900/capsule_616x353.jpg?t=1761846087",
        price: "$49.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-4690K / AMD FX-8300 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 970 / AMD RX 590 | ALMACENAMIENTO: 55 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1182900/A_Plague_Tale_Requiem/?l=spanish",
            xbox: "https://www.xbox.com/es-co/games/store/a-plague-tale-requiem/9nd0jvb184xl"
        }
    },
    { 
        id: 45, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "God of War: Ragnarök", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "9 de noviembre de 2022",
        description: "God of War: Ragnarök es un videojuego de acción y aventuras desarrollado por Santa Monica Studio. Kratos y su hijo Atreus enfrentan el fin de los tiempos en la mitología nórdica mientras buscan su destino.",
        genre: "Acción, Aventura",
        platforms: "PS4, PS5",
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2322010/extras/INT9_PC_KeyArt-MotionGraphic.gif?t=1717117701",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 3 3300X | MEMORIA: 12 GB RAM | GRÁFICOS: NVIDIA GTX 1060 / AMD RX 580 | ALMACENAMIENTO: 60 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2322010/God_of_War_Ragnark",
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA08329_00-GOWRAGNAROK00000"
        }
    },
    { 
        id: 46, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "Horizon Forbidden West", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "18 de febrero de 2022",
        description: "Horizon Forbidden West es un juego de acción y aventuras en mundo abierto desarrollado por Guerrilla Games. Aloy viaja al Oeste Prohibido para descubrir los secretos detrás de una misteriosa plaga que amenaza a la humanidad.",
        genre: "Acción, Aventura, Mundo abierto",
        platforms: "PS4, PS5, PC",
        developer: "Guerrilla Games",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://culturageek.com.ar/wp-content/uploads/2021/09/Horizon-Forbidden-West-Cultura-Geek-1.jpg",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 5 1500X | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2060 / AMD RX 5600 | ALMACENAMIENTO: 100 GB disponibles | SSD recomendado"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2420110/Horizon_Forbidden_West_Complete_Edition/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA04072_00-FORBIDDENWESTPS5"
        }
    },
    { 
        id: 47, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "Stray", 
        winner: false, 
        additionalInfo: "Published by Annapurna Interactive",
        releaseDate: "19 de julio de 2022",
        description: "Stray es una aventura en tercera persona desarrollada por BlueTwelve Studio. Los jugadores controlan a un gato callejero que debe sobrevivir y escapar de una ciudad futurista habitada por robots.",
        genre: "Aventura, Exploración, Ciencia ficción",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
        developer: "BlueTwelve Studio",
        publisher: "Annapurna Interactive",
        imageUrl: "https://prod.assets.earlygamecdn.com/images/Stray1A.jpg?transform=Banner+Webp",
        price: "$29.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 5 2600 | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 650 Ti / AMD Radeon R7 360 | ALMACENAMIENTO: 10 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1332010/Stray/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP2470-PPSA02100_00-STRAYSIEA0000000"
        }
    },
    { 
        id: 48, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "Elden Ring", 
        winner: true, 
        additionalInfo: "Published by Bandai Namco Entertainment",
        releaseDate: "25 de febrero de 2022",
        description: "Elden Ring es un videojuego de rol de acción desarrollado por FromSoftware y publicado por Bandai Namco. Ambientado en un vasto mundo abierto, los jugadores exploran las Tierras Intermedias mientras enfrentan enemigos poderosos y descubren secretos antiguos.",
        genre: "RPG, Acción, Mundo abierto",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
        developer: "FromSoftware",
        publisher: "Bandai Namco Entertainment",
        imageUrl: "https://i.blogs.es/c0b150/1024_2000/450_1000.jpeg",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 3 3300X | MEMORIA: 12 GB RAM | GRÁFICOS: NVIDIA GTX 1060 / AMD RX 580 | ALMACENAMIENTO: 60 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1245620/ELDEN_RING/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP0700-PPSA04610_00-ELDENRING0000000"
        }
    },
    { 
        id: 49, 
        year: 2022, 
        category: "Game of the Year", 
        nominee: "Xenoblade Chronicles 3", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "29 de julio de 2022",
        description: "Xenoblade Chronicles 3 es un JRPG desarrollado por Monolith Soft. La historia sigue a dos naciones enfrentadas en un vasto mundo abierto, donde seis personajes deben unir fuerzas para cambiar su destino.",
        genre: "RPG, Aventura, Mundo abierto",
        platforms: "Nintendo Switch",
        developer: "Monolith Soft",
        publisher: "Nintendo",
        imageUrl: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000053336/e933b48650b33b355e9cf2583da5c94b77180e40fb02d050041083dd62f4df39",
        price: "$59.99",
        requirements: {
            pc: "No disponible. Exclusivo de Nintendo Switch."
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/es-cl/store/products/xenoblade-chronicles-3-switch/"
        }
    },
    { 
        id: 50, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "Resident Evil 4 (Remake)", 
        winner: false, 
        additionalInfo: "Published by Capcom",
        releaseDate: "24 de marzo de 2023",
        description: "Resident Evil 4 Remake es una reinvención moderna del clásico de 2005. Desarrollado por Capcom, sigue al agente Leon S. Kennedy en su misión para rescatar a la hija del presidente en una aldea infectada.",
        genre: "Acción, Terror, Supervivencia",
        platforms: "PC, PS4, PS5, Xbox Series X/S",
        developer: "Capcom",
        publisher: "Capcom",
        imageUrl: "https://juegosdigitalescolombia.com/files/images/noticias/1655577151-6.jpg",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i7-8700 / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 1070 / AMD RX 5700 | ALMACENAMIENTO: 67 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2050650/Resident_Evil_4/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP0102-PPSA07411_00-RE4RMAINGAME0000"
        }
    },
    { 
        id: 51, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "Alan Wake 2", 
        winner: false, 
        additionalInfo: "Published by Epic Games Publishing",
        releaseDate: "27 de octubre de 2023",
        description: "Alan Wake 2 es un videojuego de terror psicológico y supervivencia desarrollado por Remedy Entertainment. La historia sigue a dos protagonistas atrapados entre la realidad y el terror de un mundo oscuro y distorsionado.",
        genre: "Terror, Supervivencia, Aventura",
        platforms: "PC, PS5, Xbox Series X/S",
        developer: "Remedy Entertainment",
        publisher: "Epic Games Publishing",
        imageUrl: "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S1_2560x1440-ec44404c0b41bc457cb94cd72cf85872",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel i5-7600K / AMD Ryzen 5 1600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2060 / AMD RX 6600 | ALMACENAMIENTO: 90 GB SSD requerido"
        },
        purchaseLinks: {
            epic: "https://store.epicgames.com/es/p/alan-wake-2",
            xbox: "https://www.xbox.com/es-co/games/store/alan-wake-2/9pnzh065x7pv"
        }
    },
    { 
        id: 52, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "Marvel’s Spider-Man 2", 
        winner: false, 
        additionalInfo: "Published by Sony Interactive Entertainment",
        releaseDate: "20 de octubre de   2023",
        description: "Marvel’s Spider-Man 2 es un videojuego de acción y aventuras desarrollado por Insomniac Games. Peter Parker y Miles Morales enfrentan nuevas amenazas en una historia que explora el poder, la responsabilidad y la dualidad del héroe.",
        genre: "Acción, Aventura, Superhéroes",
        platforms: "PS5",
        developer: "Insomniac Games",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/spider-man-2-keyart-01-en-7june24?$facebook$",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10/11 (version 1909 or higher) PROCESADOR: Intel Core i5-8400 or AMD Ryzen 5 3600 MEMORIA: 16 GB de RAM GRÁFICOS: NVIDIA GeForce RTX 3060 or AMD Radeon RX 5700 ALMACENAMIENTO: 140 GB de espacio disponible NOTAS ADICIONALES: SSD Required"
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA03016_00-MARVELSPIDERMAN2",
            steam: "https://store.steampowered.com/app/2651280/Marvels_SpiderMan_2/"
        }
    },
    { 
        id: 53, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "Baldur’s Gate 3", 
        winner: true, 
        additionalInfo: "Published by Larian Studios",
        releaseDate: "3 de agosto de 2023 (PC) / 6 de septiembre de 2023 (PS5)",
        description: "Baldur’s Gate 3 es un RPG táctico desarrollado y publicado por Larian Studios. Basado en las reglas de Dungeons & Dragons, permite a los jugadores crear su propio personaje y emprender una épica aventura de decisiones y consecuencias.",
        genre: "RPG, Estrategia, Fantasía",
        platforms: "PC, PS5, Xbox Series X/S, macOS",
        developer: "Larian Studios",
        publisher: "Larian Studios",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1086940/59827b3d0abf2f29adacfe72fdfd11059d6974e2/capsule_616x353.jpg?t=1759825106",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel i7-8700K / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 2060 Super / AMD RX 5700 XT | ALMACENAMIENTO: 150 GB SSD requerido"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1086940/Baldurs_Gate_3/?l=spanish",
            playstation: "https://store.playstation.com/es-co/product/UP3526-PPSA14001_00-0507384846053057"
        }
    },
    { 
        id: 54, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "Super Mario Bros. Wonder", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "20 de octubre de 2023",
        description: "Super Mario Bros. Wonder es un juego de plataformas en 2D desarrollado y publicado por Nintendo. Presenta un nuevo estilo visual, habilidades sorprendentes y mecánicas que transforman radicalmente los niveles.",
        genre: "Plataformas, Aventura, Familiar",
        platforms: "Nintendo Switch",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        imageUrl: "https://media.vandal.net/i/1280x720/10-2023/20231016832474_1.jpg",
        price: "$59.99",
        requirements: {
            pc: "No disponible. Exclusivo de Nintendo Switch."
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/es-cl/store/products/super-mario-bros-wonder-switch/"
        }
    },
    { 
        id: 55, 
        year: 2023, 
        category: "Game of the Year", 
        nominee: "The Legend of Zelda: Tears of the Kingdom", 
        winner: false, 
        additionalInfo: "Published by Nintendo",
        releaseDate: "12 de mayo de 2023",
        description: "The Legend of Zelda: Tears of the Kingdom es un juego de acción y aventuras desarrollado por Nintendo. Link regresa para explorar un vasto mundo que se extiende tanto en la superficie como en los cielos de Hyrule.",
        genre: "Acción, Aventura, Mundo abierto",
        platforms: "Nintendo Switch",
        developer: "Nintendo EPD",
        publisher: "Nintendo",
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/UN7EWUQBDJCKXFY347M7APJBRI.jpg?auth=9bbf5b605601f98a161d810fa4a40fe3f7761a39e82b96fa31147b7c2a837e7a&width=644&height=362&smart=true",
        price: "$69.99",
        requirements: {
            pc: "No disponible. Exclusivo de Nintendo Switch."
        },
        purchaseLinks: {
            nintendo: "https://www.nintendo.com/es-cl/store/products/the-legend-of-zelda-tears-of-the-kingdom-switch/"
        }
    },
    { 
        id: 56, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Final Fantasy VII Rebirth", 
        winner: false, 
        additionalInfo: "Published by Square Enix", 
        releaseDate: "29 de febrero de 2024", 
        description: "Final Fantasy VII Rebirth es un JRPG desarrollado por Square Enix. Continúa la historia reformulada de Cloud Strife y compañía, con nuevos entornos, mecánicas ampliadas y narrativa emocionalmente cargada.", 
        genre: "JRPG, Acción, Aventura", 
        platforms: "PS5, PC", 
        developer: "Square Enix", 
        publisher: "Square Enix", 
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/UDSICW5LJRDRTA6X4PG3FH3T64.jpg?auth=da022ed3eef539abbd48865720b51e8cebe3ef04ac33b7f86737f07a18b81a57&width=1472&height=828&smart=true", 
        price: "$69.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-10400 / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 1660 SUPER / AMD RX 5800 XT | ALMACENAMIENTO: 120 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2909400/FINAL_FANTASY_VII_REBIRTH/",
            playstation: "https://store.playstation.com/es-co/product/UP0082-PPSA08666_00-0783148264580163"
        }
    },
    { 
        id: 57, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Balatro", 
        winner: false, 
        additionalInfo: "Published by Playstack", 
        releaseDate: "22 de febrero de 2024", 
        description: "Balatro es un roguelike de construcción de mazos desarrollado por LocalThunk. Un juego independiente donde el jugador explora un barco-casino turístico lleno de misterios y peligros mientras personaliza su mazo y toma decisiones drásticas.", 
        genre: "Roguelike, Estrategia, Cartas", 
        platforms: "PC, Nintendo Switch, PS5, Xbox Series X/S", 
        developer: "LocalThunk", 
        publisher: "Playstack", 
        imageUrl: "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_1240/b_white/f_auto/q_auto/store/software/switch/70010000072051/a7baf09e1da434bae373120750e39cb7d134c116ca8a4b81bc07666ecab9b326", 
        price: "$24.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i3-8100 / AMD Ryzen 3 1200 | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 1050 / AMD RX 560 | ALMACENAMIENTO: 12 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2379780/Balatro/"
        }
    },
    { 
        id: 58, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Black Myth: Wukong", 
        winner: false, 
        additionalInfo: "Published by Game Science", 
        releaseDate: "22 de agosto de 2024", 
        description: "Black Myth: Wukong es un juego de acción-aventura desarrollado por Game Science. Basado libremente en la mitología del Rey Mono, combina combates dinámicos, mundo abierto y narrativa épica desde una perspectiva oriental.", 
        genre: "Acción, Aventura, Mundo abierto", 
        platforms: "PC, PS5, Xbox Series X/S", 
        developer: "Game Science", 
        publisher: "Game Science", 
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2358720/f40ef565c380c617020e559b4b4b089edd93ec09/capsule_616x353.jpg?t=1760601605", 
        price: "$59.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-11400 / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2070 / AMD RX 6700 XT | ALMACENAMIENTO: 70 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2358720/Black_Myth_Wukong/",
            playstation: "https://store.playstation.com/es-co/product/HP6545-PPSA23226_00-GAME000000000000"
        }
    },
    { 
        id: 59, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Elden Ring: Shadow of the Erdtree", 
        winner: false, 
        additionalInfo: "Published by Bandai Namco Entertainment", 
        releaseDate: "21 de junio de 2024", 
        description: "Elden Ring: Shadow of the Erdtree es una expansión del aclamado juego Elden Ring, desarrollada por FromSoftware. Amplía el mundo y la narrativa original, introduciendo nuevos jefes, zonas gigantes y retos adicionales.", 
        genre: "RPG, Acción, Mundo abierto", 
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S", 
        developer: "FromSoftware", 
        publisher: "Bandai Namco Entertainment", 
        imageUrl: "https://phantom.estaticos-marca.com/98af986dec93441a55f04cb053c2c895/resize/1200/f/webp/assets/multimedia/imagenes/2024/02/21/17085337828130.jpg", 
        price: "$49.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i7-8700K / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2070 / AMD RX 6700 XT | ALMACENAMIENTO: 50 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2778580/ELDEN_RING_Shadow_of_the_Erdtree/",
            playstation: "https://store.playstation.com/es-co/product/UP0700-PPSA04610_00-ELDENRINGDLC0000"
        }
    },
    { 
        id: 60, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Astro Bot", 
        winner: true, 
        additionalInfo: "Published by Sony Interactive Entertainment", 
        releaseDate: "10 de septiembre de 2024", 
        description: "Astro Bot es un videojuego de plataformas desarrollado por Team Asobi. Una aventura luminosa que combina nostalgia de plataformas clásicas con diseño moderno, donde Astro debe rescatar a su tripulación en diversos escenarios creativos.", 
        genre: "Plataformas, Aventura", 
        platforms: "PS5", 
        developer: "Team Asobi", 
        publisher: "Sony Interactive Entertainment", 
        imageUrl: "https://media.vandal.net/master/9-2024/20249412582560_1.jpg", 
        price: "$59.99", 
        requirements: {
            pc: "(Solo disponible para PS5."
        }, 
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA21564_00-0000000000000000"
        }
    },
    { 
        id: 61, 
        year: 2024, 
        category: "Game of the Year", 
        nominee: "Metaphor: ReFantazio", 
        winner: false, 
        additionalInfo: "Published by Sega", 
        releaseDate: "14 de noviembre de 2024", 
        description: "Metaphor: ReFantazio es un JRPG desarrollado por Studio Zero y publicado por Sega. Un viaje fantástico lleno de magia, criaturas y giros narrativos, combinando combate táctico con exploración profunda.", 
        genre: "RPG, Aventura, Fantasía", 
        platforms: "PS5, PS4, Xbox Series X/S, PC", 
        developer: "Studio Zero", 
        publisher: "Sega", 
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2679460/capsule_616x353.jpg?t=1759872361", 
        price: "$59.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-9400 / AMD Ryzen 5 3500 | MEMORIA: 12 GB RAM | GRÁFICOS: NVIDIA GTX 1060 6GB / AMD RX 580 | ALMACENAMIENTO: 60 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2679460/Metaphor_ReFantazio/",
            playstation: "https://store.playstation.com/es-co/product/UP0177-PPSA20800_00-METAPHORNA000001"
        }
    },
    { 
        id: 62, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Clair Obscur: Expedition 33", 
        winner: false, 
        additionalInfo: "Publicado por Sandfall Interactive", 
        releaseDate: "24 de abril de 2025", 
        description: "Clair Obscur: Expedition 33 es un RPG por turnos ambientado en una estética Belle Époque/tragedia teatral, donde una expedición número 33 debe confrontar un mal antiguo en un mundo marcado por la desaparición de personas al envejecer.", 
        genre: "RPG, Turn-based, Fantasía", 
        platforms: "PC, PS5, Xbox Series X/S", 
        developer: "Sandfall Interactive", 
        publisher: "Sandfall Interactive", 
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/eccd7fa054e32bed3213fb92f6089bebd9978215/capsule_616x353.jpg?t=1761303074", 
        price: "$49.99", 
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel Core i5-8400 / AMD Ryzen 5 2600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA GTX 1060 / AMD RX 580 | ALMACENAMIENTO: 60 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
            playstation: "https://store.playstation.com/es-co/product/EP7579-PPSA17599_00-EXP33000000PS5EU"
        }
    },
    { 
        id: 63, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Blue Prince", 
        winner: false, 
        additionalInfo: "Publicado por Playstack", 
        releaseDate: "10 de abril de 2025", 
        description: "Blue Prince es un juego indie de puzles narrativo‐exploratorio ambientado en una mansión que cambia con cada visita. Ha recibido críticas muy positivas y ya se le considera “contendor serio” para GOTY 2025. :contentReference[oaicite:2]{index=2}", 
        genre: "Puzles, Aventura", 
        platforms: "PC, PS5, Nintendo Switch", 
        developer: "Tonda Ros (estudio independiente)", 
        publisher: "Playstack", 
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1569580/header.jpg?t=1761029739", 
        price: "$29.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i3 / AMD equivalent | MEMORIA: 8 GB RAM | GRÁFICOS: NVIDIA GTX 1050 / AMD RX 560 | ALMACENAMIENTO: 20 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1569580/Blue_Prince/"
        }
    },
    { 
        id: 64, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Hades II", 
        winner: false, 
        additionalInfo: "Publicado por Supergiant Games", 
        releaseDate: "25 de septiembre de 2025", 
        description: "Hades II es la esperada secuela del aclamado Hades (2020). Si bien estuvo en acceso anticipado, su lanzamiento completo en 2025 lo posiciona como fuerte candidato. :contentReference[oaicite:4]{index=4}", 
        genre: "Acción, Roguelike", 
        platforms: "PC, Nintendo Switch", 
        developer: "Supergiant Games", 
        publisher: "Supergiant Games", 
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1145350/91ac334a2c137d08968ccc0bc474a02579602100/header.jpg?t=1759973532", 
        price: "$39.99", 
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel Core i5 / AMD Ryzen 5 | MEMORIA: 8-16 GB RAM | GRÁFICOS: NVIDIA GTX 970 / AMD RX 470 | ALMACENAMIENTO: 25 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1145350/Hades_II/"
        }
    },
    { 
        id: 65, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Ghost of Yōtei", 
        winner: false, 
        additionalInfo: "Publicado por Sony Interactive Entertainment", 
        releaseDate: "2 de octubre de 2025", 
        description: "Ghost of Yōtei es un juego de acción desarrollado por Sucker Punch Productions para PS5, muy anticipado y con fuerte pre-venta. Su estatus lo coloca entre los contendores principales para GOTY. :contentReference[oaicite:7]{index=7}", 
        genre: "Acción, Aventura, Mundo abierto", 
        platforms: "PS5", 
        developer: "Sucker Punch Productions", 
        publisher: "Sony Interactive Entertainment", 
        imageUrl: "https://img.asmedia.epimg.net/resizer/v2/OZB6GFPF2NAOHORZATT65WXTDU.jpg?auth=e53ea48ba7e43e62ae4da6abab9a8079e3a5c2b333a5f56220b91e161ec294ba&width=1472&height=828&smart=true", 
        price: "$69.99", 
        requirements: {
            pc: "No aplica – exclusivo PS5"
        }, 
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA26344_00-GHOST2SHIP000000"
        }
    },
    { 
        id: 66, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "The Outer Worlds 2", 
        winner: false, 
        additionalInfo: "Publicado por Xbox Game Studios", 
        releaseDate: "29 de Octubre de 2025", 
        description: "The Outer Worlds 2 es el esperado RPG de Obsidian Entertainment, secuela del título de 2019. Debido a su gran presupuesto y expectativas, es mencionado frecuentemente entre los contendores de GOTY 2025. :contentReference[oaicite:10]{index=10}", 
        genre: "RPG de acción, Ciencia ficción", 
        platforms: "PC, PS5, Xbox Series X/S", 
        developer: "Obsidian Entertainment", 
        publisher: "Xbox Game Studios", 
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1449110/fe273e39cbaf4997d1c8e53879800f07dba0ee03/header.jpg?t=1761760147", 
        price: "$59.99", 
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel Core i5-11400 / AMD Ryzen 5 3600 | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 2060 / AMD RX 6600 | ALMACENAMIENTO: 70 GB SSD requerido"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1449110/The_Outer_Worlds_2/"
        }
    },
    { 
        id: 67, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Kingdom Come: Deliverance II", 
        winner: false, 
        additionalInfo: "Publicado por Deep Silver", 
        releaseDate: "4 de febrero de 2025", 
        description: "Kingdom Come: Deliverance II es la secuela directa del aclamado RPG medieval de Warhorse Studios. Retoma la historia de Henry en un mundo abierto más grande, con mejoras visuales, mayor realismo y un sistema de combate renovado.", 
        genre: "RPG, Mundo abierto, Aventura", 
        platforms: "PC, PS5, Xbox Series X/S", 
        developer: "Warhorse Studios", 
        publisher: "Deep Silver", 
        imageUrl: "https://www.notebookcheck.org/fileadmin/_processed_/3/2/csm_Kingdom-Come-Deliverance-II-Release-Kritik_ebf20fa006.jpg", 
        price: "$69.99", 
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel Core i7-8700K / AMD Ryzen 5 5600X | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 3060 Ti / AMD RX 6700 XT | ALMACENAMIENTO: 100 GB SSD requerido"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/",
            playstation: "https://store.playstation.com/es-co/product/UP2047-PPSA21705_00-KCD2MAINGAMEDSUS"
        }
    },
    { 
        id: 68, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Death Stranding 2: On the Beach", 
        winner: false, 
        additionalInfo: "Publicado por Sony Interactive Entertainment", 
        releaseDate: "26 de junio de 2025", 
        description: "Death Stranding 2: On the Beach es la secuela del innovador título de Hideo Kojima. Promete una historia aún más profunda, protagonizada nuevamente por Norman Reedus, Léa Seydoux y Elle Fanning, con un enfoque ampliado en la conexión humana y el entorno.", 
        genre: "Acción, Aventura, Ciencia ficción", 
        platforms: "PS5 (lanzamiento inicial), PC (posterior)", 
        developer: "Kojima Productions", 
        publisher: "Sony Interactive Entertainment", 
        imageUrl: "https://www.gamerfocus.co/wp-content/uploads/2025/03/Death-Stranding-2-On-the-Beach-se-han-filtrado-el-precio-y-las-ediciones-de-coleccion.jpg", 
        price: "$69.99", 
        requirements: {
            pc: "SO: Windows 10/11 64-bit | PROCESADOR: Intel Core i7-9700K / AMD Ryzen 7 5800X | MEMORIA: 16 GB RAM | GRÁFICOS: NVIDIA RTX 3070 / AMD RX 6800 | ALMACENAMIENTO: 90 GB SSD requerido"
        }, 
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/JP9000-PPSA02015_00-DS2OTB0000000001"
        }
    },
    { 
        id: 69, 
        year: 2025, 
        category: "Posibles nominados a GOTY", 
        nominee: "Split Fiction", 
        winner: false, 
        additionalInfo: "Publicado por Focus Entertainment", 
        releaseDate: "6 de marzo de 2025", 
        description: "Split Fiction es un thriller narrativo y de acción ambientado en una realidad dividida entre dos líneas temporales. Mezcla mecánicas cinematográficas con decisiones que alteran la historia, lo que lo ha posicionado como uno de los indies más esperados de 2025.", 
        genre: "Aventura narrativa, Thriller, Ciencia ficción", 
        platforms: "PC, PS5, Xbox Series X/S", 
        developer: "Dual Frame Studio", 
        publisher: "Focus Entertainment", 
        imageUrl: "https://videogamesplus.ca/cdn/shop/files/15scrmax6_-_2024-12-18T104703.888_1197x700.jpg?v=1734537477", 
        price: "$39.99", 
        requirements: {
            pc: "SO: Windows 10 64-bit | PROCESADOR: Intel Core i5-10400 / AMD Ryzen 5 3600 | MEMORIA: 12 GB RAM | GRÁFICOS: NVIDIA GTX 1660 SUPER / AMD RX 6600 | ALMACENAMIENTO: 40 GB disponibles"
        }, 
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2001120/Split_Fiction/",
            playstation: "https://store.playstation.com/es-co/product/UP0006-PPSA08560_00-SPLITSTANDARDED0"
        }
    },
    { 
        id: 70,
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Hollow Knight", 
        winner: false, 
        additionalInfo: "Publicado por Team Cherry",
        releaseDate: "24 de febrero de 2017",
        description: "Hollow Knight es un videojuego de acción y aventura tipo metroidvania desarrollado y publicado por Team Cherry. Los jugadores exploran el vasto reino subterráneo de Hallownest mientras descubren secretos y enfrentan desafiantes enemigos.",
        genre: "Metroidvania",
        platforms: "PC, PS4, Xbox One, Nintendo Switch",
        developer: "Team Cherry",
        publisher: "Team Cherry",
        imageUrl: "https://gaming-cdn.com/images/products/2198/orig/hollow-knight-pc-mac-steam-cover.jpg?v=1755854893",
        price: "$14.99",
        requirements: {
            pc: "SO: Windows 7 o superior PROCESADOR: Intel Core 2 Duo E5200 MEMORIA: 4 GB de RAM GRÁFICOS: GeForce 9800GTX+ o equivalente ALMACENAMIENTO: 9 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/367520/Hollow_Knight/",
            playstation: "https://store.playstation.com/es-co/product/UP1822-CUSA13632_00-HOLLOWKNIGHT18US"
        }
    },

    { 
        id: 71, 
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Hollow Knight: Silksong", 
        winner: false, 
        additionalInfo: "Publicado por Team Cherry",
        releaseDate: "4 de septiembre de 2025",
        description: "Hollow Knight: Silksong es la esperada secuela del aclamado metroidvania de Team Cherry. Los jugadores controlan a Hornet en una nueva tierra llena de enemigos, ciudades y desafíos acrobáticos.",
        genre: "Metroidvania",
        platforms: "PC, PS4, PS5, Xbox Series X/S, Nintendo Switch",
        developer: "Team Cherry",
        publisher: "Team Cherry",
        imageUrl: "https://assets.nintendo.com/image/upload/q_auto/f_auto/store/software/switch/70010000020840/60eebc8f7133f685eddbffbe43c8da617ba0a5d699f2008f9c31c6119d1792af",
        price: "$14.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: Intel Core i5 MEMORIA: 8 GB de RAM GRÁFICOS: NVIDIA GTX 960 o superior ALMACENAMIENTO: 20 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
            playstation: "https://store.playstation.com/es-co/product/EP1805-PPSA12544_00-HKSILKSONGPS5000"
        }
    },

    { 
        id: 72,
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Cuphead", 
        winner: false, 
        additionalInfo: "Publicado por Studio MDHR",
        releaseDate: "29 de septiembre de 2017",
        description: "Cuphead es un videojuego de acción y plataformas con estilo de animación inspirado en los años 30. Los jugadores controlan a Cuphead o Mugman mientras enfrentan difíciles jefes y desafíos de disparos.",
        genre: "Acción / Plataformas",
        platforms: "PC, Xbox One, PS4, Nintendo Switch",
        developer: "Studio MDHR",
        publisher: "Studio MDHR",
        imageUrl: "https://gmedia.playstation.com/is/image/SIEPDC/cuphead-keyart-01-en-15dec21?$native$",
        price: "$19.99",
        requirements: {
            pc: "SO: Windows 10 PROCESADOR: Intel Core2 Duo E8400 MEMORIA: 4 GB de RAM GRÁFICOS: Geforce 9600 GT o superior ALMACENAMIENTO: 20 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/268910/Cuphead/",
            playstation: "https://store.playstation.com/es-co/product/UP8062-CUSA20499_00-CUPHEAD000000000"
        }
    },

    { 
        id: 73,
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Undertale", 
        winner: false, 
        additionalInfo: "Publicado por tobyfox",
        releaseDate: "15 de septiembre de 2015",
        description: "Undertale es un juego de rol donde tus decisiones importan. Puedes luchar o ser amable con los enemigos, influenciando el desenlace de la historia en el subterráneo habitado por monstruos.",
        genre: "RPG / Indie",
        platforms: "PC, PS4, PS5, Nintendo Switch",
        developer: "Toby Fox",
        publisher: "Toby Fox",
        imageUrl: "https://fotografias-neox.atresmedia.com/clipping/cmsimages02/2016/05/20/2D2D6AEA-7471-4616-A4F2-E1EE5CDCFFA0/98.jpg?crop=1920,1080,x0,y0&width=1900&height=1069&optimize=high&format=webply",
        price: "$9.99",
        requirements: {
            pc: "SO: Windows XP, Vista, 7, 8, o 10 PROCESADOR: 2GHz+ MEMORIA: 3 GB de RAM GRÁFICOS: Integrados ALMACENAMIENTO: 200 MB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/391540/Undertale/",
            playstation: "https://store.playstation.com/es-co/product/UP3893-CUSA08801_00-0414152186658084"
        }
    },

    { 
        id: 74,  
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Kena: Bridge of Spirits", 
        winner: false, 
        additionalInfo: "Publicado por Ember Lab",
        releaseDate: "21 de septiembre de 2021",
        description: "Kena: Bridge of Spirits es un juego de acción y aventura que combina exploración, combate y narrativa emocional. Kena, una joven guía espiritual, ayuda a las almas atrapadas a alcanzar la paz.",
        genre: "Acción / Aventura",
        platforms: "PC, PS4, PS5",
        developer: "Ember Lab",
        publisher: "Ember Lab",
        imageUrl: "https://media.altchar.com/prod/images/gm_article_promo_image/55260c221ed7-kena-bridge-of-spirits.jpg",
        price: "$39.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: AMD FX-6100 / Intel i3-3220 MEMORIA: 12 GB de RAM GRÁFICOS: GTX 650 Ti / Radeon R7 260X ALMACENAMIENTO: 25 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1954200/Kena_Bridge_of_Spirits/",
            playstation: "https://store.playstation.com/es-co/product/UP4364-PPSA01746_00-KENAAMST00000005"
        }
    },

    { 
        id: 75, 
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Stellar Blade", 
        winner: false, 
        additionalInfo: "Publicado por Sony Interactive Entertainment",
        releaseDate: "26 de abril de 2024",
        description: "Stellar Blade es un juego de acción y aventura futurista desarrollado por Shift Up. La historia sigue a Eve, una guerrera que lucha contra criaturas alienígenas para salvar a la humanidad.",
        genre: "Acción / Ciencia ficción",
        platforms: "PS5, PC",
        developer: "Shift Up",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://gpstatic.com/acache/75/05/1/uk/t620x300-1c8bc03d7a6360f2386a51708bf17f6d.jpg",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: Intel® Core™ i5-8400 Processor / AMD Ryzen™ 5 3600X Processor MEMORIA: 16 GB de RAM GRÁFICOS: NVIDIA GeForce RTX 2060 SUPER or AMD Radeon RX 5700 XT DIRECTX: Versión 12\nALMACENAMIENTO: 75 GB de espacio disponible\nNOTAS ADICIONALES: 1440p. Graphics Quality Preset “Medium”.  60FPS Target. SSD Required."
        },
        purchaseLinks: {
            playstation: "https://store.playstation.com/es-co/product/UP9000-PPSA13196_00-STELLARBLADECE00",
            steam: "https://store.steampowered.com/app/3489700/Stellar_Blade/"
        }
    },

    { 
        id: 76,
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Cyberpunk 2077", 
        winner: false, 
        additionalInfo: "Publicado por CD Projekt Red",
        releaseDate: "9 de diciembre de 2020",
        description: "Cyberpunk 2077 es un RPG de mundo abierto ambientado en la futurista Night City. El jugador encarna a V, un mercenario en busca de un implante que otorga la inmortalidad.",
        genre: "RPG / Mundo abierto",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S",
        developer: "CD Projekt Red",
        publisher: "CD Projekt Red",
        imageUrl: "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077_CDPROJEKTRED_S1_03_2560x1440-359e77d3cd0a40aebf3bbc130d14c5c7",
        price: "$59.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: Intel Core i7-6700, AMD Ryzen 5 3600 MEMORIA: 16 GB de RAM GRÁFICOS: GTX 1060 / RX 580 ALMACENAMIENTO: 70 GB SSD"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
            playstation: "https://store.playstation.com/es-co/product/UP4497-PPSA03974_00-0000000000000CP1"
        }
    },

    { 
        id: 77,
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Bendy and the Ink Machine", 
        winner: false, 
        additionalInfo: "Publicado por Joey Drew Studios",
        releaseDate: "10 de febrero de 2017",
        description: "Bendy and the Ink Machine es un juego de terror y puzzles con estética de dibujos animados retro. El jugador explora un estudio de animación abandonado con oscuros secretos.",
        genre: "Terror / Puzzles",
        platforms: "PC, PS4, Xbox One, Nintendo Switch",
        developer: "Joey Drew Studios",
        publisher: "Joey Drew Studios",
        imageUrl: "https://cdn1.epicgames.com/spt-assets/0b1283e5bfa64ad48f3862b79abc20b9/bendy-and-the-ink-machine-1e8cj.png",
        price: "$19.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: Intel Core i3-4170 MEMORIA: 8 GB de RAM GRÁFICOS: GTX 460 / Radeon HD 5750 ALMACENAMIENTO: 2 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/622650/Bendy_and_the_Ink_Machine/",
            playstation: "https://store.playstation.com/es-co/product/UP2344-CUSA13637_00-MDKRTGAMES4BATIM"
        }
    },

    { 
        id: 78, 
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Silent Hill 2 Remake", 
        winner: false, 
        additionalInfo: "Publicado por Konami",
        releaseDate: "8 de octubre de 2024",
        description: "Silent Hill 2 Remake es una versión completamente reconstruida del clásico de terror psicológico. James Sunderland regresa a Silent Hill en busca de su esposa fallecida.",
        genre: "Terror psicológico",
        platforms: "PC, PS5",
        developer: "Bloober Team",
        publisher: "Konami",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2124490/header.jpg?t=1744248682",
        price: "$69.99",
        requirements: {
            pc: "SO: Windows 10/11 64-bit PROCESADOR: Intel Core i7-8700K / Ryzen 5 3600X MEMORIA: 16 GB de RAM GRÁFICOS: RTX 2080 / RX 6800 XT ALMACENAMIENTO: 50 GB SSD"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/2124490/SILENT_HILL_2/",
            playstation: "https://store.playstation.com/es-co/product/UP0101-PPSA08710_00-MAINGAME00000000"
        }
    },

    { 
        id: 79, 
        year: "Recomendados",
        category: "Juegos Recomendados", 
        nominee: "Detroit: Become Human", 
        winner: false, 
        additionalInfo: "Publicado por Quantic Dream",
        releaseDate: "25 de mayo de 2018",
        description: "Detroit: Become Human es una aventura interactiva ambientada en un futuro donde los androides buscan su libertad. Las decisiones del jugador moldean profundamente la narrativa.",
        genre: "Aventura / Narrativo",
        platforms: "PC, PS4",
        developer: "Quantic Dream",
        publisher: "Sony Interactive Entertainment",
        imageUrl: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1222140/capsule_616x353.jpg?t=1667468479",
        price: "$39.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: i5-6600 MEMORIA: 8 GB de RAM GRÁFICOS: GTX 780 / Radeon HD 7950 ALMACENAMIENTO: 55 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/1222140/Detroit_Become_Human/",
            playstation: "https://store.playstation.com/es-co/product/UP9000-CUSA08344_00-DETROIT000000001"
        }
    },
    { 
        id: 80, 
        year: "Recomendados", 
        category: "Juegos Recomendados", 
        nominee: "Mortal Kombat 11", 
        winner: false, 
        additionalInfo: "Publicado por Warner Bros. Interactive Entertainment",
        releaseDate: "23 de abril de 2019",
        description: "Mortal Kombat 11 es un videojuego de lucha desarrollado por NetherRealm Studios. Ofrece un sistema de combate refinado, una historia cinematográfica y un elenco de personajes clásicos y nuevos con brutales fatalities.",
        genre: "Lucha / Acción",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch",
        developer: "NetherRealm Studios",
        publisher: "Warner Bros. Interactive Entertainment",
        imageUrl: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/03/Mortal-Kombat-11.jpg?tf=3840x",
        price: "$49.99",
        requirements: {
            pc: "SO: Windows 10 (64-bit) PROCESADOR: Intel Core i5-750 / AMD Phenom II X4 965 MEMORIA: 8 GB de RAM GRÁFICOS: GTX 670 / Radeon HD 7950 ALMACENAMIENTO: 60 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/976310/Mortal_Kombat11/",
            playstation: "https://store.playstation.com/es-co/product/UP1018-PPSA01617_00-00MORTALKOMBAT11"
        }
    },

    { 
        id: 81, 
        year: "Recomendados", 
        category: "Juegos Recomendados", 
        nominee: "NieR: Automata", 
        winner: false, 
        additionalInfo: "Publicado por Square Enix",
        releaseDate: "17 de marzo de 2017",
        description: "NieR: Automata es un juego de rol de acción desarrollado por PlatinumGames. Combina combate dinámico con una narrativa filosófica sobre la existencia, la humanidad y las máquinas. Controla a los androides 2B, 9S y A2 en un mundo postapocalíptico.",
        genre: "RPG / Acción / Aventura",
        platforms: "PC, PS4, PS5, Xbox One, Xbox Series X/S, Nintendo Switch",
        developer: "PlatinumGames",
        publisher: "Square Enix",
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/524220/capsule_616x353.jpg?t=1760991364",
        price: "$39.99",
        requirements: {
            pc: "SO: Windows 10 64-bit PROCESADOR: Intel Core i3 2100 / AMD A8-6500 MEMORIA: 8 GB de RAM GRÁFICOS: GTX 770 / Radeon R9 270X ALMACENAMIENTO: 50 GB disponibles"
        },
        purchaseLinks: {
            steam: "https://store.steampowered.com/app/524220/NieRAutomata/",
            playstation: "https://store.playstation.com/es-co/product/UP0082-CUSA04551_00-GOTYORHADIGITAL0"
        }
    }

];

// Function to render awards in the container
function renderAwards(awards) {
    const container = document.getElementById('awards-container');
    container.innerHTML = ''; // Clear container before appending new elements

    // Group awards by year and category
    const groupedAwards = {};
    awards.forEach(award => {
        const key = `${award.year}-${award.category}`;
        if (!groupedAwards[key]) {
            groupedAwards[key] = {
                year: award.year,
                category: award.category,
                nominees: []
            };
        }
        groupedAwards[key].nominees.push(award);
    });

    // Render grouped awards
    Object.values(groupedAwards).forEach(group => {
        const groupCard = document.createElement('div');
        groupCard.className = 'award-group';
        
        groupCard.innerHTML = `
            <div class="award-header">
                <h3>${group.category}</h3>
                <span class="year">${group.year}</span>
            </div>
            <div class="nominees-list">
                ${group.nominees.map(nominee => `
                    <div class="nominee ${nominee.winner ? 'winner' : ''}" onclick="openModal(${nominee.id})">
                        ${nominee.imageUrl ? `
                        <div class="nominee-image">
                            <img src="${nominee.imageUrl}" alt="${nominee.nominee}" loading="lazy" onerror="this.parentElement.innerHTML='<img src=\\'https://via.placeholder.com/350x250/2a2a2a/cccccc?text=No+Image+Available\\' alt=\\'No image available\\' loading=\\'lazy\\'>'">
                        </div>
                        ` : `
                        <div class="nominee-image">
                            <img src="https://via.placeholder.com/350x250/2a2a2a/cccccc?text=No+Image" alt="No image available" loading="lazy">
                        </div>
                        `}
                        <div class="nominee-info">
                            <div class="nominee-header">
                                <span class="nominee-name">${nominee.nominee}</span>
                                ${nominee.winner ? '<span class="winner-badge">WINNER</span>' : ''}
                            </div>
                            ${nominee.description ? `<div class="game-description">${nominee.description}</div>` : ''}
                            ${nominee.releaseDate ? `<div class="release-date">Fecha: ${nominee.releaseDate}</div>` : ''}
                            ${nominee.genre ? `<div class="genre">Género: ${nominee.genre}</div>` : ''}
                            ${nominee.additionalInfo ? `<div class="additional-info">${nominee.additionalInfo}</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        container.appendChild(groupCard);
    });
}

// Store selected years
let selectedYears = [];

// Function to show all awards
function showAll() {
    selectedYears = [];
    renderAwards(gameAwardsData);
    const titleText = currentLanguage === 'en' ? 'ALL GAME AWARDS' : 'TODOS LOS PREMIOS DE VIDEOJUEGOS';
    document.getElementById('filter-title').textContent = titleText;
    
    // Uncheck all checkboxes
    document.querySelectorAll('.year-checkbox input').forEach(checkbox => {
        checkbox.checked = false;
    });
}

// Function to filter by years
function filterByYears(years) {
    if (years.length === 0) {
        showAll();
        return;
    }
    
    const filtered = gameAwardsData.filter(award => years.includes(award.year));
    renderAwards(filtered);
    
    // Update filter title
    const titleText = currentLanguage === 'en' ? 
        `Game Awards ${years.join(', ')}` : 
        `Premios de Videojuegos ${years.join(', ')}`;
    document.getElementById('filter-title').textContent = titleText;
}

// Function to apply year filters
function applyYearFilters() {
    selectedYears = [];
    document.querySelectorAll('.year-checkbox input:checked').forEach(checkbox => {
        selectedYears.push(parseInt(checkbox.value));
    });
    
    filterByYears(selectedYears);
    
    // Close the dropdown after applying filters
    document.querySelector('.year-dropdown .dropdown-content').style.display = 'none';
}

// Function to filter by year (maintained for compatibility)
function filterByYear(year) {
    selectedYears = [year];
    filterByYears(selectedYears);
    
    // Check the corresponding checkbox
    const checkbox = document.querySelector(`.year-checkbox input[value="${year}"]`);
    if (checkbox) {
        checkbox.checked = true;
    }
    
    // Close the dropdown
    document.querySelector('.year-dropdown .dropdown-content').style.display = 'none';
}

// Function to filter by category
function filterByCategory(category) {
    const filtered = gameAwardsData.filter(award => award.category === category);
    renderAwards(filtered);
    const titleText = currentLanguage === 'en' ? `Category: ${category}` : `Categoría: ${category}`;
    document.getElementById('filter-title').textContent = titleText;
    
    // Close the dropdown
    document.querySelector('.category-dropdown .dropdown-content').style.display = 'none';
}

// Function to filter by year and category
function filterByYearAndCategory(year, category) {
    const filtered = gameAwardsData.filter(award => award.year === year && award.category === category);
    renderAwards(filtered);
    const titleText = currentLanguage === 'en' ? `${category} - ${year}` : `${category} - ${year}`;
    document.getElementById('filter-title').textContent = titleText;
}

// Prevent dropdown from closing when clicking inside
document.addEventListener('click', function(event) {
    const yearDropdown = document.querySelector('.year-dropdown');
    const categoryDropdown = document.querySelector('.category-dropdown');
    
    // Handle year dropdown
    if (yearDropdown && !yearDropdown.contains(event.target)) {
        yearDropdown.querySelector('.dropdown-content').style.display = 'none';
    }
    
    // Handle category dropdown
    if (categoryDropdown && !categoryDropdown.contains(event.target)) {
        categoryDropdown.querySelector('.dropdown-content').style.display = 'none';
    }
});

// Override the default dropdown behavior to keep it open when clicking inside
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        const dropdownContent = this.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        } else {
            dropdownContent.style.display = 'block';
        }
    });
});

// Function to get unique years
function getUniqueYears() {
    const years = [...new Set(gameAwardsData.map(award => award.year))];
    return years.sort((a, b) => b - a); // Sort descending
}

// Function to get unique categories
function getUniqueCategories() {
    const categories = [...new Set(gameAwardsData.map(award => award.category))];
    return categories.sort();
}

// Language translations
const translations = {
    en: {
        "CELEBRATING EXCELLENCE IN GAMING (2014-2024)": "CELEBRATING EXCELLENCE IN GAMING (2014-2024)",
        "TODOS LOS PREMIOS DE VIDEOJUEGOS": "ALL GAME AWARDS",
        "Inicio": "Home",
        "Años ▼": "Years ▼",
        "Categorías ▼": "Categories ▼",
        "Información General": "General Information",
        "Fecha de Lanzamiento:": "Release Date:",
        "Género:": "Genre:",
        "Plataformas:": "Platforms:",
        "Desarrollador:": "Developer:",
        "Editor:": "Publisher:",
        "Detalles de Compra": "Purchase Details",
        "Precio Aproximado:": "Approximate Price:",
        "Requisitos del Sistema (PC):": "System Requirements (PC):",
        "Enlaces de Compra:": "Purchase Links:",
        "&copy; 2025 BASE DE DATOS DE PREMIOS DE VIDEOJUEGOS | POR JHAN CARLOS MESA ESCOBAR": "&copy; 2025 GAME AWARDS DATABASE | BY JHAN CARLOS MESA ESCOBAR"
    },
    es: {
        "CELEBRATING EXCELLENCE IN GAMING (2014-2024)": "CELEBRANDO LA EXCELENCIA EN LOS VIDEOJUEGOS (2014-2024)",
        "ALL GAME AWARDS": "TODOS LOS PREMIOS DE VIDEOJUEGOS",
        "Home": "Inicio",
        "Years ▼": "Años ▼",
        "Categories ▼": "Categorías ▼",
        "General Information": "Información General",
        "Release Date:": "Fecha de Lanzamiento:",
        "Genre:": "Género:",
        "Platforms:": "Plataformas:",
        "Developer:": "Desarrollador:",
        "Publisher:": "Editor:",
        "Purchase Details": "Detalles de Compra",
        "Approximate Price:": "Precio Aproximado:",
        "System Requirements (PC):": "Requisitos del Sistema (PC):",
        "Purchase Links:": "Enlaces de Compra:",
        "&copy; 2025 GAME AWARDS DATABASE | BY JHAN CARLOS MESA ESCOBAR": "&copy; 2025 BASE DE DATOS DE PREMIOS DE VIDEOJUEGOS | POR JHAN CARLOS MESA ESCOBAR"
    }
};

// Set initial language to Spanish
let currentLanguage = 'es';

// Function to set language
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update flag active state
    document.querySelectorAll('.flag').forEach(flag => {
        flag.classList.remove('active');
    });
    document.querySelector(`.flag[alt="${lang === 'en' ? 'English' : 'Español'}"]`).classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-en][data-es]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
    
    // Update filter title specifically
    const filterTitle = document.getElementById('filter-title');
    if (filterTitle) {
        const currentText = filterTitle.textContent;
        if (lang === 'en') {
            if (currentText.includes('Game Awards')) {
                filterTitle.textContent = currentText.replace('Game Awards', 'GAME AWARDS');
            } else if (currentText.includes('TODOS')) {
                filterTitle.textContent = 'ALL GAME AWARDS';
                filterTitle.setAttribute('data-en', 'ALL GAME AWARDS');
                filterTitle.setAttribute('data-es', 'TODOS LOS PREMIOS DE VIDEOJUEGOS');
            }
        } else {
            if (currentText.includes('GAME AWARDS')) {
                filterTitle.textContent = currentText.replace('GAME AWARDS', 'Game Awards');
            } else if (currentText.includes('ALL')) {
                filterTitle.textContent = 'TODOS LOS PREMIOS DE VIDEOJUEGOS';
                filterTitle.setAttribute('data-en', 'ALL GAME AWARDS');
                filterTitle.setAttribute('data-es', 'TODOS LOS PREMIOS DE VIDEOJUEGOS');
            }
        }
    }
    
    // Update dropdown content
    updateDropdowns();
    
    // Update modal if it's open
    if (document.getElementById('gameModal').style.display === 'block') {
        // Re-open modal to update content
        const gameId = document.getElementById('modal-title').textContent;
        const game = gameAwardsData.find(g => g.nominee === gameId);
        if (game) {
            openModal(game.id);
        }
    }
}

// Function to update dropdowns based on language
function updateDropdowns() {
    // Update year dropdown
    const yearDropdown = document.querySelector('.year-dropdown .dropdown-content');
    if (yearDropdown) {
        const years = getUniqueYears();
        yearDropdown.innerHTML = years.map(year => 
            `<a href="#" onclick="filterByYear(${year})">${year}</a>`
        ).join('');
    }
    
    // Update category dropdown
    const categoryDropdown = document.querySelector('.category-dropdown .dropdown-content');
    if (categoryDropdown) {
        const categories = getUniqueCategories();
        const categoryText = currentLanguage === 'en' ? 'Category' : 'Categoría';
        categoryDropdown.innerHTML = categories.map(category => 
            `<a href="#" onclick="filterByCategory('${category}')">${category}</a>`
        ).join('');
    }
    
    // Update dropdown buttons
    const yearBtn = document.querySelector('.year-dropdown .dropbtn');
    const categoryBtn = document.querySelector('.category-dropdown .dropbtn');
    
    if (yearBtn) {
        yearBtn.textContent = currentLanguage === 'en' ? 'Years ▼' : 'Años ▼';
    }
    
    if (categoryBtn) {
        categoryBtn.textContent = currentLanguage === 'en' ? 'Categories ▼' : 'Categorías ▼';
    }
}

// Function to open modal with game details
function openModal(gameId) {
    const game = gameAwardsData.find(g => g.id === gameId);
    if (!game) return;
    
    // Update modal content
    document.getElementById('modal-title').textContent = game.nominee;
    document.getElementById('modal-image').src = game.imageUrl || 'https://via.placeholder.com/800x300/2a2a2a/cccccc?text=No+Image';
    document.getElementById('modal-image').alt = game.nominee;
    document.getElementById('modal-description').textContent = game.description;
    document.getElementById('modal-release-date').textContent = game.releaseDate;
    document.getElementById('modal-genre').textContent = game.genre;
    document.getElementById('modal-platforms').textContent = game.platforms;
    document.getElementById('modal-developer').textContent = game.developer;
    document.getElementById('modal-publisher').textContent = game.publisher;
    document.getElementById('modal-price').textContent = game.price;
    
    // Update winner indicator
    const winnerElement = document.getElementById('modal-winner');
    if (game.winner) {
        const winnerText = currentLanguage === 'en' ? '🏆 GAME WINNER' : '🏆 JUEGO GANADOR';
        winnerElement.innerHTML = `<div class="winner-indicator">${winnerText}</div>`;
    } else {
        winnerElement.innerHTML = '';
    }
    
    // Update requirements
    const requirementsList = document.getElementById('modal-requirements');
    requirementsList.innerHTML = '';
    
    if (game.requirements) {
        Object.entries(game.requirements).forEach(([platform, reqs]) => {
            const li = document.createElement('li');
            li.innerHTML = `<strong>${platform.toUpperCase()}:</strong> ${reqs}`;
            requirementsList.appendChild(li);
        });
    } else {
        const noReqsText = currentLanguage === 'en' ? 'No system requirements found' : 'No se encontraron requisitos del sistema';
        requirementsList.innerHTML = `<li>${noReqsText}</li>`;
    }
    
    // Update purchase links
    const purchaseLinksDiv = document.getElementById('modal-purchase-links');
    purchaseLinksDiv.innerHTML = '';
    
    if (game.purchaseLinks) {
        Object.entries(game.purchaseLinks).forEach(([platform, url]) => {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            link.className = 'purchase-link';
            link.textContent = platform.charAt(0).toUpperCase() + platform.slice(1);
            purchaseLinksDiv.appendChild(link);
        });
    } else {
        const noLinksText = currentLanguage === 'en' ? 'No purchase links available' : 'No hay enlaces de compra disponibles';
        purchaseLinksDiv.innerHTML = `<p>${noLinksText}</p>`;
    }
    
    // Show modal
    document.getElementById('gameModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('gameModal').style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target == modal) {
        closeModal();
    }
}

// Initialize the page with all awards
document.addEventListener('DOMContentLoaded', function() {
    showAll();
    
    // Set initial language
    setLanguage('es');
    
    // Populate year dropdown with checkboxes
    const yearDropdown = document.querySelector('.year-dropdown .dropdown-content .year-checkboxes');
    const years = getUniqueYears();
    yearDropdown.innerHTML = years.map(year => 
        `<div class="year-checkbox">
            <input type="checkbox" id="year-${year}" value="${year}">
            <label for="year-${year}">${year}</label>
        </div>`
    ).join('');
    
    // Add event listeners to year checkboxes to prevent dropdown closing
    document.querySelectorAll('.year-checkbox input').forEach(checkbox => {
        checkbox.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // Populate category dropdown
    const categoryDropdown = document.querySelector('.category-dropdown .dropdown-content');
    const categories = getUniqueCategories();
    categoryDropdown.innerHTML = categories.map(category => 
        `<a href="#" onclick="filterByCategory('${category}'); return false;">${category}</a>`
    ).join('');
    
    // Add event listener for close button
    document.querySelector('.close').onclick = closeModal;
    
    // Set initial active flag
    document.querySelector('.flag[alt="Español"]').classList.add('active');
});
