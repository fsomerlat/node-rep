import { BaseError } from "./base.error";

export class GeneralError extends BaseError {

    constructor(message: string){
        super(400, message);
    }
}