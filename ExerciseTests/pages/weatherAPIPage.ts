import { APIRequestContext, expect } from "@playwright/test";

export class openWeather{
    constructor(private apiContext: APIRequestContext){}

    async getTemp(city: string, country: string, apiKey: string) {
        const response = await this.apiContext.get('http://api.openweathermap.org/data/2.5/weather', {
            params: { q: `${city},${country}`, APPID: apiKey },
        });

        expect(response.status()).toBe(200);
        expect(response.body.length).not.toBeNull();
        return await response.json();
    }
}