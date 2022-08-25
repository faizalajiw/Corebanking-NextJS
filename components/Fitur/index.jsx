import React from "react";
import { Dropdown} from "flowbite-react";

export default function fitur () {
    return (
      <Dropdown
        arrowIcon={false}
        inline={true}
      label={" Fitur "}>
  <Dropdown.Item>
    Dashboard
  </Dropdown.Item>
  <Dropdown.Item>
    Settings
  </Dropdown.Item>
  <Dropdown.Item>
    Earnings
  </Dropdown.Item>
  <Dropdown.Item>
    Sign out
  </Dropdown.Item>
</Dropdown>

    );
}