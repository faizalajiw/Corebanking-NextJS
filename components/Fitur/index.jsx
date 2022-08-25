import React from "react";
import { Dropdown} from "flowbite-react";

export default function fitur () {
    return (
      <Dropdown
        arrowIcon={false}
        inline={true}
      label={" Fitur "}>
  <Dropdown.Item>
    Credit Scoring
  </Dropdown.Item>
  <Dropdown.Item>
    Mobile Banking
  </Dropdown.Item>
  <Dropdown.Item>
    Verifikasi KYC
  </Dropdown.Item>
  <Dropdown.Item>
    Laporan Terperinci
  </Dropdown.Item>
</Dropdown>

    );
}