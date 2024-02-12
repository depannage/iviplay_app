//@ts-nocheck
import {metricNbPost, metricNbPostAlerte, stateUsage, usageState} from "../../data";
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
        title: <label className={"hidden lg:block"}> Entite</label>,
        dataIndex: 'entite',
        sorter: {
            compare: (a, b) => a.english - b.english,
            multiple: 1,
        },
    },
    {
        title: 'Os',
        dataIndex: 'os',
        sorter: {
            compare: (a, b) => a.math - b.math,
            multiple: 2,
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

export default function AlerteView() {
    const {current,search,searchEntite,searchOs,searchDated,searchDatef}=useAppContext()
    let dts1=[];

    dts1=usageState.filter(item=>item.metrique.toLowerCase()==search.toLowerCase() ||item.unite==search.toLowerCase() ||item.entite==search.toLowerCase()|| item.mesure==search || item.os.toLowerCase()==search.toLowerCase()||item.entite.toLowerCase()==searchEntite.toLowerCase()||item.os.toLowerCase()==searchOs.toLowerCase()||item.dates==new Date(searchDated).toDateString())

    return (
        <Table columns={columns} dataSource={dts1.length >0 ? dts1:usageState} className={"shadow border"} responsive={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}/>
    );
}
