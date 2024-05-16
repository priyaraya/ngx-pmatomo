import { Injectable, inject } from '@angular/core';
import { MATOMO_CONFIGURATION } from './matomo-configuration';
import * as i0 from "@angular/core";
/**
 * Wrapper for functions available in the Matomo Javascript tracker.
 *
 * @export
 */
export class MatomoTracker {
    /**
     * Creates an instance of MatomoTracker.
     */
    constructor() {
        /**
         * Matomo configuration provided by DI
         */
        this.configuration = inject(MATOMO_CONFIGURATION);
        try {
            if (typeof window['_paq'] === 'undefined') {
                console.warn('Matomo has not yet been initialized!');
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs a visit to this page.
     *
     * @param [customTitle] Optional title of the visited page.
     */
    trackPageView(customTitle) {
        try {
            const args = [];
            if (!!customTitle) {
                args.push(customTitle);
            }
            window['_paq'].push(['trackPageView', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs an event with an event category (Videos, Music, Games…), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked…), and an optional event name and optional numeric value.
     *
     * @param category Category of the event.
     * @param action Action of the event.
     * @param [name] Optional name of the event.
     * @param [value] Optional value for the event.
     */
    trackEvent(category, action, name, value) {
        try {
            const args = [category, action];
            if (!!name) {
                args.push(name);
                if (typeof value === 'number') {
                    args.push(value);
                }
            }
            window['_paq'].push(['trackEvent', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword Keywords of the search query.
     * @param [category] Optional category of the search query.
     * @param [resultsCount] Optional number of results returned by the search query.
     */
    trackSiteSearch(keyword, category, resultsCount) {
        try {
            const args = [keyword];
            if (!!category) {
                args.push(category);
                if (typeof resultsCount === 'number') {
                    args.push(resultsCount);
                }
            }
            window['_paq'].push(['trackSiteSearch', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal numeric ID of the goal to log a conversion for.
     * @param [customRevenue] Optional custom revenue to log for the goal.
     */
    trackGoal(idGoal, customRevenue) {
        try {
            const args = [idGoal];
            if (typeof customRevenue === 'number') {
                args.push(customRevenue);
            }
            window['_paq'].push(['trackGoal', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Manually logs a click from your own code.
     *
     * @param url Full URL which is to be tracked as a click.
     * @param linkType Either 'link' for an outlink or 'download' for a download.
     */
    trackLink(url, linkType) {
        try {
            window['_paq'].push(['trackLink', url, linkType]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackAllContentImpressions() {
        try {
            window['_paq'].push(['trackAllContentImpressions']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll If true, checks for new content blocks while scrolling the page.
     * @param timeInterval Duration, in milliseconds, between two checks upon scroll.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackVisibleContentImpressions(checkOnScroll, timeInterval) {
        try {
            window['_paq'].push(['trackVisibleContentImpressions', checkOnScroll, timeInterval]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param node DOM node in which to look for content blocks which have not been previously tracked.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentImpressionsWithinNode(node) {
        try {
            window['_paq'].push(['trackContentImpressionsWithinNode', node]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks an interaction with the given DOM node/content block.
     *
     * @param node DOM node for which to track a content interaction.
     * @param contentInteraction Name of the content interaction.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentInteractionNode(node, contentInteraction) {
        try {
            window['_paq'].push(['trackContentInteractionNode', node, contentInteraction]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName Content name.
     * @param contentPiece Content piece.
     * @param contentTarget Content target.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentImpression(contentName, contentPiece, contentTarget) {
        try {
            window['_paq'].push(['trackContentImpression', contentName, contentPiece, contentTarget]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction Content interaction.
     * @param contentName Content name.
     * @param contentPiece Content piece.
     * @param contentTarget Content target.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentInteraction(contentInteraction, contentName, contentPiece, contentTarget) {
        try {
            window['_paq'].push([
                'trackContentInteraction',
                contentInteraction,
                contentName,
                contentPiece,
                contentTarget,
            ]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Logs all found content blocks within a page to the console.<br />
     * This is useful to debug / test content tracking.
     */
    logAllContentBlocksOnPage() {
        try {
            window['_paq'].push(['logAllContentBlocksOnPage']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sends a ping request.<br />
     * Ping requests do not track new actions.
     * If they are sent within the standard visit length, they will extend the existing visit and the current last action for the visit.
     * If sent after the standard visit length, ping requests will create a new visit using the last action in the last known visit.<br />
     * See also enableHeartBeatTimer.
     */
    ping() {
        try {
            window['_paq'].push(['ping']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Installs a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
     * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
     * These requests will not track additional actions or page views.<br />
     * By default, the delay is set to 15 seconds.
     *
     * @param delay Delay, in seconds, between two heart beats to the server.
     */
    enableHeartBeatTimer(delay) {
        try {
            window['_paq'].push(['enableHeartBeatTimer', delay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Installs link tracking on all applicable link elements.
     *
     * @param [enable=false] Set to true to use pseudo click-handler (treat middle click and open contextmenu as
     * left click).<br />
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected.<br />
     * If false (default), nothing will be tracked on open context menu or middle click.
     */
    enableLinkTracking(enable = false) {
        try {
            window['_paq'].push(['enableLinkTracking', enable]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Enables cross domain linking. By default, the visitor ID that identifies a unique visitor is stored in the browser's
     * first party cookies.<br />
     * This means the cookie can only be accessed by pages on the same domain.<br />
     * If you own multiple domains and would like to track all the actions and pageviews of a specific visitor into the same visit,
     * you may enable cross domain linking.<br />
     * Whenever a user clicks on a link it will append a URL parameter pk_vid to the clicked URL which forwards the current
     * visitor ID value to the page of the different domain.
     *
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    enableCrossDomainLinking() {
        try {
            window['_paq'].push(['enableCrossDomainLinking']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the cross domain linking timeout.<br />
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout Timeout, in seconds, between two actions across two domains before creating a new visit.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    setCrossDomainLinkingTimeout(timeout) {
        try {
            window['_paq'].push(['setCrossDomainLinkingTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the query parameter to append to links to handle cross domain linking.<br />
     * Use this to add cross domain support for links that are added to the DOM dynamically.
     *
     * @returns Promise for the `pk_vid` query parameter.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    getCrossDomainLinkingUrlParameter() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getCrossDomainLinkingUrlParameter());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Overrides document.title
     *
     * @param title Title of the document.
     */
    setDocumentTitle(title) {
        try {
            window['_paq'].push(['setDocumentTitle', title]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets array of hostnames or domains to be treated as local.<br />
     * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
     * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
     *
     * @param domains List of hostnames or domains, with or without path, to be treated as local.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    setDomains(domains) {
        try {
            window['_paq'].push(['setDomains', domains]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Override the page's reported URL.
     *
     * @param url URL to be reported for the page.
     */
    setCustomUrl(url) {
        try {
            window['_paq'].push(['setCustomUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Overrides the detected Http-Referer.
     *
     * @param url URL to be reported for the referer.
     */
    setReferrerUrl(url) {
        try {
            window['_paq'].push(['setReferrerUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the website ID.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * // TODO Investigate if setSiteId needs to be removed from MatomoTracker.
     * @param siteId Site ID for the tracker.
     */
    setSiteId(siteId) {
        try {
            window['_paq'].push(['setSiteId', siteId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the Matomo HTTP API URL endpoint.<br />
     * Points to the root directory of Matomo, e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
     * This function is only useful when the 'Overlay' report is not working.<br />
     * By default, you do not need to use this function.
     *
     * @param url URL for Matomo HTTP API endpoint.
     */
    setApiUrl(url) {
        try {
            window['_paq'].push(['setApiUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies the Matomo server URL.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * // TODO Investigate if setTrackerUrl needs to be removed from MatomoTracker.
     * @param url URL for the Matomo server.
     */
    setTrackerUrl(url) {
        try {
            window['_paq'].push(['setTrackerUrl', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the Matomo server URL.
     *
     * @returns Promise for the Matomo server URL.
     */
    getMatomoUrl() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getPiwikUrl());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the current url of the page that is currently being visited.<br />
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @returns Promise for the URL of the current page.
     */
    getCurrentUrl() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getCurrentUrl());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes Class, or list of classes to be treated as downloads.
     */
    setDownloadClasses(classes) {
        try {
            window['_paq'].push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions to be recognized as downloads.
     */
    setDownloadExtensions(extensions) {
        try {
            window['_paq'].push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets additional file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions to be recognized as downloads.
     */
    addDownloadExtensions(extensions) {
        try {
            window['_paq'].push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Specifies file extensions to be removed from the list of download file extensions.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions not to be recognized as downloads.
     */
    removeDownloadExtensions(extensions) {
        try {
            window['_paq'].push(['setDownloadClasses', extensions]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes Class, or list of classes to be ignored if present in link.
     */
    setIgnoreClasses(classes) {
        try {
            window['_paq'].push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes Class, or list of classes to be treated as outlinks.
     */
    setLinkClasses(classes) {
        try {
            window['_paq'].push(['setDownloadClasses', classes]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets delay for link tracking (in milliseconds).
     *
     * @param delay Delay, in milliseconds, for link tracking.
     */
    setLinkTrackingTimer(delay) {
        try {
            window['_paq'].push(['setLinkTrackingTimer', delay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns delay for link tracking.
     *
     * @returns Promise for the delay in milliseconds.
     */
    getLinkTrackingTimer() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getLinkTrackingTimer());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Sets if or not to record the hash tag (anchor) portion of URLs.
     *
     * @param value If true, the hash tag portion of the URLs won't be recorded.
     */
    discardHashTag(value) {
        try {
            window['_paq'].push(['discardHashTag', value]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite this value with this function.
     * This function is deprecated in Matomo 4.x.
     *
     * @param generationTime Time, in milliseconds, of the page generation.
     */
    setGenerationTimeMs(generationTime) {
        if (this.configuration.scriptVersion < 4) {
            try {
                window['_paq'].push(['setGenerationTimeMs', generationTime]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    throw e;
                }
            }
        }
    }
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php.
     *
     * @param appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
     */
    appendToTrackingUrl(appendToUrl) {
        try {
            window['_paq'].push(['appendToTrackingUrl', appendToUrl]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     */
    killFrame() {
        try {
            window['_paq'].push(['killFrame']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Forces the browser to load the live URL if the tracked web page is loaded from a local file
     * (e.g., saved to someone's desktop).
     *
     * @param url URL to track instead of file:// URLs.
     */
    redirectFile(url) {
        try {
            window['_paq'].push(['redirectFile', url]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Records how long the page has been viewed if the minimumVisitLength is attained;
     * the heartBeatDelay determines how frequently to update the server.
     *
     * @param minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
     * @param heartBeatDelay Delay, in seconds, between two updates to the server.
     * @see {@link https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page}
     */
    setHeartBeatTimer(minimumVisitLength, heartBeatDelay) {
        try {
            window['_paq'].push(['setHeartBeatTimer', minimumVisitLength, heartBeatDelay]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns the 16 characters ID for the visitor.
     *
     * @returns Promise for the the 16 characters ID for the visitor.
     */
    getVisitorId() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getVisitorId());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the visitor cookie contents in an array.
     *
     * @returns Promise for the cookie contents in an array.
     */
    getVisitorInfo() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getVisitorInfo());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @returns Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
     */
    getAttributionInfo() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getAttributionInfo());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the attribution campaign name.
     *
     * @returns Promise for the the attribution campaign name.
     */
    getAttributionCampaignName() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getAttributionCampaignName());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the attribution campaign keyword.
     *
     * @returns Promise for the attribution campaign keyword.
     */
    getAttributionCampaignKeyword() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getAttributionCampaignKeyword());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the attribution referrer timestamp.
     *
     * @returns Promise for the attribution referrer timestamp (as string).
     */
    getAttributionReferrerTimestamp() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getAttributionReferrerTimestamp());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the attribution referrer URL.
     *
     * @returns Promise for the attribution referrer URL
     */
    getAttributionReferrerUrl() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getAttributionReferrerUrl());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Returns the User ID string if it was set.
     *
     * @returns Promise for the User ID for the visitor.
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    getUserId() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getUserId());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId User ID to set for the current visitor.
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    setUserId(userId) {
        try {
            window['_paq'].push(['setUserId', userId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    resetUserId() {
        try {
            window['_paq'].push(['resetUserId']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a custom variable.
     *
     * @param index Index, the number from 1 to 5 where this custom variable name is stored for the current page view.
     * @param name Name, the name of the variable, for example: Category, Sub-category, UserType.
     * @param value Value, for example: "Sports", "News", "World", "Business"…
     * @param scope Scope of the custom variable:<br />
     * - 'page' means the custom variable applies to the current page view.
     * - 'visit' means the custom variable applies to the current visitor.
     * - 'event' means the custom variable applies to the current event.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    setCustomVariable(index, name, value, scope) {
        try {
            window['_paq'].push(['setCustomVariable', index, name, value, scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom variable.
     *
     * @param index Index of the custom variable to delete.
     * @param scope Scope of the custom variable to delete.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    deleteCustomVariable(index, scope) {
        try {
            window['_paq'].push(['deleteCustomVariable', index, scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes all custom variables.
     *
     * @param scope Scope of the custom variables to delete.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    deleteCustomVariables(scope) {
        try {
            window['_paq'].push(['deleteCustomVariables', scope]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieves a custom variable.
     *
     * @param index Index of the custom variable to retrieve.
     * @param scope Scope of the custom variable to retrieve.
     * @returns Promise for the value of custom variable.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    getCustomVariable(index, scope) {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getCustomVariable(index, scope));
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * When called then the Custom Variables of scope 'visit' will be stored (persisted) in a first party cookie
     * for the duration of the visit.<br />
     * This is useful if you want to call getCustomVariable later in the visit.<br />
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    storeCustomVariablesInCookie() {
        try {
            window['_paq'].push(['storeCustomVariablesInCookie']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to set.
     * @param customDimensionValue Value to be set.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    setCustomDimension(customDimensionId, customDimensionValue) {
        try {
            window['_paq'].push(['setCustomDimension', customDimensionId, customDimensionValue]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to delete.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    deleteCustomDimension(customDimensionId) {
        try {
            window['_paq'].push(['deleteCustomDimension', customDimensionId]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Retrieve a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to retrieve.
     * @returns Promise for the value for the requested custom dimension.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    getCustomDimension(customDimensionId) {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getCustomDimension(customDimensionId));
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Sets campaign name parameter(s).
     *
     * @param name Name of the campaign
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     */
    setCampaignNameKey(name) {
        try {
            window['_paq'].push(['setCampaignNameKey', name]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword Keyword parameter(s) of the campaign.
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     */
    setCampaignKeywordKey(keyword) {
        try {
            window['_paq'].push(['setCampaignKeywordKey', keyword]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets if or not to attribute a conversion to the first referrer.<br />
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
     * instead of the last one.
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     * @see {@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
     */
    setConversionAttributionFirstReferrer(conversionToFirstReferrer) {
        try {
            window['_paq'].push(['setConversionAttributionFirstReferrer', conversionToFirstReferrer]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the current page view as a product or category page view.<br />
     * When you call setEcommerceView, it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU SKU of the viewed product.
     * @param productName Name of the viewed product.
     * @param productCategory Category of the viewed product.
     * @param price Price of the viewed product.
     */
    setEcommerceView(productSKU, productName, productCategory, price) {
        try {
            window['_paq'].push(['setEcommerceView', productSKU, productName, productCategory, price]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Adds a product into the eCommerce order.<br />
     * Must be called for each product in the order.
     *
     * @param productSKU SKU of the product to add.
     * @param [productName] Optional name of the product to add.
     * @param [productCategory] Optional category of the product to add.
     * @param [price] Optional price of the product to add.
     * @param [quantity] Optional quantity of the product to add.
     */
    addEcommerceItem(productSKU, productName, productCategory, price, quantity) {
        try {
            const args = [productSKU];
            if (!!productName) {
                args.push(productName);
                if (!!productCategory) {
                    args.push(productCategory);
                    if (typeof price === 'number') {
                        args.push(price);
                        if (typeof quantity === 'number') {
                            args.push(quantity);
                        }
                    }
                }
            }
            window['_paq'].push(['addEcommerceItem', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Removes the specified product from the untracked ecommerce order.
     *
     * @param productSKU SKU of the product to remove.
     */
    removeEcommerceItem(productSKU) {
        try {
            const args = [productSKU];
            window['_paq'].push(['removeEcommerceItem', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Removes all products in the untracked ecommerce order.<br />
     * Note: this is done automatically after trackEcommerceOrder() is called.
     */
    clearEcommerceCart() {
        try {
            window['_paq'].push(['clearEcommerceCart']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns all ecommerce items currently in the untracked ecommerce order.
     * The returned array will be a copy, so changing it won't affect the ecommerce order.<br />
     * To affect what gets tracked, use the addEcommerceItem()/removeEcommerceItem()/clearEcommerceCart() methods.<br />
     * Use this method to see what will be tracked before you track an order or cart update.
     */
    getEcommerceItems() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.getEcommerceItems());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Tracks a shopping cart.<br />
     * Call this function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal Grand total of the shopping cart.
     */
    trackEcommerceCartUpdate(grandTotal) {
        try {
            window['_paq'].push(['trackEcommerceCartUpdate', grandTotal]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Tracks an Ecommerce order, including any eCommerce item previously added to the order.<br />
     * orderId and grandTotal (ie.revenue) are required parameters.
     *
     * @param orderId ID of the tracked order.
     * @param grandTotal Grand total of the tracked order.
     * @param [subTotal] Sub total of the tracked order.
     * @param [tax] Taxes for the tracked order.
     * @param [shipping] Shipping fees for the tracked order.
     * @param [discount] Discount granted for the tracked order.
     */
    trackEcommerceOrder(orderId, grandTotal, subTotal, tax, shipping, discount) {
        try {
            const args = [orderId, grandTotal];
            if (typeof subTotal === 'number') {
                args.push(subTotal);
                if (typeof tax === 'number') {
                    args.push(tax);
                    if (typeof shipping === 'number') {
                        args.push(shipping);
                        if (typeof discount === 'number' || typeof discount === 'boolean') {
                            args.push(discount);
                        }
                    }
                }
            }
            window['_paq'].push(['trackEcommerceOrder', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * By default the Matomo tracker assumes consent to tracking.
     * To change this behavior so nothing is tracked until a user consents, you must call requireConsent.
     */
    requireConsent() {
        try {
            window['_paq'].push(['requireConsent']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Require user cookie consent before storing and using any cookies.
     */
    requireCookieConsent() {
        try {
            window['_paq'].push(['requireCookieConsent']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Marks that the current user has consented.<br />
     * The consent is one-time only, so in a subsequent browser session, the user will have to consent again.<br />
     * To remember consent, see the method below: rememberConsentGiven.
     */
    setConsentGiven() {
        try {
            window['_paq'].push(['setConsentGiven']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Marks that the current user has consented to store and use cookies.<br />
     * The consent is one-time only, so in a subsequent browser session, the user will have to consent again.<br />
     * To remember consent, see the method below: rememberCookieConsentGiven.
     */
    setCookieConsentGiven() {
        try {
            window['_paq'].push(['setCookieConsentGiven']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Marks that the current user has consented, and remembers this consent through a browser cookie.<br />
     * The next time the user visits the site, Matomo will remember that they consented, and track them.<br />
     * If you call this method, you do not need to call setConsentGiven.
     *
     * @param hoursToExpire Expiry period for your user consent.
     */
    rememberConsentGiven(hoursToExpire) {
        try {
            const args = [];
            if (typeof hoursToExpire === 'number') {
                args.push(hoursToExpire);
            }
            window['_paq'].push(['rememberConsentGiven', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Marks that the current user has consented, and remembers this consent through a browser cookie.<br />
     * The next time the user visits the site, Matomo will remember that they consented, and track them.<br />
     * If you call this method, you do not need to call setCookieConsentGiven.
     *
     * @param hoursToExpire Expiry period for your user consent.
     */
    rememberCookieConsentGiven(hoursToExpire) {
        try {
            const args = [];
            if (typeof hoursToExpire === 'number') {
                args.push(hoursToExpire);
            }
            window['_paq'].push(['rememberCookieConsentGiven', ...args]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Removes a user's consent, both if the consent was one-time only and if the consent was remembered.<br />
     * This makes sure the cookie that remembered the given consent is deleted.<br />
     * After calling this method, the user will have to consent again in order to be tracked.
     */
    forgetConsentGiven() {
        try {
            window['_paq'].push(['forgetConsentGiven']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Removes a user's consent, both if the consent was one-time only and if the consent was remembered.<br />
     * This makes sure the cookie that remembered the given consent is deleted.<br />
     * After calling this method, the user will have to consent again in order to be tracked.
     */
    forgetCookieConsentGiven() {
        try {
            window['_paq'].push(['forgetCookieConsentGiven']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets if to not to track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
     * @see {@link https://www.w3.org/TR/tracking-dnt/}
     */
    setDoNotTrack(doNotTrack) {
        try {
            window['_paq'].push(['setDoNotTrack', doNotTrack]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Disables all first party cookies.<br />
     * Existing Matomo cookies for this websites will be deleted on the next page view.
     */
    disableCookies() {
        try {
            window['_paq'].push(['disableCookies']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     */
    deleteCookies() {
        try {
            window['_paq'].push(['deleteCookies']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @returns Promise for the support and activation of cookies.
     */
    hasCookies() {
        return new Promise((resolve, reject) => {
            try {
                window['_paq'].push([
                    function () {
                        resolve(this.hasCookies());
                    },
                ]);
            }
            catch (e) {
                if (!(e instanceof ReferenceError)) {
                    reject(e);
                }
            }
        });
    }
    /**
     * Sets the tracking cookie name prefix.<br />
     * Default prefix is 'pk'.
     *
     * @param prefix Prefix for the tracking cookie names.
     */
    setCookieNamePrefix(prefix) {
        try {
            window['_paq'].push(['setCookieNamePrefix', prefix]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the domain of the tracking cookies.<br />
     * Default is the document domain.<br />
     * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
     *
     * @param domain Domain of the tracking cookies.
     */
    setCookieDomain(domain) {
        try {
            window['_paq'].push(['setCookieDomain', domain]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the path of the tracking cookies.<br />
     * Default is '/'.
     *
     * @param path Path of the tracking cookies.
     */
    setCookiePath(path) {
        try {
            window['_paq'].push(['setCookiePath', path]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets if or not to enable the Secure cookie flag on all first party cookies.<br />
     * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
     * over secure connection.
     *
     * @param secure If true, the secure cookie flag will be set on all first party cookies.
     */
    setSecureCookie(secure) {
        try {
            window['_paq'].push(['setSecureCookie', secure]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the visitor cookie timeout.<br />
     * Default is 13 months.
     *
     * @param timeout Timeout, in seconds, for the visitor cookie timeout.
     */
    setVisitorCookieTimeout(timeout) {
        try {
            window['_paq'].push(['setVisitorCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the referral cookie timeout.<br />
     * Default is 6 months.
     *
     * @param timeout Timeout, in seconds, for the referral cookie timeout.
     */
    setReferralCookieTimeout(timeout) {
        try {
            window['_paq'].push(['setReferralCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the session cookie timeout.<br />
     * Default is 30 minutes.
     *
     * @param timeout Timeout, in seconds, for the session cookie timeout.
     */
    setSessionCookieTimeout(timeout) {
        try {
            window['_paq'].push(['setSessionCookieTimeout', timeout]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Adds a click listener to a specific link element.<br />
     * When clicked, Matomo will log the click automatically.
     *
     * @param element Element on which to add a click listener.
     */
    addListener(element) {
        try {
            window['_paq'].push(['addListener', element]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets the request method to either 'GET' or 'POST'. (The default is 'GET'.)<br />
     * To use the POST request method, either:<br />
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method HTTP method for sending information to the Matomo server.
     */
    setRequestMethod(method) {
        try {
            window['_paq'].push(['setRequestMethod', method]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets a function that will process the request content.<br />
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback Function that will process the request content.
     */
    setCustomRequestProcessing(callback) {
        try {
            window['_paq'].push(['setCustomRequestProcessing', callback]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Sets request Content-Type header value.<br />
     * Applicable when 'POST' request method is used via setRequestMethod.
     *
     * @param contentType Value for Content-Type HTTP header.
     */
    setRequestContentType(contentType) {
        try {
            window['_paq'].push(['setRequestContentType', contentType]);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Disables the feature which groups together multiple tracking requests and send them as a bulk POST request.<br />
     * Disabling this feature is useful when you want to be able to replay all logs: one must use disableQueueRequest
     * to disable this behavior to later be able to replay logged Matomo logs (otherwise a subset of the requests
     * wouldn't be able to be replayed).
     */
    disableQueueRequest() {
        try {
            window['_paq'].push(['disableQueueRequest']);
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoTracker, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoTracker }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoTracker, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLXRyYWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXRvbW8vc3JjL2xpYi9tYXRvbW8tdHJhY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxvQkFBb0IsRUFBdUIsTUFBTSx3QkFBd0IsQ0FBQzs7QUFnQm5GOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8sYUFBYTtJQU14Qjs7T0FFRztJQUNIO1FBUkE7O1dBRUc7UUFDYyxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBTTVELElBQUksQ0FBQztZQUNILElBQUksT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssV0FBVyxFQUFFLENBQUM7Z0JBQzFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztZQUN2RCxDQUFDO1FBQ0gsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsYUFBYSxDQUFDLFdBQW9CO1FBQ2hDLElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFVLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILFVBQVUsQ0FBQyxRQUFnQixFQUFFLE1BQWMsRUFBRSxJQUFhLEVBQUUsS0FBYztRQUN4RSxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBVSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRSxDQUFDO29CQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixDQUFDO1lBQ0gsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9DLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGVBQWUsQ0FBQyxPQUFlLEVBQUUsUUFBaUIsRUFBRSxZQUFxQjtRQUN2RSxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3BCLElBQUksT0FBTyxZQUFZLEtBQUssUUFBUSxFQUFFLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQzFCLENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUyxDQUFDLE1BQWMsRUFBRSxhQUFzQjtRQUM5QyxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsR0FBVyxFQUFFLFFBQTZCO1FBQ2xELElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsMEJBQTBCO1FBQ3hCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsOEJBQThCLENBQUMsYUFBc0IsRUFBRSxZQUFvQjtRQUN6RSxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0NBQWdDLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxpQ0FBaUMsQ0FBQyxJQUFVO1FBQzFDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsMkJBQTJCLENBQUMsSUFBVSxFQUFFLGtCQUEwQjtRQUNoRSxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNqRixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxzQkFBc0IsQ0FBQyxXQUFtQixFQUFFLFlBQW9CLEVBQUUsYUFBcUI7UUFDckYsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHdCQUF3QixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUMsQ0FBQztRQUM1RixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gsdUJBQXVCLENBQ3JCLGtCQUEwQixFQUMxQixXQUFtQixFQUNuQixZQUFvQixFQUNwQixhQUFxQjtRQUVyQixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNsQix5QkFBeUI7Z0JBQ3pCLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxZQUFZO2dCQUNaLGFBQWE7YUFDZCxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILHlCQUF5QjtRQUN2QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILG9CQUFvQixDQUFDLEtBQWE7UUFDaEMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILGtCQUFrQixDQUFDLFNBQWtCLEtBQUs7UUFDeEMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsNEJBQTRCLENBQUMsT0FBZTtRQUMxQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGlDQUFpQztRQUMvQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLENBQUMsQ0FBQztvQkFDcEQsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdCQUFnQixDQUFDLEtBQWE7UUFDNUIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsVUFBVSxDQUFDLE9BQWlCO1FBQzFCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxZQUFZLENBQUMsR0FBVztRQUN0QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsY0FBYyxDQUFDLEdBQVc7UUFDeEIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsU0FBUyxDQUFDLEdBQVc7UUFDbkIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsYUFBYSxDQUFDLEdBQVc7UUFDdkIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7b0JBQzlCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDO2dCQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCO3dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLE9BQTBCO1FBQzNDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxxQkFBcUIsQ0FBQyxVQUE2QjtRQUNqRCxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsVUFBNkI7UUFDakQsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHdCQUF3QixDQUFDLFVBQTZCO1FBQ3BELElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGdCQUFnQixDQUFDLE9BQTBCO1FBQ3pDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxPQUEwQjtRQUN2QyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQkFBb0IsQ0FBQyxLQUFhO1FBQ2hDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILG9CQUFvQjtRQUNsQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUMsQ0FBQztvQkFDdkMsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGNBQWMsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsbUJBQW1CLENBQUMsY0FBc0I7UUFDeEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDL0QsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDO2dCQUNWLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUJBQW1CLENBQUMsV0FBbUI7UUFDckMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILFNBQVM7UUFDUCxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsWUFBWSxDQUFDLEdBQVc7UUFDdEIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGlCQUFpQixDQUFDLGtCQUEwQixFQUFFLGNBQXNCO1FBQ2xFLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUM7b0JBQy9CLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO29CQUNqQyxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDLENBQUM7b0JBQzdDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBNkI7UUFDM0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxDQUFDLENBQUM7b0JBQ2hELENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCwrQkFBK0I7UUFDN0IsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQywrQkFBK0IsRUFBRSxDQUFDLENBQUM7b0JBQ2xELENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCx5QkFBeUI7UUFDdkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxDQUFDLENBQUM7b0JBQzVDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsU0FBUztRQUNQLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDckMsSUFBSSxDQUFDO2dCQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ2xCO3dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztvQkFDNUIsQ0FBQztpQkFDRixDQUFDLENBQUM7WUFDTCxDQUFDO1lBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDbkMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNaLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxTQUFTLENBQUMsTUFBYztRQUN0QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVztRQUNULElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxpQkFBaUIsQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLEtBQWEsRUFBRSxLQUFrQjtRQUM5RSxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG9CQUFvQixDQUFDLEtBQWEsRUFBRSxLQUFrQjtRQUNwRCxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFxQixDQUFDLEtBQWtCO1FBQ3RDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILGlCQUFpQixDQUFDLEtBQWEsRUFBRSxLQUFrQjtRQUNqRCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUM7WUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNuQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ1osQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsNEJBQTRCO1FBQzFCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsa0JBQWtCLENBQUMsaUJBQXlCLEVBQUUsb0JBQTRCO1FBQ3hFLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxpQkFBaUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdkYsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxxQkFBcUIsQ0FBQyxpQkFBeUI7UUFDN0MsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUNwRSxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxrQkFBa0IsQ0FBQyxpQkFBeUI7UUFDMUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7b0JBQ3RELENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsa0JBQWtCLENBQUMsSUFBWTtRQUM3QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsT0FBZTtRQUNuQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0gscUNBQXFDLENBQUMseUJBQWtDO1FBQ3RFLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1Q0FBdUMsRUFBRSx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDNUYsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNILGdCQUFnQixDQUNkLFVBQWtCLEVBQ2xCLFdBQW1CLEVBQ25CLGVBQXVCLEVBQ3ZCLEtBQWE7UUFFYixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM3RixDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILGdCQUFnQixDQUNkLFVBQWtCLEVBQ2xCLFdBQW9CLEVBQ3BCLGVBQXdCLEVBQ3hCLEtBQWMsRUFDZCxRQUFpQjtRQUVqQixJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUUsQ0FBQzt3QkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDakIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQzs0QkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGtCQUFrQixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxVQUFrQjtRQUNwQyxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUksR0FBVSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxxQkFBcUIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDeEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsaUJBQWlCO1FBU2YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUM7Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDbEI7d0JBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLENBQUM7b0JBQ3BDLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQXdCLENBQUMsVUFBa0I7UUFDekMsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDBCQUEwQixFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7Ozs7OztPQVVHO0lBQ0gsbUJBQW1CLENBQ2pCLE9BQWUsRUFDZixVQUFrQixFQUNsQixRQUFpQixFQUNqQixHQUFZLEVBQ1osUUFBaUIsRUFDakIsUUFBMkI7UUFFM0IsSUFBSSxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDMUMsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDcEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUUsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDZixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNwQixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxPQUFPLFFBQVEsS0FBSyxTQUFTLEVBQUUsQ0FBQzs0QkFDbEUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDdEIsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1lBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGNBQWM7UUFDWixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQkFBb0I7UUFDbEIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILG9CQUFvQixDQUFDLGFBQXNCO1FBQ3pDLElBQUksQ0FBQztZQUNILE1BQU0sSUFBSSxHQUFhLEVBQUUsQ0FBQztZQUMxQixJQUFJLE9BQU8sYUFBYSxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3pELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsMEJBQTBCLENBQUMsYUFBc0I7UUFDL0MsSUFBSSxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQWEsRUFBRSxDQUFDO1lBQzFCLElBQUksT0FBTyxhQUFhLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsQ0FBQztZQUNELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyw0QkFBNEIsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0JBQWtCO1FBQ2hCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDOUMsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsd0JBQXdCO1FBQ3RCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILGFBQWEsQ0FBQyxVQUFtQjtRQUMvQixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxjQUFjO1FBQ1osSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFVBQVU7UUFDUixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ3JDLElBQUksQ0FBQztnQkFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNsQjt3QkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7b0JBQzdCLENBQUM7aUJBQ0YsQ0FBQyxDQUFDO1lBQ0wsQ0FBQztZQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ25DLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDWixDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsbUJBQW1CLENBQUMsTUFBYztRQUNoQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMscUJBQXFCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILGVBQWUsQ0FBQyxNQUFjO1FBQzVCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxhQUFhLENBQUMsSUFBWTtRQUN4QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxlQUFlLENBQUMsTUFBZTtRQUM3QixJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUJBQXVCLENBQUMsT0FBZTtRQUNyQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsd0JBQXdCLENBQUMsT0FBZTtRQUN0QyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsMEJBQTBCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsdUJBQXVCLENBQUMsT0FBZTtRQUNyQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMseUJBQXlCLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsV0FBVyxDQUFDLE9BQWdCO1FBQzFCLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxhQUFhLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCxnQkFBZ0IsQ0FBQyxNQUFzQjtRQUNyQyxJQUFJLENBQUM7WUFDSCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNwRCxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsMEJBQTBCLENBQUMsUUFBMkM7UUFDcEUsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLDRCQUE0QixFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztRQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDWCxJQUFJLENBQUMsQ0FBQyxDQUFDLFlBQVksY0FBYyxDQUFDLEVBQUUsQ0FBQztnQkFDbkMsTUFBTSxDQUFDLENBQUM7WUFDVixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHFCQUFxQixDQUFDLFdBQW1CO1FBQ3ZDLElBQUksQ0FBQztZQUNILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUMvQyxDQUFDO1FBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNYLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxjQUFjLENBQUMsRUFBRSxDQUFDO2dCQUNuQyxNQUFNLENBQUMsQ0FBQztZQUNWLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQzs4R0Fuc0RVLGFBQWE7a0hBQWIsYUFBYTs7MkZBQWIsYUFBYTtrQkFEekIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNQVRPTU9fQ09ORklHVVJBVElPTiwgTWF0b21vQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vbWF0b21vLWNvbmZpZ3VyYXRpb24nO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8qKlxuICAgKiBFeHRlbmQgV2luZG93IGludGVyZmFjZSBpbiBvcmRlciB0byBpbnRyb2R1Y2UgdGhlIE1hdG9tbyBfcGFxIGF0dHJpYnV0ZVxuICAgKi9cbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX3BhcTogYW55O1xuICB9XG59XG5cbi8qKlxuICogTWF0b21vIHNjb3BlXG4gKi9cbnR5cGUgTWF0b21vU2NvcGUgPSAncGFnZScgfCAndmlzaXQnIHwgJ2V2ZW50JztcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBmdW5jdGlvbnMgYXZhaWxhYmxlIGluIHRoZSBNYXRvbW8gSmF2YXNjcmlwdCB0cmFja2VyLlxuICpcbiAqIEBleHBvcnRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdG9tb1RyYWNrZXIge1xuICAvKipcbiAgICogTWF0b21vIGNvbmZpZ3VyYXRpb24gcHJvdmlkZWQgYnkgRElcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgY29uZmlndXJhdGlvbiA9IGluamVjdChNQVRPTU9fQ09ORklHVVJBVElPTik7XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgTWF0b21vVHJhY2tlci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvd1snX3BhcSddID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ01hdG9tbyBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkIScpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9ncyBhIHZpc2l0IHRvIHRoaXMgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIFtjdXN0b21UaXRsZV0gT3B0aW9uYWwgdGl0bGUgb2YgdGhlIHZpc2l0ZWQgcGFnZS5cbiAgICovXG4gIHRyYWNrUGFnZVZpZXcoY3VzdG9tVGl0bGU/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXJnczogYW55W10gPSBbXTtcbiAgICAgIGlmICghIWN1c3RvbVRpdGxlKSB7XG4gICAgICAgIGFyZ3MucHVzaChjdXN0b21UaXRsZSk7XG4gICAgICB9XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsndHJhY2tQYWdlVmlldycsIC4uLmFyZ3NdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIExvZ3MgYW4gZXZlbnQgd2l0aCBhbiBldmVudCBjYXRlZ29yeSAoVmlkZW9zLCBNdXNpYywgR2FtZXPigKYpLCBhbiBldmVudCBhY3Rpb24gKFBsYXksIFBhdXNlLCBEdXJhdGlvbixcbiAgICogQWRkIFBsYXlsaXN0LCBEb3dubG9hZGVkLCBDbGlja2Vk4oCmKSwgYW5kIGFuIG9wdGlvbmFsIGV2ZW50IG5hbWUgYW5kIG9wdGlvbmFsIG51bWVyaWMgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSBjYXRlZ29yeSBDYXRlZ29yeSBvZiB0aGUgZXZlbnQuXG4gICAqIEBwYXJhbSBhY3Rpb24gQWN0aW9uIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtIFtuYW1lXSBPcHRpb25hbCBuYW1lIG9mIHRoZSBldmVudC5cbiAgICogQHBhcmFtIFt2YWx1ZV0gT3B0aW9uYWwgdmFsdWUgZm9yIHRoZSBldmVudC5cbiAgICovXG4gIHRyYWNrRXZlbnQoY2F0ZWdvcnk6IHN0cmluZywgYWN0aW9uOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcsIHZhbHVlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW2NhdGVnb3J5LCBhY3Rpb25dO1xuICAgICAgaWYgKCEhbmFtZSkge1xuICAgICAgICBhcmdzLnB1c2gobmFtZSk7XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3RyYWNrRXZlbnQnLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIGFuIGludGVybmFsIHNpdGUgc2VhcmNoIGZvciBhIHNwZWNpZmljIGtleXdvcmQsIGluIGFuIG9wdGlvbmFsIGNhdGVnb3J5LFxuICAgKiBzcGVjaWZ5aW5nIHRoZSBvcHRpb25hbCBjb3VudCBvZiBzZWFyY2ggcmVzdWx0cyBpbiB0aGUgcGFnZS5cbiAgICpcbiAgICogQHBhcmFtIGtleXdvcmQgS2V5d29yZHMgb2YgdGhlIHNlYXJjaCBxdWVyeS5cbiAgICogQHBhcmFtIFtjYXRlZ29yeV0gT3B0aW9uYWwgY2F0ZWdvcnkgb2YgdGhlIHNlYXJjaCBxdWVyeS5cbiAgICogQHBhcmFtIFtyZXN1bHRzQ291bnRdIE9wdGlvbmFsIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkIGJ5IHRoZSBzZWFyY2ggcXVlcnkuXG4gICAqL1xuICB0cmFja1NpdGVTZWFyY2goa2V5d29yZDogc3RyaW5nLCBjYXRlZ29yeT86IHN0cmluZywgcmVzdWx0c0NvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW2tleXdvcmRdO1xuICAgICAgaWYgKCEhY2F0ZWdvcnkpIHtcbiAgICAgICAgYXJncy5wdXNoKGNhdGVnb3J5KTtcbiAgICAgICAgaWYgKHR5cGVvZiByZXN1bHRzQ291bnQgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHJlc3VsdHNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWyd0cmFja1NpdGVTZWFyY2gnLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBsb2dzIGEgY29udmVyc2lvbiBmb3IgdGhlIG51bWVyaWMgZ29hbCBJRCwgd2l0aCBhbiBvcHRpb25hbCBudW1lcmljIGN1c3RvbSByZXZlbnVlIGN1c3RvbVJldmVudWUuXG4gICAqXG4gICAqIEBwYXJhbSBpZEdvYWwgbnVtZXJpYyBJRCBvZiB0aGUgZ29hbCB0byBsb2cgYSBjb252ZXJzaW9uIGZvci5cbiAgICogQHBhcmFtIFtjdXN0b21SZXZlbnVlXSBPcHRpb25hbCBjdXN0b20gcmV2ZW51ZSB0byBsb2cgZm9yIHRoZSBnb2FsLlxuICAgKi9cbiAgdHJhY2tHb2FsKGlkR29hbDogbnVtYmVyLCBjdXN0b21SZXZlbnVlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW2lkR29hbF07XG4gICAgICBpZiAodHlwZW9mIGN1c3RvbVJldmVudWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFyZ3MucHVzaChjdXN0b21SZXZlbnVlKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWyd0cmFja0dvYWwnLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYW51YWxseSBsb2dzIGEgY2xpY2sgZnJvbSB5b3VyIG93biBjb2RlLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIEZ1bGwgVVJMIHdoaWNoIGlzIHRvIGJlIHRyYWNrZWQgYXMgYSBjbGljay5cbiAgICogQHBhcmFtIGxpbmtUeXBlIEVpdGhlciAnbGluaycgZm9yIGFuIG91dGxpbmsgb3IgJ2Rvd25sb2FkJyBmb3IgYSBkb3dubG9hZC5cbiAgICovXG4gIHRyYWNrTGluayh1cmw6IHN0cmluZywgbGlua1R5cGU6ICdsaW5rJyB8ICdkb3dubG9hZCcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3RyYWNrTGluaycsIHVybCwgbGlua1R5cGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIHRoZSBlbnRpcmUgRE9NIGZvciBhbGwgY29udGVudCBibG9ja3MgYW5kIHRyYWNrcyBhbGwgaW1wcmVzc2lvbnMgb25jZSB0aGUgRE9NIHJlYWR5IGV2ZW50IGhhcyBiZWVuIHRyaWdnZXJlZC5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tBbGxDb250ZW50SW1wcmVzc2lvbnMoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWyd0cmFja0FsbENvbnRlbnRJbXByZXNzaW9ucyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjYW5zIHRoZSBlbnRpcmUgRE9NIGZvciBhbGwgY29udGVudCBibG9ja3MgYXMgc29vbiBhcyB0aGUgcGFnZSBpcyBsb2FkZWQuPGJyIC8+XG4gICAqIEl0IHRyYWNrcyBhbiBpbXByZXNzaW9uIG9ubHkgaWYgYSBjb250ZW50IGJsb2NrIGlzIGFjdHVhbGx5IHZpc2libGUuXG4gICAqXG4gICAqIEBwYXJhbSBjaGVja09uU2Nyb2xsIElmIHRydWUsIGNoZWNrcyBmb3IgbmV3IGNvbnRlbnQgYmxvY2tzIHdoaWxlIHNjcm9sbGluZyB0aGUgcGFnZS5cbiAgICogQHBhcmFtIHRpbWVJbnRlcnZhbCBEdXJhdGlvbiwgaW4gbWlsbGlzZWNvbmRzLCBiZXR3ZWVuIHR3byBjaGVja3MgdXBvbiBzY3JvbGwuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vZGV2ZWxvcGVyLm1hdG9tby5vcmcvZ3VpZGVzL2NvbnRlbnQtdHJhY2tpbmd8Q29udGVudCBUcmFja2luZ31cbiAgICovXG4gIHRyYWNrVmlzaWJsZUNvbnRlbnRJbXByZXNzaW9ucyhjaGVja09uU2Nyb2xsOiBib29sZWFuLCB0aW1lSW50ZXJ2YWw6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsndHJhY2tWaXNpYmxlQ29udGVudEltcHJlc3Npb25zJywgY2hlY2tPblNjcm9sbCwgdGltZUludGVydmFsXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY2FucyB0aGUgZ2l2ZW4gRE9NIG5vZGUgYW5kIGl0cyBjaGlsZHJlbiBmb3IgY29udGVudCBibG9ja3MgYW5kIHRyYWNrcyBhbiBpbXByZXNzaW9uIGZvciB0aGVtXG4gICAqIGlmIG5vIGltcHJlc3Npb24gd2FzIGFscmVhZHkgdHJhY2tlZCBmb3IgaXQuXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIERPTSBub2RlIGluIHdoaWNoIHRvIGxvb2sgZm9yIGNvbnRlbnQgYmxvY2tzIHdoaWNoIGhhdmUgbm90IGJlZW4gcHJldmlvdXNseSB0cmFja2VkLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tYXRvbW8ub3JnL2d1aWRlcy9jb250ZW50LXRyYWNraW5nfENvbnRlbnQgVHJhY2tpbmd9XG4gICAqL1xuICB0cmFja0NvbnRlbnRJbXByZXNzaW9uc1dpdGhpbk5vZGUobm9kZTogTm9kZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsndHJhY2tDb250ZW50SW1wcmVzc2lvbnNXaXRoaW5Ob2RlJywgbm9kZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGFuIGludGVyYWN0aW9uIHdpdGggdGhlIGdpdmVuIERPTSBub2RlL2NvbnRlbnQgYmxvY2suXG4gICAqXG4gICAqIEBwYXJhbSBub2RlIERPTSBub2RlIGZvciB3aGljaCB0byB0cmFjayBhIGNvbnRlbnQgaW50ZXJhY3Rpb24uXG4gICAqIEBwYXJhbSBjb250ZW50SW50ZXJhY3Rpb24gTmFtZSBvZiB0aGUgY29udGVudCBpbnRlcmFjdGlvbi5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tDb250ZW50SW50ZXJhY3Rpb25Ob2RlKG5vZGU6IE5vZGUsIGNvbnRlbnRJbnRlcmFjdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWyd0cmFja0NvbnRlbnRJbnRlcmFjdGlvbk5vZGUnLCBub2RlLCBjb250ZW50SW50ZXJhY3Rpb25dKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBhIGNvbnRlbnQgaW1wcmVzc2lvbiB1c2luZyB0aGUgc3BlY2lmaWVkIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRlbnROYW1lIENvbnRlbnQgbmFtZS5cbiAgICogQHBhcmFtIGNvbnRlbnRQaWVjZSBDb250ZW50IHBpZWNlLlxuICAgKiBAcGFyYW0gY29udGVudFRhcmdldCBDb250ZW50IHRhcmdldC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvY29udGVudC10cmFja2luZ3xDb250ZW50IFRyYWNraW5nfVxuICAgKi9cbiAgdHJhY2tDb250ZW50SW1wcmVzc2lvbihjb250ZW50TmFtZTogc3RyaW5nLCBjb250ZW50UGllY2U6IHN0cmluZywgY29udGVudFRhcmdldDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWyd0cmFja0NvbnRlbnRJbXByZXNzaW9uJywgY29udGVudE5hbWUsIGNvbnRlbnRQaWVjZSwgY29udGVudFRhcmdldF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVHJhY2tzIGEgY29udGVudCBpbnRlcmFjdGlvbiB1c2luZyB0aGUgc3BlY2lmaWVkIHZhbHVlcy5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRlbnRJbnRlcmFjdGlvbiBDb250ZW50IGludGVyYWN0aW9uLlxuICAgKiBAcGFyYW0gY29udGVudE5hbWUgQ29udGVudCBuYW1lLlxuICAgKiBAcGFyYW0gY29udGVudFBpZWNlIENvbnRlbnQgcGllY2UuXG4gICAqIEBwYXJhbSBjb250ZW50VGFyZ2V0IENvbnRlbnQgdGFyZ2V0LlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2RldmVsb3Blci5tYXRvbW8ub3JnL2d1aWRlcy9jb250ZW50LXRyYWNraW5nfENvbnRlbnQgVHJhY2tpbmd9XG4gICAqL1xuICB0cmFja0NvbnRlbnRJbnRlcmFjdGlvbihcbiAgICBjb250ZW50SW50ZXJhY3Rpb246IHN0cmluZyxcbiAgICBjb250ZW50TmFtZTogc3RyaW5nLFxuICAgIGNvbnRlbnRQaWVjZTogc3RyaW5nLFxuICAgIGNvbnRlbnRUYXJnZXQ6IHN0cmluZ1xuICApOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbXG4gICAgICAgICd0cmFja0NvbnRlbnRJbnRlcmFjdGlvbicsXG4gICAgICAgIGNvbnRlbnRJbnRlcmFjdGlvbixcbiAgICAgICAgY29udGVudE5hbWUsXG4gICAgICAgIGNvbnRlbnRQaWVjZSxcbiAgICAgICAgY29udGVudFRhcmdldCxcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9ncyBhbGwgZm91bmQgY29udGVudCBibG9ja3Mgd2l0aGluIGEgcGFnZSB0byB0aGUgY29uc29sZS48YnIgLz5cbiAgICogVGhpcyBpcyB1c2VmdWwgdG8gZGVidWcgLyB0ZXN0IGNvbnRlbnQgdHJhY2tpbmcuXG4gICAqL1xuICBsb2dBbGxDb250ZW50QmxvY2tzT25QYWdlKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnbG9nQWxsQ29udGVudEJsb2Nrc09uUGFnZSddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNlbmRzIGEgcGluZyByZXF1ZXN0LjxiciAvPlxuICAgKiBQaW5nIHJlcXVlc3RzIGRvIG5vdCB0cmFjayBuZXcgYWN0aW9ucy5cbiAgICogSWYgdGhleSBhcmUgc2VudCB3aXRoaW4gdGhlIHN0YW5kYXJkIHZpc2l0IGxlbmd0aCwgdGhleSB3aWxsIGV4dGVuZCB0aGUgZXhpc3RpbmcgdmlzaXQgYW5kIHRoZSBjdXJyZW50IGxhc3QgYWN0aW9uIGZvciB0aGUgdmlzaXQuXG4gICAqIElmIHNlbnQgYWZ0ZXIgdGhlIHN0YW5kYXJkIHZpc2l0IGxlbmd0aCwgcGluZyByZXF1ZXN0cyB3aWxsIGNyZWF0ZSBhIG5ldyB2aXNpdCB1c2luZyB0aGUgbGFzdCBhY3Rpb24gaW4gdGhlIGxhc3Qga25vd24gdmlzaXQuPGJyIC8+XG4gICAqIFNlZSBhbHNvIGVuYWJsZUhlYXJ0QmVhdFRpbWVyLlxuICAgKi9cbiAgcGluZygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3BpbmcnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbnN0YWxscyBhIEhlYXJ0IGJlYXQgdGltZXIgdGhhdCB3aWxsIHJlZ3VsYXJseSBzZW5kIHJlcXVlc3RzIHRvIE1hdG9tbyBpbiBvcmRlciB0byBiZXR0ZXIgbWVhc3VyZSB0aGUgdGltZSBzcGVudCBvbiB0aGUgcGFnZS48YnIgLz5cbiAgICogVGhlc2UgcmVxdWVzdHMgd2lsbCBiZSBzZW50IG9ubHkgd2hlbiB0aGUgdXNlciBpcyBhY3RpdmVseSB2aWV3aW5nIHRoZSBwYWdlICh3aGVuIHRoZSB0YWIgaXMgYWN0aXZlIGFuZCBpbiBmb2N1cykuPGJyIC8+XG4gICAqIFRoZXNlIHJlcXVlc3RzIHdpbGwgbm90IHRyYWNrIGFkZGl0aW9uYWwgYWN0aW9ucyBvciBwYWdlIHZpZXdzLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCB0aGUgZGVsYXkgaXMgc2V0IHRvIDE1IHNlY29uZHMuXG4gICAqXG4gICAqIEBwYXJhbSBkZWxheSBEZWxheSwgaW4gc2Vjb25kcywgYmV0d2VlbiB0d28gaGVhcnQgYmVhdHMgdG8gdGhlIHNlcnZlci5cbiAgICovXG4gIGVuYWJsZUhlYXJ0QmVhdFRpbWVyKGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2VuYWJsZUhlYXJ0QmVhdFRpbWVyJywgZGVsYXldKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluc3RhbGxzIGxpbmsgdHJhY2tpbmcgb24gYWxsIGFwcGxpY2FibGUgbGluayBlbGVtZW50cy5cbiAgICpcbiAgICogQHBhcmFtIFtlbmFibGU9ZmFsc2VdIFNldCB0byB0cnVlIHRvIHVzZSBwc2V1ZG8gY2xpY2staGFuZGxlciAodHJlYXQgbWlkZGxlIGNsaWNrIGFuZCBvcGVuIGNvbnRleHRtZW51IGFzXG4gICAqIGxlZnQgY2xpY2spLjxiciAvPlxuICAgKiBBIHJpZ2h0IGNsaWNrIChvciBhbnkgY2xpY2sgdGhhdCBvcGVucyB0aGUgY29udGV4dCBtZW51KSBvbiBhIGxpbmsgd2lsbCBiZSB0cmFja2VkIGFzIGNsaWNrZWQgZXZlbiBpZiBcIk9wZW4gaW4gbmV3IHRhYlwiXG4gICAqIGlzIG5vdCBzZWxlY3RlZC48YnIgLz5cbiAgICogSWYgZmFsc2UgKGRlZmF1bHQpLCBub3RoaW5nIHdpbGwgYmUgdHJhY2tlZCBvbiBvcGVuIGNvbnRleHQgbWVudSBvciBtaWRkbGUgY2xpY2suXG4gICAqL1xuICBlbmFibGVMaW5rVHJhY2tpbmcoZW5hYmxlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2VuYWJsZUxpbmtUcmFja2luZycsIGVuYWJsZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlcyBjcm9zcyBkb21haW4gbGlua2luZy4gQnkgZGVmYXVsdCwgdGhlIHZpc2l0b3IgSUQgdGhhdCBpZGVudGlmaWVzIGEgdW5pcXVlIHZpc2l0b3IgaXMgc3RvcmVkIGluIHRoZSBicm93c2VyJ3NcbiAgICogZmlyc3QgcGFydHkgY29va2llcy48YnIgLz5cbiAgICogVGhpcyBtZWFucyB0aGUgY29va2llIGNhbiBvbmx5IGJlIGFjY2Vzc2VkIGJ5IHBhZ2VzIG9uIHRoZSBzYW1lIGRvbWFpbi48YnIgLz5cbiAgICogSWYgeW91IG93biBtdWx0aXBsZSBkb21haW5zIGFuZCB3b3VsZCBsaWtlIHRvIHRyYWNrIGFsbCB0aGUgYWN0aW9ucyBhbmQgcGFnZXZpZXdzIG9mIGEgc3BlY2lmaWMgdmlzaXRvciBpbnRvIHRoZSBzYW1lIHZpc2l0LFxuICAgKiB5b3UgbWF5IGVuYWJsZSBjcm9zcyBkb21haW4gbGlua2luZy48YnIgLz5cbiAgICogV2hlbmV2ZXIgYSB1c2VyIGNsaWNrcyBvbiBhIGxpbmsgaXQgd2lsbCBhcHBlbmQgYSBVUkwgcGFyYW1ldGVyIHBrX3ZpZCB0byB0aGUgY2xpY2tlZCBVUkwgd2hpY2ggZm9yd2FyZHMgdGhlIGN1cnJlbnRcbiAgICogdmlzaXRvciBJRCB2YWx1ZSB0byB0aGUgcGFnZSBvZiB0aGUgZGlmZmVyZW50IGRvbWFpbi5cbiAgICpcbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2ZhcS9ob3ctdG8vZmFxXzIzNjU0L3xDcm9zcyBEb21haW4gTGlua2luZ31cbiAgICovXG4gIGVuYWJsZUNyb3NzRG9tYWluTGlua2luZygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2VuYWJsZUNyb3NzRG9tYWluTGlua2luZyddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNyb3NzIGRvbWFpbiBsaW5raW5nIHRpbWVvdXQuPGJyIC8+XG4gICAqIEJ5IGRlZmF1bHQsIHRoZSB0d28gdmlzaXRzIGFjcm9zcyBkb21haW5zIHdpbGwgYmUgbGlua2VkIHRvZ2V0aGVyIHdoZW4gdGhlIGxpbmsgaXMgY2xpY2tlZCBhbmQgdGhlIHBhZ2UgaXMgbG9hZGVkIHdpdGhpblxuICAgKiBhIDE4MCBzZWNvbmRzIHRpbWVvdXQgd2luZG93LlxuICAgKlxuICAgKiBAcGFyYW0gdGltZW91dCBUaW1lb3V0LCBpbiBzZWNvbmRzLCBiZXR3ZWVuIHR3byBhY3Rpb25zIGFjcm9zcyB0d28gZG9tYWlucyBiZWZvcmUgY3JlYXRpbmcgYSBuZXcgdmlzaXQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9mYXEvaG93LXRvL2ZhcV8yMzY1NC98Q3Jvc3MgRG9tYWluIExpbmtpbmd9XG4gICAqL1xuICBzZXRDcm9zc0RvbWFpbkxpbmtpbmdUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q3Jvc3NEb21haW5MaW5raW5nVGltZW91dCcsIHRpbWVvdXRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHF1ZXJ5IHBhcmFtZXRlciB0byBhcHBlbmQgdG8gbGlua3MgdG8gaGFuZGxlIGNyb3NzIGRvbWFpbiBsaW5raW5nLjxiciAvPlxuICAgKiBVc2UgdGhpcyB0byBhZGQgY3Jvc3MgZG9tYWluIHN1cHBvcnQgZm9yIGxpbmtzIHRoYXQgYXJlIGFkZGVkIHRvIHRoZSBET00gZHluYW1pY2FsbHkuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBgcGtfdmlkYCBxdWVyeSBwYXJhbWV0ZXIuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9mYXEvaG93LXRvL2ZhcV8yMzY1NC98Q3Jvc3MgRG9tYWluIExpbmtpbmd9XG4gICAqL1xuICBnZXRDcm9zc0RvbWFpbkxpbmtpbmdVcmxQYXJhbWV0ZXIoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbXG4gICAgICAgICAgZnVuY3Rpb24gKHRoaXM6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldENyb3NzRG9tYWluTGlua2luZ1VybFBhcmFtZXRlcigpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyBkb2N1bWVudC50aXRsZVxuICAgKlxuICAgKiBAcGFyYW0gdGl0bGUgVGl0bGUgb2YgdGhlIGRvY3VtZW50LlxuICAgKi9cbiAgc2V0RG9jdW1lbnRUaXRsZSh0aXRsZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXREb2N1bWVudFRpdGxlJywgdGl0bGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYXJyYXkgb2YgaG9zdG5hbWVzIG9yIGRvbWFpbnMgdG8gYmUgdHJlYXRlZCBhcyBsb2NhbC48YnIgLz5cbiAgICogRm9yIHdpbGRjYXJkIHN1YmRvbWFpbnMsIHlvdSBjYW4gdXNlOiBgc2V0RG9tYWlucygnLmV4YW1wbGUuY29tJylgOyBvciBgc2V0RG9tYWlucygnKi5leGFtcGxlLmNvbScpO2AuPGJyIC8+XG4gICAqIFlvdSBjYW4gYWxzbyBzcGVjaWZ5IGEgcGF0aCBhbG9uZyBhIGRvbWFpbjogYHNldERvbWFpbnMoJyouZXhhbXBsZS5jb20vc3Vic2l0ZTEnKTtgLlxuICAgKlxuICAgKiBAcGFyYW0gZG9tYWlucyBMaXN0IG9mIGhvc3RuYW1lcyBvciBkb21haW5zLCB3aXRoIG9yIHdpdGhvdXQgcGF0aCwgdG8gYmUgdHJlYXRlZCBhcyBsb2NhbC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2ZhcS9ob3ctdG8vZmFxXzIzNjU0L3xDcm9zcyBEb21haW4gTGlua2luZ31cbiAgICovXG4gIHNldERvbWFpbnMoZG9tYWluczogc3RyaW5nW10pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldERvbWFpbnMnLCBkb21haW5zXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSB0aGUgcGFnZSdzIHJlcG9ydGVkIFVSTC5cbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkwgdG8gYmUgcmVwb3J0ZWQgZm9yIHRoZSBwYWdlLlxuICAgKi9cbiAgc2V0Q3VzdG9tVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRDdXN0b21VcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyB0aGUgZGV0ZWN0ZWQgSHR0cC1SZWZlcmVyLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byBiZSByZXBvcnRlZCBmb3IgdGhlIHJlZmVyZXIuXG4gICAqL1xuICBzZXRSZWZlcnJlclVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0UmVmZXJyZXJVcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgd2Vic2l0ZSBJRC48YnIgLz5cbiAgICogUmVkdW5kYW50OiBjYW4gYmUgc3BlY2lmaWVkIGluIGdldFRyYWNrZXIoKSBjb25zdHJ1Y3Rvci5cbiAgICpcbiAgICogLy8gVE9ETyBJbnZlc3RpZ2F0ZSBpZiBzZXRTaXRlSWQgbmVlZHMgdG8gYmUgcmVtb3ZlZCBmcm9tIE1hdG9tb1RyYWNrZXIuXG4gICAqIEBwYXJhbSBzaXRlSWQgU2l0ZSBJRCBmb3IgdGhlIHRyYWNrZXIuXG4gICAqL1xuICBzZXRTaXRlSWQoc2l0ZUlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldFNpdGVJZCcsIHNpdGVJZF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIHRoZSBNYXRvbW8gSFRUUCBBUEkgVVJMIGVuZHBvaW50LjxiciAvPlxuICAgKiBQb2ludHMgdG8gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIE1hdG9tbywgZS5nLiBodHRwOi8vbWF0b21vLmV4YW1wbGUub3JnLyBvciBodHRwczovL2V4YW1wbGUub3JnL21hdG9tby8uPGJyIC8+XG4gICAqIFRoaXMgZnVuY3Rpb24gaXMgb25seSB1c2VmdWwgd2hlbiB0aGUgJ092ZXJsYXknIHJlcG9ydCBpcyBub3Qgd29ya2luZy48YnIgLz5cbiAgICogQnkgZGVmYXVsdCwgeW91IGRvIG5vdCBuZWVkIHRvIHVzZSB0aGlzIGZ1bmN0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCBmb3IgTWF0b21vIEhUVFAgQVBJIGVuZHBvaW50LlxuICAgKi9cbiAgc2V0QXBpVXJsKHVybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRBcGlVcmwnLCB1cmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpZmllcyB0aGUgTWF0b21vIHNlcnZlciBVUkwuPGJyIC8+XG4gICAqIFJlZHVuZGFudDogY2FuIGJlIHNwZWNpZmllZCBpbiBnZXRUcmFja2VyKCkgY29uc3RydWN0b3IuXG4gICAqXG4gICAqIC8vIFRPRE8gSW52ZXN0aWdhdGUgaWYgc2V0VHJhY2tlclVybCBuZWVkcyB0byBiZSByZW1vdmVkIGZyb20gTWF0b21vVHJhY2tlci5cbiAgICogQHBhcmFtIHVybCBVUkwgZm9yIHRoZSBNYXRvbW8gc2VydmVyLlxuICAgKi9cbiAgc2V0VHJhY2tlclVybCh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0VHJhY2tlclVybCcsIHVybF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgTWF0b21vIHNlcnZlciBVUkwuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBNYXRvbW8gc2VydmVyIFVSTC5cbiAgICovXG4gIGdldE1hdG9tb1VybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbiAodGhpczogYW55KTogdm9pZCB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0UGl3aWtVcmwoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHVybCBvZiB0aGUgcGFnZSB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyB2aXNpdGVkLjxiciAvPlxuICAgKiBJZiBhIGN1c3RvbSBVUkwgd2FzIHNldCBiZWZvcmUgY2FsbGluZyB0aGlzIG1ldGhvZCwgdGhlIGN1c3RvbSBVUkwgd2lsbCBiZSByZXR1cm5lZC5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIFVSTCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICAgKi9cbiAgZ2V0Q3VycmVudFVybCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbiAodGhpczogYW55KTogdm9pZCB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VycmVudFVybCgpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY2xhc3NlcyB0byBiZSB0cmVhdGVkIGFzIGRvd25sb2FkcyAoaW4gYWRkaXRpb24gdG8gcGl3aWtfZG93bmxvYWQpLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhc3NlcyBDbGFzcywgb3IgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHRyZWF0ZWQgYXMgZG93bmxvYWRzLlxuICAgKi9cbiAgc2V0RG93bmxvYWRDbGFzc2VzKGNsYXNzZXM6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXREb3dubG9hZENsYXNzZXMnLCBjbGFzc2VzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGZpbGUgZXh0ZW5zaW9ucyB0byBiZSByZWNvZ25pemVkIGFzIGRvd25sb2Fkcy48YnIgLz5cbiAgICogRXhhbXBsZTogYCdkb2N4J2Agb3IgYFsnZG9jeCcsICd4bHN4J11gLlxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZW5zaW9ucyBFeHRlbnNpb24sIG9yIGxpc3Qgb2YgZXh0ZW5zaW9ucyB0byBiZSByZWNvZ25pemVkIGFzIGRvd25sb2Fkcy5cbiAgICovXG4gIHNldERvd25sb2FkRXh0ZW5zaW9ucyhleHRlbnNpb25zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RG93bmxvYWRDbGFzc2VzJywgZXh0ZW5zaW9uc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBhZGRpdGlvbmFsIGZpbGUgZXh0ZW5zaW9ucyB0byBiZSByZWNvZ25pemVkIGFzIGRvd25sb2Fkcy48YnIgLz5cbiAgICogRXhhbXBsZTogYCdkb2N4J2Agb3IgYFsnZG9jeCcsICd4bHN4J11gLlxuICAgKlxuICAgKiBAcGFyYW0gZXh0ZW5zaW9ucyBFeHRlbnNpb24sIG9yIGxpc3Qgb2YgZXh0ZW5zaW9ucyB0byBiZSByZWNvZ25pemVkIGFzIGRvd25sb2Fkcy5cbiAgICovXG4gIGFkZERvd25sb2FkRXh0ZW5zaW9ucyhleHRlbnNpb25zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RG93bmxvYWRDbGFzc2VzJywgZXh0ZW5zaW9uc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lmaWVzIGZpbGUgZXh0ZW5zaW9ucyB0byBiZSByZW1vdmVkIGZyb20gdGhlIGxpc3Qgb2YgZG93bmxvYWQgZmlsZSBleHRlbnNpb25zLjxiciAvPlxuICAgKiBFeGFtcGxlOiBgJ2RvY3gnYCBvciBgWydkb2N4JywgJ3hsc3gnXWAuXG4gICAqXG4gICAqIEBwYXJhbSBleHRlbnNpb25zIEV4dGVuc2lvbiwgb3IgbGlzdCBvZiBleHRlbnNpb25zIG5vdCB0byBiZSByZWNvZ25pemVkIGFzIGRvd25sb2Fkcy5cbiAgICovXG4gIHJlbW92ZURvd25sb2FkRXh0ZW5zaW9ucyhleHRlbnNpb25zOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RG93bmxvYWRDbGFzc2VzJywgZXh0ZW5zaW9uc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjbGFzc2VzIHRvIGJlIGlnbm9yZWQgaWYgcHJlc2VudCBpbiBsaW5rIChpbiBhZGRpdGlvbiB0byBwaXdpa19pZ25vcmUpLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhc3NlcyBDbGFzcywgb3IgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIGlnbm9yZWQgaWYgcHJlc2VudCBpbiBsaW5rLlxuICAgKi9cbiAgc2V0SWdub3JlQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RG93bmxvYWRDbGFzc2VzJywgY2xhc3Nlc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjbGFzc2VzIHRvIGJlIHRyZWF0ZWQgYXMgb3V0bGlua3MgKGluIGFkZGl0aW9uIHRvIHBpd2lrX2xpbmspLlxuICAgKlxuICAgKiBAcGFyYW0gY2xhc3NlcyBDbGFzcywgb3IgbGlzdCBvZiBjbGFzc2VzIHRvIGJlIHRyZWF0ZWQgYXMgb3V0bGlua3MuXG4gICAqL1xuICBzZXRMaW5rQ2xhc3NlcyhjbGFzc2VzOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RG93bmxvYWRDbGFzc2VzJywgY2xhc3Nlc10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBkZWxheSBmb3IgbGluayB0cmFja2luZyAoaW4gbWlsbGlzZWNvbmRzKS5cbiAgICpcbiAgICogQHBhcmFtIGRlbGF5IERlbGF5LCBpbiBtaWxsaXNlY29uZHMsIGZvciBsaW5rIHRyYWNraW5nLlxuICAgKi9cbiAgc2V0TGlua1RyYWNraW5nVGltZXIoZGVsYXk6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0TGlua1RyYWNraW5nVGltZXInLCBkZWxheV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBkZWxheSBmb3IgbGluayB0cmFja2luZy5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIGRlbGF5IGluIG1pbGxpc2Vjb25kcy5cbiAgICovXG4gIGdldExpbmtUcmFja2luZ1RpbWVyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRMaW5rVHJhY2tpbmdUaW1lcigpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaWYgb3Igbm90IHRvIHJlY29yZCB0aGUgaGFzaCB0YWcgKGFuY2hvcikgcG9ydGlvbiBvZiBVUkxzLlxuICAgKlxuICAgKiBAcGFyYW0gdmFsdWUgSWYgdHJ1ZSwgdGhlIGhhc2ggdGFnIHBvcnRpb24gb2YgdGhlIFVSTHMgd29uJ3QgYmUgcmVjb3JkZWQuXG4gICAqL1xuICBkaXNjYXJkSGFzaFRhZyh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnZGlzY2FyZEhhc2hUYWcnLCB2YWx1ZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQnkgZGVmYXVsdCBNYXRvbW8gdXNlcyB0aGUgYnJvd3NlciBET00gVGltaW5nIEFQSSB0byBhY2N1cmF0ZWx5IGRldGVybWluZSB0aGUgdGltZSBpdCB0YWtlcyB0byBnZW5lcmF0ZSBhbmQgZG93bmxvYWRcbiAgICogdGhlIHBhZ2UuIFlvdSBtYXkgb3ZlcndyaXRlIHRoaXMgdmFsdWUgd2l0aCB0aGlzIGZ1bmN0aW9uLlxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gTWF0b21vIDQueC5cbiAgICpcbiAgICogQHBhcmFtIGdlbmVyYXRpb25UaW1lIFRpbWUsIGluIG1pbGxpc2Vjb25kcywgb2YgdGhlIHBhZ2UgZ2VuZXJhdGlvbi5cbiAgICovXG4gIHNldEdlbmVyYXRpb25UaW1lTXMoZ2VuZXJhdGlvblRpbWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24uc2NyaXB0VmVyc2lvbiA8IDQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRHZW5lcmF0aW9uVGltZU1zJywgZ2VuZXJhdGlvblRpbWVdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXBwZW5kcyBhIGN1c3RvbSBzdHJpbmcgdG8gdGhlIGVuZCBvZiB0aGUgSFRUUCByZXF1ZXN0IHRvIHBpd2lrLnBocC5cbiAgICpcbiAgICogQHBhcmFtIGFwcGVuZFRvVXJsIFN0cmluZyB0byBhcHBlbmQgdG8gdGhlIGVuZCBvZiB0aGUgSFRUUCByZXF1ZXN0IHRvIHBpd2lrLnBocC9tYXRvbW8ucGhwLlxuICAgKi9cbiAgYXBwZW5kVG9UcmFja2luZ1VybChhcHBlbmRUb1VybDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydhcHBlbmRUb1RyYWNraW5nVXJsJywgYXBwZW5kVG9VcmxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEVuYWJsZXMgYSBmcmFtZS1idXN0ZXIgdG8gcHJldmVudCB0aGUgdHJhY2tlZCB3ZWIgcGFnZSBmcm9tIGJlaW5nIGZyYW1lZC9pZnJhbWVkLlxuICAgKi9cbiAga2lsbEZyYW1lKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsna2lsbEZyYW1lJ10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9yY2VzIHRoZSBicm93c2VyIHRvIGxvYWQgdGhlIGxpdmUgVVJMIGlmIHRoZSB0cmFja2VkIHdlYiBwYWdlIGlzIGxvYWRlZCBmcm9tIGEgbG9jYWwgZmlsZVxuICAgKiAoZS5nLiwgc2F2ZWQgdG8gc29tZW9uZSdzIGRlc2t0b3ApLlxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCB0byB0cmFjayBpbnN0ZWFkIG9mIGZpbGU6Ly8gVVJMcy5cbiAgICovXG4gIHJlZGlyZWN0RmlsZSh1cmw6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsncmVkaXJlY3RGaWxlJywgdXJsXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvcmRzIGhvdyBsb25nIHRoZSBwYWdlIGhhcyBiZWVuIHZpZXdlZCBpZiB0aGUgbWluaW11bVZpc2l0TGVuZ3RoIGlzIGF0dGFpbmVkO1xuICAgKiB0aGUgaGVhcnRCZWF0RGVsYXkgZGV0ZXJtaW5lcyBob3cgZnJlcXVlbnRseSB0byB1cGRhdGUgdGhlIHNlcnZlci5cbiAgICpcbiAgICogQHBhcmFtIG1pbmltdW1WaXNpdExlbmd0aCBEdXJhdGlvbiBiZWZvcmUgbm90aWZ5aW5nIHRoZSBzZXJ2ZXIgZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdmlzaXQgdG8gYSBwYWdlLlxuICAgKiBAcGFyYW0gaGVhcnRCZWF0RGVsYXkgRGVsYXksIGluIHNlY29uZHMsIGJldHdlZW4gdHdvIHVwZGF0ZXMgdG8gdGhlIHNlcnZlci5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9kZXZlbG9wZXIubWF0b21vLm9yZy9ndWlkZXMvdHJhY2tpbmctamF2YXNjcmlwdC1ndWlkZSNhY2N1cmF0ZWx5LW1lYXN1cmUtdGhlLXRpbWUtc3BlbnQtb24tZWFjaC1wYWdlfVxuICAgKi9cbiAgc2V0SGVhcnRCZWF0VGltZXIobWluaW11bVZpc2l0TGVuZ3RoOiBudW1iZXIsIGhlYXJ0QmVhdERlbGF5OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldEhlYXJ0QmVhdFRpbWVyJywgbWluaW11bVZpc2l0TGVuZ3RoLCBoZWFydEJlYXREZWxheV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgMTYgY2hhcmFjdGVycyBJRCBmb3IgdGhlIHZpc2l0b3IuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB0aGUgMTYgY2hhcmFjdGVycyBJRCBmb3IgdGhlIHZpc2l0b3IuXG4gICAqL1xuICBnZXRWaXNpdG9ySWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbXG4gICAgICAgICAgZnVuY3Rpb24gKHRoaXM6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldFZpc2l0b3JJZCgpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHZpc2l0b3IgY29va2llIGNvbnRlbnRzIGluIGFuIGFycmF5LlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgY29va2llIGNvbnRlbnRzIGluIGFuIGFycmF5LlxuICAgKi9cbiAgZ2V0VmlzaXRvckluZm8oKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbiAodGhpczogYW55KTogdm9pZCB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0VmlzaXRvckluZm8oKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aXNpdG9yIGF0dHJpYnV0aW9uIGFycmF5IChSZWZlcmVyIGluZm9ybWF0aW9uIGFuZC9vciBDYW1wYWlnbiBuYW1lICYga2V5d29yZCkuPGJyIC8+XG4gICAqIEF0dHJpYnV0aW9uIGluZm9ybWF0aW9uIGlzIHVzZWQgYnkgTWF0b21vIHRvIGNyZWRpdCB0aGUgY29ycmVjdCByZWZlcnJlciAoZmlyc3Qgb3IgbGFzdCByZWZlcnJlcilcbiAgICogdXNlZCB3aGVuIGEgdXNlciB0cmlnZ2VycyBhIGdvYWwgY29udmVyc2lvbi5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIHZpc2l0b3IgYXR0cmlidXRpb24gYXJyYXkgKFJlZmVyZXIgaW5mb3JtYXRpb24gYW5kL29yIENhbXBhaWduIG5hbWUgJiBrZXl3b3JkKS5cbiAgICovXG4gIGdldEF0dHJpYnV0aW9uSW5mbygpOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRBdHRyaWJ1dGlvbkluZm8oKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGlvbiBjYW1wYWlnbiBuYW1lLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgdGhlIGF0dHJpYnV0aW9uIGNhbXBhaWduIG5hbWUuXG4gICAqL1xuICBnZXRBdHRyaWJ1dGlvbkNhbXBhaWduTmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbiAodGhpczogYW55KTogdm9pZCB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0QXR0cmlidXRpb25DYW1wYWlnbk5hbWUoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGlvbiBjYW1wYWlnbiBrZXl3b3JkLlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgYXR0cmlidXRpb24gY2FtcGFpZ24ga2V5d29yZC5cbiAgICovXG4gIGdldEF0dHJpYnV0aW9uQ2FtcGFpZ25LZXl3b3JkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRBdHRyaWJ1dGlvbkNhbXBhaWduS2V5d29yZCgpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGF0dHJpYnV0aW9uIHJlZmVycmVyIHRpbWVzdGFtcC5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIGF0dHJpYnV0aW9uIHJlZmVycmVyIHRpbWVzdGFtcCAoYXMgc3RyaW5nKS5cbiAgICovXG4gIGdldEF0dHJpYnV0aW9uUmVmZXJyZXJUaW1lc3RhbXAoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbXG4gICAgICAgICAgZnVuY3Rpb24gKHRoaXM6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEF0dHJpYnV0aW9uUmVmZXJyZXJUaW1lc3RhbXAoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhdHRyaWJ1dGlvbiByZWZlcnJlciBVUkwuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSBhdHRyaWJ1dGlvbiByZWZlcnJlciBVUkxcbiAgICovXG4gIGdldEF0dHJpYnV0aW9uUmVmZXJyZXJVcmwoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbXG4gICAgICAgICAgZnVuY3Rpb24gKHRoaXM6IGFueSk6IHZvaWQge1xuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdldEF0dHJpYnV0aW9uUmVmZXJyZXJVcmwoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVc2VyIElEIHN0cmluZyBpZiBpdCB3YXMgc2V0LlxuICAgKlxuICAgKiBAcmV0dXJucyBQcm9taXNlIGZvciB0aGUgVXNlciBJRCBmb3IgdGhlIHZpc2l0b3IuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3VzZXItaWQvfE1hdG9tbyBVc2VyIElEfVxuICAgKi9cbiAgZ2V0VXNlcklkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRVc2VySWQoKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgVXNlciBJRCB0byB0aGlzIHVzZXIgKHN1Y2ggYXMgYW4gZW1haWwgYWRkcmVzcyBvciBhIHVzZXJuYW1lKS5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZCBVc2VyIElEIHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgdmlzaXRvci5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvdXNlci1pZC98TWF0b21vIFVzZXIgSUR9XG4gICAqL1xuICBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldFVzZXJJZCcsIHVzZXJJZF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSBVc2VyIElEIHdoaWNoIGFsc28gZ2VuZXJhdGVzIGEgbmV3IFZpc2l0b3IgSUQuXG4gICAqXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3VzZXItaWQvfE1hdG9tbyBVc2VyIElEfVxuICAgKi9cbiAgcmVzZXRVc2VySWQoKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydyZXNldFVzZXJJZCddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgYSBjdXN0b20gdmFyaWFibGUuXG4gICAqXG4gICAqIEBwYXJhbSBpbmRleCBJbmRleCwgdGhlIG51bWJlciBmcm9tIDEgdG8gNSB3aGVyZSB0aGlzIGN1c3RvbSB2YXJpYWJsZSBuYW1lIGlzIHN0b3JlZCBmb3IgdGhlIGN1cnJlbnQgcGFnZSB2aWV3LlxuICAgKiBAcGFyYW0gbmFtZSBOYW1lLCB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUsIGZvciBleGFtcGxlOiBDYXRlZ29yeSwgU3ViLWNhdGVnb3J5LCBVc2VyVHlwZS5cbiAgICogQHBhcmFtIHZhbHVlIFZhbHVlLCBmb3IgZXhhbXBsZTogXCJTcG9ydHNcIiwgXCJOZXdzXCIsIFwiV29ybGRcIiwgXCJCdXNpbmVzc1wi4oCmXG4gICAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiB0aGUgY3VzdG9tIHZhcmlhYmxlOjxiciAvPlxuICAgKiAtICdwYWdlJyBtZWFucyB0aGUgY3VzdG9tIHZhcmlhYmxlIGFwcGxpZXMgdG8gdGhlIGN1cnJlbnQgcGFnZSB2aWV3LlxuICAgKiAtICd2aXNpdCcgbWVhbnMgdGhlIGN1c3RvbSB2YXJpYWJsZSBhcHBsaWVzIHRvIHRoZSBjdXJyZW50IHZpc2l0b3IuXG4gICAqIC0gJ2V2ZW50JyBtZWFucyB0aGUgY3VzdG9tIHZhcmlhYmxlIGFwcGxpZXMgdG8gdGhlIGN1cnJlbnQgZXZlbnQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL2N1c3RvbS12YXJpYWJsZXMvfEN1c3RvbSBWYXJpYWJsZXN9XG4gICAqL1xuICBzZXRDdXN0b21WYXJpYWJsZShpbmRleDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHNjb3BlOiBNYXRvbW9TY29wZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q3VzdG9tVmFyaWFibGUnLCBpbmRleCwgbmFtZSwgdmFsdWUsIHNjb3BlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIGEgY3VzdG9tIHZhcmlhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGN1c3RvbSB2YXJpYWJsZSB0byBkZWxldGUuXG4gICAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiB0aGUgY3VzdG9tIHZhcmlhYmxlIHRvIGRlbGV0ZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvY3VzdG9tLXZhcmlhYmxlcy98Q3VzdG9tIFZhcmlhYmxlc31cbiAgICovXG4gIGRlbGV0ZUN1c3RvbVZhcmlhYmxlKGluZGV4OiBudW1iZXIsIHNjb3BlOiBNYXRvbW9TY29wZSk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnZGVsZXRlQ3VzdG9tVmFyaWFibGUnLCBpbmRleCwgc2NvcGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYWxsIGN1c3RvbSB2YXJpYWJsZXMuXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZSBTY29wZSBvZiB0aGUgY3VzdG9tIHZhcmlhYmxlcyB0byBkZWxldGUuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL2N1c3RvbS12YXJpYWJsZXMvfEN1c3RvbSBWYXJpYWJsZXN9XG4gICAqL1xuICBkZWxldGVDdXN0b21WYXJpYWJsZXMoc2NvcGU6IE1hdG9tb1Njb3BlKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydkZWxldGVDdXN0b21WYXJpYWJsZXMnLCBzY29wZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIGEgY3VzdG9tIHZhcmlhYmxlLlxuICAgKlxuICAgKiBAcGFyYW0gaW5kZXggSW5kZXggb2YgdGhlIGN1c3RvbSB2YXJpYWJsZSB0byByZXRyaWV2ZS5cbiAgICogQHBhcmFtIHNjb3BlIFNjb3BlIG9mIHRoZSBjdXN0b20gdmFyaWFibGUgdG8gcmV0cmlldmUuXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZiBjdXN0b20gdmFyaWFibGUuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL2N1c3RvbS12YXJpYWJsZXMvfEN1c3RvbSBWYXJpYWJsZXN9XG4gICAqL1xuICBnZXRDdXN0b21WYXJpYWJsZShpbmRleDogbnVtYmVyLCBzY29wZTogTWF0b21vU2NvcGUpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFtcbiAgICAgICAgICBmdW5jdGlvbiAodGhpczogYW55KTogdm9pZCB7XG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2V0Q3VzdG9tVmFyaWFibGUoaW5kZXgsIHNjb3BlKSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIGNhbGxlZCB0aGVuIHRoZSBDdXN0b20gVmFyaWFibGVzIG9mIHNjb3BlICd2aXNpdCcgd2lsbCBiZSBzdG9yZWQgKHBlcnNpc3RlZCkgaW4gYSBmaXJzdCBwYXJ0eSBjb29raWVcbiAgICogZm9yIHRoZSBkdXJhdGlvbiBvZiB0aGUgdmlzaXQuPGJyIC8+XG4gICAqIFRoaXMgaXMgdXNlZnVsIGlmIHlvdSB3YW50IHRvIGNhbGwgZ2V0Q3VzdG9tVmFyaWFibGUgbGF0ZXIgaW4gdGhlIHZpc2l0LjxiciAvPlxuICAgKiAoYnkgZGVmYXVsdCBjdXN0b20gdmFyaWFibGVzIGFyZSBub3Qgc3RvcmVkIG9uIHRoZSB2aXNpdG9yJ3MgY29tcHV0ZXIuKVxuICAgKlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy9jdXN0b20tdmFyaWFibGVzL3xDdXN0b20gVmFyaWFibGVzfVxuICAgKi9cbiAgc3RvcmVDdXN0b21WYXJpYWJsZXNJbkNvb2tpZSgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3N0b3JlQ3VzdG9tVmFyaWFibGVzSW5Db29raWUnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgY3VzdG9tIGRpbWVuc2lvbi48YnIgLz5cbiAgICogKHJlcXVpcmVzIE1hdG9tbyAyLjE1LjEgKyBDdXN0b20gRGltZW5zaW9ucyBwbHVnaW4pXG4gICAqXG4gICAqIEBwYXJhbSBjdXN0b21EaW1lbnNpb25JZCBJRCBvZiB0aGUgY3VzdG9tIGRpbWVuc2lvbiB0byBzZXQuXG4gICAqIEBwYXJhbSBjdXN0b21EaW1lbnNpb25WYWx1ZSBWYWx1ZSB0byBiZSBzZXQuXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vcGx1Z2lucy5waXdpay5vcmcvQ3VzdG9tRGltZW5zaW9uc3xDdXN0b20gRGltZW5zaW9uc31cbiAgICovXG4gIHNldEN1c3RvbURpbWVuc2lvbihjdXN0b21EaW1lbnNpb25JZDogbnVtYmVyLCBjdXN0b21EaW1lbnNpb25WYWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRDdXN0b21EaW1lbnNpb24nLCBjdXN0b21EaW1lbnNpb25JZCwgY3VzdG9tRGltZW5zaW9uVmFsdWVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERlbGV0ZXMgYSBjdXN0b20gZGltZW5zaW9uLjxiciAvPlxuICAgKiAocmVxdWlyZXMgTWF0b21vIDIuMTUuMSArIEN1c3RvbSBEaW1lbnNpb25zIHBsdWdpbilcbiAgICpcbiAgICogQHBhcmFtIGN1c3RvbURpbWVuc2lvbklkIElEIG9mIHRoZSBjdXN0b20gZGltZW5zaW9uIHRvIGRlbGV0ZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9wbHVnaW5zLnBpd2lrLm9yZy9DdXN0b21EaW1lbnNpb25zfEN1c3RvbSBEaW1lbnNpb25zfVxuICAgKi9cbiAgZGVsZXRlQ3VzdG9tRGltZW5zaW9uKGN1c3RvbURpbWVuc2lvbklkOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2RlbGV0ZUN1c3RvbURpbWVuc2lvbicsIGN1c3RvbURpbWVuc2lvbklkXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZSBhIGN1c3RvbSBkaW1lbnNpb24uPGJyIC8+XG4gICAqIChyZXF1aXJlcyBNYXRvbW8gMi4xNS4xICsgQ3VzdG9tIERpbWVuc2lvbnMgcGx1Z2luKVxuICAgKlxuICAgKiBAcGFyYW0gY3VzdG9tRGltZW5zaW9uSWQgSUQgb2YgdGhlIGN1c3RvbSBkaW1lbnNpb24gdG8gcmV0cmlldmUuXG4gICAqIEByZXR1cm5zIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBmb3IgdGhlIHJlcXVlc3RlZCBjdXN0b20gZGltZW5zaW9uLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL3BsdWdpbnMucGl3aWsub3JnL0N1c3RvbURpbWVuc2lvbnN8Q3VzdG9tIERpbWVuc2lvbnN9XG4gICAqL1xuICBnZXRDdXN0b21EaW1lbnNpb24oY3VzdG9tRGltZW5zaW9uSWQ6IG51bWJlcik6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRDdXN0b21EaW1lbnNpb24oY3VzdG9tRGltZW5zaW9uSWQpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgY2FtcGFpZ24gbmFtZSBwYXJhbWV0ZXIocykuXG4gICAqXG4gICAqIEBwYXJhbSBuYW1lIE5hbWUgb2YgdGhlIGNhbXBhaWduXG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9kb2NzL3RyYWNraW5nLWNhbXBhaWducy98Q2FtcGFpZ25zfVxuICAgKi9cbiAgc2V0Q2FtcGFpZ25OYW1lS2V5KG5hbWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q2FtcGFpZ25OYW1lS2V5JywgbmFtZV0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBjYW1wYWlnbiBrZXl3b3JkIHBhcmFtZXRlcihzKS5cbiAgICpcbiAgICogQHBhcmFtIGtleXdvcmQgS2V5d29yZCBwYXJhbWV0ZXIocykgb2YgdGhlIGNhbXBhaWduLlxuICAgKiBAc2VlIHtAbGluayBodHRwczovL21hdG9tby5vcmcvZG9jcy90cmFja2luZy1jYW1wYWlnbnMvfENhbXBhaWduc31cbiAgICovXG4gIHNldENhbXBhaWduS2V5d29yZEtleShrZXl3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldENhbXBhaWduS2V5d29yZEtleScsIGtleXdvcmRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgaWYgb3Igbm90IHRvIGF0dHJpYnV0ZSBhIGNvbnZlcnNpb24gdG8gdGhlIGZpcnN0IHJlZmVycmVyLjxiciAvPlxuICAgKiBCeSBkZWZhdWx0LCBjb252ZXJzaW9uIGlzIGF0dHJpYnV0ZWQgdG8gdGhlIG1vc3QgcmVjZW50IHJlZmVycmVyLlxuICAgKlxuICAgKiBAcGFyYW0gY29udmVyc2lvblRvRmlyc3RSZWZlcnJlciBJZiB0cnVlLCBNYXRvbW8gd2lsbCBhdHRyaWJ1dGUgdGhlIEdvYWwgY29udmVyc2lvbiB0byB0aGUgZmlyc3QgcmVmZXJyZXIgdXNlZFxuICAgKiBpbnN0ZWFkIG9mIHRoZSBsYXN0IG9uZS5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly9tYXRvbW8ub3JnL2RvY3MvdHJhY2tpbmctY2FtcGFpZ25zL3xDYW1wYWlnbnN9XG4gICAqIEBzZWUge0BsaW5rIGh0dHBzOi8vbWF0b21vLm9yZy9mYXEvZ2VuZXJhbC9mYXFfMTA2LyNmYXFfMTA2fENvbnZlcnNpb25zIHRvIHRoZSBmaXJzdCByZWZlcnJlcn1cbiAgICovXG4gIHNldENvbnZlcnNpb25BdHRyaWJ1dGlvbkZpcnN0UmVmZXJyZXIoY29udmVyc2lvblRvRmlyc3RSZWZlcnJlcjogYm9vbGVhbik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q29udmVyc2lvbkF0dHJpYnV0aW9uRmlyc3RSZWZlcnJlcicsIGNvbnZlcnNpb25Ub0ZpcnN0UmVmZXJyZXJdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcGFnZSB2aWV3IGFzIGEgcHJvZHVjdCBvciBjYXRlZ29yeSBwYWdlIHZpZXcuPGJyIC8+XG4gICAqIFdoZW4geW91IGNhbGwgc2V0RWNvbW1lcmNlVmlldywgaXQgbXVzdCBiZSBmb2xsb3dlZCBieSBhIGNhbGwgdG8gdHJhY2tQYWdlVmlldyB0byByZWNvcmQgdGhlIHByb2R1Y3Qgb3IgY2F0ZWdvcnkgcGFnZSB2aWV3LlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdFNLVSBTS1Ugb2YgdGhlIHZpZXdlZCBwcm9kdWN0LlxuICAgKiBAcGFyYW0gcHJvZHVjdE5hbWUgTmFtZSBvZiB0aGUgdmlld2VkIHByb2R1Y3QuXG4gICAqIEBwYXJhbSBwcm9kdWN0Q2F0ZWdvcnkgQ2F0ZWdvcnkgb2YgdGhlIHZpZXdlZCBwcm9kdWN0LlxuICAgKiBAcGFyYW0gcHJpY2UgUHJpY2Ugb2YgdGhlIHZpZXdlZCBwcm9kdWN0LlxuICAgKi9cbiAgc2V0RWNvbW1lcmNlVmlldyhcbiAgICBwcm9kdWN0U0tVOiBzdHJpbmcsXG4gICAgcHJvZHVjdE5hbWU6IHN0cmluZyxcbiAgICBwcm9kdWN0Q2F0ZWdvcnk6IHN0cmluZyxcbiAgICBwcmljZTogbnVtYmVyXG4gICk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0RWNvbW1lcmNlVmlldycsIHByb2R1Y3RTS1UsIHByb2R1Y3ROYW1lLCBwcm9kdWN0Q2F0ZWdvcnksIHByaWNlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGEgcHJvZHVjdCBpbnRvIHRoZSBlQ29tbWVyY2Ugb3JkZXIuPGJyIC8+XG4gICAqIE11c3QgYmUgY2FsbGVkIGZvciBlYWNoIHByb2R1Y3QgaW4gdGhlIG9yZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdFNLVSBTS1Ugb2YgdGhlIHByb2R1Y3QgdG8gYWRkLlxuICAgKiBAcGFyYW0gW3Byb2R1Y3ROYW1lXSBPcHRpb25hbCBuYW1lIG9mIHRoZSBwcm9kdWN0IHRvIGFkZC5cbiAgICogQHBhcmFtIFtwcm9kdWN0Q2F0ZWdvcnldIE9wdGlvbmFsIGNhdGVnb3J5IG9mIHRoZSBwcm9kdWN0IHRvIGFkZC5cbiAgICogQHBhcmFtIFtwcmljZV0gT3B0aW9uYWwgcHJpY2Ugb2YgdGhlIHByb2R1Y3QgdG8gYWRkLlxuICAgKiBAcGFyYW0gW3F1YW50aXR5XSBPcHRpb25hbCBxdWFudGl0eSBvZiB0aGUgcHJvZHVjdCB0byBhZGQuXG4gICAqL1xuICBhZGRFY29tbWVyY2VJdGVtKFxuICAgIHByb2R1Y3RTS1U6IHN0cmluZyxcbiAgICBwcm9kdWN0TmFtZT86IHN0cmluZyxcbiAgICBwcm9kdWN0Q2F0ZWdvcnk/OiBzdHJpbmcsXG4gICAgcHJpY2U/OiBudW1iZXIsXG4gICAgcXVhbnRpdHk/OiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW3Byb2R1Y3RTS1VdO1xuICAgICAgaWYgKCEhcHJvZHVjdE5hbWUpIHtcbiAgICAgICAgYXJncy5wdXNoKHByb2R1Y3ROYW1lKTtcbiAgICAgICAgaWYgKCEhcHJvZHVjdENhdGVnb3J5KSB7XG4gICAgICAgICAgYXJncy5wdXNoKHByb2R1Y3RDYXRlZ29yeSk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBwcmljZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChwcmljZSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHF1YW50aXR5ID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICBhcmdzLnB1c2gocXVhbnRpdHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2FkZEVjb21tZXJjZUl0ZW0nLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBzcGVjaWZpZWQgcHJvZHVjdCBmcm9tIHRoZSB1bnRyYWNrZWQgZWNvbW1lcmNlIG9yZGVyLlxuICAgKlxuICAgKiBAcGFyYW0gcHJvZHVjdFNLVSBTS1Ugb2YgdGhlIHByb2R1Y3QgdG8gcmVtb3ZlLlxuICAgKi9cbiAgcmVtb3ZlRWNvbW1lcmNlSXRlbShwcm9kdWN0U0tVOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYXJnczogYW55W10gPSBbcHJvZHVjdFNLVV07XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsncmVtb3ZlRWNvbW1lcmNlSXRlbScsIC4uLmFyZ3NdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIHByb2R1Y3RzIGluIHRoZSB1bnRyYWNrZWQgZWNvbW1lcmNlIG9yZGVyLjxiciAvPlxuICAgKiBOb3RlOiB0aGlzIGlzIGRvbmUgYXV0b21hdGljYWxseSBhZnRlciB0cmFja0Vjb21tZXJjZU9yZGVyKCkgaXMgY2FsbGVkLlxuICAgKi9cbiAgY2xlYXJFY29tbWVyY2VDYXJ0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnY2xlYXJFY29tbWVyY2VDYXJ0J10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgZWNvbW1lcmNlIGl0ZW1zIGN1cnJlbnRseSBpbiB0aGUgdW50cmFja2VkIGVjb21tZXJjZSBvcmRlci5cbiAgICogVGhlIHJldHVybmVkIGFycmF5IHdpbGwgYmUgYSBjb3B5LCBzbyBjaGFuZ2luZyBpdCB3b24ndCBhZmZlY3QgdGhlIGVjb21tZXJjZSBvcmRlci48YnIgLz5cbiAgICogVG8gYWZmZWN0IHdoYXQgZ2V0cyB0cmFja2VkLCB1c2UgdGhlIGFkZEVjb21tZXJjZUl0ZW0oKS9yZW1vdmVFY29tbWVyY2VJdGVtKCkvY2xlYXJFY29tbWVyY2VDYXJ0KCkgbWV0aG9kcy48YnIgLz5cbiAgICogVXNlIHRoaXMgbWV0aG9kIHRvIHNlZSB3aGF0IHdpbGwgYmUgdHJhY2tlZCBiZWZvcmUgeW91IHRyYWNrIGFuIG9yZGVyIG9yIGNhcnQgdXBkYXRlLlxuICAgKi9cbiAgZ2V0RWNvbW1lcmNlSXRlbXMoKTogUHJvbWlzZTxcbiAgICBBcnJheTx7XG4gICAgICBwcm9kdWN0U0tVOiBzdHJpbmc7XG4gICAgICBwcm9kdWN0TmFtZT86IHN0cmluZztcbiAgICAgIHByb2R1Y3RDYXRlZ29yeT86IHN0cmluZztcbiAgICAgIHByaWNlPzogbnVtYmVyO1xuICAgICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgfT5cbiAgPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5nZXRFY29tbWVyY2VJdGVtcygpKTtcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBhIHNob3BwaW5nIGNhcnQuPGJyIC8+XG4gICAqIENhbGwgdGhpcyBmdW5jdGlvbiBldmVyeSB0aW1lIGEgdXNlciBpcyBhZGRpbmcsIHVwZGF0aW5nIG9yIGRlbGV0aW5nIGEgcHJvZHVjdCBmcm9tIHRoZSBjYXJ0LlxuICAgKlxuICAgKiBAcGFyYW0gZ3JhbmRUb3RhbCBHcmFuZCB0b3RhbCBvZiB0aGUgc2hvcHBpbmcgY2FydC5cbiAgICovXG4gIHRyYWNrRWNvbW1lcmNlQ2FydFVwZGF0ZShncmFuZFRvdGFsOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3RyYWNrRWNvbW1lcmNlQ2FydFVwZGF0ZScsIGdyYW5kVG90YWxdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRyYWNrcyBhbiBFY29tbWVyY2Ugb3JkZXIsIGluY2x1ZGluZyBhbnkgZUNvbW1lcmNlIGl0ZW0gcHJldmlvdXNseSBhZGRlZCB0byB0aGUgb3JkZXIuPGJyIC8+XG4gICAqIG9yZGVySWQgYW5kIGdyYW5kVG90YWwgKGllLnJldmVudWUpIGFyZSByZXF1aXJlZCBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBAcGFyYW0gb3JkZXJJZCBJRCBvZiB0aGUgdHJhY2tlZCBvcmRlci5cbiAgICogQHBhcmFtIGdyYW5kVG90YWwgR3JhbmQgdG90YWwgb2YgdGhlIHRyYWNrZWQgb3JkZXIuXG4gICAqIEBwYXJhbSBbc3ViVG90YWxdIFN1YiB0b3RhbCBvZiB0aGUgdHJhY2tlZCBvcmRlci5cbiAgICogQHBhcmFtIFt0YXhdIFRheGVzIGZvciB0aGUgdHJhY2tlZCBvcmRlci5cbiAgICogQHBhcmFtIFtzaGlwcGluZ10gU2hpcHBpbmcgZmVlcyBmb3IgdGhlIHRyYWNrZWQgb3JkZXIuXG4gICAqIEBwYXJhbSBbZGlzY291bnRdIERpc2NvdW50IGdyYW50ZWQgZm9yIHRoZSB0cmFja2VkIG9yZGVyLlxuICAgKi9cbiAgdHJhY2tFY29tbWVyY2VPcmRlcihcbiAgICBvcmRlcklkOiBzdHJpbmcsXG4gICAgZ3JhbmRUb3RhbDogbnVtYmVyLFxuICAgIHN1YlRvdGFsPzogbnVtYmVyLFxuICAgIHRheD86IG51bWJlcixcbiAgICBzaGlwcGluZz86IG51bWJlcixcbiAgICBkaXNjb3VudD86IG51bWJlciB8IGJvb2xlYW5cbiAgKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IGFueVtdID0gW29yZGVySWQsIGdyYW5kVG90YWxdO1xuICAgICAgaWYgKHR5cGVvZiBzdWJUb3RhbCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgYXJncy5wdXNoKHN1YlRvdGFsKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0YXggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgYXJncy5wdXNoKHRheCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBzaGlwcGluZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaChzaGlwcGluZyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGRpc2NvdW50ID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgZGlzY291bnQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICBhcmdzLnB1c2goZGlzY291bnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3RyYWNrRWNvbW1lcmNlT3JkZXInLCAuLi5hcmdzXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBCeSBkZWZhdWx0IHRoZSBNYXRvbW8gdHJhY2tlciBhc3N1bWVzIGNvbnNlbnQgdG8gdHJhY2tpbmcuXG4gICAqIFRvIGNoYW5nZSB0aGlzIGJlaGF2aW9yIHNvIG5vdGhpbmcgaXMgdHJhY2tlZCB1bnRpbCBhIHVzZXIgY29uc2VudHMsIHlvdSBtdXN0IGNhbGwgcmVxdWlyZUNvbnNlbnQuXG4gICAqL1xuICByZXF1aXJlQ29uc2VudCgpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3JlcXVpcmVDb25zZW50J10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVxdWlyZSB1c2VyIGNvb2tpZSBjb25zZW50IGJlZm9yZSBzdG9yaW5nIGFuZCB1c2luZyBhbnkgY29va2llcy5cbiAgICovXG4gIHJlcXVpcmVDb29raWVDb25zZW50KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsncmVxdWlyZUNvb2tpZUNvbnNlbnQnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBNYXJrcyB0aGF0IHRoZSBjdXJyZW50IHVzZXIgaGFzIGNvbnNlbnRlZC48YnIgLz5cbiAgICogVGhlIGNvbnNlbnQgaXMgb25lLXRpbWUgb25seSwgc28gaW4gYSBzdWJzZXF1ZW50IGJyb3dzZXIgc2Vzc2lvbiwgdGhlIHVzZXIgd2lsbCBoYXZlIHRvIGNvbnNlbnQgYWdhaW4uPGJyIC8+XG4gICAqIFRvIHJlbWVtYmVyIGNvbnNlbnQsIHNlZSB0aGUgbWV0aG9kIGJlbG93OiByZW1lbWJlckNvbnNlbnRHaXZlbi5cbiAgICovXG4gIHNldENvbnNlbnRHaXZlbigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldENvbnNlbnRHaXZlbiddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgY29uc2VudGVkIHRvIHN0b3JlIGFuZCB1c2UgY29va2llcy48YnIgLz5cbiAgICogVGhlIGNvbnNlbnQgaXMgb25lLXRpbWUgb25seSwgc28gaW4gYSBzdWJzZXF1ZW50IGJyb3dzZXIgc2Vzc2lvbiwgdGhlIHVzZXIgd2lsbCBoYXZlIHRvIGNvbnNlbnQgYWdhaW4uPGJyIC8+XG4gICAqIFRvIHJlbWVtYmVyIGNvbnNlbnQsIHNlZSB0aGUgbWV0aG9kIGJlbG93OiByZW1lbWJlckNvb2tpZUNvbnNlbnRHaXZlbi5cbiAgICovXG4gIHNldENvb2tpZUNvbnNlbnRHaXZlbigpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldENvb2tpZUNvbnNlbnRHaXZlbiddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgY29uc2VudGVkLCBhbmQgcmVtZW1iZXJzIHRoaXMgY29uc2VudCB0aHJvdWdoIGEgYnJvd3NlciBjb29raWUuPGJyIC8+XG4gICAqIFRoZSBuZXh0IHRpbWUgdGhlIHVzZXIgdmlzaXRzIHRoZSBzaXRlLCBNYXRvbW8gd2lsbCByZW1lbWJlciB0aGF0IHRoZXkgY29uc2VudGVkLCBhbmQgdHJhY2sgdGhlbS48YnIgLz5cbiAgICogSWYgeW91IGNhbGwgdGhpcyBtZXRob2QsIHlvdSBkbyBub3QgbmVlZCB0byBjYWxsIHNldENvbnNlbnRHaXZlbi5cbiAgICpcbiAgICogQHBhcmFtIGhvdXJzVG9FeHBpcmUgRXhwaXJ5IHBlcmlvZCBmb3IgeW91ciB1c2VyIGNvbnNlbnQuXG4gICAqL1xuICByZW1lbWJlckNvbnNlbnRHaXZlbihob3Vyc1RvRXhwaXJlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IG51bWJlcltdID0gW107XG4gICAgICBpZiAodHlwZW9mIGhvdXJzVG9FeHBpcmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFyZ3MucHVzaChob3Vyc1RvRXhwaXJlKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydyZW1lbWJlckNvbnNlbnRHaXZlbicsIC4uLmFyZ3NdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIE1hcmtzIHRoYXQgdGhlIGN1cnJlbnQgdXNlciBoYXMgY29uc2VudGVkLCBhbmQgcmVtZW1iZXJzIHRoaXMgY29uc2VudCB0aHJvdWdoIGEgYnJvd3NlciBjb29raWUuPGJyIC8+XG4gICAqIFRoZSBuZXh0IHRpbWUgdGhlIHVzZXIgdmlzaXRzIHRoZSBzaXRlLCBNYXRvbW8gd2lsbCByZW1lbWJlciB0aGF0IHRoZXkgY29uc2VudGVkLCBhbmQgdHJhY2sgdGhlbS48YnIgLz5cbiAgICogSWYgeW91IGNhbGwgdGhpcyBtZXRob2QsIHlvdSBkbyBub3QgbmVlZCB0byBjYWxsIHNldENvb2tpZUNvbnNlbnRHaXZlbi5cbiAgICpcbiAgICogQHBhcmFtIGhvdXJzVG9FeHBpcmUgRXhwaXJ5IHBlcmlvZCBmb3IgeW91ciB1c2VyIGNvbnNlbnQuXG4gICAqL1xuICByZW1lbWJlckNvb2tpZUNvbnNlbnRHaXZlbihob3Vyc1RvRXhwaXJlPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFyZ3M6IG51bWJlcltdID0gW107XG4gICAgICBpZiAodHlwZW9mIGhvdXJzVG9FeHBpcmUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGFyZ3MucHVzaChob3Vyc1RvRXhwaXJlKTtcbiAgICAgIH1cbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydyZW1lbWJlckNvb2tpZUNvbnNlbnRHaXZlbicsIC4uLmFyZ3NdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB1c2VyJ3MgY29uc2VudCwgYm90aCBpZiB0aGUgY29uc2VudCB3YXMgb25lLXRpbWUgb25seSBhbmQgaWYgdGhlIGNvbnNlbnQgd2FzIHJlbWVtYmVyZWQuPGJyIC8+XG4gICAqIFRoaXMgbWFrZXMgc3VyZSB0aGUgY29va2llIHRoYXQgcmVtZW1iZXJlZCB0aGUgZ2l2ZW4gY29uc2VudCBpcyBkZWxldGVkLjxiciAvPlxuICAgKiBBZnRlciBjYWxsaW5nIHRoaXMgbWV0aG9kLCB0aGUgdXNlciB3aWxsIGhhdmUgdG8gY29uc2VudCBhZ2FpbiBpbiBvcmRlciB0byBiZSB0cmFja2VkLlxuICAgKi9cbiAgZm9yZ2V0Q29uc2VudEdpdmVuKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnZm9yZ2V0Q29uc2VudEdpdmVuJ10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHVzZXIncyBjb25zZW50LCBib3RoIGlmIHRoZSBjb25zZW50IHdhcyBvbmUtdGltZSBvbmx5IGFuZCBpZiB0aGUgY29uc2VudCB3YXMgcmVtZW1iZXJlZC48YnIgLz5cbiAgICogVGhpcyBtYWtlcyBzdXJlIHRoZSBjb29raWUgdGhhdCByZW1lbWJlcmVkIHRoZSBnaXZlbiBjb25zZW50IGlzIGRlbGV0ZWQuPGJyIC8+XG4gICAqIEFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QsIHRoZSB1c2VyIHdpbGwgaGF2ZSB0byBjb25zZW50IGFnYWluIGluIG9yZGVyIHRvIGJlIHRyYWNrZWQuXG4gICAqL1xuICBmb3JnZXRDb29raWVDb25zZW50R2l2ZW4oKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydmb3JnZXRDb29raWVDb25zZW50R2l2ZW4nXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGlmIHRvIG5vdCB0byB0cmFjayB1c2VycyB3aG8gb3B0IG91dCBvZiB0cmFja2luZyB1c2luZyBNb3ppbGxhJ3MgKHByb3Bvc2VkKSBEbyBOb3QgVHJhY2sgc2V0dGluZy5cbiAgICpcbiAgICogQHBhcmFtIGRvTm90VHJhY2sgSWYgdHJ1ZSwgdXNlcnMgd2hvIG9wdGVkIGZvciBEbyBOb3QgVHJhY2sgaW4gdGhlaXIgc2V0dGluZ3Mgd29uJ3QgYmUgdHJhY2tlZC5cbiAgICogQHNlZSB7QGxpbmsgaHR0cHM6Ly93d3cudzMub3JnL1RSL3RyYWNraW5nLWRudC99XG4gICAqL1xuICBzZXREb05vdFRyYWNrKGRvTm90VHJhY2s6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldERvTm90VHJhY2snLCBkb05vdFRyYWNrXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNhYmxlcyBhbGwgZmlyc3QgcGFydHkgY29va2llcy48YnIgLz5cbiAgICogRXhpc3RpbmcgTWF0b21vIGNvb2tpZXMgZm9yIHRoaXMgd2Vic2l0ZXMgd2lsbCBiZSBkZWxldGVkIG9uIHRoZSBuZXh0IHBhZ2Ugdmlldy5cbiAgICovXG4gIGRpc2FibGVDb29raWVzKCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnZGlzYWJsZUNvb2tpZXMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEZWxldGVzIHRoZSB0cmFja2luZyBjb29raWVzIGN1cnJlbnRseSBzZXQgKHVzZWZ1bCB3aGVuIGNyZWF0aW5nIG5ldyB2aXNpdHMpLlxuICAgKi9cbiAgZGVsZXRlQ29va2llcygpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2RlbGV0ZUNvb2tpZXMnXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHdoZXRoZXIgY29va2llcyBhcmUgZW5hYmxlZCBhbmQgc3VwcG9ydGVkIGJ5IHRoaXMgYnJvd3Nlci5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSBmb3IgdGhlIHN1cHBvcnQgYW5kIGFjdGl2YXRpb24gb2YgY29va2llcy5cbiAgICovXG4gIGhhc0Nvb2tpZXMoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgIGZ1bmN0aW9uICh0aGlzOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5oYXNDb29raWVzKCkpO1xuICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdHJhY2tpbmcgY29va2llIG5hbWUgcHJlZml4LjxiciAvPlxuICAgKiBEZWZhdWx0IHByZWZpeCBpcyAncGsnLlxuICAgKlxuICAgKiBAcGFyYW0gcHJlZml4IFByZWZpeCBmb3IgdGhlIHRyYWNraW5nIGNvb2tpZSBuYW1lcy5cbiAgICovXG4gIHNldENvb2tpZU5hbWVQcmVmaXgocHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldENvb2tpZU5hbWVQcmVmaXgnLCBwcmVmaXhdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGRvbWFpbiBvZiB0aGUgdHJhY2tpbmcgY29va2llcy48YnIgLz5cbiAgICogRGVmYXVsdCBpcyB0aGUgZG9jdW1lbnQgZG9tYWluLjxiciAvPlxuICAgKiBJZiB5b3VyIHdlYnNpdGUgY2FuIGJlIHZpc2l0ZWQgYXQgYm90aCB3d3cuZXhhbXBsZS5jb20gYW5kIGV4YW1wbGUuY29tLCB5b3Ugd291bGQgdXNlOiBgJy5leGFtcGxlLmNvbSdgIG9yIGAnKi5leGFtcGxlLmNvbSdgLlxuICAgKlxuICAgKiBAcGFyYW0gZG9tYWluIERvbWFpbiBvZiB0aGUgdHJhY2tpbmcgY29va2llcy5cbiAgICovXG4gIHNldENvb2tpZURvbWFpbihkb21haW46IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q29va2llRG9tYWluJywgZG9tYWluXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBwYXRoIG9mIHRoZSB0cmFja2luZyBjb29raWVzLjxiciAvPlxuICAgKiBEZWZhdWx0IGlzICcvJy5cbiAgICpcbiAgICogQHBhcmFtIHBhdGggUGF0aCBvZiB0aGUgdHJhY2tpbmcgY29va2llcy5cbiAgICovXG4gIHNldENvb2tpZVBhdGgocGF0aDogc3RyaW5nKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRDb29raWVQYXRoJywgcGF0aF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyBpZiBvciBub3QgdG8gZW5hYmxlIHRoZSBTZWN1cmUgY29va2llIGZsYWcgb24gYWxsIGZpcnN0IHBhcnR5IGNvb2tpZXMuPGJyIC8+XG4gICAqIFRoaXMgc2hvdWxkIGJlIHVzZWQgd2hlbiB5b3VyIHdlYnNpdGUgaXMgb25seSBhdmFpbGFibGUgdW5kZXIgSFRUUFMgc28gdGhhdCBhbGwgdHJhY2tpbmcgY29va2llcyBhcmUgYWx3YXlzIHNlbnRcbiAgICogb3ZlciBzZWN1cmUgY29ubmVjdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHNlY3VyZSBJZiB0cnVlLCB0aGUgc2VjdXJlIGNvb2tpZSBmbGFnIHdpbGwgYmUgc2V0IG9uIGFsbCBmaXJzdCBwYXJ0eSBjb29raWVzLlxuICAgKi9cbiAgc2V0U2VjdXJlQ29va2llKHNlY3VyZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0U2VjdXJlQ29va2llJywgc2VjdXJlXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2aXNpdG9yIGNvb2tpZSB0aW1lb3V0LjxiciAvPlxuICAgKiBEZWZhdWx0IGlzIDEzIG1vbnRocy5cbiAgICpcbiAgICogQHBhcmFtIHRpbWVvdXQgVGltZW91dCwgaW4gc2Vjb25kcywgZm9yIHRoZSB2aXNpdG9yIGNvb2tpZSB0aW1lb3V0LlxuICAgKi9cbiAgc2V0VmlzaXRvckNvb2tpZVRpbWVvdXQodGltZW91dDogbnVtYmVyKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRWaXNpdG9yQ29va2llVGltZW91dCcsIHRpbWVvdXRdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHJlZmVycmFsIGNvb2tpZSB0aW1lb3V0LjxiciAvPlxuICAgKiBEZWZhdWx0IGlzIDYgbW9udGhzLlxuICAgKlxuICAgKiBAcGFyYW0gdGltZW91dCBUaW1lb3V0LCBpbiBzZWNvbmRzLCBmb3IgdGhlIHJlZmVycmFsIGNvb2tpZSB0aW1lb3V0LlxuICAgKi9cbiAgc2V0UmVmZXJyYWxDb29raWVUaW1lb3V0KHRpbWVvdXQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0UmVmZXJyYWxDb29raWVUaW1lb3V0JywgdGltZW91dF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Vzc2lvbiBjb29raWUgdGltZW91dC48YnIgLz5cbiAgICogRGVmYXVsdCBpcyAzMCBtaW51dGVzLlxuICAgKlxuICAgKiBAcGFyYW0gdGltZW91dCBUaW1lb3V0LCBpbiBzZWNvbmRzLCBmb3IgdGhlIHNlc3Npb24gY29va2llIHRpbWVvdXQuXG4gICAqL1xuICBzZXRTZXNzaW9uQ29va2llVGltZW91dCh0aW1lb3V0OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldFNlc3Npb25Db29raWVUaW1lb3V0JywgdGltZW91dF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGNsaWNrIGxpc3RlbmVyIHRvIGEgc3BlY2lmaWMgbGluayBlbGVtZW50LjxiciAvPlxuICAgKiBXaGVuIGNsaWNrZWQsIE1hdG9tbyB3aWxsIGxvZyB0aGUgY2xpY2sgYXV0b21hdGljYWxseS5cbiAgICpcbiAgICogQHBhcmFtIGVsZW1lbnQgRWxlbWVudCBvbiB3aGljaCB0byBhZGQgYSBjbGljayBsaXN0ZW5lci5cbiAgICovXG4gIGFkZExpc3RlbmVyKGVsZW1lbnQ6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICB0cnkge1xuICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2FkZExpc3RlbmVyJywgZWxlbWVudF0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcmVxdWVzdCBtZXRob2QgdG8gZWl0aGVyICdHRVQnIG9yICdQT1NUJy4gKFRoZSBkZWZhdWx0IGlzICdHRVQnLik8YnIgLz5cbiAgICogVG8gdXNlIHRoZSBQT1NUIHJlcXVlc3QgbWV0aG9kLCBlaXRoZXI6PGJyIC8+XG4gICAqIDEpIHRoZSBNYXRvbW8gaG9zdCBpcyB0aGUgc2FtZSBhcyB0aGUgdHJhY2tlZCB3ZWJzaXRlIGhvc3QgKE1hdG9tbyBpbnN0YWxsZWQgaW4gdGhlIHNhbWUgZG9tYWluIGFzIHlvdXIgdHJhY2tlZCB3ZWJzaXRlKSwgb3I8YnIgLz5cbiAgICogMikgaWYgTWF0b21vIGlzIG5vdCBpbnN0YWxsZWQgb24gdGhlIHNhbWUgaG9zdCBhcyB5b3VyIHdlYnNpdGUsIHlvdSBuZWVkIHRvIGVuYWJsZSBDT1JTIChDcm9zcyBkb21haW4gcmVxdWVzdHMpLlxuICAgKlxuICAgKiBAcGFyYW0gbWV0aG9kIEhUVFAgbWV0aG9kIGZvciBzZW5kaW5nIGluZm9ybWF0aW9uIHRvIHRoZSBNYXRvbW8gc2VydmVyLlxuICAgKi9cbiAgc2V0UmVxdWVzdE1ldGhvZChtZXRob2Q6ICdHRVQnIHwgJ1BPU1QnKTogdm9pZCB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRSZXF1ZXN0TWV0aG9kJywgbWV0aG9kXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgZnVuY3Rpb24gdGhhdCB3aWxsIHByb2Nlc3MgdGhlIHJlcXVlc3QgY29udGVudC48YnIgLz5cbiAgICogVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIG9uY2UgdGhlIHJlcXVlc3QgKHF1ZXJ5IHBhcmFtZXRlcnMgc3RyaW5nKSBoYXMgYmVlbiBwcmVwYXJlZCwgYW5kIGJlZm9yZSB0aGUgcmVxdWVzdCBjb250ZW50IGlzIHNlbnQuXG4gICAqXG4gICAqIEBwYXJhbSBjYWxsYmFjayBGdW5jdGlvbiB0aGF0IHdpbGwgcHJvY2VzcyB0aGUgcmVxdWVzdCBjb250ZW50LlxuICAgKi9cbiAgc2V0Q3VzdG9tUmVxdWVzdFByb2Nlc3NpbmcoY2FsbGJhY2s6IChxdWVyeVBhcmFtZXRlcnM6IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0Q3VzdG9tUmVxdWVzdFByb2Nlc3NpbmcnLCBjYWxsYmFja10pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGlmICghKGUgaW5zdGFuY2VvZiBSZWZlcmVuY2VFcnJvcikpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2V0cyByZXF1ZXN0IENvbnRlbnQtVHlwZSBoZWFkZXIgdmFsdWUuPGJyIC8+XG4gICAqIEFwcGxpY2FibGUgd2hlbiAnUE9TVCcgcmVxdWVzdCBtZXRob2QgaXMgdXNlZCB2aWEgc2V0UmVxdWVzdE1ldGhvZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbnRlbnRUeXBlIFZhbHVlIGZvciBDb250ZW50LVR5cGUgSFRUUCBoZWFkZXIuXG4gICAqL1xuICBzZXRSZXF1ZXN0Q29udGVudFR5cGUoY29udGVudFR5cGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnc2V0UmVxdWVzdENvbnRlbnRUeXBlJywgY29udGVudFR5cGVdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIERpc2FibGVzIHRoZSBmZWF0dXJlIHdoaWNoIGdyb3VwcyB0b2dldGhlciBtdWx0aXBsZSB0cmFja2luZyByZXF1ZXN0cyBhbmQgc2VuZCB0aGVtIGFzIGEgYnVsayBQT1NUIHJlcXVlc3QuPGJyIC8+XG4gICAqIERpc2FibGluZyB0aGlzIGZlYXR1cmUgaXMgdXNlZnVsIHdoZW4geW91IHdhbnQgdG8gYmUgYWJsZSB0byByZXBsYXkgYWxsIGxvZ3M6IG9uZSBtdXN0IHVzZSBkaXNhYmxlUXVldWVSZXF1ZXN0XG4gICAqIHRvIGRpc2FibGUgdGhpcyBiZWhhdmlvciB0byBsYXRlciBiZSBhYmxlIHRvIHJlcGxheSBsb2dnZWQgTWF0b21vIGxvZ3MgKG90aGVyd2lzZSBhIHN1YnNldCBvZiB0aGUgcmVxdWVzdHNcbiAgICogd291bGRuJ3QgYmUgYWJsZSB0byBiZSByZXBsYXllZCkuXG4gICAqL1xuICBkaXNhYmxlUXVldWVSZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsnZGlzYWJsZVF1ZXVlUmVxdWVzdCddKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=