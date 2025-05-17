
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Building, Calendar, Users, Edit, Trash, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

// Mock job data
const jobData = {
  id: "1",
  title: "Senior Frontend Developer",
  department: "Engineering",
  location: "Remote",
  status: "Active",
  applicants: 24,
  posted: "May 15, 2025",
  description: `<p>We are seeking a Senior Frontend Developer to join our growing team. The ideal candidate has deep expertise in React and modern frontend practices.</p>
    <h3>Responsibilities:</h3>
    <ul>
      <li>Develop and maintain frontend applications using React, TypeScript, and modern CSS frameworks</li>
      <li>Collaborate with designers, product managers, and backend engineers</li>
      <li>Write clean, maintainable, and well-tested code</li>
      <li>Mentor junior developers and lead frontend initiatives</li>
    </ul>
    <h3>Requirements:</h3>
    <ul>
      <li>5+ years of experience with frontend development</li>
      <li>Expert knowledge of React, TypeScript, and modern JavaScript</li>
      <li>Experience with state management libraries (Redux, Context API, etc.)</li>
      <li>Strong understanding of responsive design and accessibility</li>
      <li>Excellent communication and collaboration skills</li>
    </ul>`,
  salary: "$120,000 - $160,000",
  employmentType: "Full-time",
  experience: "5+ years",
  education: "Bachelor's degree in Computer Science or equivalent experience",
};

const JobDetails = () => {
  const { id } = useParams();

  // In a real app, we'd fetch the job data based on the ID
  // For now, we'll just use our mock data

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/jobs">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold tracking-tight">{jobData.title}</h1>
          <Badge className="bg-green-500 ml-2">Active</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm" className="text-destructive hover:bg-destructive/10">
            <Trash className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <Tabs defaultValue="details">
              <div className="p-4 border-b">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="candidates">
                    Candidates ({jobData.applicants})
                  </TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="details" className="p-4">
                <div className="prose max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: jobData.description }}></div>
                </div>
              </TabsContent>
              <TabsContent value="candidates" className="p-4">
                <p className="text-muted-foreground">
                  View all candidates who have applied to this position.
                </p>
                <div className="flex justify-center py-8">
                  <Button asChild>
                    <Link to="/candidates">View All Candidates</Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="activity" className="p-4">
                <p className="text-muted-foreground">
                  Recent activity and updates for this job posting.
                </p>
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No recent activity
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <h3 className="font-semibold">Job Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{jobData.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <span>{jobData.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>Posted: {jobData.posted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>Applicants: {jobData.applicants}</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <div>
                    <div className="text-sm font-medium">Salary Range</div>
                    <div className="text-sm">{jobData.salary}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Employment Type</div>
                    <div className="text-sm">{jobData.employmentType}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Experience Level</div>
                    <div className="text-sm">{jobData.experience}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Education</div>
                    <div className="text-sm">{jobData.education}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 space-y-4">
              <h3 className="font-semibold">Actions</h3>
              <div className="space-y-2">
                <Button className="w-full">View Candidates</Button>
                <Button variant="outline" className="w-full">Close Job</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
