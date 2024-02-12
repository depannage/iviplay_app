//@ts-nocheck
import {metricNbPost, metricNbPostAlerte} from "../../data";
import {Table} from "antd";
import {useAppContext} from "../../context/contextProvider.tsx";


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

export default function AlerteView() {
    const {current}=useAppContext()
    return (
        <Table columns={columns} dataSource={current===1 ?metricNbPost:metricNbPostAlerte} className={"shadow border"} responsive={['xxl', 'xl', 'lg', 'md', 'sm', 'xs']}/>
    );
}
