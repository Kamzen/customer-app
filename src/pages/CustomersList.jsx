import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAllCustomersAPI } from "../xhr/customersAPI";
import ConfirmDeleteModal from "../components/ConfirmDeleteModal";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await getAllCustomersAPI();
      setCustomers(data);
    })();
  }, []);

  return (
    <Box component={"div"} padding={5}>
      <Stack direction={"row"} justifyContent="space-between" mb={2}>
        <Box></Box>
        <Typography variant="h4">List Of Customers</Typography>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => navigate("/addCustomer")}
        >
          Add Customer
        </Button>
      </Stack>
      <TableContainer>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Id</TableCell> */}
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                FirstName
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                LastName
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                UserName
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                Email Address
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                Age
              </TableCell>
              <TableCell align="center" sx={{ fontWeight: "bolder" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers?.map((row) => (
              <TableRow key={row.customerID}>
                {/* <TableCell>{row.customerID}</TableCell> */}
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="center">{row.lastName}</TableCell>
                <TableCell align="center">{row.userName}</TableCell>
                <TableCell align="center">{row.emailAddress}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">
                  <Stack direction={"row"} spacing={2}>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() =>
                        navigate(`/editCustomer/${row.customerID}`)
                      }
                    >
                      Edit
                    </Button>
                    <ConfirmDeleteModal id={row.customerID} />
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
