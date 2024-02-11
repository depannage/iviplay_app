//@ts-nocheck
import React, {useState} from 'react';
import {Menu} from 'antd';
import type {MenuProps, MenuTheme} from 'antd/es/menu';
import {Link} from "react-router-dom";
import {useRoutes} from "react-router-dom";
import {cat, connecteur, equipe, fil, log1, log3, logdash, mobile, plate, sm, state} from "../assets";
import {LiaFlagSolid} from "react-icons/lia";
import {DashboardOutlined} from "@ant-design/icons";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key?: string | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}
const url =window.location.pathname;
const items: MenuItem[] = [
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full ${url==="/home" && 'bg-darkMain h-10 p-2 rounded-lg text-secondary'}`}><DashboardOutlined size={25}/> Tableau
        de bord</Link>, '1'),
    getItem('Statistiques', 'sub1', <img src={state} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">St. d'usage</Link>, '2'),
        getItem(<Link to="/entreprise/articles">St. de Flux</Link>, '3'),
        getItem(<Link to={'/entreprise/interview'}>St. Fil Attente</Link>, '4'),
        getItem(<Link to={'/entreprise/interview'}>St. d'environement</Link>, '5'),
        getItem(<Link to={'/entreprise/interview'}>St. Control d'acces</Link>, '6'),
        getItem(<Link to={'/entreprise/interview'}>St. Fil Attente</Link>, '7'),
        getItem(<Link to={'/entreprise/interview'}>St. de Missions</Link>, '8', <LiaFlagSolid/>, [
            getItem(<Link to={'/entreprise/interview'}>Timing resolution des tickets</Link>, '4'),
            getItem(<Link to={'/entreprise/interview'}>Nombre de Tickets</Link>, '5'),
            getItem(<Link to={'/entreprise/interview'}>Enquettes Satisfaction</Link>, '6'),
            getItem(<Link to={'/entreprise/interview'}>Ressources</Link>, '7'),
        ]),
        getItem(<Link to={'/entreprise/interview'}>St. de Reservations</Link>, '7'),
    ]),
    getItem('Plateform', 'sub11', <img src={plate} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Gestion Authentificastion</Link>, '2'),
        getItem(<Link to="/entreprise/articles">Gestion Support</Link>, '3'),
        getItem(<Link to={'/entreprise/interview'}>Gestion de Droit</Link>, '4'),
        getItem(<Link to={'/entreprise/interview'}>Gestion des Utilisateurs</Link>, '5'),
    ]),
    getItem('Fonctionalites Mobile', 'sub10', <img src={mobile} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Version</Link>, '3'),
        getItem(<Link to="/entreprise/articles">Inscription</Link>, '3'),
        getItem(<Link to={'/entreprise/interview'}>Connexion</Link>, '4'),
    ]),
    getItem('Services Mobile', 'sub14', <img src={sm} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Espaces</Link>, '3'),
        getItem(<Link to="/entreprise/articles">Informations</Link>, '3'),
        getItem(<Link to={'/entreprise/interview'}>Controle d'acces</Link>, '4'),

    ]),

    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Fil d'actualite</Link>, '1', <img src={fil} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Cartographie</Link>, '1', <img src={cat} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Mobile</Link>, '1', <img src={mobile} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Equipement</Link>, '1', <img src={equipe} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Connecteurs</Link>, '1', <img src={connecteur} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>User Account</Link>, '1', <img src={logdash} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Support</Link>, '1', <img src={log1} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Parametres</Link>, '1', <img src={log3} width={20} height={20}/>),
];

const Menus = () => {
    const [mode, setMode] = useState<'inline'>('inline');
    // @ts-ignore
    const [theme, setTheme] = useState<MenuTheme>('#2d5989');
    return (
        <>
            <Menu
                style={{width: 203, color: "#ffffff", fontsize: 14}}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items}
                className={'text-[12px] p-0 m-0 gap-3 font-bold overflow-hidden custom-scrollbar overflow-y-auto  menu min-w-full'}
            />
        </>
    );
};

export default Menus;
