import { Injectable, inject } from '@angular/core';
import { MATOMO_CONFIGURATION } from './matomo-configuration';
import * as i0 from "@angular/core";
/**
 * Service for injecting the Matomo tracker in the application.
 * This service shall no longer be used directly within an application.
 */
export class MatomoInjector {
    /**
     * Creates an instance of MatomoInjector.
     */
    constructor() {
        /**
         * Matomo configuration provided by DI
         */
        this.configuration = inject(MATOMO_CONFIGURATION);
        try {
            window['_paq'] = window['_paq'] || (!!this.configuration.scriptUrl ? [] : { push: () => { } });
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    /**
     * Configures and injects the Matomo tracker in the DOM.
     */
    init() {
        try {
            if (this.configuration?.requireConsent === true) {
                window['_paq'].push(['requireConsent']);
            }
            else if (this.configuration?.requireCookieConsent === true) {
                window['_paq'].push(['requireCookieConsent']);
            }
            if (this.configuration?.skipTrackingInitialPageView === false) {
                window['_paq'].push(['trackPageView']);
                if (this.configuration?.trackLinks === true &&
                    this.configuration?.routeTracking?.enable === false) {
                    setTimeout(() => {
                        window['_paq'].push([
                            'enableLinkTracking',
                            this.configuration?.trackLinkValue ?? false,
                        ]);
                    }, 0);
                }
            }
            if (this.configuration.trackers?.length) {
                const [mainTracker, ...otherTrackers] = this.configuration.trackers;
                window['_paq'].push(['setTrackerUrl', mainTracker.trackerUrl]);
                window['_paq'].push(['setSiteId', mainTracker.siteId.toString()]);
                otherTrackers.forEach((tracker) => window['_paq'].push(['addTracker', tracker.trackerUrl, tracker.siteId.toString()]));
            }
            if (!!this.configuration.scriptUrl) {
                const script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = true;
                script.defer = true;
                script.src = this.configuration.scriptUrl;
                const firstScript = document.getElementsByTagName('script')[0];
                firstScript.parentNode?.insertBefore(script, firstScript);
            }
        }
        catch (e) {
            if (!(e instanceof ReferenceError)) {
                throw e;
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoInjector, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoInjector }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoInjector, decorators: [{
            type: Injectable
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLWluamVjdG9yLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbWF0b21vL3NyYy9saWIvbWF0b21vLWluamVjdG9yLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7O0FBVzlEOzs7R0FHRztBQUVILE1BQU0sT0FBTyxjQUFjO0lBTXpCOztPQUVHO0lBQ0g7UUFSQTs7V0FFRztRQUNjLGtCQUFhLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFNNUQsSUFBSSxDQUFDO1lBQ0gsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hHLENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJO1FBQ0YsSUFBSSxDQUFDO1lBQ0gsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLGNBQWMsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDO2lCQUFNLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxvQkFBb0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDN0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLDJCQUEyQixLQUFLLEtBQUssRUFBRSxDQUFDO2dCQUM5RCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDdkMsSUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVUsS0FBSyxJQUFJO29CQUN2QyxJQUFJLENBQUMsYUFBYSxFQUFFLGFBQWEsRUFBRSxNQUFNLEtBQUssS0FBSyxFQUNuRCxDQUFDO29CQUNELFVBQVUsQ0FBQyxHQUFHLEVBQUU7d0JBQ2QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDbEIsb0JBQW9COzRCQUNwQixJQUFJLENBQUMsYUFBYSxFQUFFLGNBQWMsSUFBSSxLQUFLO3lCQUM1QyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNSLENBQUM7WUFDSCxDQUFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztnQkFDeEMsTUFBTSxDQUFDLFdBQVcsRUFBRSxHQUFHLGFBQWEsQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO2dCQUNwRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZUFBZSxFQUFFLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNsRSxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUNuRixDQUFDO1lBQ0osQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sQ0FBQyxJQUFJLEdBQUcsaUJBQWlCLENBQUM7Z0JBQ2hDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDcEIsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQztnQkFDMUMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMvRCxXQUFXLENBQUMsVUFBVSxFQUFFLFlBQVksQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNILENBQUM7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLGNBQWMsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sQ0FBQyxDQUFDO1lBQ1YsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDOzhHQWpFVSxjQUFjO2tIQUFkLGNBQWM7OzJGQUFkLGNBQWM7a0JBRDFCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTUFUT01PX0NPTkZJR1VSQVRJT04gfSBmcm9tICcuL21hdG9tby1jb25maWd1cmF0aW9uJztcblxuZGVjbGFyZSBnbG9iYWwge1xuICAvKipcbiAgICogRXh0ZW5kIFdpbmRvdyBpbnRlcmZhY2UgaW4gb3JkZXIgdG8gaW50cm9kdWNlIHRoZSBNYXRvbW8gX3BhcSBhdHRyaWJ1dGVcbiAgICovXG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9wYXE6IGFueTtcbiAgfVxufVxuXG4vKipcbiAqIFNlcnZpY2UgZm9yIGluamVjdGluZyB0aGUgTWF0b21vIHRyYWNrZXIgaW4gdGhlIGFwcGxpY2F0aW9uLlxuICogVGhpcyBzZXJ2aWNlIHNoYWxsIG5vIGxvbmdlciBiZSB1c2VkIGRpcmVjdGx5IHdpdGhpbiBhbiBhcHBsaWNhdGlvbi5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1hdG9tb0luamVjdG9yIHtcbiAgLyoqXG4gICAqIE1hdG9tbyBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb24gPSBpbmplY3QoTUFUT01PX0NPTkZJR1VSQVRJT04pO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hdG9tb0luamVjdG9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHdpbmRvd1snX3BhcSddID0gd2luZG93WydfcGFxJ10gfHwgKCEhdGhpcy5jb25maWd1cmF0aW9uLnNjcmlwdFVybCA/IFtdIDogeyBwdXNoOiAoKSA9PiB7fSB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBpZiAoIShlIGluc3RhbmNlb2YgUmVmZXJlbmNlRXJyb3IpKSB7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgYW5kIGluamVjdHMgdGhlIE1hdG9tbyB0cmFja2VyIGluIHRoZSBET00uXG4gICAqL1xuICBpbml0KCk6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uPy5yZXF1aXJlQ29uc2VudCA9PT0gdHJ1ZSkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsncmVxdWlyZUNvbnNlbnQnXSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY29uZmlndXJhdGlvbj8ucmVxdWlyZUNvb2tpZUNvbnNlbnQgPT09IHRydWUpIHtcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3JlcXVpcmVDb29raWVDb25zZW50J10pO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbj8uc2tpcFRyYWNraW5nSW5pdGlhbFBhZ2VWaWV3ID09PSBmYWxzZSkge1xuICAgICAgICB3aW5kb3dbJ19wYXEnXS5wdXNoKFsndHJhY2tQYWdlVmlldyddKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbj8udHJhY2tMaW5rcyA9PT0gdHJ1ZSAmJlxuICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbj8ucm91dGVUcmFja2luZz8uZW5hYmxlID09PSBmYWxzZVxuICAgICAgICApIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goW1xuICAgICAgICAgICAgICAnZW5hYmxlTGlua1RyYWNraW5nJyxcbiAgICAgICAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uPy50cmFja0xpbmtWYWx1ZSA/PyBmYWxzZSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIH0sIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnRyYWNrZXJzPy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgW21haW5UcmFja2VyLCAuLi5vdGhlclRyYWNrZXJzXSA9IHRoaXMuY29uZmlndXJhdGlvbi50cmFja2VycztcbiAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ3NldFRyYWNrZXJVcmwnLCBtYWluVHJhY2tlci50cmFja2VyVXJsXSk7XG4gICAgICAgIHdpbmRvd1snX3BhcSddLnB1c2goWydzZXRTaXRlSWQnLCBtYWluVHJhY2tlci5zaXRlSWQudG9TdHJpbmcoKV0pO1xuICAgICAgICBvdGhlclRyYWNrZXJzLmZvckVhY2goKHRyYWNrZXIpID0+XG4gICAgICAgICAgd2luZG93WydfcGFxJ10ucHVzaChbJ2FkZFRyYWNrZXInLCB0cmFja2VyLnRyYWNrZXJVcmwsIHRyYWNrZXIuc2l0ZUlkLnRvU3RyaW5nKCldKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCEhdGhpcy5jb25maWd1cmF0aW9uLnNjcmlwdFVybCkge1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LmRlZmVyID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHRoaXMuY29uZmlndXJhdGlvbi5zY3JpcHRVcmw7XG4gICAgICAgIGNvbnN0IGZpcnN0U2NyaXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuICAgICAgICBmaXJzdFNjcmlwdC5wYXJlbnROb2RlPy5pbnNlcnRCZWZvcmUoc2NyaXB0LCBmaXJzdFNjcmlwdCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgaWYgKCEoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSkge1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19