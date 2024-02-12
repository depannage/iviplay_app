// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend,
//     ResponsiveContainer,
// } from 'recharts';
//
// const data = [
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//
// ];
//
// const NbPostGraphic=()=> {
//         return (
//                 <ResponsiveContainer width={'100%'} height={400}>
//                     <LineChart width={500} height={300} data={data}>
//                         <CartesianGrid strokeDasharray="3 3" />
//                         <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
//                         <YAxis />
//                         <Tooltip />
//                         <Legend />
//                         <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                         <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                     </LineChart>
//                 </ResponsiveContainer>
//         );
// }
//
//
// export default  NbPostGraphic

import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import {metricNbPost, stateInscrit} from "../../data";

export default function NbInscription() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels:metricNbPost.map((ite=>new Date(ite.dates).toLocaleDateString())),
            datasets: [

                {
                    label: 'Android',
                    fill: false,
                    borderColor:'#ecb6c3',
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: metricNbPost?.filter(ite=>ite.metrique=="Nombre d'inscriptions aux formulaires du jour via Android").map(ite=>ite?.mesure)
                },
                {
                    label: 'IOS',
                    fill: false,
                    borderColor:'#43505f',
                    yAxisID: 'y1',
                    tension: 0.4,
                    data:metricNbPost?.filter(ite=>ite.metrique=="Nombre d'inscriptions aux formulaires du jour via IOS").map(ite=>ite?.mesure)
                },
                {
                    label: 'Desk',
                    fill: false,
                    borderColor: '#a5a5a5',
                    yAxisID: 'y1',
                    tension: 0.5,
                    data:stateInscrit?.filter(ite=>ite.metrique=="Nombre d'inscriptions aux formulaires du jour via Desk").map(ite=>ite?.mesure)
                },
            ]
        };
        const options = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                // }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div  style={{width:'100%'}}>
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    )
}
