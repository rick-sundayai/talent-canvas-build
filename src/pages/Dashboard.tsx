
import { ArrowUpRight, ArrowDownRight, Briefcase, Users, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import DashboardLineChart from "@/components/DashboardLineChart";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <Button>
          <Briefcase className="mr-2 h-4 w-4" />
          Post New Job
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center text-xs">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +8% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Candidates</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">145</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center text-xs">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +12% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center text-xs">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                -4% from last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Time to Hire (avg)</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18 days</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center text-xs">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                -2 days from last month
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="lg:col-span-4">
          <CardHeader>
            <CardTitle>Hiring Activity</CardTitle>
            <CardDescription>View your recruitment metrics over time</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardLineChart />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle>Job Pipeline</CardTitle>
            <CardDescription>Current candidate pipeline by stage</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Sourced</div>
                  <div className="font-medium">72</div>
                </div>
                <Progress value={72} max={200} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Screening</div>
                  <div className="font-medium">48</div>
                </div>
                <Progress value={48} max={200} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Interview</div>
                  <div className="font-medium">32</div>
                </div>
                <Progress value={32} max={200} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Assessment</div>
                  <div className="font-medium">24</div>
                </div>
                <Progress value={24} max={200} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Offer</div>
                  <div className="font-medium">12</div>
                </div>
                <Progress value={12} max={200} className="h-2" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div>Hired</div>
                  <div className="font-medium">8</div>
                </div>
                <Progress value={8} max={200} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
