import { req } from '@/api/axios';
import { Event } from '@/types/Event';
import { SearchResult } from '@/types/SearchResult';
import axios from 'axios';


export const getEvent = async (id: number): Promise<Event | null> => {
    const json = await req.get(`/events/${id}`);
    return json.data.event as Event ?? false;
}

export const searchCPF = async (eventId: number, cpf: string): Promise<SearchResult | false> => {
    console.log(eventId);
    console.log(cpf);
    //const json = await req.get(`/events/${eventId}/search?cpf=${cpf}`);
    const json = await axios.get(`http://localhost:3001/events/${eventId}/search?cpf=${cpf}`)
    if (json.data.person && json.data.personMatched) {
        return json.data as SearchResult;
    }
    return false;
}