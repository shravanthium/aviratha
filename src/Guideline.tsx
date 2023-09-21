
import {
    Datagrid,
    List,
    TextField,

} from "react-admin";

export const GuidelineList = (props: any) => (
    <List {...props} >
        <Datagrid bulkActionButtons={false}>
            <TextField source="id" label="Class" sortable={false} />
            <TextField source="dw" label="Drawing" />
            <TextField source="sq" label="Square" />
            <TextField source="fr" label="FourLine" />
            <TextField source="dr" label="DoubleRule" />
            <TextField source="sr" label="SingleRule" />
            <TextField source="hm" label="HorizantalMath" />
            <TextField source="ur" label="UnRuled" />
            <TextField source="gr" label="Graph" />
        </Datagrid>
    </List>
);