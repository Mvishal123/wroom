import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaGhost } from "react-icons/fa";

interface AgeTableProps {
  data: {
    [ageRange: string]: number;
  };
}
const AgeTable = ({ data }: AgeTableProps) => {
  return (
    <>
      {data && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-lg font-semibold">Age group</TableHead>
              <TableHead className="text-lg font-semibold">Customers</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <TableRow key={index}>
                  <TableCell className="py-5 font-bold">
                    {Object.keys(data)[index]}
                  </TableCell>
                  <TableCell>{Object.values(data)[index]}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      )}
      {!data && (
        <div className="h-full bg-brand/secondary w-full rounded-xl">
          <div className="flex items-center flex-col pt-6">
            <h1 className="text-xl font-semibold">Age table</h1>
            <div className="flex items-center flex-col mt-16 text-slate-600">
              <FaGhost className="h-12 w-12" />
              <p className="text-sm ">No metrics found</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeTable;
