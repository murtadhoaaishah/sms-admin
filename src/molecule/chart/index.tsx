import React from 'react'
import Chart from 'react-apexcharts'


const Chartt = () => {

    let initaloptions: any = {
        series: [
            {

                data: [
                    1850, 2150, 2030, 1790, 2100, 2150, 2025, 2065, 1850, 2050, 2085
                ]
            },
            {
                data: [
                    1950, 2250, 2130, 1890, 2200, 2250, 2125, 2165, 1950, 2150, 2185
                ]
            }
        ],


        options: {
            colors: ["rgba(47, 128, 237, 0.2)", "#2F80ED"],

            chart: {
                toolbar: {
                    show: false
                }
            },
            grid: {
                strokeDashArray: 5
            },
            plotOptions: {
                bar: {
                    vartical: true,
                    borderRadius: 4,
                    columnWidth: 30
                }
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: 'white'
            },
            legend: {
                show: false,
            },
            tooltip: {
                shared: true,
                intersect: false,
            },
            xaxis: {
                categories: ['March 26', 'March 27', 'March 28', 'March 29', 'March 30', 'March 31', 'Apr 1', 'Apr 2', 'Apr 3', 'Apr 4', 'Apr 5'],
                axisTick: {
                    show: false
                }

            },
        },

    }

    return (
        <div>
            <Chart
                options={initaloptions.options}
                series={initaloptions.series}
                type='bar' height={270} />
        </div >

    )
}


export default Chartt
