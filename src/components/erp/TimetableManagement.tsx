
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus, Download, Clock, Copy, Edit, GraduationCap, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const TimetableManagement = () => {
  const [classFilter, setClassFilter] = useState("10");
  const [sectionFilter, setSectionFilter] = useState("A");
  const [dayFilter, setDayFilter] = useState("Monday");

  // Mock data for periods (45 min each)
  const periodTimings = [
    { id: 1, name: "Period 1", startTime: "08:00", endTime: "08:45" },
    { id: 2, name: "Period 2", startTime: "08:45", endTime: "09:30" },
    { id: 3, name: "Period 3", startTime: "09:30", endTime: "10:15" },
    { id: 4, name: "Period 4", startTime: "10:15", endTime: "11:00" },
    { id: 5, name: "Break", startTime: "11:00", endTime: "11:20" },
    { id: 6, name: "Period 5", startTime: "11:20", endTime: "12:05" },
    { id: 7, name: "Period 6", startTime: "12:05", endTime: "12:50" },
    { id: 8, name: "Lunch", startTime: "12:50", endTime: "13:30" },
    { id: 9, name: "Period 7", startTime: "13:30", endTime: "14:15" },
    { id: 10, name: "Period 8", startTime: "14:15", endTime: "15:00" },
  ];

  // Mock data for classes
  const classes = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "UKG", "LKG", "Nursery", "Playgroup"];
  const sections = ["A", "B", "C"];
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  // Mock data for subjects
  const subjects = [
    { id: 1, name: "Mathematics", code: "MAT", color: "bg-blue-100 text-blue-800" },
    { id: 2, name: "English", code: "ENG", color: "bg-green-100 text-green-800" },
    { id: 3, name: "Science", code: "SCI", color: "bg-purple-100 text-purple-800" },
    { id: 4, name: "Social Studies", code: "SST", color: "bg-yellow-100 text-yellow-800" },
    { id: 5, name: "Hindi", code: "HIN", color: "bg-orange-100 text-orange-800" },
    { id: 6, name: "Physical Education", code: "PE", color: "bg-red-100 text-red-800" },
    { id: 7, name: "Computer Science", code: "CS", color: "bg-indigo-100 text-indigo-800" },
    { id: 8, name: "Art", code: "ART", color: "bg-pink-100 text-pink-800" },
  ];

  // Mock data for teachers
  const teachers = [
    { id: 1, name: "Mr. Ramesh Kumar", initials: "RK", subject: "Mathematics" },
    { id: 2, name: "Mrs. Sunita Sharma", initials: "SS", subject: "English" },
    { id: 3, name: "Mr. Anand Desai", initials: "AD", subject: "Science" },
    { id: 4, name: "Ms. Deepa Joshi", initials: "DJ", subject: "Social Studies" },
    { id: 5, name: "Mr. Farooq Ahmed", initials: "FA", subject: "Hindi" },
    { id: 6, name: "Mrs. Priya Singh", initials: "PS", subject: "Physical Education" },
    { id: 7, name: "Mr. Vikram Patel", initials: "VP", subject: "Computer Science" },
    { id: 8, name: "Ms. Anjali Gupta", initials: "AG", subject: "Art" },
  ];

  // Mock data for timetable
  const generateTimetable = (classNum: string, section: string, day: string) => {
    // This would come from a database in a real application
    const timetable = [];
    
    // Skip break and lunch periods
    const academicPeriods = periodTimings.filter(period => 
      period.name !== "Break" && period.name !== "Lunch"
    );
    
    for (let i = 0; i < academicPeriods.length; i++) {
      const period = academicPeriods[i];
      // Randomly assign subjects and teachers
      const subjectIndex = Math.floor(Math.random() * subjects.length);
      const subject = subjects[subjectIndex];
      
      // Find a teacher who teaches this subject
      const teachersForSubject = teachers.filter(t => t.subject === subject.name);
      const teacher = teachersForSubject.length > 0 
        ? teachersForSubject[0] 
        : teachers[Math.floor(Math.random() * teachers.length)];
      
      timetable.push({
        periodId: period.id,
        periodName: period.name,
        startTime: period.startTime,
        endTime: period.endTime,
        subject: subject.name,
        subjectCode: subject.code,
        subjectColor: subject.color,
        teacher: teacher.name,
        teacherInitials: teacher.initials
      });
    }
    
    return timetable;
  };

  const timetable = generateTimetable(classFilter, sectionFilter, dayFilter);

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Timetable Management</CardTitle>
          <CardDescription>Manage class schedules, periods, and teacher assignments</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="view">
            <TabsList className="mb-4">
              <TabsTrigger value="view">View Timetable</TabsTrigger>
              <TabsTrigger value="periods">Manage Periods</TabsTrigger>
              <TabsTrigger value="subjects">Subjects</TabsTrigger>
              <TabsTrigger value="teacherLoad">Teacher Load</TabsTrigger>
            </TabsList>
            
            <TabsContent value="view">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <Select value={classFilter} onValueChange={setClassFilter}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Class" />
                  </SelectTrigger>
                  <SelectContent>
                    {classes.map(cls => (
                      <SelectItem key={cls} value={cls}>Class {cls}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sectionFilter} onValueChange={setSectionFilter}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Section" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.map(section => (
                      <SelectItem key={section} value={section}>Section {section}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={dayFilter} onValueChange={setDayFilter}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Day" />
                  </SelectTrigger>
                  <SelectContent>
                    {days.map(day => (
                      <SelectItem key={day} value={day}>{day}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Create Timetable
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-md">
                    <DialogHeader>
                      <DialogTitle>Create New Timetable</DialogTitle>
                      <DialogDescription>Generate a timetable for a class and section.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="className">Class</Label>
                          <Select defaultValue="10">
                            <SelectTrigger>
                              <SelectValue placeholder="Select class" />
                            </SelectTrigger>
                            <SelectContent>
                              {classes.map(cls => (
                                <SelectItem key={cls} value={cls}>Class {cls}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="section">Section</Label>
                          <Select defaultValue="A">
                            <SelectTrigger>
                              <SelectValue placeholder="Select section" />
                            </SelectTrigger>
                            <SelectContent>
                              {sections.map(section => (
                                <SelectItem key={section} value={section}>Section {section}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="academicYear">Academic Year</Label>
                        <Select defaultValue="2023-24">
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023-24">2023-24</SelectItem>
                            <SelectItem value="2024-25">2024-25</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="template">Use Template</Label>
                        <Select defaultValue="basic">
                          <SelectTrigger>
                            <SelectValue placeholder="Select template" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="basic">Basic Template</SelectItem>
                            <SelectItem value="balanced">Balanced Distribution</SelectItem>
                            <SelectItem value="custom">Custom Template</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Generate Timetable</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full md:w-auto md:ml-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <Card className="mb-6">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">
                    Class {classFilter} - Section {sectionFilter} ({dayFilter})
                  </CardTitle>
                  <CardDescription>45-minute periods with breaks</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Time</TableHead>
                          <TableHead>Period</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Teacher</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {periodTimings.map((period) => {
                          const isBreak = period.name === "Break" || period.name === "Lunch";
                          const periodData = timetable.find(t => t.periodId === period.id);
                          
                          return (
                            <TableRow key={period.id} className={isBreak ? "bg-gray-50" : ""}>
                              <TableCell className="font-medium">
                                {period.startTime} - {period.endTime}
                              </TableCell>
                              <TableCell>{period.name}</TableCell>
                              {isBreak ? (
                                <TableCell colSpan={3} className="text-center font-medium text-gray-500">
                                  {period.name === "Break" ? "Morning Break" : "Lunch Break"}
                                </TableCell>
                              ) : (
                                <>
                                  <TableCell>
                                    <Badge className={periodData?.subjectColor}>
                                      {periodData?.subjectCode} - {periodData?.subject}
                                    </Badge>
                                  </TableCell>
                                  <TableCell>
                                    <div className="flex items-center">
                                      <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-medium">
                                        {periodData?.teacherInitials}
                                      </div>
                                      <span>{periodData?.teacher}</span>
                                    </div>
                                  </TableCell>
                                  <TableCell className="text-right">
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                      <Edit className="h-4 w-4" />
                                      <span className="sr-only">Edit</span>
                                    </Button>
                                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                      <Copy className="h-4 w-4" />
                                      <span className="sr-only">Copy</span>
                                    </Button>
                                  </TableCell>
                                </>
                              )}
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Weekly Overview</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Clock className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {days.map((day, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-24 font-medium">{day}</div>
                          <div className="flex-1 flex space-x-1 overflow-x-auto pb-2">
                            {Array.from({ length: 8 }).map((_, i) => {
                              const subjectIndex = Math.floor(Math.random() * subjects.length);
                              const subject = subjects[subjectIndex];
                              return (
                                <Badge 
                                  key={i} 
                                  className={`shrink-0 ${subject.color}`}
                                  variant="outline"
                                >
                                  {subject.code}
                                </Badge>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-lg">Subject Distribution</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <BookOpen className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {subjects.slice(0, 6).map((subject, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center">
                            <Badge className={subject.color}>{subject.code}</Badge>
                            <span className="ml-2">{subject.name}</span>
                          </div>
                          <span className="font-medium">{Math.floor(Math.random() * 5) + 3} periods/week</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="periods">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Period
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Period</DialogTitle>
                      <DialogDescription>Define a new period with a start and end time.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="periodName">Period Name</Label>
                        <Input id="periodName" placeholder="e.g., Period 9" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="startTime">Start Time</Label>
                          <Input id="startTime" type="time" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="endTime">End Time</Label>
                          <Input id="endTime" type="time" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="periodType">Period Type</Label>
                        <Select defaultValue="regular">
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="regular">Regular Class</SelectItem>
                            <SelectItem value="break">Break</SelectItem>
                            <SelectItem value="lunch">Lunch</SelectItem>
                            <SelectItem value="activity">Activity Period</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Period</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Period Name</TableHead>
                      <TableHead>Start Time</TableHead>
                      <TableHead>End Time</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {periodTimings.map((period) => {
                      const startHour = parseInt(period.startTime.split(':')[0]);
                      const startMin = parseInt(period.startTime.split(':')[1]);
                      const endHour = parseInt(period.endTime.split(':')[0]);
                      const endMin = parseInt(period.endTime.split(':')[1]);
                      
                      // Calculate duration in minutes
                      const durationMins = (endHour - startHour) * 60 + (endMin - startMin);
                      
                      const isBreak = period.name === "Break" || period.name === "Lunch";
                      
                      return (
                        <TableRow key={period.id}>
                          <TableCell className="font-medium">{period.name}</TableCell>
                          <TableCell>{period.startTime}</TableCell>
                          <TableCell>{period.endTime}</TableCell>
                          <TableCell>{durationMins} mins</TableCell>
                          <TableCell>
                            <Badge className={
                              isBreak ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"
                            }>
                              {isBreak ? "Break" : "Regular"}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="subjects">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Subject
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Subject</DialogTitle>
                      <DialogDescription>Create a new subject for class scheduling.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="subjectName">Subject Name</Label>
                          <Input id="subjectName" placeholder="e.g., Physics" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="subjectCode">Subject Code</Label>
                          <Input id="subjectCode" placeholder="e.g., PHY" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="subjectCategory">Subject Category</Label>
                        <Select defaultValue="science">
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="science">Science</SelectItem>
                            <SelectItem value="arts">Arts</SelectItem>
                            <SelectItem value="language">Language</SelectItem>
                            <SelectItem value="vocational">Vocational</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="applicableClasses">Applicable Classes</Label>
                        <Select defaultValue="all">
                          <SelectTrigger>
                            <SelectValue placeholder="Select classes" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Classes</SelectItem>
                            <SelectItem value="senior">Senior (9-12)</SelectItem>
                            <SelectItem value="middle">Middle (6-8)</SelectItem>
                            <SelectItem value="primary">Primary (1-5)</SelectItem>
                            <SelectItem value="preprimary">Pre-Primary</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Subject</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Subject Name</TableHead>
                      <TableHead>Code</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Teachers</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {subjects.map((subject, index) => {
                      // Find teachers for this subject
                      const subjectTeachers = teachers.filter(t => t.subject === subject.name);
                      
                      return (
                        <TableRow key={subject.id}>
                          <TableCell className="font-medium">
                            <Badge className={subject.color}>{subject.name}</Badge>
                          </TableCell>
                          <TableCell>{subject.code}</TableCell>
                          <TableCell>
                            {index < 3 ? "Science" : 
                             index < 5 ? "Language" : 
                             index < 7 ? "Extracurricular" : "Arts"}
                          </TableCell>
                          <TableCell>
                            <div className="flex -space-x-2">
                              {subjectTeachers.map((teacher, i) => (
                                <div 
                                  key={i} 
                                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium"
                                  title={teacher.name}
                                >
                                  {teacher.initials}
                                </div>
                              ))}
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit className="h-4 w-4" />
                              <span className="sr-only">Edit</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="teacherLoad">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <Select defaultValue="all">
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="arts">Arts</SelectItem>
                    <SelectItem value="language">Language</SelectItem>
                    <SelectItem value="vocational">Vocational</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="w-full md:w-auto md:ml-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Subject</TableHead>
                      <TableHead>Weekly Periods</TableHead>
                      <TableHead>Classes Taught</TableHead>
                      <TableHead>Workload</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => {
                      // Generate random data for demo
                      const weeklyPeriods = Math.floor(Math.random() * 10) + 20; // 20-30 periods
                      const classCount = Math.floor(Math.random() * 4) + 2; // 2-5 classes
                      
                      // Calculate workload percentage (assuming 30 is 100%)
                      const workloadPercentage = Math.round((weeklyPeriods / 30) * 100);
                      
                      return (
                        <TableRow key={teacher.id}>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs font-medium">
                                {teacher.initials}
                              </div>
                              <span className="font-medium">{teacher.name}</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <Badge className={
                              subjects.find(s => s.name === teacher.subject)?.color || "bg-gray-100 text-gray-800"
                            }>
                              {teacher.subject}
                            </Badge>
                          </TableCell>
                          <TableCell>{weeklyPeriods} periods</TableCell>
                          <TableCell>
                            <div className="flex flex-wrap gap-1">
                              {Array.from({ length: classCount }).map((_, i) => {
                                const randomClass = classes[Math.floor(Math.random() * classes.length)];
                                const randomSection = sections[Math.floor(Math.random() * sections.length)];
                                return (
                                  <Badge key={i} variant="outline">
                                    {randomClass}-{randomSection}
                                  </Badge>
                                );
                              })}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                                <div 
                                  className={`h-2.5 rounded-full ${
                                    workloadPercentage > 90 ? "bg-red-500" :
                                    workloadPercentage > 75 ? "bg-yellow-500" :
                                    "bg-green-500"
                                  }`} 
                                  style={{ width: `${workloadPercentage}%` }}
                                ></div>
                              </div>
                              <span className="text-xs">{workloadPercentage}%</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <GraduationCap className="h-4 w-4" />
                              <span className="sr-only">View Schedule</span>
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default TimetableManagement;
