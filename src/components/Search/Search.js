import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
import "./Search.css";
export default function Search({ handleSubmit, handleChange, searchString }) {
  return (
    <Form onSubmit={handleSubmit} className="m-2">
      <FormGroup className="m-auto col col-md-8 col-xl-4">
        <InputGroup>
          <Input
            type="search"
            name="search"
            placeholder="Search..."
            onChange={e => handleChange(e.target.value)}
            value={searchString}
          />
          <InputGroupAddon addonType="append">
            <Button color="danger">Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
