import {AxiosResponse} from "axios";
import axiosHelper,{axiosError,axiosResponse} from "../utils/axiosHelper";

import axios from 'axios';
import CONFIG from 'src/config';
import { Event } from 'src/interfaces/event';
/**
 * API Client to interact with the service.
 */
const APIClient = axios.create({
    baseURL: CONFIG.SERVICES.EVENT_SERVICE.URL,
    timeout: 10000,
    //    params: {
    //      api_key: CONFIG.SERVICES.LOADER.API_KEY,
    //    },
});

class EventService{
    async getEvents():Promise<axiosError|axiosResponse<Event[]>>{
        const url = `/events`;
        let response: AxiosResponse;
        let result;
        try {
            response = await APIClient.get(url);
            result = axiosHelper.handleResponse(response);
        } catch (error:any) {
            result = axiosHelper.handleError(error);
        }
        return result;
    }
    async getEventsMock():Promise<Event[]>{
        return [
            {
                id : "1",
                name: "evento 1",
                title: "evento 1",
                description: "evento 1",
                type: 'evento 1',
                date: "evento 1",
                location: "evento 1",
                minPrice: "evento 1",
                owner : "dilan",
            }
        ]
    }

}
export default new EventService();
