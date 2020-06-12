import { globalAny } from "config/constants";
import {AsyncStorage} from "react-native";

/**
 * Сервис работы с localStorage
 * @private storage - локал сторадж хранилище
 */
class LocalStorageService {
    private storage: AsyncStorage;

    constructor() {
        this.storage = globalAny.localStorage;
    }

    /**
     * Метод записи в хранилище
     * @param items {localStorageItems} - массив элементов для записи
     * @return void
     */
    writeItems = (items: localStorageItems): void => {
        items.forEach(async ({ key, value }: localStorageItem): Promise<any> => {
            await this.storage.setItem(key, value?.toString());
        });
    };

    /**
     * Метод получения элементов
     * @param keys {Array<string>} - массив ключей
     * @param type {string} - тип возвращаемого объекта
     * @return {array | object} -  массив элементов или объект элементов
     */
    getItems = async (keys: Array<string>, type?: string): Promise<any> => {
        if (type === "object") {
            const result = {};
            for (const key of keys) {
                result[key] = await this.getItem(key);
            }
            return result;
        }
        return keys.map(async (key: string) => ({[key]: await this.getItem(key)}));
    };

    /**
     * Функция отчистки из localStorage
     * @param keys -  массив ключей
     */
    clearItems = (keys: Array<string>): void => {
        const itemsObj = this.getItems(keys, "object");
        keys.forEach((key) => {
            if (itemsObj[key]) this.storage.removeItem(key).then();
        });
    };

    /**
     * Метод получения элемента из хранилища по ключу
     * @param key{string}
     * @return {number | string | null}
     */
    getItem = async (key: string): Promise<number | string | null> => await this.storage?.getItem(key);
}

/* types */
type localStorageItem = {
    key: string;
    value: string | number;
};
type localStorageItems = Array<localStorageItem | null>;

export default new LocalStorageService();
