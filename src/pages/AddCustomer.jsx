import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as yup from "yup";
import { Form, Formik } from "formik";
import TextfieldWrapper from "../components/TextFieldWrapper";
import { createCustomerAPI } from "../xhr/customersAPI";

const AddCustomer = () => {
  return (
    <Box padding={20}>
      <Typography m={2}>Add New Employee</Typography>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          emailAddress: "",
          dateOfBirth: "",
        }}
        validationSchema={yup.object().shape({})}
        onSubmit={async (values) => {
          await createCustomerAPI(values);
        }}
        enableReinitialize={true}
      >
        {({ values, errors, setFieldValue, initialValues }) => {
          return (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <TextfieldWrapper
                    name="firstName"
                    label="FirstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextfieldWrapper
                    name="lastName"
                    label="FirstName"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextfieldWrapper
                    name="emailAddress"
                    label="FirstName"
                    required
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  {/* <DOBPicker 
                    name="dateOfBirth"
                    label="Date Of Birth"
                    required
                  /> */}
                  <TextfieldWrapper
                    name="dateOfBirth"
                    label="Date Of Birth"
                    placeholder="eg. 1998-04-04"
                    required
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: 170 }}
                    >
                      Add
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};

export default AddCustomer;
