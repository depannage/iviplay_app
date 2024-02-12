import { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import {metricNbPost, stateReservation} from "../../data";

export default function NbReservationGrapgic() {
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
                    label: 'Reservation',
                    fill: false,
                    borderColor:'#ecb6c3',
                    yAxisID: 'y1',
                    tension: 0.4,
                    data: stateReservation?.filter(ite=>ite.entite=="Iviplay").map(ite=>ite?.mesure)
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
