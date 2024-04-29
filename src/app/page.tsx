"use client";
import {
  Button,
  Card,
  Heading,
  TableBody,
  TableCell,
  TableColumnHeaderCell,
  TableHeader,
  TableRoot,
  TableRow,
  Text,
} from "@radix-ui/themes";

function Page() {
  return (
    <main className="flex flex-col items-center pt-10">
      <Heading>Miner</Heading>
      <div>
        <Card size="4" mt="5">
          <div className="grid grid-cols-[1fr,max-content] gap-3 w-[450px]">
            <Heading size="3" weight="medium">
              NetID
            </Heading>
            <div>1</div>
            <Heading size="3" weight="medium">
              Register
            </Heading>
            <Button>Confirm</Button>
            <Text color="gray" className="col-span-2">
              Task : 持有代币地址/地址即可获得奖励，根据给定的公式
            </Text>
          </div>
        </Card>

        <TableRoot className="mt-10">
          <TableHeader>
            <TableRow>
              <TableColumnHeaderCell>Epoch</TableColumnHeaderCell>
              <TableColumnHeaderCell>Reward(tao)</TableColumnHeaderCell>
              <TableColumnHeaderCell>Claim</TableColumnHeaderCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>100</TableCell>
              <TableCell>
                <Button>Claim</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </TableRoot>
      </div>
    </main>
  );
}

export default Page;
