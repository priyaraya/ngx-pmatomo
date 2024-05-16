import { isPlatformBrowser } from '@angular/common';
import { Injector, NgModule, PLATFORM_ID, inject } from '@angular/core';
import { MATOMO_CONFIGURATION } from './matomo-configuration';
import { MatomoInjector } from './matomo-injector.service';
import { MatomoRouteTracker } from './matomo-route-tracker.service';
import { MatomoTracker } from './matomo-tracker.service';
import * as i0 from "@angular/core";
/**
 * Angular module encapsulating Matomo features.
 */
export class MatomoModule {
    /**
     * Creates an instance of Matomo module.
     */
    constructor() {
        /**
         * platformId provided by DI
         */
        this.platformId = inject(PLATFORM_ID);
        /**
         * Injector provided by DI
         */
        this.injector = inject(Injector);
        /**
         * Matomo configuration provided by DI
         */
        this.configuration = inject(MATOMO_CONFIGURATION);
        /**
         * MatomoInjector provided by DI
         */
        this.matomoInjector = inject(MatomoInjector);
        // Warn if module is not being loaded by a browser.
        if (!isPlatformBrowser(this.platformId)) {
            console.warn('ngx-Matomo does not support server platform');
        }
        // Inject the Matomo script and create trackers.
        this.matomoInjector.init();
        // Enable route tracking if requested.
        if (this.configuration?.routeTracking?.enable === true) {
            // Using Injector instead of DI in order to allow use in routerless apps.
            this.injector.get(MatomoRouteTracker).startTracking();
        }
    }
    /**
     * Use this method in your root module to provide the MatomoTracker service.
     */
    static forRoot(configuration) {
        return {
            ngModule: MatomoModule,
            providers: [
                {
                    provide: MATOMO_CONFIGURATION,
                    useValue: configuration,
                },
                MatomoTracker,
                MatomoRouteTracker,
            ],
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.1.2", ngImport: i0, type: MatomoModule }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoModule, providers: [MatomoInjector, MatomoTracker, MatomoRouteTracker] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.2", ngImport: i0, type: MatomoModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                    providers: [MatomoInjector, MatomoTracker, MatomoRouteTracker],
                }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0b21vLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXRvbW8vc3JjL2xpYi9tYXRvbW8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxRQUFRLEVBQXVCLFFBQVEsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBdUIsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUV6RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxZQUFZO0lBa0J2Qjs7T0FFRztJQUNIO1FBcEJBOztXQUVHO1FBQ2MsZUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNsRDs7V0FFRztRQUNjLGFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0M7O1dBRUc7UUFDYyxrQkFBYSxHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzlEOztXQUVHO1FBQ2MsbUJBQWMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7UUFNdkQsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztZQUN4QyxPQUFPLENBQUMsSUFBSSxDQUFDLDZDQUE2QyxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNELGdEQUFnRDtRQUNoRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNCLHNDQUFzQztRQUN0QyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsYUFBYSxFQUFFLE1BQU0sS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUN2RCx5RUFBeUU7WUFDekUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN4RCxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUE0QztRQUN6RCxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxvQkFBb0I7b0JBQzdCLFFBQVEsRUFBRSxhQUFhO2lCQUN4QjtnQkFDRCxhQUFhO2dCQUNiLGtCQUFrQjthQUNuQjtTQUNGLENBQUM7SUFDSixDQUFDOzhHQWxEVSxZQUFZOytHQUFaLFlBQVk7K0dBQVosWUFBWSxhQUZaLENBQUMsY0FBYyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsQ0FBQzs7MkZBRW5ELFlBQVk7a0JBTnhCLFFBQVE7bUJBQUM7b0JBQ1IsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRSxDQUFDLGNBQWMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7aUJBQy9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0b3IsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlLCBQTEFURk9STV9JRCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1BVE9NT19DT05GSUdVUkFUSU9OLCBNYXRvbW9Db25maWd1cmF0aW9uIH0gZnJvbSAnLi9tYXRvbW8tY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBNYXRvbW9JbmplY3RvciB9IGZyb20gJy4vbWF0b21vLWluamVjdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0b21vUm91dGVUcmFja2VyIH0gZnJvbSAnLi9tYXRvbW8tcm91dGUtdHJhY2tlci5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdG9tb1RyYWNrZXIgfSBmcm9tICcuL21hdG9tby10cmFja2VyLnNlcnZpY2UnO1xuXG4vKipcbiAqIEFuZ3VsYXIgbW9kdWxlIGVuY2Fwc3VsYXRpbmcgTWF0b21vIGZlYXR1cmVzLlxuICovXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBpbXBvcnRzOiBbXSxcbiAgZXhwb3J0czogW10sXG4gIHByb3ZpZGVyczogW01hdG9tb0luamVjdG9yLCBNYXRvbW9UcmFja2VyLCBNYXRvbW9Sb3V0ZVRyYWNrZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBNYXRvbW9Nb2R1bGUge1xuICAvKipcbiAgICogcGxhdGZvcm1JZCBwcm92aWRlZCBieSBESVxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBwbGF0Zm9ybUlkID0gaW5qZWN0KFBMQVRGT1JNX0lEKTtcbiAgLyoqXG4gICAqIEluamVjdG9yIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGluamVjdG9yID0gaW5qZWN0KEluamVjdG9yKTtcbiAgLyoqXG4gICAqIE1hdG9tbyBjb25maWd1cmF0aW9uIHByb3ZpZGVkIGJ5IERJXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbmZpZ3VyYXRpb24gPSBpbmplY3QoTUFUT01PX0NPTkZJR1VSQVRJT04pO1xuICAvKipcbiAgICogTWF0b21vSW5qZWN0b3IgcHJvdmlkZWQgYnkgRElcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgbWF0b21vSW5qZWN0b3IgPSBpbmplY3QoTWF0b21vSW5qZWN0b3IpO1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIE1hdG9tbyBtb2R1bGUuXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBXYXJuIGlmIG1vZHVsZSBpcyBub3QgYmVpbmcgbG9hZGVkIGJ5IGEgYnJvd3Nlci5cbiAgICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGNvbnNvbGUud2Fybignbmd4LU1hdG9tbyBkb2VzIG5vdCBzdXBwb3J0IHNlcnZlciBwbGF0Zm9ybScpO1xuICAgIH1cbiAgICAvLyBJbmplY3QgdGhlIE1hdG9tbyBzY3JpcHQgYW5kIGNyZWF0ZSB0cmFja2Vycy5cbiAgICB0aGlzLm1hdG9tb0luamVjdG9yLmluaXQoKTtcbiAgICAvLyBFbmFibGUgcm91dGUgdHJhY2tpbmcgaWYgcmVxdWVzdGVkLlxuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24/LnJvdXRlVHJhY2tpbmc/LmVuYWJsZSA9PT0gdHJ1ZSkge1xuICAgICAgLy8gVXNpbmcgSW5qZWN0b3IgaW5zdGVhZCBvZiBESSBpbiBvcmRlciB0byBhbGxvdyB1c2UgaW4gcm91dGVybGVzcyBhcHBzLlxuICAgICAgdGhpcy5pbmplY3Rvci5nZXQoTWF0b21vUm91dGVUcmFja2VyKS5zdGFydFRyYWNraW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVzZSB0aGlzIG1ldGhvZCBpbiB5b3VyIHJvb3QgbW9kdWxlIHRvIHByb3ZpZGUgdGhlIE1hdG9tb1RyYWNrZXIgc2VydmljZS5cbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb24/OiBQYXJ0aWFsPE1hdG9tb0NvbmZpZ3VyYXRpb24+KTogTW9kdWxlV2l0aFByb3ZpZGVyczxNYXRvbW9Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE1hdG9tb01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTUFUT01PX0NPTkZJR1VSQVRJT04sXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ3VyYXRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIE1hdG9tb1RyYWNrZXIsXG4gICAgICAgIE1hdG9tb1JvdXRlVHJhY2tlcixcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19