var expect = require('chai').expect;

describe('dustin', function() {
    it('select private', function () {
        browser.url('https://www.dustin.se');
        browser.click('//*[@id="site-selector"]/div/div/div[2]/div[2]/div[3]/a');
        expect(browser.isExisting('body.consumer')).to.true;
    });
    it('select business', function () {
        browser.url('https://www.dustin.se');
        browser.click('//*[@id="site-selector"]/div/div/div[2]/div[2]/div[1]/a');
        expect(browser.isExisting('body.business')).to.true;
    });
});


