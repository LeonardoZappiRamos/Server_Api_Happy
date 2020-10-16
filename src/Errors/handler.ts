import { ErrorRequestHandler, request, response } from "express";
import { ValidationError } from 'yup';

interface  ValidationErrors {
    [key: string]: string[];
}
    const errorsHandler: ErrorRequestHandler = (error, request, response, next) => {
        if(error instanceof ValidationError){
            let errors: ValidationErrors = {};
            
            error.inner.forEach(err => {
                errors[err.path] = err.errors;
            });

            return response.status(400).json({mensage: "Validation fails", errors});
        }   

        console.error(error);
        
        return response.status(500).json({mensage: "Internal server error"});
    }


export default errorsHandler;