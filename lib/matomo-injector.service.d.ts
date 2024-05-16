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
 * Service for injecting the Matomo tracker in the application.
 * This service shall no longer be used directly within an application.
 */
export declare class MatomoInjector {
    /**
     * Matomo configuration provided by DI
     */
    private readonly configuration;
    /**
     * Creates an instance of MatomoInjector.
     */
    constructor();
    /**
     * Configures and injects the Matomo tracker in the DOM.
     */
    init(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatomoInjector, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MatomoInjector>;
}
