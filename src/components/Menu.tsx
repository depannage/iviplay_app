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
        de bord</Link>, '91'),
    getItem('Statistiques', 'sub2', <img src={state} width={20} height={20}/>, [
        getItem(<Link to="/state/usage" className={`flex gap-2 items-center  w-full ${url==="/state/usage" && 'bg-darkMain h-10 p-2 rounded-lg text-secondary'}`}>St. d'usage</Link>, '92'),
        getItem(<Link to="/entreprise/articles">St. de Flux</Link>, '93'),
        getItem(<Link to={'/entreprise/interview'}>St. Fil Attente</Link>, '94'),
        getItem(<Link to={'/entreprise/interview'}>St. d'environement</Link>, '95'),
        getItem(<Link to={'/entreprise/interview'}>St. Control d'acces</Link>, '96'),
        getItem(<Link to={'/entreprise/interview'}>St. Fil Attente</Link>, '97'),
        getItem(<Link to={'/entreprise/interview'}>St. de Missions</Link>, '98', <LiaFlagSolid/>, [
            getItem(<Link to={'/entreprise/interview'}>Timing resolution des tickets</Link>, '99'),
            getItem(<Link to={'/entreprise/interview'}>Nombre de Tickets</Link>, '100'),
            getItem(<Link to={'/entreprise/interview'}>Enquettes Satisfaction</Link>, '101'),
            getItem(<Link to={'/entreprise/interview'}>Ressources</Link>, '103'),
        ]),
        getItem(<Link to={'/entreprise/interview'}>St. de Reservations</Link>, '104'),
    ]),
    getItem('Plateform', 'sub3', <img src={plate} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Gestion Authentificastion</Link>, '2'),
        getItem(<Link to="/entreprise/articles">Gestion Support</Link>, '3'),
        getItem(<Link to={'/entreprise/interview'}>Gestion de Droit</Link>, '4'),
        getItem(<Link to={'/entreprise/interview'}>Gestion des Utilisateurs</Link>, '5'),
    ]),
    getItem('Fonctionalites Mobile', 'sub4', <img src={mobile} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Version</Link>, '33'),
        getItem(<Link to="/entreprise/articles">Inscription</Link>, '23'),
        getItem(<Link to={'/entreprise/interview'}>Connexion</Link>, '24'),
    ]),
    getItem('Services Mobile', 'sub5', <img src={sm} width={20} height={20}/>, [
        getItem(<Link to="/entreprise/offre">Espaces</Link>, '34'),
        getItem(<Link to="/entreprise/articles">Informations</Link>, '35'),
        getItem(<Link to={'/entreprise/interview'}>Controle d'acces</Link>, '36'),

    ]),

    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Fil d'actualite</Link>, '80', <img src={fil} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Cartographie</Link>, '81', <img src={cat} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Mobile</Link>, '82', <img src={mobile} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Equipement</Link>, '83', <img src={equipe} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Connecteurs</Link>, '84', <img src={connecteur} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>User Account</Link>, '85', <img src={logdash} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Support</Link>, '86', <img src={log1} width={20} height={20}/>),
    getItem(<Link to={'/home'} className={`flex gap-2 items-center  w-full`}>Parametres</Link>, '87', <img src={log3} width={20} height={20}/>),
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
