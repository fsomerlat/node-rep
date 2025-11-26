import { BaseError } from "./base.error"

export class ValdationError extends BaseError {

    constructor(messagem: string){
        super(400, messagem);
    }
}