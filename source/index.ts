import getLocalStylesheetPaths from 'vamtiger-get-local-stylesheet-paths';
import getStylesheetPaths from 'vamtiger-get-stylesheet-paths';

export default async function getRemoteStylesheetPaths(params: Params) {
    const html = params.html;
    const stylesheetPaths = getStylesheetPaths({ html });
    const localStylesheetPaths = await getLocalStylesheetPaths({ html });
    const remoteStylesheetPaths = stylesheetPaths
        .filter(stylesheetPath => !localStylesheetPaths.some(localStylesheetPath => stylesheetPath === localStylesheetPath));

    return remoteStylesheetPaths;
}

export interface Params {
    html: string;
}