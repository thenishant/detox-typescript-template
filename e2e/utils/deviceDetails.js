import {getDeviceBrand, getDeviceName, getDeviceVersion} from "./commands";
import {addMsg} from "jest-html-reporters/helper";

export async function attachDeviceDetailsToReport() {
    if (jasmine.currentTest.failedExpectations.length > 0) {
        const deviceBrand = await getDeviceBrand(device.id);
        const deviceName = await getDeviceName(device.id);
        const deviceVersion = await getDeviceVersion(device.id);
        const deviceDetails = (`Device name ==> ${deviceName} Version ==> ${deviceVersion} Brand ==> ${deviceBrand}`);
        await addMsg(deviceDetails);
    }
}