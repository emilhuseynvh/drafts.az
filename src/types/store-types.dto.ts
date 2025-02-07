import { Options } from "./options.dto";

export interface DesignState {
    design: number,
    toggle: (dsn: number) => void;
}

export interface PageState {
    page: number,
    toggle: (pg: number) => void;
}

export interface WebsiteOnsState {
    websiteOns: Options[];
    addWebsiteOns: (web: Options) => void;
    removeWebsiteOns: (web: Options) => void;
}

export interface SearchEngineState {
    searchEngine: Options[];
    addSearchEngine: (src: Options) => void;
    removeSearchEngine: (src: Options) => void;
}

export interface EcommerceState {
    ecommerce: Options[];
    addEcommerce: (ecm: Options) => void;
    removeEcommerce: (ecm: Options) => void;
}

export interface Logo {
    logo: number,
    toggle: (lg: number) => void;
}