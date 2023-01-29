import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import * as yup from "yup";
import { Form, Formik } from "formik";
import TextfieldWrapper from "../components/TextFieldWrapper";
import { getCustomerByIdAPI, updateCustomerAPI } from "../xhr/customersAPI";
import { useParams } from "react-router-dom";

const EditCustomer = () => {
  const { id } = useParams();
  const [data, setData] = useState();

  //   console.log(data);

  useEffect(() => {
    (async () => {
      const data = await getCustomerByIdAPI(id);
      setData(data);
    })();
  }, [id]);

  return (
    <Box padding={20}>
      <Typography m={2}>Edit New Employee</Typography>
      <Formik
        initialValues={{
          customerID: data?.customerID,
          firstName: "" || data?.firstName,
          lastName: "" || data?.lastName,
          emailAddress: "" || data?.emailAddress,
          dateOfBirth: "" + data?.dateOfBirth,
        }}
        validationSchema={yup.object().shape({})}
        onSubmit={async (values) => {
          await updateCustomerAPI(values);
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
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextfieldWrapper
                    name="lastName"
                    label="FirstName"
                    required
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextfieldWrapper
                    name="emailAddress"
                    label="FirstName"
                    required
                    type="email"
                    InputLabelProps={{ shrink: true }}
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
                    InputLabelProps={{ shrink: true }}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Stack direction={"row"} justifyContent={"center"}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ width: 170 }}
                    >
                      Update
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

export default EditCustomer;
