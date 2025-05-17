
import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const candidatesData = [
  {
    id: "1",
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    position: "Senior Frontend Developer",
    stage: "Interview",
    status: "Active",
    appliedDate: "May 15, 2025",
  },
  {
    id: "2",
    name: "Jamie Smith",
    email: "jamie.smith@example.com",
    position: "Product Manager",
    stage: "Assessment",
    status: "Active",
    appliedDate: "May 14, 2025",
  },
  {
    id: "3",
    name: "Taylor Williams",
    email: "taylor.williams@example.com",
    position: "UX Designer",
    stage: "Screening",
    status: "Active",
    appliedDate: "May 12, 2025",
  },
  {
    id: "4",
    name: "Morgan Brown",
    email: "morgan.brown@example.com",
    position: "DevOps Engineer",
    stage: "Offer",
    status: "Active",
    appliedDate: "May 10, 2025",
  },
  {
    id: "5",
    name: "Casey Davis",
    email: "casey.davis@example.com",
    position: "Marketing Specialist",
    stage: "Hired",
    status: "Closed",
    appliedDate: "May 5, 2025",
  },
  {
    id: "6",
    name: "Jordan Wilson",
    email: "jordan.wilson@example.com",
    position: "Customer Success Manager",
    stage: "Rejected",
    status: "Closed",
    appliedDate: "May 1, 2025",
  },
];

const Candidates = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCandidates = candidatesData.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.stage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStageBadge = (stage: string) => {
    switch (stage) {
      case "Screening":
        return <Badge variant="outline">Screening</Badge>;
      case "Interview":
        return <Badge className="bg-blue-500">Interview</Badge>;
      case "Assessment":
        return <Badge className="bg-yellow-500">Assessment</Badge>;
      case "Offer":
        return <Badge className="bg-purple-500">Offer</Badge>;
      case "Hired":
        return <Badge className="bg-green-500">Hired</Badge>;
      case "Rejected":
        return <Badge variant="secondary">Rejected</Badge>;
      default:
        return <Badge>{stage}</Badge>;
    }
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Candidate
        </Button>
      </div>

      <Card>
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search candidates..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead className="hidden md:table-cell">Position</TableHead>
                <TableHead className="hidden lg:table-cell">Applied</TableHead>
                <TableHead className="hidden sm:table-cell">Stage</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCandidates.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    No candidates found. Try adjusting your search.
                  </TableCell>
                </TableRow>
              ) : (
                filteredCandidates.map((candidate) => (
                  <TableRow key={candidate.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarFallback>{getInitials(candidate.name)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <Link
                            to={`/candidates/${candidate.id}`}
                            className="font-medium hover:underline"
                          >
                            {candidate.name}
                          </Link>
                          <div className="text-sm text-muted-foreground">
                            {candidate.email}
                          </div>
                          <div className="md:hidden text-sm text-muted-foreground mt-1">
                            {candidate.position}
                          </div>
                          <div className="sm:hidden text-sm mt-1">
                            {getStageBadge(candidate.stage)}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {candidate.position}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {candidate.appliedDate}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {getStageBadge(candidate.stage)}
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Link to={`/candidates/${candidate.id}`} className="w-full">
                              View
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Schedule Interview</DropdownMenuItem>
                          <DropdownMenuItem>Move to Next Stage</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Reject
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default Candidates;
