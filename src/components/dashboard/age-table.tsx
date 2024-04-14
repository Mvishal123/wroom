import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface AgeTableProps {
  data: {
    [ageRange: string]: number;
  };
}
const AgeTable = ({ data }: AgeTableProps) => {
  console.log(data);

  return (
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
  );
};

export default AgeTable;
