import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

export const Fitur = () => {
  return (
    <Dropdown arrowIcon={false} inline={true} label={" Fitur "}>
      <Dropdown.Item> <Link href="/fitur/CreditScoring"><a>Credit Scoring</a></Link></Dropdown.Item>
      <Dropdown.Item> <Link href="/fitur/Mbanking"><a>Mobile Banking</a></Link></Dropdown.Item>
      <Dropdown.Item><Link href="/fitur/KYC"><a>Verifikasi KYC</a></Link></Dropdown.Item>
      <Dropdown.Item><Link href="fitur/LaporanTerperinci"><a>Laporan Terperinci</a></Link></Dropdown.Item>
    </Dropdown>

  );
};
