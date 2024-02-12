//@ts-nocheck
import {metricNbPost, metricNbPostAlerte, stateInscrit} from "../../data";
import {Table} from "antd";
import {useAppContext} from "../../context/contextProvider.tsx";
import {useEffect} from "react";


const columns= [
    {
        title: 'Nom de la Statistique',
        dataIndex: 'metrique',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Valuers',
        dataIndex: 'mesure',
        sorter: {
            compare: (a, b) => a.chinese - b.chinese,
            multiple: 3,
        },
    },
    {
        title: 'Unite',
        dataIndex: 'unite',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: <label className={"hidden lg:block"}>Seuil</label>,
        dataIndex: 'seuil',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
        },
    },
    {
        title: <label className={"hidden lg:block"}> Entite</label>,
        dataIndex: 'entite',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
    {
        title: 'Horodatege',
        dataIndex: 'dates',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
];

export default function AlerteInscription() {
    const {search}=useAppContext()
    let dts2=[]
    dts2=stateInscrit.filter(item=>item.metrique.toLowerCase()==search.toLowerCase() || item.entite.toLowerCase()==search.toLowerCase() || item.mesure==search || item.os.toLowerCase()==search.toLowerCase())

    return (
        <Table columns={columns} dataSource={dts2.length>0 ?dts2:stateInscrit} className={"shadow border"} responsive={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}/>
    );
}
