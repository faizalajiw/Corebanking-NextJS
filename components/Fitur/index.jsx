import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

export const Fitur = () => {
  return (
    <Dropdown arrowIcon={true} inline={true} label={" Fitur "}>
      <Dropdown.Item> <Link href="/fitur/CreditScoring">Credit Scoring</Link></Dropdown.Item>
      <Dropdown.Item> <Link href="/fitur/Mbanking">Mobile Banking</Link></Dropdown.Item>
      <Dropdown.Item><Link href="/fitur/KYC">Verifikasi KYC</Link></Dropdown.Item>
      <Dropdown.Item><Link href="fitur/LaporanTerperinci">Laporan Terperinci</Link></Dropdown.Item>
    </Dropdown>

  );
};
