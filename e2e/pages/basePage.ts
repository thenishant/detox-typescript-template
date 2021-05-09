import { getText } from 'detox-getprops';

const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = 'debug';

export class BasePage {
    private TIMEOUT = 45000;

    protected async tap(webElement, timeOut: number = this.TIMEOUT) {
        await webElement.tap();
        logger.info(`Clicked on ${await getText(webElement)}`);
    }

    protected async typeText(webElement, textToType) {
      await webElement.replaceText(textToType);
      logger.info(`Entered ${textToType} inside text-box`);
    }

    protected async waitForElementToBeVisible(webElement, timeOut: number = this.TIMEOUT) {
      await waitFor(webElement).toBeVisible().withTimeout(timeOut);
    }

    protected async scroll(fromElement, toElement, direction) {
      let elementNotFound: boolean = true;
      while (elementNotFound) {
        try {
          await this.waitForElementToBeVisible(toElement, 1000);
          elementNotFound = false;
        } catch (error) {
          await fromElement.swipe(direction, 'slow', 0.5);
        }
      }
    }
}
