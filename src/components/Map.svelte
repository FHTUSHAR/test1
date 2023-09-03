<!-- src/components/OpenLayersMap.svelte -->
<script>
    import { onMount } from "svelte";
    import Map from "ol/Map";
    import View from "ol/View";
    import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
    import { OSM, Vector as VectorSource } from "ol/source";
    import GeoJSON from "ol/format/GeoJSON";

    onMount(() => {
        // Initialize the map
        const map = new Map({
            target: "map",
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
                new VectorLayer({
                    source: new VectorSource({
                        format: new GeoJSON(),
                        url: "../components/data.geojson", // Replace with the path to your GeoJSON file or use inline data
                    }),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 2,
            }),
        });
    });
</script>

<div id="map" />

<style>
    #map {
        width: 100%;
        height: 400px;
        padding-bottom: 20px;
    }
</style>
