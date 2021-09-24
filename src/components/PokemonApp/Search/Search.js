import React from "react";
import Select from "react-select";
import {
  Form,
  FormGroup,
  // Input,
  InputGroup,
  // InputGroupAddon
} from "reactstrap";
import "./Search.css";
// import SearchInput from "./SearchInput/SearchInput";
import options from "../../../data/pokemon.json";

export default function Search({ handleChange }) {
  return (
    <Form className="m-2">
      <FormGroup className="m-auto col col-md-8 col-lg-6 col-xl-4">
        <InputGroup>
          <Select
            name="search"
            className="m-auto col"
            onChange={handleChange}
            options={options}
          />
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
