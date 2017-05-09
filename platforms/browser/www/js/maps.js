/**
 * Created by Evgenija on 04.07.2016.
 */
//Data

var cities1 = [{

    city: 'Katna Garaza - Makoil',
    desc: 'Bulevar "Krste Misirkov" (sproti sudska palata)',
    lat: 41.9972877,
    long: 21.440344,
    dir: '<a href="https://goo.gl/maps/sL6RS1DoETp">'+
    'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/sL6RS1DoETp">'+
    'Katna Garaza - Makoil </a> '
},
    {
        city: 'Katna Garaza - Razlovecko Vostanie',
        desc: 'Ulica "Mirche Acev"',
        lat: 41.9928557,
        long: 21.4348468,
        dir: '<a href="https://goo.gl/maps/Kii73oyNVFM2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/Kii73oyNVFM2">'+
        'Katna Garaza - Razlovecko Vostanie </a> '

    },
    {
        city: 'Katna Garaza - Solunski Kongres',
        desc: 'Ulica "Kej 13ti Noemvri"',
        lat: 41.994591,
        long: 21.437030,
        dir: '<a href="https://goo.gl/maps/hALtCmgypc32">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/hALtCmgypc32">'+
        'Katna Garaza - Solunski Kongres </a> '

    },
    {
        city: 'Katna Garaza - Zebra (Trgovski Centar)',
        desc: 'Ulica "Vasil Gjorgov 16"',
        lat: 41.9928441,
        long: 21.417526,
        dir: '<a href="https://goo.gl/maps/h1aSFH6WnnP2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/h1aSFH6WnnP2">'+
        'Katna Garaza - Zebra </a> ' 

    },
   /* {
        city: 'Katna Garaza - Zebra (Trgovski Centar)',
        desc: 'Ulica "Vasil Gjorgov 16"',
        lat: 41.9928441,
        long: 21.417526,
        dir: '<a href="https://goo.gl/maps/aUgziL2UAWG2">'+
        'Take me there </a> '

    }, */
    {
        city: 'Katna Garaza - Elit Plaza',
        desc: 'Ulica "Kosturski Heroi 38"',
        lat: 41.998716,
        long: 21.416844,
        dir: '<a href="https://goo.gl/maps/oboWizewNu12">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/oboWizewNu12">'+
        'Katna Garaza - Elit Plaza </a> '

    },
    {
        city: 'Katna Garaza - Makedonska Falanga',
        desc: 'Ulica "Sv. Kiril i Metodij"',
        lat: 41.9897022,
        long: 21.4322287,
        dir: '<a href="https://goo.gl/maps/NSq38HsRqbH2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/NSq38HsRqbH2">'+
        'Katna Garaza - Makedonska Falanga </a> '

    },
    {
        city: 'Katna Garaza - Todor Aleksandrov',
        desc: 'Ulica "Dame Gruev 14"',
        lat: 41.9935141,
        long: 21.4286737,
        dir: '<a href="https://goo.gl/maps/oFpqpaUcQiJ2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/oFpqpaUcQiJ2">'+
        'Katna Garaza - Todor Aleksandrov </a> '

    },
    {
        city: 'Katna Garaza - Capitol (Trgovski Centar)',
        desc: 'Bulevar "Jane Sandanski"',
        lat: 41.985922,
        long: 21.4642743,
        dir: '<a href="https://goo.gl/maps/JNcFv2FiCwt">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/JNcFv2FiCwt">'+
        'Katna Garaza - Capitol Mall </a> '

    },
    {
        city: 'Katna Garaza - Skopje City Mall (Trgovski Centar)',
        desc: 'Ulica "Ljubljanska"',
        lat: 42.0043474,
        long: 21.3896494,
        dir: '<a href="https://goo.gl/maps/gCNf8in1awq">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/gCNf8in1awq">'+
        'Katna Garaza - Skopje City Mall </a> '

    },
    {
        city: 'Katna Garaza - Gradski (Trgovski Centar)',
        desc: 'Ulica "Kej 13ti Noemvri"',
        lat: 41.994085,
        long: 21.435869,
        dir: '<a href="https://goo.gl/maps/GnLKyaMU7it">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/GnLKyaMU7it">'+
        'Katna Garaza - GTC </a> '

    },
    {
        city: 'Katna Garaza - Ramstore Mall (Trgovski Centar)',
        desc: 'Ulica "Sv. Kiril i Metodij 13"',
        lat: 41.9914087,
        long: 21.425609,
        dir: '<a href="https://goo.gl/maps/mhmj8hPe6do">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/mhmj8hPe6do">'+
        'Katna Garaza - Ramstore Mall </a> '

    },
    {
        city: 'Katna Garaza - Vero Center (Trgovski Centar)',
        desc: 'Bulevar "Kuzman Josifoski Pitu"',
        lat: 41.9933535,
        long: 21.4401809,
        dir: '<a href="https://goo.gl/maps/WHqLBUqJLWJ2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/WHqLBUqJLWJ2">'+
        'Katna Garaza - Vero Centar </a> '

    },
    {
        city: 'Katna Garaza - Biser (Trgovski Centar)',
        desc: 'Bulevar "Jane Sandanski 69"',
        lat: 41.9849981,
        long: 21.4677567,
        dir: '<a href="https://goo.gl/maps/DkYxKYtDxKQ2">'+
        'Take me there </a> ',
	odd: '<a href="https://goo.gl/maps/DkYxKYtDxKQ2">'+
        'Katna Garaza - Biser </a> '


    }

];


var cities = [{
    /* ------- ZONA A ------ */
    city: 'A1 - Agromehanika',
    desc: 'Bulevar "VMRO"',
    space: 'Broj na parking mesta: 29',
    lat: 41.998836,
    long: 21.428916,
    dir: '<a href="https://goo.gl/maps/z3fadyaNYsN2">'+
    'Take me there </a> ',
    odd: '<a href="https://goo.gl/maps/z3fadyaNYsN2">'+
    'A1 - Agromehanika </a>'
},
    {
        city: 'A8 - Kamen Most',
        desc: 'Ulica "Crvena Skopska Opshtina"',
        space: 'Broj na parking mesta: 151',
        lat: 41.999015,
        long: 21.434034,
        dir: '<a href="https://goo.gl/maps/8CoVo1v32WQ2">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/8CoVo1v32WQ2">'+
        'A8 - Kamen Most</a> '
    },
    {
        city: 'A5 - Orce Nikolov (Mal Ring)',
        desc: 'Ulica "Orce Nikolov"',
        space: 'Broj na parking mesta: 40',
        lat: 41.998162,
        long: 21.429109,
        dir: '<a href="https://goo.gl/maps/paE7YbPNA3B2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/paE7YbPNA3B2">'+
        'A5 - Orce Nikolov (Mal Ring) </a> '
    },
    {
        city: 'A6 - Maksim Gorki',
        desc: 'Ulica "Maksim Gorki", "8-ma udarna brigada" i ulica "Skopska"',
        space: 'Broj na parking mesta: 89',
        lat:41.99625,
        long:21.42810,
        dir:'<a href="https://goo.gl/maps/2rF5Sj5YjLQ2">'+
            'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/2rF5Sj5YjLQ2">'+
        'A6 - Maksim Gorki</a> '
    },
    {
        city: 'A7 - Lotarija (Tehnometal)',
        desc: 'Ulica "Dame Gruev"',
        space: 'Broj na parking mesta: 115',
        lat:41.993956,
        long: 21.429002,
        dir:'<a href="https://goo.gl/maps/yRQPT5kJ5tJ2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/yRQPT5kJ5tJ2">'+
        'A7 - Lotarija (Tehnometal) </a> '
    },
    {
        city: 'A3 - Dame Gruev 1',
        desc: 'Ulica "Dame Gruev" (Pred policiskata stanica Beko)',
        space: 'Broj na parking mesta: 53',
        lat: 41.993454,
        long: 21.427865,
        dir:'<a href="https://goo.gl/maps/C9nYtAs7Hyq">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/C9nYtAs7Hyq">'+
        'A3 - Dame Gruev 1 </a> '
    },
    {
    city: 'A4 - Dame Gruev 2',
    desc: 'Ulica "Dame Gruev" (Pozadi sobranie na RM)',
    space: 'Broj na parking mesta: 86',
    lat: 41.992186,
    long: 21.430322,
        dir:'<a href="https://goo.gl/maps/EyZgcsKYbGr">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/EyZgcsKYbGr">'+
        'Dame Gruev 2 </a> '
    },
    /*----- B ZONA ---- */
    {
    city: 'B7 - Ilinden',
    desc: 'Ulica "Stiv Naumov"',
    space: 'Broj na parking mesta: 77',
    lat: 41.999274,
    long: 21.437906,
        dir:'<a href="https://goo.gl/maps/ahQV1tJcBGw">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/ahQV1tJcBGw">'+
        'B7 - Ilinden</a> '
},
    {
        city: 'B6 - Josip Broz Tito',
        desc: 'Ulica "Dimitrie Chupovski"',
        space: 'Broj na parking mesta: 26',
        lat: 41.995303,
        long: 21.426110,
        dir:'<a href="https://goo.gl/maps/LpkmFRMH2F82">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/LpkmFRMH2F82">'+
        'B6 - Josip Broz Tito </a> '
    },
    {
        city: 'B3 - Brostol 2',
        desc: 'Bulevar "Mito HadziVasilv - Jasmin"',
        space: 'Broj na parking mesta: 46',
        lat: 41.992652,
        long: 21.426848,
        dir:'<a href="https://goo.gl/maps/FYMBT4LW89C2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/FYMBT4LW89C2">'+
        'B3 - Bristol 2 </a> '
    },
    {
        city: 'B2 - Bristol',
        desc: 'Bulevar "Mito HadziVasilv - Jasmin',
        space: 'Broj na parking mesta: 57',
        lat: 41.992063,
        long: 21.427810,
        dir:'<a href="https://goo.gl/maps/yaK7Zs5k6fy">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/yaK7Zs5k6fy">'+
        'B2 - Brostol</a> '
    },

    {
        city: 'Javno Parkiralishte - Zoil',
        desc: 'Ulica "Kocho Racin", "11-ti Oktomvri" i ulica "Leningradska"',
        space: 'Broj na parking mesta: 123',
        lat: 41.991811,
        long: 21.435092,
        dir:'<a href="https://goo.gl/maps/mTEL1iQnEQT2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/mTEL1iQnEQT2">'+
        'Javno Parkiralishte - Zoil </a> '
    },
    {
        city: 'Javno Parkiralishte - Gradska Bolnica',
        desc: 'Ulica "Filip II Makedonski"',
        space: 'Broj na parking mesta: 111',
        lat: 41.992994,
        long: 21.434551,
        dir:'<a href="https://goo.gl/maps/hbfx7AdURtw">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/hbfx7AdURtw">'+
        'Javno Parkiralishte - Gradska Bolnica</a> '
    },
    {
        city: 'Javno Parkiralishte - Kocho Racin ',
        desc: 'Bulevar "Kocho Racin" i "11ti Oktomvri"',
        space: 'Broj na parking mesta: 117',
        lat: 41.991925,
        long: 21.437319,
        dir:'<a href="https://goo.gl/maps/wudQt8rs1RA2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/wudQt8rs1RA2">'+
        'Javno Parkiralishte - Kocho Racin </a> '
    },
    /* --------- D Zona ------ */

    {
    city: 'D40 - 8mi Septemvri',
    desc: 'Ulica "Pariska"',
    space: 'Broj na parking mesta: 65',
    lat: 42.002874,
    long: 21.401667,
        dir:'<a href="https://goo.gl/maps/gWjwdcvWwCs">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/LFZ8ZZZTc2z">'+
        'D40 - 8mi Septemvri </a> '
}, {
    city: 'Javno Parkiralishte  - 8mi Septemvri',
    desc: 'Ulica "Pariska"',
    space: 'Broj na parking mesta: 46',
    lat: 42.005170,
    long: 21.402203,
        dir:'<a href="https://goo.gl/maps/LFZ8ZZZTc2z">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/LFZ8ZZZTc2z">'+
        'Javno Parkiralishte - 8mi Septemvri </a> '
},
    {
        city: 'D62 - Teniski Klub ABC',
        desc: 'Bulevar "Ilinden"',
        space: 'Broj na parking mesta: 33 (5 mesta za taksi)',
        lat: 42.007099,
        long: 21.413297,
        dir:'<a href="https://goo.gl/maps/WEN8YqUymgK2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/WEN8YqUymgK2">'+
        'D62 - Teniski klub ABC </a> '
    },
    {
        city: 'D5 - Vladimir Komarov',
        desc: 'Ulica "Vladimir Komarov"',
        space: 'Broj na parking mesta: 116',
        lat: 41.991383,
        long: 21.450544,
        dir:'<a href="https://goo.gl/maps/SBHrLyJtoT52">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/SBHrLyJtoT52">'+
        'D5 - Vladimir Komarov </a> '
    },
    {
        city: 'D6 - Palma Aerodrom',
        desc: 'Ulica "Vladimir Komarov"',
        space: 'Broj na parking mesta: 113',
        lat: 41.988903,
        long: 21.452582,
        dir:'<a href="https://goo.gl/maps/TrTC5U7JUaG2">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/TrTC5U7JUaG2">'+
        'D6 Palma Aerodrom </a> '
    },
    {
        city: 'D3 - Biser',
        desc: 'Bulevar "Jane Sandanski"',
        space: 'Broj na parking mesta: 1358',
        lat: 41.985002,
        long: 21.465192,
        dir: '<a href="https://goo.gl/maps/WwMN4csh8KE2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/WwMN4csh8KE2">'+
        'D3 - Biser </a> '

    },
    {
        city: 'D7 - Arodrom Glorija',
        desc: 'Ulica "Jane Sandanski"',
        space: 'Broj na parking mesta: 613',
        lat: 41.986414,
        long: 21.466179,
        dir:'<a href="https://goo.gl/maps/VsT1C16QFso">'+
        'Take me there </a> ',
        odd: '<a href="https://goo.gl/maps/VsT1C16QFso">'+
        'D7 - Aerodrom Glorija </a> '
    },

    {
        city: 'D4 - Vero (Rudarski Institut)',
        desc: 'Bulevar "Jane Sandanski"',
        space: 'Broj na parking mesta: 727',
        lat: 41.984596,
        long: 21.468454,
        dir:'<a href="https://goo.gl/maps/dfR5AEGxkaU2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/dfR5AEGxkaU2">'+
        'D4 - Vero (Ruderski Institut) </a> '
    },
    /* ---------- C Zona ------- */
    {
        city: 'C80 - Zooloshka',
        desc: 'Bulevar "Ilinden"',
        space: 'Broj na parking mesta: 104 (5 za taksi vozila)',
        lat: 42.005641,
        long: 21.417461,
        dir:'<a href="https://goo.gl/maps/Nc8v8w7CMYC2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/Nc8v8w7CMYC2">'+
        'C80 - Zooloshka </a> '
    },
    {
        city: 'C81 - Gradsko Sobranie',
        desc: 'Bulevar "Ilinden"',
        space: 'Broj na parking mesta: 131 -(40 parking mesta za gradonacalnikot i vrabotenite)',
          lat: 42.004737,
        long: 21.419553,
        dir:'<a href="https://goo.gl/maps/oaaG7FPQDFq">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/oaaG7FPQDFq">'+
        'C81 - Gradsko Sobranie </a> '},

    { city: 'C11 - Orce Nikolov',
        desc: 'Ulica "Orce Nikolov "',
        space: 'Broj na parking mesta: 112',
        lat: 42.003756,
        long: 21.416152,
        dir:'<a href="https://goo.gl/maps/bghES1MmEXr">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/bghES1MmEXr">'+
        'C11 - Orce Nikolov </a> '},

    {city: 'C19 - Univerzalna Sala',
    desc: 'Ulica "Kosturski Heroi"',
    space: 'Broj na parking mesta: 26',
    lat: 41.999460,
    long: 21.417076,
    dir:'<a href="https://goo.gl/maps/mvmek3nxB8U2">'+
'Take me there </a> ',
    odd:'<a href="https://goo.gl/maps/mvmek3nxB8U2">'+
'C19 - Univerzalna Sala</a> '},

    {city: 'C15 Gjuro Gjakovikj',
    desc: 'Ulica "Miroslav Krlezha"',
    space: 'Broj na parking mesta: 64',
    lat: 42.000010,
    long: 21.422086,
    dir:'<a href="https://goo.gl/maps/nuAcCTykcU32">'+
'Take me there </a> ',
    odd:'<a href="https://goo.gl/maps/nuAcCTykcU32">'+
'C15 Gjuro Gjakovikj</a> '},

    {city: 'C17 Leninova',
    desc: 'Ulica "Aminta Treti "',
    space: 'Broj na parking mesta: 38',
    lat: 42.000361,
    long: 21.424489,
    dir:'<a href="https://goo.gl/maps/qrGPeYW9iHK2">'+
'Take me there </a> ',
    odd:'<a href="https://goo.gl/maps/qrGPeYW9iHK2">'+
'C17 Leninova </a> '},
//PROVERI
    {city: 'C9 Debar Maalo',
    desc: 'Ulica "Debarska,Nikola Trimpare "',
    space: 'Broj na parking mesta: 21',
    lat: 42.000361,
    long: 21.424489,
    dir:'<a href="https://goo.gl/maps/qrGPeYW9iHK2">'+
'Take me there </a> ',
    odd:'<a href="https://goo.gl/maps/7U5GDb24gk32">'+
'C9 Debar Maalo </a> '
    },
    {city: 'C8 Debar Maalo',
        desc: 'Ulica "Kosta Shahov "',
        space: 'Broj na parking mesta: 7',
        lat: 41.996119,
        long: 21.422837,
        dir:'<a href="https://goo.gl/maps/qPf8ACNNr4n">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/qPf8ACNNr4n">'+
        'C8 Debar Maalo</a> '
    },

    {city: 'Javno Parkiralishte-AMSM',
        desc: 'Bulevar "Mitropolit Teodosij Gologanov"',
        space: 'Broj na parking mesta: 111 +6(Kamioni na AMSM)',
        lat: 41.993837,
        long: 21.420774,
        dir:'<a href="https://goo.gl/maps/WF7mHT5vF972">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/WF7mHT5vF972">'+
        'Javno Parkiralishte-AMSM </a> '
    },

    {city: 'Javno Parkiralishte-Dom na pecat',
        desc: 'Ulica "Sv.Kiril i Metodij"',
        space: 'Broj na parking mesta: 173',
        lat: 41.993422,
            long: 21.422550,
        dir:'<a href="https://goo.gl/maps/11dQz33aBxr">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/11dQz33aBxr">'+
        'Javno Parkiralishte-Dom na pecat </a> '
    },

    {city: 'Javno Parkiralishte-Naroden Front',
        desc: 'Ulica "Naroden front"bb',
        space: 'Broj na parking mesta: 97',
        lat: 41.992956,
        long: 21.420581,
        dir:'<a href="https://goo.gl/maps/k5EV89DrUuD2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/k5EV89DrUuD2">'+
        'Javno Parkiralishte-Naroden Front</a> '
    },

    {city: 'Javno Parkiralishte-Treska',
        desc: 'Ulica "Naroden front"bb',
        space: 'Broj na parking mesta: 98',
        lat: 41.995123,
        long: 21.411912,
        dir:'<a href="https://goo.gl/maps/DfKy4L3zFaL2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/DfKy4L3zFaL2">'+
        'Javno Parkiralishte-Treska </a> '
    },

    {city: 'Javno Parkiralishte-Klinicki Centar',
        desc: 'Ulica "Majka Tereza" br.41A',
        space: 'Broj na parking mesta: 533',
        lat: 41.989762,
        long: 21.419996,
        dir:'<a href="https://goo.gl/maps/YYDQgYycvan">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/YYDQgYycvan">'+
        'Javno Parkiralishte-Klinicki Centar </a> '
    },

    {city: 'C45 Kompleksi objekti:Manu,Mtv,Sudska palata',
        desc: 'Bulevar "Kocho Racin"',
        space: 'Broj na parking mesta: 380',
        lat: 41.997680,
        long: 21.443278,
        dir:'<a href="https://goo.gl/maps/Nc8v8w7CMYC2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/Nc8v8w7CMYC2">'+
        'C45 Kompleksi objekti:Manu,Mtv,Sudska palata </a> '
    },

    {city: 'C46 Bogorodica (prodolzenie C45)',
        desc: 'Bulevar "Kocho Racin"',
        space: 'Broj na parking mesta: 193',
        lat: 41.995988,
        long: 21.442624,
        dir:'<a href="https://goo.gl/maps/d1eYwgEDjZr">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/d1eYwgEDjZr">'+
        'C46 Bogorodica (prodolzenie C45 </a> '
    },

    {city: 'Javno Parkiralishte-Transporten Centar',
        desc: 'Ulica "Vladimir Komarov" i Ulica "Belasica"',
        space: 'Broj na parking mesta: 173',
        lat: 41.992362,
        long: 21.447559,
        dir:'<a href="https://goo.gl/maps/XtLQ64VdJTz">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/XtLQ64VdJTz">'+
        'Javno Parkiralishte-Transporten Centar</a> '
    },

    {city: 'C33 Transporten Centar',
        desc: 'Ulica "Nikola Karev"',
        space: 'Broj na parking mesta: 136+96',
        lat: 41.991989,
        long:  21.445794,
        dir:'<a href="https://goo.gl/maps/Wn2NKiApUBz">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/Wn2NKiApUBz">'+
        'C33 Transporten Centar </a> '
    },


    {city: 'C35 Sproti Depo Pajak',
        desc: 'Ulica "Stale Popov"',
        space: 'Broj na parking mesta: 53',
        lat: 41.990298,
        long:21.443471,
        dir:'<a href="https://goo.gl/maps/wye2XmREukM2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/wye2XmREukM2">'+
        'C35 Sproti Depo Pajak </a> '
    },

    {city: 'Javno Parkiralishte-Transporten Centar 2',
        desc: '',
        space: '',
        lat: 41.989373,
        long:21.443267,
        dir:'<a href="https://goo.gl/maps/JBj2cJxikfR2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/JBj2cJxikfR2">'+
        'Javno Parkiralishte-Transporten Centar 2</a> '
    },

    {city: 'Javno Parkiralishte-Tutunski Kombinat',
        desc: 'Ulica "Prolet"',
        space: 'Broj na parking mesta: 134',
        lat: 41.987561,
        long: 21.437270,
        dir:'<a href="https://goo.gl/maps/g6Sw1wDnmqL2">'+
        'Take me there </a> ',
        odd:'<a href="https://goo.gl/maps/g6Sw1wDnmqL2">'+
        'Javno Parkiralishte-Tutunski Kombinat </a> '
    },



];

//Angular App Module and Controller
var app = angular.module('mapsApp', [])

    .config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/',
            {
                templateUrl: 'templates/home.html',
                controller: 'MapCtrl'
            })
            // route for the about page
            .when('/map',
            {
                templateUrl: 'templates/map.html',
                controller: 'MapCtrl'
            })
            .when('/garadge',
            {
                templateUrl: 'templates/garadge.html',
                controller: 'garadgeCtrl'
            })
           .when('/help',
            {
                templateUrl: 'templates/help.html',
                controller: 'directionsCtrl'
            })
            .when('/search',
            {
                templateUrl: 'templates/find.html',
                controller: 'NearCtrl'
            })
    })

    .controller('MapCtrl', function($scope) {

        var mapOptions = {
            zoom: 11,
            center: new google.maps.LatLng(41.9991965, 21.3548498),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var infoWindow1 = new google.maps.InfoWindow({map: $scope.map});
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };


                infoWindow1.setPosition(pos);
                infoWindow1.setContent('Your Location');
                $scope.map.setCenter(pos);
                $scope.map.setZoom(15)

            }, function () {
                handleLocationError(true, infoWindow1, map.getCenter());
            });
        }

        $scope.handleLocationError=function(browserHasGeolocation, infoWindow, pos) {
            infoWindow1.setPosition(pos);
            infoWindow1.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        };




        var infoWindow = new google.maps.InfoWindow();
       /* KRUGOVI ZA OPSTINI
        var myCity = new google.maps.Circle({
            center: new google.maps.LatLng(41.9991965, 21.3548498),
            map:$scope.map,
            radius:20000,
            strokeColor:"#0000FF",
            strokeOpacity:0.8,
            strokeWeight:0.3,
            fillColor:"#0000FF",
            fillOpacity:0.4
        }); */
        $scope.markers = [];
        var createMarker = function(info) {

            var marker = new google.maps.Marker({
                map: $scope.map,
                position: new google.maps.LatLng(info.lat, info.long),
                title: info.city
            });
            marker.content = '<div class="infoWindowContent">' + info.desc  +'</div>';
            marker.cont = '<div class="infoWindowContent">' + info.space +'</div>';
            marker.direct = '<div class="infoWindowContent">' + info.dir +'</div>';

            marker.setAnimation(google.maps.Animation.BOUNCE);
            setTimeout(function(){ marker.setAnimation(null); }, 5000);

            google.maps.event.addListener(marker, 'click', function() {
                infoWindow.setContent('<h3>' + marker.title + '</h3>' + marker.content + marker.cont +  marker.direct );
                infoWindow.open($scope.map, marker);
            });

            $scope.markers.push(marker);

        };

        for (i = 0; i < cities.length; i++) {
            createMarker(cities[i]);
        }

        $scope.openInfoWindow = function(e, selectedMarker) {
            e.preventDefault();
            google.maps.event.trigger(selectedMarker, 'click');
        }


    })

    /* ----------------------- KATNI GARAZI --------------------------*/

.controller('garadgeCtrl', function($scope) {

    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(41.9991965, 21.3548498),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

        var centarvar= new google.maps.LatLng(41.9874345, 21.4450046);

    var infoWindow1 = new google.maps.InfoWindow({map: $scope.map});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude

            };

            infoWindow1.setPosition(pos);
            infoWindow1.setContent('Your Location');
            $scope.map.setCenter(pos);
            $scope.map.setZoom(15)

        }, function () {
            handleLocationError(true, infoWindow1, map.getCenter());
        });
    }
    $scope.handleLocationError=function(browserHasGeolocation, infoWindow, pos) {
        infoWindow1.setPosition(pos);
        infoWindow1.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    };

$scope.centar=function(){
    $scope.map.setCenter(centarvar);
    $scope.map.setZoom(15);
};
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info1) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info1.lat, info1.long),
            title: info1.city,
            icon: 'img/garaza.png'
        });
        marker.content = '<div class="infoWindowContent">' + info1.desc + '</div>';
        marker.direct = '<div class="infoWindowContent">' + info1.dir +'</div>';

        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker.setAnimation(null); }, 5000);

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content + marker.direct);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    };

    for (i = 0; i < cities1.length; i++) {

        createMarker(cities1[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

})
/*-------------------DIRECTIONS-----------------
.controller('directionsC', function($scope, $document) {
    // map object
    $scope.map = {
        control: {},
        center: {
            latitude: -37.812150,
            longitude: 144.971008
        },
        zoom: 14
    };

    // marker object
    $scope.marker = {
        center: {
            latitude: -37.812150,
            longitude: 144.971008
        }
    }

    // instantiate google map objects for directions
    var directionsDisplay = new google.maps.DirectionsRenderer();
    var directionsService = new google.maps.DirectionsService();
    var geocoder = new google.maps.Geocoder();

    // directions object -- with defaults
    $scope.directions = {
        origin: "Collins St, Melbourne, Australia",
        destination: "MCG Melbourne, Australia",
        showList: false
    }

    // get directions using google maps api
    $scope.getDirections = function () {
        var request = {
            origin: $scope.directions.origin,
            destination: $scope.directions.destination,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function (response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap($scope.map.control.getGMap());
                directionsDisplay.setPanel(document.getElementById('directionsList'));
                $scope.directions.showList = true;
            } else {
                alert('Google route unsuccesfull!');
            }
        });
    }
});
*/

    // ---------------filter --------------------//
.controller('NearCtrl', function($scope) {


        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };


            }, function () {
                handleLocationError(true, infoWindow1, map.getCenter());
            });
        }

        $scope.handleLocationError = function (browserHasGeolocation, infoWindow, pos) {
            infoWindow1.setPosition(pos);
            infoWindow1.setContent(browserHasGeolocation ?
                'Error: The Geolocation service failed.' :
                'Error: Your browser doesn\'t support geolocation.');
        };
        //KAKO DA JA ZEMA VREDNOST OD POS (CURRENT LOCATION)????


        // ---------------------------  41.9874345,21.4450046 ; pos.lat, pos.lng



//calculates distance between two points in km's
        var p1 = new google.maps.LatLng(41.9874345, 21.4450046);
        function calcDistance(p1, p2) {
            return (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
        }

        var t = "";
        //!!!!!!!!!! da se napravi istoto i za katni garazi!!!!!!!!!!!

        for (i = 0; i < cities.length; i++) {
            var p2 = new google.maps.LatLng(cities[i].lat, cities[i].long);

            if (calcDistance(p1, p2) < 1) {
                $scope.none = false;

                t += calcDistance(p1, p2) + "km" + " - " + cities[i].odd + "<br>";
                $scope.dest1 = cities[i].space;


            }


        }



        document.getElementById("demo").innerHTML = t;

        var c="";
        for(i=14;i<cities.length;i++)
        {
            c+=cities[i].odd+"<br>";
        }
        document.getElementById("c_min").innerHTML = c;


})

// -------------------------- prebaraj po opshtini ------------------------------ //
.controller('directionsCtrl', function($scope) {



    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(41.9991965, 21.3548498),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

        $scope.map = new google.maps.Map(document.getElementById('map1'), mapOptions);



   /* var infoWindow1 = new google.maps.InfoWindow({map: $scope.map});
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude

            };

            infoWindow1.setPosition(pos);
            infoWindow1.setContent('Your Location');
            $scope.map.setCenter(pos);
            $scope.map.setZoom(15)

        }, function () {
            handleLocationError(true, infoWindow1, map.getCenter());
        });
    }
    $scope.handleLocationError=function(browserHasGeolocation, infoWindow, pos) {
        infoWindow1.setPosition(pos);
        infoWindow1.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
    }; */
// OPSHTINI!!!
    var centarvar= new google.maps.LatLng(41.996258, 21.431550);

    $scope.centar=function(){

        $scope.map.setCenter(centarvar);
        $scope.map.setZoom(16);
    };

    var karpos1var=new google.maps.LatLng(42.003894, 21.412793);
        $scope.karpos1=function(){
            $scope.map.setCenter(karpos1var);
            $scope.map.setZoom(16);
        };

        var karpos2var=new google.maps.LatLng(42.004353, 21.408309);
        $scope.karpos2=function(){
            $scope.map.setCenter(karpos2var);
            $scope.map.setZoom(16);
        };

        var karpos3var=new google.maps.LatLng(42.004592, 21.399018);
        $scope.karpos3=function(){
            $scope.map.setCenter(karpos3var);
            $scope.map.setZoom(16);
        };

        var karpos4var=new google.maps.LatLng(42.0064054,21.3855292);
        $scope.karpos4=function(){
            $scope.map.setCenter(karpos4var);
            $scope.map.setZoom(16);
        };

        var avar=new google.maps.LatLng(41.982711, 21.471222);
        $scope.a=function(){
            $scope.map.setCenter(avar);
            $scope.map.setZoom(16);
        };
// ----------------
    $scope.markers = [];

    var infoWindow = new google.maps.InfoWindow();

    var createMarker = function(info1) {

        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info1.lat, info1.long),
            title: info1.odd,
            icon: 'img/yellow.png'
        });
        marker.content = '<div class="infoWindowContent">' + info1.desc + '</div>';

        marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function(){ marker.setAnimation(null); }, 5000);

        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.setContent('<h5>' + marker.title + '</h5>' + marker.content);
            infoWindow.open($scope.map, marker);
        });

        $scope.markers.push(marker);

    };

    for (i = 0; i < cities1.length; i++) {

        createMarker(cities1[i]);
    } 
        for(i=0;i<cities.length; i++){
            createMarker(cities[i]);
        }

    $scope.openInfoWindow = function(e, selectedMarker) {
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }

});
