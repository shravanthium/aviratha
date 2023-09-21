
import { defaultTheme } from "react-admin";

export const AvTheme = {
    ...defaultTheme,
    typography: {
        fontFamily: 'Roboto, Arial',
    },
    components: {
        ...defaultTheme.components,
        spacing: 4,
        MuiTextField: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: 'outlined',
            },
        },
        RaMenuItemLink: {
            styleOverrides: {
                root: {
                    '&.RaMenuItemLink-active': {
                        color: "#2196f3",
                    },
                    
                },
            },
        },
    }
};