import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon
} from "reactstrap";
export default function Search(props) {
  return (
    <Form inline onSubmit={props.onSubmit}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
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
