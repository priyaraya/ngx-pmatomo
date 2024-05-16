import { ModuleWithProviders } from '@angular/core';
import { MatomoConfiguration } from './matomo-configuration';
import * as i0 from "@angular/core";
/**
 * Angular module encapsulating Matomo features.
 */
export declare class MatomoModule {
    /**
     * platformId provided by DI
     */
    private readonly platformId;
    /**
     * Injector provided by DI
     */
    private readonly injector;
    /**
     * Matomo configuration provided by DI
     */
    private readonly configuration;
    /**
     * MatomoInjector provided by DI
     */
    private readonly matomoInjector;
    /**
     * Creates an instance of Matomo module.
     */
    constructor();
    /**
     * Use this method in your root module to provide the MatomoTracker service.
     */
    static forRoot(configuration?: Partial<MatomoConfiguration>): ModuleWithProviders<MatomoModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MatomoModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<MatomoModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<MatomoModule>;
}
