import { Options } from "@/types/options.dto";
import { DesignState, EcommerceState, Logo, PageState, SearchEngineState, WebsiteOnsState } from "@/types/store-types.dto";
import { create } from "zustand";




export const useDesignStore = create<DesignState>()((set) => ({
    design: 1,
    toggle: (dsn) => set({ design: dsn })
}));

export const usePageStore = create<PageState>()((set) => ({
    page: 3,
    toggle: (pg) => set({ page: pg })
}));

export const useWebsiteOns = create<WebsiteOnsState>()((set) => ({
    websiteOns: [],

    addWebsiteOns: (web) => {
        set((state) => ({
            websiteOns: [...state.websiteOns, web],
        }));
    },

    removeWebsiteOns: (web) => {
        set((state) => ({
            websiteOns: state.websiteOns.filter((item) => item.title !== web.title),
        }));
    },
}));


export const useSearchEngine = create<SearchEngineState>()((set) => ({
    searchEngine: [],

    addSearchEngine: (src) => {
        set((state) => ({
            searchEngine: [...state.searchEngine, src],
        }));
    },

    removeSearchEngine: (src) => {
        set((state) => ({
            searchEngine: state.searchEngine.filter((item) => item.title !== src.title),
        }));
    },
}));

export const useEcommerceOns = create<EcommerceState>()((set) => ({
    ecommerce: [],

    addEcommerce: (ecm) => {
        set((state) => ({
            ecommerce: [...state.ecommerce, ecm],
        }));
    },

    removeEcommerce: (ecm) => {
        set((state) => ({
            ecommerce: state.ecommerce.filter((item) => item.title !== ecm.title),
        }));
    },
}));

export const useLogoDesign = create<Logo>()((set) => ({
    logo: 0,

    toggle(lg) { set({ logo: lg }); },
}));