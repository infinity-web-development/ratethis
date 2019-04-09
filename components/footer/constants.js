export const MENU_TEXTS = {
    DARK: "dark",
    HORIZONTAL: "horizontal",
};

export const STYLES = {
    CONTAINER : {
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        height: "50px",
        alignItems: "center",
    },
    
    MAIN_NAV: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        width: "100%",
    },
};

export const FOOTER_MENU = [
    {
        key: "home",
        path: "/",
        type: "home",
    },
    {
        key: "profile",
        path: "/",
        type: "profile",
    },    
    {
        key: "plus",
        path: "/",
        type: "plus",
    },
    {
        key: "more",
        path: "/",
        type: "more",
    },
]