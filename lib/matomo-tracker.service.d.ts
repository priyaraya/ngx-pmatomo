import * as i0 from "@angular/core";
declare global {
    /**
     * Extend Window interface in order to introduce the Matomo _paq attribute
     */
    interface Window {
        _paq: any;
    }
}
/**
 * Matomo scope
 */
type MatomoScope = 'page' | 'visit' | 'event';
/**
 * Wrapper for functions available in the Matomo Javascript tracker.
 *
 * @export
 */
export declare class MatomoTracker {
    /**
     * Matomo configuration provided by DI
     */
    private readonly configuration;
    /**
     * Creates an instance of MatomoTracker.
     */
    constructor();
    /**
     * Logs a visit to this page.
     *
     * @param [customTitle] Optional title of the visited page.
     */
    trackPageView(customTitle?: string): void;
    /**
     * Logs an event with an event category (Videos, Music, Games…), an event action (Play, Pause, Duration,
     * Add Playlist, Downloaded, Clicked…), and an optional event name and optional numeric value.
     *
     * @param category Category of the event.
     * @param action Action of the event.
     * @param [name] Optional name of the event.
     * @param [value] Optional value for the event.
     */
    trackEvent(category: string, action: string, name?: string, value?: number): void;
    /**
     * Logs an internal site search for a specific keyword, in an optional category,
     * specifying the optional count of search results in the page.
     *
     * @param keyword Keywords of the search query.
     * @param [category] Optional category of the search query.
     * @param [resultsCount] Optional number of results returned by the search query.
     */
    trackSiteSearch(keyword: string, category?: string, resultsCount?: number): void;
    /**
     * Manually logs a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue.
     *
     * @param idGoal numeric ID of the goal to log a conversion for.
     * @param [customRevenue] Optional custom revenue to log for the goal.
     */
    trackGoal(idGoal: number, customRevenue?: number): void;
    /**
     * Manually logs a click from your own code.
     *
     * @param url Full URL which is to be tracked as a click.
     * @param linkType Either 'link' for an outlink or 'download' for a download.
     */
    trackLink(url: string, linkType: 'link' | 'download'): void;
    /**
     * Scans the entire DOM for all content blocks and tracks all impressions once the DOM ready event has been triggered.
     *
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackAllContentImpressions(): void;
    /**
     * Scans the entire DOM for all content blocks as soon as the page is loaded.<br />
     * It tracks an impression only if a content block is actually visible.
     *
     * @param checkOnScroll If true, checks for new content blocks while scrolling the page.
     * @param timeInterval Duration, in milliseconds, between two checks upon scroll.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackVisibleContentImpressions(checkOnScroll: boolean, timeInterval: number): void;
    /**
     * Scans the given DOM node and its children for content blocks and tracks an impression for them
     * if no impression was already tracked for it.
     *
     * @param node DOM node in which to look for content blocks which have not been previously tracked.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentImpressionsWithinNode(node: Node): void;
    /**
     * Tracks an interaction with the given DOM node/content block.
     *
     * @param node DOM node for which to track a content interaction.
     * @param contentInteraction Name of the content interaction.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentInteractionNode(node: Node, contentInteraction: string): void;
    /**
     * Tracks a content impression using the specified values.
     *
     * @param contentName Content name.
     * @param contentPiece Content piece.
     * @param contentTarget Content target.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentImpression(contentName: string, contentPiece: string, contentTarget: string): void;
    /**
     * Tracks a content interaction using the specified values.
     *
     * @param contentInteraction Content interaction.
     * @param contentName Content name.
     * @param contentPiece Content piece.
     * @param contentTarget Content target.
     * @see {@link https://developer.matomo.org/guides/content-tracking|Content Tracking}
     */
    trackContentInteraction(contentInteraction: string, contentName: string, contentPiece: string, contentTarget: string): void;
    /**
     * Logs all found content blocks within a page to the console.<br />
     * This is useful to debug / test content tracking.
     */
    logAllContentBlocksOnPage(): void;
    /**
     * Sends a ping request.<br />
     * Ping requests do not track new actions.
     * If they are sent within the standard visit length, they will extend the existing visit and the current last action for the visit.
     * If sent after the standard visit length, ping requests will create a new visit using the last action in the last known visit.<br />
     * See also enableHeartBeatTimer.
     */
    ping(): void;
    /**
     * Installs a Heart beat timer that will regularly send requests to Matomo in order to better measure the time spent on the page.<br />
     * These requests will be sent only when the user is actively viewing the page (when the tab is active and in focus).<br />
     * These requests will not track additional actions or page views.<br />
     * By default, the delay is set to 15 seconds.
     *
     * @param delay Delay, in seconds, between two heart beats to the server.
     */
    enableHeartBeatTimer(delay: number): void;
    /**
     * Installs link tracking on all applicable link elements.
     *
     * @param [enable=false] Set to true to use pseudo click-handler (treat middle click and open contextmenu as
     * left click).<br />
     * A right click (or any click that opens the context menu) on a link will be tracked as clicked even if "Open in new tab"
     * is not selected.<br />
     * If false (default), nothing will be tracked on open context menu or middle click.
     */
    enableLinkTracking(enable?: boolean): void;
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
    enableCrossDomainLinking(): void;
    /**
     * Sets the cross domain linking timeout.<br />
     * By default, the two visits across domains will be linked together when the link is clicked and the page is loaded within
     * a 180 seconds timeout window.
     *
     * @param timeout Timeout, in seconds, between two actions across two domains before creating a new visit.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    setCrossDomainLinkingTimeout(timeout: number): void;
    /**
     * Returns the query parameter to append to links to handle cross domain linking.<br />
     * Use this to add cross domain support for links that are added to the DOM dynamically.
     *
     * @returns Promise for the `pk_vid` query parameter.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    getCrossDomainLinkingUrlParameter(): Promise<string>;
    /**
     * Overrides document.title
     *
     * @param title Title of the document.
     */
    setDocumentTitle(title: string): void;
    /**
     * Sets array of hostnames or domains to be treated as local.<br />
     * For wildcard subdomains, you can use: `setDomains('.example.com')`; or `setDomains('*.example.com');`.<br />
     * You can also specify a path along a domain: `setDomains('*.example.com/subsite1');`.
     *
     * @param domains List of hostnames or domains, with or without path, to be treated as local.
     * @see {@link https://matomo.org/faq/how-to/faq_23654/|Cross Domain Linking}
     */
    setDomains(domains: string[]): void;
    /**
     * Override the page's reported URL.
     *
     * @param url URL to be reported for the page.
     */
    setCustomUrl(url: string): void;
    /**
     * Overrides the detected Http-Referer.
     *
     * @param url URL to be reported for the referer.
     */
    setReferrerUrl(url: string): void;
    /**
     * Specifies the website ID.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * // TODO Investigate if setSiteId needs to be removed from MatomoTracker.
     * @param siteId Site ID for the tracker.
     */
    setSiteId(siteId: number): void;
    /**
     * Specifies the Matomo HTTP API URL endpoint.<br />
     * Points to the root directory of Matomo, e.g. http://matomo.example.org/ or https://example.org/matomo/.<br />
     * This function is only useful when the 'Overlay' report is not working.<br />
     * By default, you do not need to use this function.
     *
     * @param url URL for Matomo HTTP API endpoint.
     */
    setApiUrl(url: string): void;
    /**
     * Specifies the Matomo server URL.<br />
     * Redundant: can be specified in getTracker() constructor.
     *
     * // TODO Investigate if setTrackerUrl needs to be removed from MatomoTracker.
     * @param url URL for the Matomo server.
     */
    setTrackerUrl(url: string): void;
    /**
     * Returns the Matomo server URL.
     *
     * @returns Promise for the Matomo server URL.
     */
    getMatomoUrl(): Promise<string>;
    /**
     * Returns the current url of the page that is currently being visited.<br />
     * If a custom URL was set before calling this method, the custom URL will be returned.
     *
     * @returns Promise for the URL of the current page.
     */
    getCurrentUrl(): Promise<string>;
    /**
     * Sets classes to be treated as downloads (in addition to piwik_download).
     *
     * @param classes Class, or list of classes to be treated as downloads.
     */
    setDownloadClasses(classes: string | string[]): void;
    /**
     * Sets file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions to be recognized as downloads.
     */
    setDownloadExtensions(extensions: string | string[]): void;
    /**
     * Sets additional file extensions to be recognized as downloads.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions to be recognized as downloads.
     */
    addDownloadExtensions(extensions: string | string[]): void;
    /**
     * Specifies file extensions to be removed from the list of download file extensions.<br />
     * Example: `'docx'` or `['docx', 'xlsx']`.
     *
     * @param extensions Extension, or list of extensions not to be recognized as downloads.
     */
    removeDownloadExtensions(extensions: string | string[]): void;
    /**
     * Sets classes to be ignored if present in link (in addition to piwik_ignore).
     *
     * @param classes Class, or list of classes to be ignored if present in link.
     */
    setIgnoreClasses(classes: string | string[]): void;
    /**
     * Sets classes to be treated as outlinks (in addition to piwik_link).
     *
     * @param classes Class, or list of classes to be treated as outlinks.
     */
    setLinkClasses(classes: string | string[]): void;
    /**
     * Sets delay for link tracking (in milliseconds).
     *
     * @param delay Delay, in milliseconds, for link tracking.
     */
    setLinkTrackingTimer(delay: number): void;
    /**
     * Returns delay for link tracking.
     *
     * @returns Promise for the delay in milliseconds.
     */
    getLinkTrackingTimer(): Promise<number>;
    /**
     * Sets if or not to record the hash tag (anchor) portion of URLs.
     *
     * @param value If true, the hash tag portion of the URLs won't be recorded.
     */
    discardHashTag(value: boolean): void;
    /**
     * By default Matomo uses the browser DOM Timing API to accurately determine the time it takes to generate and download
     * the page. You may overwrite this value with this function.
     * This function is deprecated in Matomo 4.x.
     *
     * @param generationTime Time, in milliseconds, of the page generation.
     */
    setGenerationTimeMs(generationTime: number): void;
    /**
     * Appends a custom string to the end of the HTTP request to piwik.php.
     *
     * @param appendToUrl String to append to the end of the HTTP request to piwik.php/matomo.php.
     */
    appendToTrackingUrl(appendToUrl: string): void;
    /**
     * Enables a frame-buster to prevent the tracked web page from being framed/iframed.
     */
    killFrame(): void;
    /**
     * Forces the browser to load the live URL if the tracked web page is loaded from a local file
     * (e.g., saved to someone's desktop).
     *
     * @param url URL to track instead of file:// URLs.
     */
    redirectFile(url: string): void;
    /**
     * Records how long the page has been viewed if the minimumVisitLength is attained;
     * the heartBeatDelay determines how frequently to update the server.
     *
     * @param minimumVisitLength Duration before notifying the server for the duration of the visit to a page.
     * @param heartBeatDelay Delay, in seconds, between two updates to the server.
     * @see {@link https://developer.matomo.org/guides/tracking-javascript-guide#accurately-measure-the-time-spent-on-each-page}
     */
    setHeartBeatTimer(minimumVisitLength: number, heartBeatDelay: number): void;
    /**
     * Returns the 16 characters ID for the visitor.
     *
     * @returns Promise for the the 16 characters ID for the visitor.
     */
    getVisitorId(): Promise<string>;
    /**
     * Returns the visitor cookie contents in an array.
     *
     * @returns Promise for the cookie contents in an array.
     */
    getVisitorInfo(): Promise<any[]>;
    /**
     * Returns the visitor attribution array (Referer information and/or Campaign name & keyword).<br />
     * Attribution information is used by Matomo to credit the correct referrer (first or last referrer)
     * used when a user triggers a goal conversion.
     *
     * @returns Promise for the visitor attribution array (Referer information and/or Campaign name & keyword).
     */
    getAttributionInfo(): Promise<any[]>;
    /**
     * Returns the attribution campaign name.
     *
     * @returns Promise for the the attribution campaign name.
     */
    getAttributionCampaignName(): Promise<string>;
    /**
     * Returns the attribution campaign keyword.
     *
     * @returns Promise for the attribution campaign keyword.
     */
    getAttributionCampaignKeyword(): Promise<string>;
    /**
     * Returns the attribution referrer timestamp.
     *
     * @returns Promise for the attribution referrer timestamp (as string).
     */
    getAttributionReferrerTimestamp(): Promise<string>;
    /**
     * Returns the attribution referrer URL.
     *
     * @returns Promise for the attribution referrer URL
     */
    getAttributionReferrerUrl(): Promise<string>;
    /**
     * Returns the User ID string if it was set.
     *
     * @returns Promise for the User ID for the visitor.
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    getUserId(): Promise<string>;
    /**
     * Sets a User ID to this user (such as an email address or a username).
     *
     * @param userId User ID to set for the current visitor.
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    setUserId(userId: string): void;
    /**
     * Resets the User ID which also generates a new Visitor ID.
     *
     * @see {@link https://matomo.org/docs/user-id/|Matomo User ID}
     */
    resetUserId(): void;
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
    setCustomVariable(index: number, name: string, value: string, scope: MatomoScope): void;
    /**
     * Deletes a custom variable.
     *
     * @param index Index of the custom variable to delete.
     * @param scope Scope of the custom variable to delete.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    deleteCustomVariable(index: number, scope: MatomoScope): void;
    /**
     * Deletes all custom variables.
     *
     * @param scope Scope of the custom variables to delete.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    deleteCustomVariables(scope: MatomoScope): void;
    /**
     * Retrieves a custom variable.
     *
     * @param index Index of the custom variable to retrieve.
     * @param scope Scope of the custom variable to retrieve.
     * @returns Promise for the value of custom variable.
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    getCustomVariable(index: number, scope: MatomoScope): Promise<string>;
    /**
     * When called then the Custom Variables of scope 'visit' will be stored (persisted) in a first party cookie
     * for the duration of the visit.<br />
     * This is useful if you want to call getCustomVariable later in the visit.<br />
     * (by default custom variables are not stored on the visitor's computer.)
     *
     * @see {@link https://matomo.org/docs/custom-variables/|Custom Variables}
     */
    storeCustomVariablesInCookie(): void;
    /**
     * Sets a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to set.
     * @param customDimensionValue Value to be set.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    setCustomDimension(customDimensionId: number, customDimensionValue: string): void;
    /**
     * Deletes a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to delete.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    deleteCustomDimension(customDimensionId: number): void;
    /**
     * Retrieve a custom dimension.<br />
     * (requires Matomo 2.15.1 + Custom Dimensions plugin)
     *
     * @param customDimensionId ID of the custom dimension to retrieve.
     * @returns Promise for the value for the requested custom dimension.
     * @see {@link https://plugins.piwik.org/CustomDimensions|Custom Dimensions}
     */
    getCustomDimension(customDimensionId: number): Promise<string>;
    /**
     * Sets campaign name parameter(s).
     *
     * @param name Name of the campaign
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     */
    setCampaignNameKey(name: string): void;
    /**
     * Sets campaign keyword parameter(s).
     *
     * @param keyword Keyword parameter(s) of the campaign.
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     */
    setCampaignKeywordKey(keyword: string): void;
    /**
     * Sets if or not to attribute a conversion to the first referrer.<br />
     * By default, conversion is attributed to the most recent referrer.
     *
     * @param conversionToFirstReferrer If true, Matomo will attribute the Goal conversion to the first referrer used
     * instead of the last one.
     * @see {@link https://matomo.org/docs/tracking-campaigns/|Campaigns}
     * @see {@link https://matomo.org/faq/general/faq_106/#faq_106|Conversions to the first referrer}
     */
    setConversionAttributionFirstReferrer(conversionToFirstReferrer: boolean): void;
    /**
     * Sets the current page view as a product or category page view.<br />
     * When you call setEcommerceView, it must be followed by a call to trackPageView to record the product or category page view.
     *
     * @param productSKU SKU of the viewed product.
     * @param productName Name of the viewed product.
     * @param productCategory Category of the viewed product.
     * @param price Price of the viewed product.
     */
    setEcommerceView(productSKU: string, productName: string, productCategory: string, price: number): void;
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
    addEcommerceItem(productSKU: string, productName?: string, productCategory?: string, price?: number, quantity?: number): void;
    /**
     * Removes the specified product from the untracked ecommerce order.
     *
     * @param productSKU SKU of the product to remove.
     */
    removeEcommerceItem(productSKU: string): void;
    /**
     * Removes all products in the untracked ecommerce order.<br />
     * Note: this is done automatically after trackEcommerceOrder() is called.
     */
    clearEcommerceCart(): void;
    /**
     * Returns all ecommerce items currently in the untracked ecommerce order.
     * The returned array will be a copy, so changing it won't affect the ecommerce order.<br />
     * To affect what gets tracked, use the addEcommerceItem()/removeEcommerceItem()/clearEcommerceCart() methods.<br />
     * Use this method to see what will be tracked before you track an order or cart update.
     */
    getEcommerceItems(): Promise<Array<{
        productSKU: string;
        productName?: string;
        productCategory?: string;
        price?: number;
        quantity?: number;
    }>>;
    /**
     * Tracks a shopping cart.<br />
     * Call this function every time a user is adding, updating or deleting a product from the cart.
     *
     * @param grandTotal Grand total of the shopping cart.
     */
    trackEcommerceCartUpdate(grandTotal: number): void;
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
    trackEcommerceOrder(orderId: string, grandTotal: number, subTotal?: number, tax?: number, shipping?: number, discount?: number | boolean): void;
    /**
     * By default the Matomo tracker assumes consent to tracking.
     * To change this behavior so nothing is tracked until a user consents, you must call requireConsent.
     */
    requireConsent(): void;
    /**
     * Require user cookie consent before storing and using any cookies.
     */
    requireCookieConsent(): void;
    /**
     * Marks that the current user has consented.<br />
     * The consent is one-time only, so in a subsequent browser session, the user will have to consent again.<br />
     * To remember consent, see the method below: rememberConsentGiven.
     */
    setConsentGiven(): void;
    /**
     * Marks that the current user has consented to store and use cookies.<br />
     * The consent is one-time only, so in a subsequent browser session, the user will have to consent again.<br />
     * To remember consent, see the method below: rememberCookieConsentGiven.
     */
    setCookieConsentGiven(): void;
    /**
     * Marks that the current user has consented, and remembers this consent through a browser cookie.<br />
     * The next time the user visits the site, Matomo will remember that they consented, and track them.<br />
     * If you call this method, you do not need to call setConsentGiven.
     *
     * @param hoursToExpire Expiry period for your user consent.
     */
    rememberConsentGiven(hoursToExpire?: number): void;
    /**
     * Marks that the current user has consented, and remembers this consent through a browser cookie.<br />
     * The next time the user visits the site, Matomo will remember that they consented, and track them.<br />
     * If you call this method, you do not need to call setCookieConsentGiven.
     *
     * @param hoursToExpire Expiry period for your user consent.
     */
    rememberCookieConsentGiven(hoursToExpire?: number): void;
    /**
     * Removes a user's consent, both if the consent was one-time only and if the consent was remembered.<br />
     * This makes sure the cookie that remembered the given consent is deleted.<br />
     * After calling this method, the user will have to consent again in order to be tracked.
     */
    forgetConsentGiven(): void;
    /**
     * Removes a user's consent, both if the consent was one-time only and if the consent was remembered.<br />
     * This makes sure the cookie that remembered the given consent is deleted.<br />
     * After calling this method, the user will have to consent again in order to be tracked.
     */
    forgetCookieConsentGiven(): void;
    /**
     * Sets if to not to track users who opt out of tracking using Mozilla's (proposed) Do Not Track setting.
     *
     * @param doNotTrack If true, users who opted for Do Not Track in their settings won't be tracked.
     * @see {@link https://www.w3.org/TR/tracking-dnt/}
     */
    setDoNotTrack(doNotTrack: boolean): void;
    /**
     * Disables all first party cookies.<br />
     * Existing Matomo cookies for this websites will be deleted on the next page view.
     */
    disableCookies(): void;
    /**
     * Deletes the tracking cookies currently set (useful when creating new visits).
     */
    deleteCookies(): void;
    /**
     * Returns whether cookies are enabled and supported by this browser.
     *
     * @returns Promise for the support and activation of cookies.
     */
    hasCookies(): Promise<boolean>;
    /**
     * Sets the tracking cookie name prefix.<br />
     * Default prefix is 'pk'.
     *
     * @param prefix Prefix for the tracking cookie names.
     */
    setCookieNamePrefix(prefix: string): void;
    /**
     * Sets the domain of the tracking cookies.<br />
     * Default is the document domain.<br />
     * If your website can be visited at both www.example.com and example.com, you would use: `'.example.com'` or `'*.example.com'`.
     *
     * @param domain Domain of the tracking cookies.
     */
    setCookieDomain(domain: string): void;
    /**
     * Sets the path of the tracking cookies.<br />
     * Default is '/'.
     *
     * @param path Path of the tracking cookies.
     */
    setCookiePath(path: string): void;
    /**
     * Sets if or not to enable the Secure cookie flag on all first party cookies.<br />
     * This should be used when your website is only available under HTTPS so that all tracking cookies are always sent
     * over secure connection.
     *
     * @param secure If true, the secure cookie flag will be set on all first party cookies.
     */
    setSecureCookie(secure: boolean): void;
    /**
     * Sets the visitor cookie timeout.<br />
     * Default is 13 months.
     *
     * @param timeout Timeout, in seconds, for the visitor cookie timeout.
     */
    setVisitorCookieTimeout(timeout: number): void;
    /**
     * Sets the referral cookie timeout.<br />
     * Default is 6 months.
     *
     * @param timeout Timeout, in seconds, for the referral cookie timeout.
     */
    setReferralCookieTimeout(timeout: number): void;
    /**
     * Sets the session cookie timeout.<br />
     * Default is 30 minutes.
     *
     * @param timeout Timeout, in seconds, for the session cookie timeout.
     */
    setSessionCookieTimeout(timeout: number): void;
    /**
     * Adds a click listener to a specific link element.<br />
     * When clicked, Matomo will log the click automatically.
     *
     * @param element Element on which to add a click listener.
     */
    addListener(element: Element): void;
    /**
     * Sets the request method to either 'GET' or 'POST'. (The default is 'GET'.)<br />
     * To use the POST request method, either:<br />
     * 1) the Matomo host is the same as the tracked website host (Matomo installed in the same domain as your tracked website), or<br />
     * 2) if Matomo is not installed on the same host as your website, you need to enable CORS (Cross domain requests).
     *
     * @param method HTTP method for sending information to the Matomo server.
     */
    setRequestMethod(method: 'GET' | 'POST'): void;
    /**
     * Sets a function that will process the request content.<br />
     * The function will be called once the request (query parameters string) has been prepared, and before the request content is sent.
     *
     * @param callback Function that will process the request content.
     */
    setCustomRequestProcessing(callback: (queryParameters: string) => void): void;
    /**
     * Sets request Content-Type header value.<br />
     * Applicable when 'POST' request method is used via setRequestMethod.
     *
     * @param contentType Value for Content-Type HTTP header.
     */
    setRequestContentType(contentType: string): void;
    /**
     * Disables the feature which groups together multiple tracking requests and send them as a bulk POST request.<br />
     * Disabling this feature is useful when you want to be able to replay all logs: one must use disableQueueRequest
     * to disable this behavior to later be able to replay logged Matomo logs (otherwise a subset of the requests
     * wouldn't be able to be replayed).
     */
    disableQueueRequest(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatomoTracker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatomoTracker>;
}
export {};
