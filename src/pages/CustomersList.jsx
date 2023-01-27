import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const dummyData = [
  {
    customerID: "1eac39b2-b7b1-4a01-b4b4-45f659062bd1",
    firstName: "Themba",
    lastName: "Makamu",
    userName: "Themba Makamu",
    emailAddress: "kamzen1994@gmail.com",
    dateOfBirth: "1998-04-04T00:00:00",
    age: 25,
    dateCreated: "2023-01-27T15:36:32.9667498+02:00",
    dateEdited: null,
    isDeleted: false,
  },
  {
    customerID: "2f7d22ba-b394-49cf-bd81-85095a05a946",
    firstName: "Themba",
    lastName: "Makamu",
    userName: "Themba Makamu",
    emailAddress: "kamzen1994@gmail.com",
    dateOfBirth: "1998-04-04T00:00:00",
    age: 25,
    dateCreated: "2023-01-27T15:36:44.2183394+02:00",
    dateEdited: null,
    isDeleted: false,
  },
];

const CustomersList = () => {
  const [customers, setCustomers] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://localhost:7024/Customers", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      });

      console.log(data);

      setCustomers(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box component={"div"} padding={5}>
      <Stack direction={"row"} justifyContent="space-between" mb={2}>
        <Box></Box>
        <Typography variant="h4">List Of Customers</Typography>
        <Button variant="outlined" color="secondary">
          Add Customer
        </Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Id</TableCell> */}
              <TableCell align="right">FirstName</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">UserName</TableCell>
              <TableCell align="right">Email Address</TableCell>
              <TableCell align="right">Date Of Birth</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyData.map((row) => (
              <TableRow key={row.customerID}>
                {/* <TableCell>{row.customerID}</TableCell> */}
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.userName}</TableCell>
                <TableCell align="right">{row.emailAddress}</TableCell>
                <TableCell align="right">{row.dateOfBirth}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">
                  <Stack direction={"row"} spacing={2}>
                    <Button variant="contained" color="secondary">
                      Edit
                    </Button>
                    <Button variant="outlined" color="error">
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomersList;
