const {execSync} = require('child_process');

const PORT = 8081;

export function adbReversePorting(deviceId) {
    try {
        const enableAdbReversePorting = `adb -s ${deviceId} reverse tcp:${PORT} tcp:${PORT}`;
        console.log(`Executing ${enableAdbReversePorting}`);
        return execSync(enableAdbReversePorting, {encoding: 'utf-8'});
    } catch (err) {
    }
}