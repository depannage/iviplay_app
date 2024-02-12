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