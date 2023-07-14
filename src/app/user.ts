export class User {
    _Url<T>(_Url: any, user: User) {
        throw new Error('Method not implemented.');
    }
    constructor(
        public fname: string,
        public lname: string,
        public email: string,
        public mobile: string,
        public dob: string,
        public gender: string,
        public course: string,
        public tc: boolean
    ) { }
}
