
import {
    Datagrid,
    List,
    TextField,

} from "react-admin";

export const InventoryList = (props: any) => (

<List sx={{ p: 2 }} {...props} >
    <Datagrid rowClick="show" bulkActionButtons={false} sx={{
        "& .RaDatagrid-headerCell": {
            fontWeight: 'bold', m: 1
        },}} >
            <TextField source="location" label="Location" sortable={false} />
            <TextField source="drawing" label="Drawing Bundle(s)" />
            <TextField source="square" label="Square" />
            <TextField source="four_line" label="FourLine" />
            <TextField source="double_rule" label="DoubleRule" />
            <TextField source="single_rule" label="SingleRule" />
            <TextField source="horizantal_math" label="HorizantalMath" />
            <TextField source="unruled" label="UnRuled" />
            <TextField source="graph" label="Graph" />
    </Datagrid>
</List>
);