import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import React from "react";

export default function DropdownBidang({ active }: { active: boolean }) {
  const bidangList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          className={`${
            active ? "text-primary" : "text-black"
          } uppercase cursor-pointer md:mb-0 text-sm bg-transparent font-bold hover:text-primary w-fit px-0 text-left block`}
          aria-label="dropdownBidang"
          disableAnimation={true}
          variant="flat"
        >
          <h1 className="px-5">Bidang</h1>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="dropdownBidang">
        <DropdownItem key="inti" href="/pengurus/inti">
          Pengurus Inti
        </DropdownItem>

        {bidangList.map((bidang: number) => (
          <DropdownItem
            key={`bidang-${bidang}`}
            href={`/pengurus/bidang/${bidang}`}
          >
            Bidang {bidang}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
