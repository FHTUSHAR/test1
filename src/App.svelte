<script>
	import Header from "./components/Header.svelte";
	import Chart from "./components/Chart.svelte";
	import Map from "./components/Map.svelte";
</script>

<main>
	<Header />
	<Chart />
	<Map />
</main>

<style>
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
