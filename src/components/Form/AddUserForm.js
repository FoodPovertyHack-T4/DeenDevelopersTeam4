import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import { db } from "../../Utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { Formik, Form, Field, FieldArray, useFormik } from "formik";
import DeleteIcon from '@mui/icons-material/Delete';
import { addUsers } from "../../Utils/databaseAccessor";


const AddUserForm = ({ modalToggle }) => {
  const stepperArray = ["Personal Information", "Dependants", "More Info"];
  const [step, setStep] = useState(0);
  const currentChild = stepperArray[step];
  const [completed, setCompleted] = useState(false);

  const userCollectionRef = collection(db, "users");

  const formik = useFormik({
    initialValues: {
      mainFirstName: "",
      mainLastName: "",
      mainAge: new Date(),
      campName: "",
      dependants: [
        {
          firstName: "",
          lastName: "",
          dob: new Date(),
        },
      ],
      description: "",
    },
    onSubmit: async (values) => {
      if (isLastStep()) {
        alert(JSON.stringify(values));
        setSubmitting(false);
        modalToggle();
      } else {
        setStep((s) => s + 1);
        helpers.setTouched({});
      }
    },
  });

  function isLastStep() {
    return step === stepperArray.length - 1;
  }
  return (
    <>
      <Formik
        initialValues={{
          mainFirstName: "",
          mainLastName: "",
          dependants: [
            {
              firstName: "",
              lastname: "",
            },
          ],
          description: "",
        }}
        onSubmit={async (values, helpers) => {
          if (isLastStep()) {
            setSubmitting(false);
            alert(values);
            // addUsers(values);
          } else {
            setStep((s) => s + 1);
            helpers.setTouched({});
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={formik.handleSubmit}>
            <Stepper alternativeLabel activeStep={step}>
              {stepperArray.map((stepper, index) => (
                <Step key={stepper} completed={step > index || completed}>
                  <StepLabel>{stepper}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {step == 0 && (
              <>
                <Box paddingBottom={2} paddingTop={2}>
                  <TextField
                    fullWidth
                    id="mainFirstName"
                    name="mainFirstName"
                    label="First Name"
                    value={formik.values.mainFirstName}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box paddingBottom={2} paddingTop={2}>
                  <TextField
                    fullWidth
                    id="mainLastName"
                    name="mainLastName"
                    label="Last Name"
                    value={formik.values.mainLastName}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box paddingBottom={2} paddingTop={2}>
                  <TextField
                    fullWidth
                    id="age"
                    name="mainAge"
                    label="Age"
                    type="number"
                    value={formik.values.mainAge}
                    onChange={formik.handleChange}
                  />
                </Box>
                <Box paddingBottom={2} paddingTop={2}>
                  <TextField
                    fullWidth
                    id="campName"
                    name="campName"
                    label="Camp"
                    value={formik.values.campName}
                    onChange={formik.handleChange}
                  />
                </Box>
              </>
            )}
            {step == 1 && (
                <FieldArray name="dependants" sx={{ height: "100%" }}>
                  {({ insert, remove, push }) => (
                    <Paper
                      elevation={0}
                      sx={{ maxHeight: '300px', overflow: "auto" }}
                    >
                      {values.dependants.length > 0 &&
                        values.dependants.map((friend, index) => (
                          <Box sx={{ display: "flex" }}>
                            <Box paddingTop={2} paddingBottom={2} marginX={1}>
                              <TextField
                                fullWidth
                                id={`dependants.${index}.firstName`}
                                name={`dependants.${index}.firstName`}
                                label="First Name"
                                onChange={formik.handleChange}
                              />
                            </Box>
                            <Box paddingTop={2} paddingBottom={2} marginX={1}>
                              <TextField
                                fullWidth
                                id={`dependants.${index}.lastName`}
                                name={`dependants.${index}.lastName`}
                                label="Last Name"
                                onChange={formik.handleChange}
                              />
                            </Box>
                            <Box paddingTop={2} paddingBottom={2} marginX={1}>
                              <TextField
                                fullWidth
                                id={`dependants.${index}.dob`}
                                name={`dependants.${index}.dob`}
                                type="number"
                                label="Age"
                                onChange={formik.handleChange}
                              />
                            </Box>
                            <Box paddingTop={3} paddingBottom={2} marginX={1}>
                              <IconButton aria-label="delete" onClick={() => remove(index)}>
                                <DeleteIcon />
                              </IconButton>
                            </Box>
                          </Box>
                        ))}
                     <Button
                        variant="contained"
                        sx={{ my: 2 }}
                        onClick={() => push({ name: "", email: "" })}
                      >
                        Add New Dependant
                      </Button>
                    </Paper>
                  )}
                </FieldArray>

            )}
            {step == 2 && (
              <>
                <Box paddingBottom={2} paddingTop={2}>
                  <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                  />
                </Box>
              </>
            )}
            <Grid container spacing={2}>
              {step > 0 ? (
                <Grid item>
                  <Button
                    sx={{ my: 2 }}
                    disabled={isSubmitting}
                    variant="contained"
                    color="primary"
                    onClick={() => setStep((s) => s - 1)}
                  >
                    Back
                  </Button>
                </Grid>
              ) : null}
              <Grid item>
                <Button
                  startIcon={
                    isSubmitting ? <CircularProgress size="1rem" /> : null
                  }
                  disabled={isSubmitting}
                  variant="contained"
                  color="primary"
                  type="submit"
                  sx={{ my: 2 }}
                >
                  {isSubmitting
                    ? "Submitting"
                    : isLastStep()
                    ? "Submit"
                    : "Next"}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AddUserForm;
