import { Stack } from "@mui/material";
import { Show, SimpleShowLayout, Labeled, TextField, ArrayField } from "react-admin";
import { GuideLineTable } from "./GuidelineTable";
import { ClassWiseCount } from "./ClassWiseCount";

export const SchoolShow = (props: any) => {
    return (
      <Show {...props} title="name" sx={{ p: 2 }}>
        <SimpleShowLayout>
  
          <Stack spacing={2} direction="row">
            <Labeled>
              <TextField source="id" label="Id" />
            </Labeled>
          </Stack>
          <Stack spacing={2} direction="row">
            <Labeled>
              <TextField source="name" label="Name" />
            </Labeled>
  
          </Stack>
          <Stack spacing={2} direction="row">
            <Labeled>
              <TextField source="village" label="Village" />
            </Labeled>
            <Labeled>
              <TextField source="taluk" label="Taluk" />
            </Labeled>
            <Labeled>
              <TextField source="district" label="District" />
            </Labeled>
            <Labeled>
              <TextField source="schoolcoordinator" label="School Coordinator" />
            </Labeled>
            <Labeled>
              <TextField source="teamlead" label="Team Lead" />
            </Labeled>
            <Labeled>
              <TextField source="schoolcontact" label="School Contact" />
            </Labeled>
            <Labeled>
              <TextField source="schoolcontactno" label="School Contact No." />
            </Labeled>
          </Stack>
          <ArrayField source="classes" label="Classwise Students Count">
            <ClassWiseCount />
          </ArrayField>
  
          <ArrayField source="classes" label="Guideline">
            <GuideLineTable />
          </ArrayField>
        </SimpleShowLayout>
      </Show>
    );
  }