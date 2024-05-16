import { OnDestroy } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Service for tracking route changes.
 *
 * @export
 */
export declare class MatomoRouteTracker implements OnDestroy {
    /**
     * Configuration provided by DI
     */
    private readonly configuration;
    /**
     * MatomoTracker provided by DI
     */
    private readonly matomoTracker;
    /**
     * Router provided by DI
     */
    private readonly router;
    /**
     * Activated route provided by DI
     */
    private readonly activatedRoute;
    /**
     * Previous route url of matomo route tracker.
     */
    private previousPageUrl?;
    /**
     * Subscription for managing route events.
     */
    private subscription?;
    /**
     * Starts tracking route changes.
     * Matomo DocumentTitle will be set with `data.matomoTitle` of your routes.
     *
     * This service shall not be used directly within an application.
     */
    startTracking(): void;
    /**
     * Stops tracking route changes.
     */
    stopTracking(): void;
    /**
     * Angular OnDestroy lifecycle hook.
     */
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatomoRouteTracker, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatomoRouteTracker>;
}
