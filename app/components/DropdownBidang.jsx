import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const DropdownBidang = ({ active }) => {
  const bidangList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Dropdown>
      <DropdownTrigger>
        <h1
          className={`${
            active ? "text-primary" : "text-black"
          } uppercase cursor-pointer mb-5 md:mb-0 text-sm hover:text-primary`}
        >
          Bidang
        </h1>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownItem key="inti" href="/pengurus/inti-osis">
          Pengurus Inti
        </DropdownItem>

        {bidangList.map((bidang) => (
          <DropdownItem
            key={`bidang-${bidang}`}
            href={`/pengurus/bidang-${bidang}`}
          >
            Bidang {bidang}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownBidang;
