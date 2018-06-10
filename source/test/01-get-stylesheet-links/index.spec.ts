import {expect} from 'chai';
import getremoteStylesheetLinks from '../..';
import html from './mock-data';

describe("vamtiger-get-remote-stylesheet-paths: should get", function () {
    it("remote stylesheet paths", async function () {
        const expected = [
            'https://remote/stylesheet/link/index.css'
        ];
        const remoteStylesheetLinks = await getremoteStylesheetLinks({ html });

        expect(remoteStylesheetLinks).to.be.ok;
        expect(remoteStylesheetLinks.length).to.equal(1);
        expect(remoteStylesheetLinks.every(currentStyleSheetLinks => expected.some(expectedStylesheetLink => currentStyleSheetLinks === expectedStylesheetLink))).to.be.true;
    })
})