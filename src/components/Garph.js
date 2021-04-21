import { Line } from 'react-chartjs-2'
export const Graph = (props) => {
    const { iteration} = props
    const data = {
        labels: iteration.map((r) => r.prot),
        datasets: [
            {
                label: 'Value',
                data: iteration.map((r) => r.p),
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
                tension: 0.5,
            },
        ],
    }
    const options = {
        layout: {
            padding: 20,
        },
        responsive: true,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    }
    return (
        <Line data={data} options={options} width={'0.25'} height={'0.125'} />
    )
}
export default Graph
