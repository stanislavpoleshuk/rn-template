import {Client} from "./clients/swagger-client";
import {Interceptor} from "./swagger/interceptor";
import axios from "axios";

export class RequestRepository extends Client {
    constructor() {
        const url = null;
        const instance = axios.create();
        const interceptor = new Interceptor(instance);
        super(url, instance);
        interceptor.init();
    }
}