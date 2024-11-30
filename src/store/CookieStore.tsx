import { cookies } from "next/headers";
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
            const cookiesStore = await cookies();
            const userCookie = cookiesStore.get('user');
            this.setCookie(userCookie);
            return userCookie;
        } catch (error) {
            console.error("Error fetching cookie:", error);
            return null;
        }
    }
}

export default CookieStore;
