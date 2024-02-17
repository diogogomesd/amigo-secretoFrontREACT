import { Person } from "./Person"

export type SearchResult = {
    // person: Person;
    // personMacheted: Person;
    person:{
        id:number;
        name:string
    }
    personMatched:{
        id:number;
        name:string;
    }
}