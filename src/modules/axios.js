import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { localStorageItems } from "../helper/constant";

const getDeviceId = () => {
    const deviceId = localStorage.getItem(localStorageItems.DEVICE_ID);
    if (deviceId) {
        return deviceId;
    } else {
        const deviceId = uuidv4();
        localStorage.setItem(localStorageItems.DEVICE_ID, deviceId);
        return deviceId;
    }
};

const headers = {
    "X-Device-Id": getDeviceId(),
    "X-Client-Time": Date.now(),
    "X-Platform": "armour",
    "X-Version": import.meta.env.VITE_APP_VERSION,
    "Content-type": "application/json",
};

export const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers,
});
