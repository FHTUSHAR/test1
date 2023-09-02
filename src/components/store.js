// store.js
import { writable } from 'svelte/store';

// Create a writable store to hold your data
export const dataStore = writable([]);
export const population = []
let polar;
// Function to fetch and update the data in the store
export async function fetchData() {
    try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        if (response.ok) {
            const data = await response.json();
            polar = data.slice(0, 10)
            for (let i = 0; i < polar.length; i++) {
                population.push(polar[i].population)
            }
            dataStore.set(data);
            console.log(population)
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


// fetchData();