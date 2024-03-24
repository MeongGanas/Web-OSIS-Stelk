import { Edit } from "@mui/icons-material";
import Link from "next/link";

export function EditButton({ data }: { data: string }) {
  return (
    <Link href={`/dashboard/form/${data}/edit`}>
      <Edit />
    </Link>
  );
}
