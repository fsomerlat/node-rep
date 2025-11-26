import { BaseError } from "./base.error";

export class InternaServerError extends BaseError{

    constructor(messagem: string  ){
        super(500, messagem);
    }
}