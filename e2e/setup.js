import detox from 'detox';
import adapter from 'detox/runners/jest/adapter';
import {adbReversePorting} from "./utils/adbReverse";
import {attachFailedTestScreenshotToReport} from "./utils/screenshot";
import {attachDeviceDetailsToReport} from "./utils/deviceDetails";

jest.setTimeout(10000);
jasmine.getEnv()
    .addReporter({
        specStarted: (res) => {
            jasmine.currentTest = res;
        },
        specDone: (res) => {
            jasmine.currentTest = res;
        }
    });

beforeAll(async () => {
    jasmine.getEnv()
        .addReporter(adapter);
    await detox.init();
    jasmine.getEnv()
        .addReporter(adbReversePorting(device.id));
});

beforeEach(async () => {
    await adapter.beforeEach();
    await device.launchApp({newInstance: true});
});

afterEach(async () => {
    await attachFailedTestScreenshotToReport()
    await attachDeviceDetailsToReport()

});

afterAll(async () => {
    await device.uninstallApp()
    await detox.cleanup();
    await adapter.afterAll();
});
