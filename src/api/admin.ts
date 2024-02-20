import { req } from './axios';
import { getCookie } from 'cookies-next';
import { Event } from '@/types/Event';
import { Group } from '@/types/Group';
import { PersonComplete } from '@/types/PersonComplete';
import axios from 'axios';

//chamada de login
export const login = async (password: string) => {
    try {
        const json = await req.post('/admin/login', { password });
        return json.data.token as string ?? false
    } catch (error) {
        return false;
    }
}
/**========================================================================================================= */
//EVENTS
//chamada de eventos
export const getEvents = async () => {
    const token = getCookie('token')
    const json = await req.get('/admin/events', {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.events as Event[] ?? [];
}
//adicionando evento
type AddEventData = {
    title: string;
    description: string;
    grouped: boolean;
}

export const addEvent = async (data: AddEventData): Promise<Event | false> => {
    const token = getCookie('token');
    const json = await req.post('/admin/events', data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.event as Event ?? false;
}
//atualizando evento

type UpdateEventData = {
    title?: string;
    description?: string;
    grouped?: boolean;
    status?: boolean;
}

export const updateEvent = async (id: number, data: UpdateEventData): Promise<Event | false> => {
    const token = getCookie('token');
    const json = await req.put(`/admin/events/${id}`, data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.event as Event ?? false;
}


//deletando evento
export const deleteEvent = async (id: number) => {
    const token = getCookie('token')
    const json = await req.delete(`/admin/events/${id}`, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return !json.data.error;
}
/**========================================================================================================= */
//GROUPS
//buscando grupos
export const getGroups = async (eventId: number) => {
    const token = getCookie('token');
    const json = await req.get(`/admin/events/${eventId}/groups`, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.groups as Group[] ?? [];
}
//adicionando um grupo
type AddGroupData = {
    name: string
}
export const AddGroup = async (eventId: number, data: AddGroupData): Promise<Group | false> => {
    const token = getCookie('token');
    const json = await req.post(`/admin/events/${eventId}/groups`, data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.group as Group ?? false
}
//atualizando um grupo
type UpdateGroupData = {
    name: string
}
export const UpdateGroup = async (eventId: number, id: number, data: UpdateGroupData): Promise<Group | false> => {
    const token = getCookie('token');
    const json = await req.put(`/admin/events/${eventId}/groups/${id}`, data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.group as Group ?? false
}
//deletando um grupo
export const deleteGroup = async (eventId: number, id: number) => {
    const token = getCookie('token');
    const json = await req.delete(`/admin/events/${eventId}/groups/${id}`, {
        headers: { 'Authorization': `Token ${token}` }
    })
    return !json.data.error;
}
/**========================================================================================================= */
//People
//buscando pessoas
export const getPeople = async (eventId: number, groupId: number) => {
    const token = getCookie('token');
    const json = await req.get(`/admin/events/${eventId}/groups/${groupId}/people`,
    //const json = await axios.get(`http://localhost:3001/admin/event/${eventId}/groups/${groupId}/people`,
        {
            headers: { 'Authorization': `Token ${token}` }
        });
    return json.data.people as PersonComplete[] ?? [];
}
//adicionando uma pessoa
type AddPersonData = {
    name: string;
    cpf: string
}
export const AddPerson = async (eventId: number, groupId: number, data: AddPersonData): Promise<PersonComplete | false> => {
    const token = getCookie('token');
    const json = await req.post(`/admin/events/${eventId}/groups/${groupId}/people`, data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.person as PersonComplete ?? false;
}
//atualizando uma pessoa
type UpdatePersonData = {
    name?: string;
    cpf?: string
}
export const updatePerson = async (eventId: number, groupId: number, id: number, data: UpdatePersonData): Promise<PersonComplete | false> => {
    const token = getCookie('token');
    const json = await req.put(`/admin/events/${eventId}/groups/${groupId}/people/${id}`, data, {
        headers: { 'Authorization': `Token ${token}` }
    });
    return json.data.person as PersonComplete ?? false;
}
//deletando uma pessoa
export const deletePerson = async (eventId: number,groupId:number, id: number) => {
    const token = getCookie('token');
    const json = await req.delete(`/admin/events/${eventId}/groups/${groupId}/people/${id}`, {
        headers: { 'Authorization': `Token ${token}` }
    })
    return !json.data.error;
}
