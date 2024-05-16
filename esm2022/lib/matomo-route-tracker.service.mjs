import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, map, pairwise } from 'rxjs/operators';
import { isNonNull } from '../helpers';
import { MATOMO_CONFIGURATION } from './matomo-configuration';
import { MatomoTracker } from './matomo-tracker.service';
import * as i0 from "@angular/core";
/**
 * Service for tracking route changes.
 *
 * @export
 */
export class MatomoRouteTracker {
    constructor() {
        /**
         * Configuration provided by DI
         */
        this.configuration = inject(MATOMO_CONFIGURATION);
        /**
         * MatomoTracker provided by DI
         */
        this.matomoTracker = inject(MatomoTracker);
        /**
         * Router provided by DI
         */
        this.router = inject(Router);
        /**
         * Activated route provided by DI
         */
        this.activatedRoute = inject(ActivatedRoute);
    }
    /**
     * Starts tracking route changes.
     * Matomo DocumentTitle will be set with `data.matomoTitle` of your routes.
     *
     * This service shall not be used directly within an application.
     */
    startTracking() {
        this.subscription = this.router.events
            .pipe(filter((event) => event instanceof NavigationStart || event instanceof NavigationEnd), map((event) => ({ timestamp: new Date().getTime(), event })), pairwise(), filter(([a, b]) => a.event instanceof NavigationStart && b.event instanceof NavigationEnd))
            .subscribe({
            next: ([start, end]) => {
                let currentRoute = this.activatedRoute.root;
                while (currentRoute.firstChild) {
                    currentRoute = currentRoute.firstChild;
                }
                // Set referrer if it exists
                if (this.previousPageUrl) {
                    this.matomoTracker.setReferrerUrl(this.previousPageUrl);
                }
                // Track current page
                if (!!currentRoute.snapshot.data['matomoTitle'] || !!currentRoute.snapshot.title) {
                    this.matomoTracker.setDocumentTitle(currentRoute.snapshot.data['matomoTitle'] ?? currentRoute.snapshot.title);
                }
                this.matomoTracker.setCustomUrl(window.location.href);
                // Remove all previously assigned custom variables
                // (requires Matomo (formerly Piwik) 3.0.2+)
                this.matomoTracker.deleteCustomVariables('page');
                this.matomoTracker.setGenerationTimeMs(end.timestamp - start.timestamp);
                this.matomoTracker.trackPageView();
                // Set previous route URL
                this.previousPageUrl = window.location.href;
                // Make Matomo aware of newly added content
                this.configuration?.routeTracking?.contentIds
                    ?.map(document.getElementById)
                    ?.filter(isNonNull)
                    ?.forEach((content) => {
                    // TODO To be implemented when Media Analytics will be supported.
                    // this.matomoTracker.scanForMedia(content);
                    // TODO To be implemented when Form Analytics will be supported.
                    // this.matomoTracker.scanForForms(content);
                    this.matomoTracker.trackContentImpressionsWithinNode(content);
                });
                if (this.configuration.trackLinks === true) {
                    this.matomoTracker.enableLinkTracking(this.configuration.trackLinkValue);
                }
            },
        });
    }
    /**
     * Stops tracking route changes.
     */
    stopTracking() {
        if (!!this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    }
    /**
     * Angular OnDestroy lifecycle hook.
     */
    ngOnDestroy() {
        this.stopTracking();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoRouteTracker, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoRouteTracker }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoRouteTracker, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLXJvdXRlLXRyYWNrZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXRvbW8vc3JjL2xpYi9tYXRvbW8tcm91dGUtdHJhY2tlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWEsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUd6RixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFekQ7Ozs7R0FJRztBQUVILE1BQU0sT0FBTyxrQkFBa0I7SUFEL0I7UUFFRTs7V0FFRztRQUNjLGtCQUFhLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFOUQ7O1dBRUc7UUFDYyxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUV2RDs7V0FFRztRQUNjLFdBQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekM7O1dBRUc7UUFDYyxtQkFBYyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQXFGMUQ7SUExRUM7Ozs7O09BS0c7SUFDSCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDbkMsSUFBSSxDQUNILE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLGVBQWUsSUFB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RSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQ2hDLENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7OEdBdkdVLGtCQUFrQjtrSEFBbEIsa0JBQWtCOzsyRkFBbEIsa0JBQWtCO2tCQUQ5QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT25EZXN0cm95LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHBhaXJ3aXNlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc05vbk51bGwgfSBmcm9tICcuLi9oZWxwZXJzJztcbmltcG9ydCB7IE1BVE9NT19DT05GSUdVUkFUSU9OIH0gZnJvbSAnLi9tYXRvbW8tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBNYXRvbW9UcmFja2VyIH0gZnJvbSAnLi9tYXRvbW8tdHJhY2tlci5zZXJ2aWNlJztcblxuLyoqXG4gKiBTZXJ2aWNlIGZvciB0cmFja2luZyByb3V0ZSBjaGFuZ2VzLlxuICpcbiAqIEBleHBvcnRcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdG9tb1JvdXRlVHJhY2tlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBDb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb24gPSBpbmplY3QoTUFUT01PX0NPTkZJR1VSQVRJT04pO1xuXG4gIC8qKlxuICAgKiBNYXRvbW9UcmFja2VyIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IG1hdG9tb1RyYWNrZXIgPSBpbmplY3QoTWF0b21vVHJhY2tlcik7XG5cbiAgLyoqXG4gICAqIFJvdXRlciBwcm92aWRlZCBieSBESVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXIgPSBpbmplY3QoUm91dGVyKTtcblxuICAvKipcbiAgICogQWN0aXZhdGVkIHJvdXRlIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGFjdGl2YXRlZFJvdXRlID0gaW5qZWN0KEFjdGl2YXRlZFJvdXRlKTtcblxuICAvKipcbiAgICogUHJldmlvdXMgcm91dGUgdXJsIG9mIG1hdG9tbyByb3V0ZSB0cmFja2VyLlxuICAgKi9cbiAgcHJpdmF0ZSBwcmV2aW91c1BhZ2VVcmw/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZm9yIG1hbmFnaW5nIHJvdXRlIGV2ZW50cy5cbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xuXG4gIC8qKlxuICAgKiBTdGFydHMgdHJhY2tpbmcgcm91dGUgY2hhbmdlcy5cbiAgICogTWF0b21vIERvY3VtZW50VGl0bGUgd2lsbCBiZSBzZXQgd2l0aCBgZGF0YS5tYXRvbW9UaXRsZWAgb2YgeW91ciByb3V0ZXMuXG4gICAqXG4gICAqIFRoaXMgc2VydmljZSBzaGFsbCBub3QgYmUgdXNlZCBkaXJlY3RseSB3aXRoaW4gYW4gYXBwbGljYXRpb24uXG4gICAqL1xuICBzdGFydFRyYWNraW5nKCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKChldmVudCkgPT4gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSxcbiAgICAgICAgbWFwKChldmVudCkgPT4gKHsgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLmdldFRpbWUoKSwgZXZlbnQgfSkpLFxuICAgICAgICBwYWlyd2lzZSgpLFxuICAgICAgICBmaWx0ZXIoKFthLCBiXSkgPT4gYS5ldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCAmJiBiLmV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoe1xuICAgICAgICBuZXh0OiAoW3N0YXJ0LCBlbmRdKSA9PiB7XG4gICAgICAgICAgbGV0IGN1cnJlbnRSb3V0ZSA9IHRoaXMuYWN0aXZhdGVkUm91dGUucm9vdDtcbiAgICAgICAgICB3aGlsZSAoY3VycmVudFJvdXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGN1cnJlbnRSb3V0ZSA9IGN1cnJlbnRSb3V0ZS5maXJzdENoaWxkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBTZXQgcmVmZXJyZXIgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgaWYgKHRoaXMucHJldmlvdXNQYWdlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLm1hdG9tb1RyYWNrZXIuc2V0UmVmZXJyZXJVcmwodGhpcy5wcmV2aW91c1BhZ2VVcmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBUcmFjayBjdXJyZW50IHBhZ2VcbiAgICAgICAgICBpZiAoISFjdXJyZW50Um91dGUuc25hcHNob3QuZGF0YVsnbWF0b21vVGl0bGUnXSB8fCAhIWN1cnJlbnRSb3V0ZS5zbmFwc2hvdC50aXRsZSkge1xuICAgICAgICAgICAgdGhpcy5tYXRvbW9UcmFja2VyLnNldERvY3VtZW50VGl0bGUoXG4gICAgICAgICAgICAgIGN1cnJlbnRSb3V0ZS5zbmFwc2hvdC5kYXRhWydtYXRvbW9UaXRsZSddID8/IGN1cnJlbnRSb3V0ZS5zbmFwc2hvdC50aXRsZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5tYXRvbW9UcmFja2VyLnNldEN1c3RvbVVybCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgICAgLy8gUmVtb3ZlIGFsbCBwcmV2aW91c2x5IGFzc2lnbmVkIGN1c3RvbSB2YXJpYWJsZXNcbiAgICAgICAgICAvLyAocmVxdWlyZXMgTWF0b21vIChmb3JtZXJseSBQaXdpaykgMy4wLjIrKVxuICAgICAgICAgIHRoaXMubWF0b21vVHJhY2tlci5kZWxldGVDdXN0b21WYXJpYWJsZXMoJ3BhZ2UnKTtcbiAgICAgICAgICB0aGlzLm1hdG9tb1RyYWNrZXIuc2V0R2VuZXJhdGlvblRpbWVNcyhlbmQudGltZXN0YW1wIC0gc3RhcnQudGltZXN0YW1wKTtcbiAgICAgICAgICB0aGlzLm1hdG9tb1RyYWNrZXIudHJhY2tQYWdlVmlldygpO1xuICAgICAgICAgIC8vIFNldCBwcmV2aW91cyByb3V0ZSBVUkxcbiAgICAgICAgICB0aGlzLnByZXZpb3VzUGFnZVVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuXG4gICAgICAgICAgLy8gTWFrZSBNYXRvbW8gYXdhcmUgb2YgbmV3bHkgYWRkZWQgY29udGVudFxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbj8ucm91dGVUcmFja2luZz8uY29udGVudElkc1xuICAgICAgICAgICAgPy5tYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQpXG4gICAgICAgICAgICA/LmZpbHRlcihpc05vbk51bGwpXG4gICAgICAgICAgICA/LmZvckVhY2goKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgLy8gVE9ETyBUbyBiZSBpbXBsZW1lbnRlZCB3aGVuIE1lZGlhIEFuYWx5dGljcyB3aWxsIGJlIHN1cHBvcnRlZC5cbiAgICAgICAgICAgICAgLy8gdGhpcy5tYXRvbW9UcmFja2VyLnNjYW5Gb3JNZWRpYShjb250ZW50KTtcbiAgICAgICAgICAgICAgLy8gVE9ETyBUbyBiZSBpbXBsZW1lbnRlZCB3aGVuIEZvcm0gQW5hbHl0aWNzIHdpbGwgYmUgc3VwcG9ydGVkLlxuICAgICAgICAgICAgICAvLyB0aGlzLm1hdG9tb1RyYWNrZXIuc2NhbkZvckZvcm1zKGNvbnRlbnQpO1xuICAgICAgICAgICAgICB0aGlzLm1hdG9tb1RyYWNrZXIudHJhY2tDb250ZW50SW1wcmVzc2lvbnNXaXRoaW5Ob2RlKGNvbnRlbnQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnRyYWNrTGlua3MgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMubWF0b21vVHJhY2tlci5lbmFibGVMaW5rVHJhY2tpbmcodGhpcy5jb25maWd1cmF0aW9uLnRyYWNrTGlua1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9wcyB0cmFja2luZyByb3V0ZSBjaGFuZ2VzLlxuICAgKi9cbiAgc3RvcFRyYWNraW5nKCk6IHZvaWQge1xuICAgIGlmICghIXRoaXMuc3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb24gPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEFuZ3VsYXIgT25EZXN0cm95IGxpZmVjeWNsZSBob29rLlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wVHJhY2tpbmcoKTtcbiAgfVxufVxuIl19