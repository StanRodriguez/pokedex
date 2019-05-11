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
export default function Search(props) {
  return (
    <Form onSubmit={props.onSubmit} className="m-2">
      <FormGroup className="m-auto col col-md-8 col-xl-4">
        <InputGroup>
          <Input
            type="text"
            name="search"
            placeholder="Search..."
            onChange={e => props.onChange(e.target.value)}
            value={props.searchString}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">Submit</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
}
