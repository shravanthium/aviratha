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
    Stack, TextField
} from '@mui/material';

const districts = [
    { id: "BAGALKOT", name: "ಬಾಗಲಕೋಟೆ" },
    { id: "BANGALORE", name: "ಬೆಂಗಳೂರು" },
    { id: "BANGALORE RURAL", name: "ಬೆಂಗಳೂರು ಗ್ರಾಮಾಂತರ" },
    { id: "BELGAUM", name: "ಬೆಳಗಾವಿ" },
    { id: "BELLARY", name: "ಬಳ್ಳಾರಿ" },
    { id: "BIDAR", name: "ಬೀದರ್‌" },
    { id: "BIJAPUR", name: "ವಿಜಾಪೂರ" },
    { id: "CHAMARAJNAGAR", name: "ಚಾಮರಾಜನಗರ" },
    { id: "CHIKKABALLAPUR", name: "ಚಿಕ್ಕಬಳ್ಳಾಪುರ" },
    { id: "CHIKMAGALUR", name: "ಚಿಕ್ಕಮಗಳೂರು" },
    { id: "CHITRADURGA", name: "ಚಿತ್ರದುರ್ಗ" },
    { id: "DAKSHINA KANNADA", name: "ದಕ್ಷಿಣ ಕನ್ನಡ" },
    { id: "DAVANGERE", name: "ದಾವಣಗೆರೆ" },
    { id: "DHARWAD", name: "ಧಾರವಾಡ" },
    { id: "GADAG", name: "ಗದಗ" },
    { id: "GULBARGA", name: "ಗುಲಬರ್ಗಾ" },
    { id: "HASSAN", name: "ಹಾಸನ" },
    { id: "HAVERI", name: "ಹಾವೇರಿ" },
    { id: "KODAGU", name: "ಕೊಡಗು" },
    { id: "KOLAR", name: "ಕೋಲಾರ" },
    { id: "KOPPAL", name: "ಕೊಪ್ಪಳ" },
    { id: "MANDYA", name: "ಮಂಡ್ಯ" },
    { id: "MYSORE", name: "ಮೈಸೂರು" },
    { id: "RAICHUR", name: "ರಾಯಚೂರು" },
    { id: "RAMANAGARAM", name: "ರಾಮನಗರಂ" },
    { id: "SHIMOGA", name: "ಶಿವಮೊಗ್ಗ" },
    { id: "TUMKUR", name: "ತುಮಕೂರು" },
    { id: "UDUPI", name: "ಉಡುಪಿ" },
    { id: "UTTARA KANNADA", name: "ಉತ್ತರ ಕನ್ನಡ" },
    { id: "VIJAYANAGAR", name: "ವಿಜಯನಗರ" },
    { id: "YADGIR", name: "ಯಾದಗಿರಿ" },
];

const taluks = [
    'Ajjampura',
    'Arakalgud',
    'Arasikere',
    'B R Hills',
    'Bagepalli',
    'Bangalore',
    'Bangalore Rural',
    'Bangarapete',
    'Banu gundi',
    'Basavana Bagewadi',
    'Belur',
    'Bengaluru North',
    'Brahmavara',
    'Challakere',
    'Channarayapatna',
    'Chikkaballapur',
    'Chikkamagaluru',
    'Chinthamani',
    'Chitradurga',
    'Dakshina kannada',
    'Davanagere',
    'Devanahali',
    'Doddaballapura',
    'Dudda',
    'Gadag',
    'Gowribidanuru',
    'Gubbi',
    'Guledagudda',
    'Gundlupete',
    'Hassan',
    'Hiriyur',
    'Holalkere',
    'Holenarasipura',
    'Hosadurga',
    'Hosakote',
    'Hunasagi',
    'Jagalur',
    'Jamakhandi',
    'K R Pete',
    'Kalasa',
    'Kanakapura',
    'Khanapur',
    'Kolar',
    'Koratagere',
    'Kudligi',
    'Kundagol',
    'Kunigal',
    'Kushtagi',
    'Laggere',
    'Madhugiri',
    'Magadi',
    'Malavalli',
    'Maluru',
    'Mandya',
    'Mayakonda',
    'Molakaalmuru',
    'Muddebihal',
    'Mysore',
    'Nagamangala',
    'Nanjanagoodu',
    'Narasipura',
    'Nelamangala',
    'Nidagundi',
    'Pandavapura',
    'Pavagada',
    'Raichur',
    'Ramanagara',
    'Sakaleshapura',
    'Saraguru',
    'Savanur',
    'Seegodu',
    'Shidlaghatta',
    'Shikaripura',
    'Siddaapura',
    'Sirsi',
    'Somwarpete',
    'Soraba',
    'Srinivasapura',
    'Surapura (Shorapur)',
    'Thirthahalli',
    'Tumakuru',
    'Turuvekere',
    'Ullenahally',
    'Vijayapura',
    'Yalahaka',
];


export const SchoolCreate = (props: any) => {

    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = () => {
        notify(`Changes saved`);
        redirect(`/schools`);
    };

    return (<Create {...props} mutationOptions={{ onSuccess }}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <Stack spacing={2} direction="row">
                <TextInput source="village" validate={required()} />
                <TextInput source="hobli" validate={required()} />
                <SelectInput label="Taluk" source="taluk" choices={taluks.map((taluk) => ({ id: taluk, name: taluk }))} validate={required()} />
                <SelectInput label="District" source="district" choices={districts} optionText={(choice: { id: String; name: String; }) => `${choice.id} - ${choice.name}`}
                    optionValue="id" validate={required()} />
            </Stack>
            <Stack spacing={2} direction="row">
                <TextInput source="teamlead" label="Team Lead" validate={required()} />
                <TextInput source="schoolcoordinator" label="School Coordinator" validate={required()} />
            </Stack>
            <Stack spacing={2} direction="row">
                <TextInput source="schoolcontact" label="School Contact Person" validate={required()} />
                <TextInput source="schoolcontactno" label="School Contact Person No." validate={required()} />
            </Stack>
            {/* Render 10 NumberInput fields with fixed names */}
            <Stack spacing={2} direction="row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <div key={index}>
                        <TextInput label="" source={`classes[${index - 1}].name`} defaultValue={`Class ${index}`} disabled />
                        <NumberInput label="Count" source={`classes[${index - 1}].count`} defaultValue="0" />
                    </div>
                ))}
            </Stack>
        </SimpleForm>
    </Create>
    );
}


export const SchoolEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="name" validate={required()} />
            <Grid container spacing={2} direction="row">
            <Grid item xs={12} md={2} >
                <TextInput source="village" validate={required()} />
                <TextInput source="hobli" validate={required()} />
                <SelectInput label="Taluk" source="taluk" choices={taluks.map((taluk) => ({ id: taluk, name: taluk }))} validate={required()} />
                <SelectInput label="District" source="district" choices={districts} optionText={(choice: { id: String; name: String; }) => `${choice.id} - ${choice.name}`}
                    optionValue="id" validate={required()} />
            </Grid>
            </Grid>
            
            <Stack spacing={2} direction="row">
                <TextInput source="teamlead" label="Team Lead" validate={required()} />
                <TextInput source="schoolcoordinator" label="School Coordinator" validate={required()} />
            </Stack>
            <Stack spacing={2} direction="row">
                <TextInput source="schoolcontact" label="School Contact" validate={required()} />
                <TextInput source="schoolcontactno" label="School Contact No." validate={required()} />
            </Stack>
            <Grid container spacing={2} direction="row">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((index) => (
                    <Grid item xs={12} md={1} key={index}>
                        <Stack spacing={2}>
                            <TextInput label="" 
                                source={`classes[${index - 1}].name`}
                                defaultValue={`Class ${index}`}
                                disabled
                            />
                            <NumberInput label="Count" source={`classes[${index - 1}].count`} defaultValue="0" />
                        </Stack>
                    </Grid>
                ))}
            </Grid>

        </SimpleForm>
    </Edit>
);