import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Package, CheckCircle, AlertTriangle } from "lucide-react";

export default function TraceabilityPortal() {
  const [search, setSearch] = useState("");

  const batches = [
    { id: "BATCH-001", product: "Cassia Tora", status: "Delivered", origin: "Farm A", destination: "Retailer X", date: "2025-08-20" },
    { id: "BATCH-002", product: "Seasame Seed", status: "In Transit", origin: "Farm B", destination: "Retailer Y", date: "2025-08-21" },
    { id: "BATCH-003", product: "Kolanut", status: "Quarantine", origin: "Factory C", destination: "Warehouse Z", date: "2025-08-22" },
  ];

  const filtered = batches.filter(b => b.id.includes(search) || b.product.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Grubs And Foods Agro Tech Ltd Traceability Portal</h1>
        <Button variant="outline">Logout</Button>
      </header>

      {/* Search & Scan */}
      <Card className="mb-6">
        <CardContent className="flex gap-2 p-4">
          <Input placeholder="Search by Batch ID or Product" value={search} onChange={e => setSearch(e.target.value)} />
          <Button><Search className="w-4 h-4 mr-1" /> Search</Button>
        </CardContent>
      </Card>

      {/* Batches Table */}
      <Card>
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Batch ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Origin</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map(b => (
                <TableRow key={b.id}>
                  <TableCell className="font-medium">{b.id}</TableCell>
                  <TableCell>{b.product}</TableCell>
                  <TableCell>
                    {b.status === "Delivered" && <span className="flex items-center text-green-600"><CheckCircle className="w-4 h-4 mr-1" /> {b.status}</span>}
                    {b.status === "In Transit" && <span className="flex items-center text-blue-600"><Package className="w-4 h-4 mr-1" /> {b.status}</span>}
                    {b.status === "Quarantine" && <span className="flex items-center text-red-600"><AlertTriangle className="w-4 h-4 mr-1" /> {b.status}</span>}
                  </TableCell>
                  <TableCell>{b.origin}</TableCell>
                  <TableCell>{b.destination}</TableCell>
                  <TableCell>{b.date}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
