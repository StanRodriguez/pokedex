import React from "react";
import {
  Button,
  Form,
  FormGroup,
  // Input,
  InputGroup
  // InputGroupAddon
} from "reactstrap";
import "./Search.css";
import SearchInput from "../SearchInput/SearchInput";
export default function Search({ handleSubmit, handleChange, searchString }) {
  return (
    <Form onSubmit={handleSubmit} className="m-2">
      <FormGroup className="m-auto col ">
        <InputGroup>
          {/* <Input
            type="search"
            name="search"
            placeholder="Search..."
            onChange={e => handleChange(e.target.value)}
            value={searchString}
          /> */}
          <SearchInput
            handleChange={handleChange}
            searchString={searchString}
          />
          {/* <InputGroupAddon addonType="append"> */}
          <Button color="danger">Submit</Button>
          {/* </InputGroupAddon> */}
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
