
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

const jobsData = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    status: "Active",
    applicants: 24,
    posted: "2 days ago",
  },
  {
    id: "2",
    title: "Product Manager",
    department: "Product",
    location: "New York",
    status: "Active",
    applicants: 18,
    posted: "3 days ago",
  },
  {
    id: "3",
    title: "UX Designer",
    department: "Design",
    location: "San Francisco",
    status: "Active",
    applicants: 12,
    posted: "1 week ago",
  },
  {
    id: "4",
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    status: "Active",
    applicants: 8,
    posted: "2 weeks ago",
  },
  {
    id: "5",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Chicago",
    status: "Draft",
    applicants: 0,
    posted: "Not posted",
  },
  {
    id: "6",
    title: "Customer Success Manager",
    department: "Support",
    location: "Boston",
    status: "Closed",
    applicants: 32,
    posted: "1 month ago",
  },
];

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-500">Active</Badge>;
      case "Draft":
        return <Badge variant="outline">Draft</Badge>;
      case "Closed":
        return <Badge variant="secondary">Closed</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Jobs</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <Card>
        <div className="p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search jobs..."
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
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Department</TableHead>
                <TableHead className="hidden md:table-cell">Location</TableHead>
                <TableHead className="hidden sm:table-cell">Status</TableHead>
                <TableHead className="hidden lg:table-cell">Applicants</TableHead>
                <TableHead className="hidden lg:table-cell">Posted</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredJobs.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} className="text-center py-8 text-muted-foreground">
                    No jobs found. Try adjusting your search.
                  </TableCell>
                </TableRow>
              ) : (
                filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <Link to={`/jobs/${job.id}`} className="font-medium hover:underline">
                        {job.title}
                      </Link>
                      <div className="md:hidden text-sm text-muted-foreground mt-1">
                        {job.department} • {job.location}
                      </div>
                      <div className="sm:hidden text-sm text-muted-foreground mt-1">
                        {getStatusBadge(job.status)}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{job.department}</TableCell>
                    <TableCell className="hidden md:table-cell">{job.location}</TableCell>
                    <TableCell className="hidden sm:table-cell">
                      {getStatusBadge(job.status)}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell">{job.applicants}</TableCell>
                    <TableCell className="hidden lg:table-cell">{job.posted}</TableCell>
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
                            <Link to={`/jobs/${job.id}`} className="w-full">View</Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Duplicate</DropdownMenuItem>
                          {job.status === "Active" && (
                            <DropdownMenuItem>Close Job</DropdownMenuItem>
                          )}
                          {job.status === "Draft" && (
                            <DropdownMenuItem>Publish</DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
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

export default Jobs;
