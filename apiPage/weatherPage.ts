import { APIRequestContext, expect } from "@playwright/test";
import { weatherConfig } from "../utils/config";


export class OpenWeatherAPI{
    constructor(private readonly api: APIRequestContext){}

    async getTemp(city: string) {
        const response = await this.api.get(`${weatherConfig.baseURL}/weather`, {
            params: { q: city, APPID: weatherConfig.apiKey },
        });

        expect(response.status()).toBe(200);
        expect(response.body.length).not.toBeNull();
        return await response;
    }
}