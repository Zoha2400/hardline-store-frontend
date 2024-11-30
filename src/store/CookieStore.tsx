import Cookies from "js-cookie";
import { makeObservable, action, observable } from "mobx";

class CookieStore {
    cookie = null;

    constructor() {
        makeObservable(this, {
            cookie: observable,
            setCookie: action,
            getCookie: action,
        });
    }

    setCookie(value: any) {
        this.cookie = value;
    }

    async getCookie() {
        try {
            const token = Cookies.get('token')
            this.setCookie(token);
            return token;
        } catch (error) {
            console.error("Error fetching cookie:", error);
            return null;
        }
    }
}

export default CookieStore;
