import {
    Create,
    Edit,
    SimpleForm,
    TextInput,
    SelectInput,
    NumberInput,
    useNotify,
    useRedirect,
    required
} from "react-admin";

import {
    Grid,
    InputAdornment,
    Stack, 
    TextField,
    useMediaQuery, 
    useTheme
} from '@mui/material';


export const InventoryCreate = (props: any) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Adjust breakpoint as needed
    
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`);
        redirect(`/inventory`);
    };

    return (<Create {...props} mutationOptions={{ onSuccess }}>
        <SimpleForm> 
            <Stack  sx={{ p: 2 }} spacing={2} direction={isMobile ? 'column' : 'row'}>
                <TextInput source="location" label="Warehouse Location" validate={required()} />
                <TextInput source="single_rule" label="Single Rule bundle count" validate={required()} />
                <TextInput source="double_rule" label="Double Rule boundle count" validate={required()} />
                <TextInput source="four_line" label="Four Line boundle count" validate={required()} />
                <TextInput source="square" label="Square boundle count" validate={required()} />
                <TextInput source="horizantal_math" label="Horizantal Math boundle count" validate={required()} />
                <TextInput source="unruled" label="Unrule boundle count" validate={required()} />
                <TextInput source="drawing" label="Drawing boundle count" validate={required()} />
                <TextInput source="graph" label="Graph boundle count" validate={required()} />
            </Stack>
        </SimpleForm>
    </Create>
    );
}