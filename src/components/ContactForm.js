import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Box from "@material-ui/core/Box";
import GlobalStyles from '../styles/GlobalStyles'


const MyForm = () => {
  const classes = GlobalStyles();

  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleSubmit = () => {
    // submit logic
  };

  return (
    <>
      <Box display="flex" flexDirection="row" justifyContent="center" marginBottom="5%">
        <ValidatorForm
        className={classes.label}
          onSubmit={() => handleSubmit()}
          onError={(errors) => console.log(errors)}
        >
          <TextValidator
            type="text"
            label="Email"
            onChange={(e) => handleChange(e)}
            name="email"
            value={email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required", "email is not valid"]}
          />
        </ValidatorForm>
        <Box marginLeft="5%" alignSelf="end">
          <Button
            className={classes.submitButton}
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default MyForm;
