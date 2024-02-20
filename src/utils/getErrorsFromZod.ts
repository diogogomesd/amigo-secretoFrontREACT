import { ZodError } from "zod";

export type ErrorItem={
    field:string;
    massage:string;
}
export const getErrorFromZod = (error:ZodError)=>{
    const errorList: ErrorItem[] =[];
    for(let i in error.errors){
        errorList.push({
            field: error.errors[i].path[0].toString(),
            massage:error.errors[i].message
        })
    }
    return errorList;
}