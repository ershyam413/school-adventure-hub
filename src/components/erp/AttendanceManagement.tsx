
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Calendar as CalendarIcon, UserCheck, UserX, RefreshCw } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const AttendanceManagement = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [userType, setUserType] = useState("students");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSection, setSelectedSection] = useState("all");
  
  // Mock data for attendance
  const studentAttendance = [
    { id: 1, name: "Aisha Patel", rollNo: "S001", class: "10", section: "A", status: "present" },
    { id: 2, name: "Raj Singh", rollNo: "S002", class: "10", section: "A", status: "absent" },
    { id: 3, name: "Sneha Verma", rollNo: "S003", class: "10", section: "A", status: "present" },
    { id: 4, name: "Ahmed Khan", rollNo: "S004", class: "10", section: "B", status: "present" },
    { id: 5, name: "Priya Gupta", rollNo: "S005", class: "10", section: "B", status: "present" },
    { id: 6, name: "Vikram Choudhary", rollNo: "S006", class: "9", section: "A", status: "absent" },
    { id: 7, name: "Sanjana Reddy", rollNo: "S007", class: "9", section: "A", status: "present" },
    { id: 8, name: "Arjun Nair", rollNo: "S008", class: "9", section: "B", status: "present" },
  ];
  
  const teacherAttendance = [
    { id: 1, name: "Mr. Ramesh Kumar", empId: "T001", department: "Science", status: "present" },
    { id: 2, name: "Mrs. Sunita Sharma", empId: "T002", department: "Mathematics", status: "present" },
    { id: 3, name: "Mr. Anand Desai", empId: "T003", department: "English", status: "absent" },
    { id: 4, name: "Ms. Deepa Joshi", empId: "T004", department: "Social Science", status: "present" },
    { id: 5, name: "Mr. Farooq Ahmed", empId: "T005", department: "Physical Education", status: "present" },
  ];

  // Filter attendance based on class and section
  const filteredStudents = studentAttendance.filter(student => {
    if (selectedClass !== "all" && student.class !== selectedClass) return false;
    if (selectedSection !== "all" && student.section !== selectedSection) return false;
    return true;
  });

  const toggleAttendance = (id: number, type: string) => {
    // In a real application, this would update the attendance in the database
    console.log(`Toggled attendance for ${type} id: ${id}`);
  };

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Attendance Management</CardTitle>
          <CardDescription>Record and manage attendance for students and teachers</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="flex items-center justify-start w-full md:w-auto"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {format(date, "PPP")}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Select value={userType} onValueChange={setUserType}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="User Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="students">Students</SelectItem>
                <SelectItem value="teachers">Teachers</SelectItem>
              </SelectContent>
            </Select>

            {userType === "students" && (
              <>
                <Select value={selectedClass} onValueChange={setSelectedClass}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Class" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Classes</SelectItem>
                    <SelectItem value="10">Class 10</SelectItem>
                    <SelectItem value="9">Class 9</SelectItem>
                    <SelectItem value="8">Class 8</SelectItem>
                    <SelectItem value="7">Class 7</SelectItem>
                    <SelectItem value="6">Class 6</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedSection} onValueChange={setSelectedSection}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Section" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sections</SelectItem>
                    <SelectItem value="A">Section A</SelectItem>
                    <SelectItem value="B">Section B</SelectItem>
                    <SelectItem value="C">Section C</SelectItem>
                  </SelectContent>
                </Select>
              </>
            )}

            <Button variant="outline" className="ml-auto">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </div>

          <Tabs defaultValue="takeAttendance">
            <TabsList className="mb-4">
              <TabsTrigger value="takeAttendance">Take Attendance</TabsTrigger>
              <TabsTrigger value="viewReports">View Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="takeAttendance">
              {userType === "students" ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Roll No</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Section</TableHead>
                      <TableHead className="text-right">Attendance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>{student.name}</TableCell>
                        <TableCell>{student.class}</TableCell>
                        <TableCell>{student.section}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button 
                              variant={student.status === "present" ? "default" : "outline"} 
                              size="sm"
                              className={cn(
                                "h-8 w-8 p-0",
                                student.status === "present" ? "bg-green-500 hover:bg-green-600" : ""
                              )}
                              onClick={() => toggleAttendance(student.id, "student")}
                            >
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant={student.status === "absent" ? "default" : "outline"} 
                              size="sm"
                              className={cn(
                                "h-8 w-8 p-0",
                                student.status === "absent" ? "bg-red-500 hover:bg-red-600" : ""
                              )}
                              onClick={() => toggleAttendance(student.id, "student")}
                            >
                              <UserX className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Emp ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead className="text-right">Attendance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teacherAttendance.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell>{teacher.empId}</TableCell>
                        <TableCell>{teacher.name}</TableCell>
                        <TableCell>{teacher.department}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end space-x-2">
                            <Button 
                              variant={teacher.status === "present" ? "default" : "outline"} 
                              size="sm"
                              className={cn(
                                "h-8 w-8 p-0",
                                teacher.status === "present" ? "bg-green-500 hover:bg-green-600" : ""
                              )}
                              onClick={() => toggleAttendance(teacher.id, "teacher")}
                            >
                              <UserCheck className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant={teacher.status === "absent" ? "default" : "outline"} 
                              size="sm"
                              className={cn(
                                "h-8 w-8 p-0",
                                teacher.status === "absent" ? "bg-red-500 hover:bg-red-600" : ""
                              )}
                              onClick={() => toggleAttendance(teacher.id, "teacher")}
                            >
                              <UserX className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </TabsContent>
            
            <TabsContent value="viewReports">
              <div className="space-y-4">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Attendance Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">94.2%</div>
                      <p className="text-xs text-green-500">+2.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Average Absent Days</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1.3 days</div>
                      <p className="text-xs text-red-500">+0.2 from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Perfect Attendance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">438 students</div>
                      <p className="text-xs text-green-500">35% of total students</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Attendance Trends</CardTitle>
                    <CardDescription>Attendance percentage over the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] w-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Chart visualization will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AttendanceManagement;
