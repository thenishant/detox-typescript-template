const {execSync} = require('child_process');


export function getDeviceName(deviceId: string) {
    const deviceModel = `adb -s ${deviceId} shell getprop ro.product.system.model`;
    return execSync(deviceModel, {encoding: 'utf-8'});
}

export function getDeviceVersion(deviceId: string) {
    const deviceVersion = `adb -s ${deviceId} shell getprop ro.system.build.version.release`;
    return execSync(deviceVersion, {encoding: 'utf-8'});
}

export function getDeviceBrand(deviceId: string) {
    const manufacturer = `adb -s ${deviceId} shell getprop ro.product.manufacturer`;
    return execSync(manufacturer, {encoding: 'utf-8'});
}

export function removeArtifactsDirectory() {
    let removeArtifacts = 'rm -rf artifacts'
    return execSync(removeArtifacts, {encoding: 'utf-8'});
}

export function setConfiguration() {
    const config = 'export NODE_ENV=zephyr';
    return execSync(config, {encoding: 'utf-8'});
}
