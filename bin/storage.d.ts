/// <reference types="lodash" />
export declare const STORAGE_KEY = "session";
export declare function getStorage<T = BaseObject>(key?: string): T;
export declare function setStorage(data: any, key?: string): void;
export declare const removeStorage: () => void;
export declare const localStore: {
    set: import("lodash").Function2<string, any, void>;
    get: import("lodash").Function1<string, string>;
    remove: import("lodash").Function1<string, void>;
};
export declare const sessionStore: {
    set: import("lodash").Function2<string, any, void>;
    get: import("lodash").Function1<string, string>;
    remove: import("lodash").Function1<string, void>;
};
export declare const ls: {
    get(key: string): any;
    set(key: string, value: any): void;
    remove(key: string): void;
    clear(): void;
};
export declare const ss: {
    get(key: string): any;
    set(key: string, value: any): void;
    remove(key: string): void;
    clear(): void;
};
