import fs from 'fs';
import {addAttach} from 'jest-html-reporters/helper';

export async function attachFailedTestScreenshotToReport() {
    if (jasmine.currentTest.failedExpectations.length > 0) {
        let imagePath = await device.takeScreenshot(jasmine.currentTest.description);
        fs.readFile(imagePath, async (err, bufferedData) => {
            if (err) throw err;
            let imageStringPath = await bufferedData.toString('base64');
            bufferedData = await Buffer.from(imageStringPath, 'base64');
            await addAttach(bufferedData);
        });
    }
}
