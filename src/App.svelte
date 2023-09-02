<script>
	import Header from "./components/Header.svelte";
	import Chart from "./components/Chart.svelte";
	import PolarChart from "./components/PolarChart.svelte";
</script>

<main>
	<Header />
	<Chart />
	<PolarChart />
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
