<script>
    import { dataStore, fetchData, population } from "./store.js";
    import { PolarArea } from "svelte-chartjs";
    import {
        Chart as ChartJS,
        Title,
        Tooltip,
        Legend,
        ArcElement,
        RadialLinearScale,
    } from "chart.js";

    ChartJS.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);

    let countryDataStore = [];

    // Fetch data when the component is mounted
    fetchData();

    // Subscribe to changes in the dataStore
    dataStore.subscribe((data) => {
        countryDataStore = data.slice(0, 10);
        console.log(countryDataStore);
    });
    console.log(population);
    const data = {
        datasets: [
            {
                data: [
                    4649660, 5352000, 3194034, 19286123, 97928, 544, 50882884,
                    19116209, 31072945, 33691,
                ],
                backgroundColor: [
                    "rgba(247, 70, 74, 0.5)",
                    "rgba(70, 191, 189, 0.5)",
                    "rgba(253, 180, 92, 0.5)",
                    "rgba(148, 159, 177, 0.5)",
                    "rgba(77, 83, 96, 0.5)",
                    "rgba(67, 40, 145, 0.8)",
                    "rgba(10, 68, 46, 0.8)",
                    "rgba(31, 83, 29, 0.8)",
                    "rgba(15, 51, 2, 0.8)",
                    "rgba(77, 201, 31, 0.8)",
                ],
                label: "My dataset", // for legend
            },
        ],
        labels: [
            "Country 1",
            "Country 2",
            "Country 3",
            "Country 4",
            "Country 5",
            "Country 6",
            "Country 7",
            "Country 8",
            "Country 9",
            "Country 10",
        ],
    };
</script>

<main>
    <div class="chart_table">
        <table id="customers">
            <tr id="t_header">
                <th class="header_mar">Flag</th>
                <th class="header_mar">Name</th>
                <th class="header_mar">Population</th>
                <th class="header_mar">CIOC</th>
                <th class="header_mar">UN Member Status</th>
                <th class="header_mar">Currencies</th>
                <th class="header_mar">Language</th>
            </tr>

            {#each countryDataStore as country}
                <tr class="raw_data">
                    <td class="box">
                        <img class="flag" src={country.flags.png} alt="image" />
                    </td>
                    <td class="country">{country.name.common}</td>
                    <td class="country">{country.population}</td>
                    <td class="country">{country.cioc}</td>
                    <td class="country">
                        {#if country.unMember === true}
                            <p><span class="unmy">Yes</span></p>
                        {:else}
                            <p><span class="unmn">No</span></p>
                        {/if}
                    </td>
                    <td class="country">
                        {country?.currencies?.MRU?.symbol}
                    </td>
                    <td class="country">{country.languages.ara}</td>
                </tr>
            {/each}
        </table>
    </div>
    <div class="polar_chart">
        <PolarArea {data} options={{ responsive: true }} />
    </div>
</main>

<style>
    main {
        display: flex;
        margin-top: 30px;
    }
    #customers {
        border: 1px solid #ddd;
        padding: 8px;
    }
    .polar_chart {
        width: 400px;
        height: 400px;
    }
    .chart_table {
        padding-left: 64px;
        margin-top: 20px;
        padding-bottom: 20px;
    }
    th {
        padding-top: 2px;
        padding-bottom: 2px;
        border-bottom: 1px solid #ddd;
    }

    td {
        border-bottom: 1px solid #ddd;
    }
    #t_header {
        border-bottom: 1px solid #ddd;
    }
    .header_mar {
        padding-left: 10px;
    }
    .raw_data {
        margin-left: 10px;
        border: 1px solid red;
    }
    .country {
        text-align: center;
    }
    .unmy {
        background-color: rgb(207, 201, 201);
        padding-left: 3px;
        padding-right: 3px;
        color: white;
        border-radius: 4px;
    }
    .unmn {
        background-color: rgb(155, 149, 149);
        padding-left: 3px;
        padding-right: 3px;
        color: white;
        border-radius: 4px;
    }
    .flag {
        width: 30px;
        height: 20px;

        border-radius: 5px;
    }
    @media only screen and (max-width: 600px) {
        /* body {
            background-color: lightblue;
        } */
        main {
            display: block;
            margin-top: 30px;
        }
        .chart_table {
            padding-left: 0px;
            margin-top: 20px;
            padding-bottom: 20px;
            width: 100%;
            overflow: hidden;
            overflow-x: auto;
        }
        #customers {
            border: 1px solid #ddd;
            padding: 8px;
            width: 100%;
        }
    }
</style>
