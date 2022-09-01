import React from "react";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

export const Fitur = () => {
  return (
    <Dropdown arrowIcon={true} inline={true} label={" Fitur "}>
      <Dropdown.Item>
        <div className="hover:text-green-400">
          <Link href="/fitur/CreditScoring">Credit Scoring</Link>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="hover:text-green-400">
          <Link href="/fitur/Mbanking">Mobile Banking</Link>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="hover:text-green-400">
          <Link href="/fitur/KYC">Verifikasi KYC</Link>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="hover:text-green-400">
          <Link href="/fitur/LaporanTerperinci">Laporan Terperinci</Link>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};
