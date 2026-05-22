export async function weatherApi (city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=3c749fa603904ff09b0193446263103&q=${city}&aqi=no`;
    try {
        const response = await fetch(url)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error(error.message);
    }
}