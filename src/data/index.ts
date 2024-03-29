// nombre de poste
import {actif, conn, down, form, hum, post, reservation, tco} from "../assets";

export const metricNbPost=[
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 10, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-02-20").toDateString(), terminal: "Alpha", mesure: 7,unite: 'posts',seuil:10},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-04-20").toDateString(), terminal: "Alpha", mesure: 7,  unite: 'posts',seuil:10},
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-10-20").toDateString(), terminal: "Alpha", mesure: 12, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 18, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-06-20").toDateString(), terminal: "Alpha", mesure: 25,unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 5, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 10, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-02-20").toDateString(), terminal: "Alpha", mesure: 7,unite: 'posts',seuil:10},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-04-20").toDateString(), terminal: "Alpha", mesure: 7,  unite: 'posts',seuil:10},
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-10-20").toDateString(), terminal: "Alpha", mesure: 12, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 18, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-06-20").toDateString(), terminal: "Alpha", mesure: 25,unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 5, unite: 'posts',seuil:10},
]
export const metricNbPostAlerte=[
    {metrique: "Nombre de posts Yammers publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 12, unite: 'posts',seuil:10},
    {metrique: "Nombre de posts hygiene et proprete publies du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-02-20").toDateString(), terminal: "Alpha", mesure: 18,unite: 'posts',seuil:10},
    {metrique: "Nombre de posts sur la sécurité publies", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-04-20").toDateString(), terminal: "Alpha", mesure: 25,  unite: 'posts',seuil:10},
]

//metrices

export const metricsCard = [
    //*****USAGE************//
    {title: "Nombre d'inscriptions aux formulaires", count: 78514, icone: form, component: 'inscription', isActif: true, isSelected: false, isAlert: true, seuil: 350, unite: "utilisateur", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de connexions via le module d’authentification", count: 675, icone: conn, component: 'connexion', isActif: true, isSelected: false, isAlert: true, seuil: 150, unite: "connexion", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de services actifs", count: 5, icone: actif, component: 'metier', isActif: true, isSelected: false, isAlert: true, seuil: 7, unite: "jour", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre de telechargements unitaires", count: 5, icone: down, component: 'telechargement', isActif: true, isSelected: false, isAlert: true, seuil: 500, unite: "telechargement", categorie: 'usage', isEditeSeuil: false},
    {title: "Nombre d’activations de l’application", count: 5, icone: actif, component: 'activation', isActif: true, isSelected: false, isAlert: true, seuil: 5000, unite: "activation", categorie: 'usage', isEditeSeuil: false},

    {title: "Nombre de post publies", count: 282, icone: post, component: 'actu', isActif: true, isSelected: true, isAlert: true, seuil: 10, unite: "post", categorie: 'actu', isEditeSeuil: false},
    {title: "Nombre de reservation de salle", count: 16, icone: reservation, component: 'reservation', isActif: true, isSelected: false, isAlert: true, seuil: 70, unite: "reservation",categorie: 'reservation', isEditeSeuil: false},
    {title: "Taux de CO²", count: 16, icone: tco, component: 'co', isActif: true, isSelected: false, isAlert: true, seuil: 400, unite: "ppm", categorie: 'env', isEditeSeuil: false},
    {title: "Taux d'humidite", count: 16, icone:hum, component: 'humidite', isActif: true, isSelected: false, isAlert: true, seuil: 50, unite: "%", categorie: 'env', isEditeSeuil: false},
]

export const stateReservation=[
    {metrique: "Nombre de reservation de salles communes du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-22").toLocaleDateString() , mesure: 1350, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
    {metrique: "Nombre de reservation de salles Iviflo du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-21").toLocaleDateString() , mesure: 58, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
    {metrique: "Nombre de reservation de salles Iviplay du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-21").toLocaleDateString() , mesure: 83, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
    {metrique: "Nombre de reservation de salles à l'etage 1 du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toLocaleDateString() , mesure: 823, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
    {metrique: "Nombre de reservation de salles à l'etage 2 du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-19").toLocaleDateString() , mesure: 82, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
    {metrique: "Nombre de reservation de salles à l'etage 3 du jour", entite: "Iviplay", os: "Android", dates: new Date("2023-12-19").toLocaleDateString() , mesure: 600, usager: '', selected: false, terminal: '', codeDesc: '', unite: 'reservation'},
]

export const stateInscrit=[
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Android", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 123, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via IOS", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 110, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Desk", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 42, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Android", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 123, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Ios", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 110, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour via Desk", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 42, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
]

export const usageState=[
    {metrique: "Nombre de telechargements unitaires d'IOS du jour", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 45, unite: 'telechargements', selected: false, codeDesc: 'nb_download'},
    {metrique: "Nombre de telechargements unitaires d'android du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 56, unite: 'telechargements', selected: false, codeDesc: 'nb_download'},

    {metrique: "Nombre d'inscriptions aux formulaires du jour sur Android", entite: "Iviplay", os: "Android", dates: new Date("2023-12-20").toDateString(), mesure: 123, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour sur IOS", entite: "Iviplay", os: "IOS", dates: new Date("2023-12-20").toDateString(), mesure: 110, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},
    {metrique: "Nombre d'inscriptions aux formulaires du jour sur Desk", entite: "Iviplay", os: "Desk", dates: new Date("2023-12-20").toDateString(), mesure: 42, usager: '', selected: false, terminal: '', codeDesc: 'nb_inscrit', unite: 'inscriptions'},

    {metrique: "Nombre de connexions IOS du jour", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 782, selected: false, codeDesc: 'nb_connect', unite: 'connexions'},
    {metrique: "Nombre de connexions android du jour", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 432, selected: false, codeDesc: 'nb_connect', unite: 'connexions'},
    {metrique: "Nombre d’activations du jour de l’application IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 346, selected: false, codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Nombre d’activations du jour de l’application android", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 312, selected: false, codeDesc: 'nb_activation', unite: 'activations'},
    {metrique: "Duree moyenne du jour d’activation sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 18, selected: false, codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne du jour d’activation sur android", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 16, selected: false, codeDesc: 'duree_activation', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 7, selected: false, codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Duree moyenne de veille du jour sur Android", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 8, selected: false, codeDesc: 'duree_veille', unite: 'heures'},
    {metrique: "Nombre de jours d’utilisation sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 48, selected: false, codeDesc: 'jr_utilisation', unite: 'jours'},
    {metrique: "Nombre de jours d’utilisation sur android", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 40, selected: false, codeDesc: 'jr_utilisation', unite: 'jours'},
    {metrique: "Nombre moyenne du jour de changements de modes sur IOS", entite: "Iviplay", os: "IOS", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 986, selected: false, codeDesc: 'nb_change', unite: 'clics'},
    {metrique: "Nombre moyenne du jour de changements de modes sur android", entite: "Iviplay", os: "Android", usager: "Occupant", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 986, selected: false, codeDesc: 'nb_change', unite: 'clics'},
    {metrique: "Nombre moyenne du jour d’ouverture de services sur IOS", entite: "Iviplay", os: "IOS", usager: "Prestataire", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 774, selected: false, codeDesc: 'nb_ouverture', unite: 'clics'},
    {metrique: "Nombre moyenne du jour d’ouverture de services sur android", entite: "Iviplay", os: "android", usager: "Prestataire", dates: new Date("2023-12-20").toDateString(), terminal: "Alpha", mesure: 704, selected: false, codeDesc: 'nb_ouverture', unite: 'clics'},
]

