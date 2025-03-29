
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, Plus, Download, Filter, Bus, Route, MapPin, User, AlertCircle } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const TransportManagement = () => {
  const [routeFilter, setRouteFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mock data for transport routes
  const transportRoutes = [
    { id: 1, routeNumber: "R001", routeName: "North Route", startPoint: "School", endPoint: "North Terminal", distance: 12, stops: 8, busAssigned: "B001", departureTime: "7:15 AM", arrivalTime: "8:30 AM" },
    { id: 2, routeNumber: "R002", routeName: "South Route", startPoint: "School", endPoint: "South Mall", distance: 10, stops: 6, busAssigned: "B002", departureTime: "7:20 AM", arrivalTime: "8:25 AM" },
    { id: 3, routeNumber: "R003", routeName: "East Route", startPoint: "School", endPoint: "East Market", distance: 8, stops: 5, busAssigned: "B003", departureTime: "7:30 AM", arrivalTime: "8:20 AM" },
    { id: 4, routeNumber: "R004", routeName: "West Route", startPoint: "School", endPoint: "West Plaza", distance: 15, stops: 9, busAssigned: "B004", departureTime: "7:00 AM", arrivalTime: "8:25 AM" },
    { id: 5, routeNumber: "R005", routeName: "Central Route", startPoint: "School", endPoint: "City Center", distance: 6, stops: 4, busAssigned: "B005", departureTime: "7:45 AM", arrivalTime: "8:15 AM" },
  ];

  // Mock data for buses
  const buses = [
    { id: 1, busNumber: "B001", capacity: 45, driver: "Rajesh Kumar", contact: "9876543210", routeAssigned: "North Route", status: "active", lastServiced: "2023-09-15" },
    { id: 2, busNumber: "B002", capacity: 40, driver: "Sunil Sharma", contact: "9876543211", routeAssigned: "South Route", status: "active", lastServiced: "2023-09-20" },
    { id: 3, busNumber: "B003", capacity: 40, driver: "Mahesh Singh", contact: "9876543212", routeAssigned: "East Route", status: "active", lastServiced: "2023-09-10" },
    { id: 4, busNumber: "B004", capacity: 45, driver: "Dinesh Patel", contact: "9876543213", routeAssigned: "West Route", status: "maintenance", lastServiced: "2023-10-15" },
    { id: 5, busNumber: "B005", capacity: 35, driver: "Ramesh Joshi", contact: "9876543214", routeAssigned: "Central Route", status: "active", lastServiced: "2023-08-28" },
  ];

  // Mock data for students using transport
  const transportStudents = [
    { id: 1, studentName: "Aisha Patel", rollNo: "S001", class: "10", section: "A", routeAssigned: "North Route", stopName: "Garden Apartments", pickupTime: "7:35 AM", dropTime: "3:15 PM", fee: 5000 },
    { id: 2, studentName: "Raj Singh", rollNo: "S002", class: "10", section: "A", routeAssigned: "South Route", stopName: "River View Colony", pickupTime: "7:50 AM", dropTime: "3:25 PM", fee: 5000 },
    { id: 3, studentName: "Sneha Verma", rollNo: "S003", class: "10", section: "A", routeAssigned: "East Route", stopName: "Sunrise Apartments", pickupTime: "8:05 AM", dropTime: "3:40 PM", fee: 5000 },
    { id: 4, studentName: "Ahmed Khan", rollNo: "S004", class: "10", section: "B", routeAssigned: "North Route", stopName: "Hill View Society", pickupTime: "7:30 AM", dropTime: "3:15 PM", fee: 5000 },
    { id: 5, studentName: "Priya Gupta", rollNo: "S005", class: "10", section: "B", routeAssigned: "Central Route", stopName: "City Center", pickupTime: "8:10 AM", dropTime: "3:35 PM", fee: 4500 },
    { id: 6, studentName: "Vikram Choudhary", rollNo: "S006", class: "9", section: "A", routeAssigned: "West Route", stopName: "Green Park", pickupTime: "7:15 AM", dropTime: "3:05 PM", fee: 5000 },
  ];

  // Filter routes based on search
  const filteredRoutes = transportRoutes.filter(route => {
    if (searchQuery && 
        !route.routeName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !route.routeNumber.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Filter buses based on route and search
  const filteredBuses = buses.filter(bus => {
    if (routeFilter !== "all" && bus.routeAssigned !== routeFilter) return false;
    if (searchQuery && 
        !bus.busNumber.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !bus.driver.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Filter students based on route and search
  const filteredStudents = transportStudents.filter(student => {
    if (routeFilter !== "all" && student.routeAssigned !== routeFilter) return false;
    if (searchQuery && 
        !student.studentName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !student.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !student.stopName.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Transportation Management</CardTitle>
          <CardDescription>Manage routes, buses, and student transportation</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="routes">
            <TabsList className="mb-4">
              <TabsTrigger value="routes">Routes</TabsTrigger>
              <TabsTrigger value="buses">Buses</TabsTrigger>
              <TabsTrigger value="students">Students</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="routes">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by route name or number..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Route
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Route</DialogTitle>
                      <DialogDescription>Create a new bus route.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="routeNumber">Route Number</Label>
                          <Input id="routeNumber" placeholder="e.g., R006" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="routeName">Route Name</Label>
                          <Input id="routeName" placeholder="e.g., Northwest Route" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="startPoint">Start Point</Label>
                          <Input id="startPoint" placeholder="e.g., School" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="endPoint">End Point</Label>
                          <Input id="endPoint" placeholder="e.g., Northwest Terminal" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="distance">Distance (km)</Label>
                          <Input id="distance" type="number" min="1" placeholder="12" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="stops">Number of Stops</Label>
                          <Input id="stops" type="number" min="1" placeholder="8" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="departureTime">Departure Time</Label>
                          <Input id="departureTime" placeholder="e.g., 7:15 AM" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="arrivalTime">Arrival Time</Label>
                          <Input id="arrivalTime" placeholder="e.g., 8:30 AM" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="assignBus">Assign Bus</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bus" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="b006">B006 (Available)</SelectItem>
                            <SelectItem value="b007">B007 (Available)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Route</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full md:w-auto md:ml-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Route #</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Start - End</TableHead>
                      <TableHead>Distance</TableHead>
                      <TableHead>Stops</TableHead>
                      <TableHead>Bus Assigned</TableHead>
                      <TableHead>Timings</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRoutes.map((route) => (
                      <TableRow key={route.id}>
                        <TableCell className="font-medium">{route.routeNumber}</TableCell>
                        <TableCell>{route.routeName}</TableCell>
                        <TableCell>{route.startPoint} - {route.endPoint}</TableCell>
                        <TableCell>{route.distance} km</TableCell>
                        <TableCell>{route.stops} stops</TableCell>
                        <TableCell>{route.busAssigned}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="text-xs">D: {route.departureTime}</span>
                            <span className="text-xs">A: {route.arrivalTime}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Route className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MapPin className="h-4 w-4" />
                            <span className="sr-only">Stops</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="buses">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by bus number or driver name..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Select value={routeFilter} onValueChange={setRouteFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Routes</SelectItem>
                    <SelectItem value="North Route">North Route</SelectItem>
                    <SelectItem value="South Route">South Route</SelectItem>
                    <SelectItem value="East Route">East Route</SelectItem>
                    <SelectItem value="West Route">West Route</SelectItem>
                    <SelectItem value="Central Route">Central Route</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Bus
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Bus</DialogTitle>
                      <DialogDescription>Register a new bus to the fleet.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="busNumber">Bus Number</Label>
                          <Input id="busNumber" placeholder="e.g., B006" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="capacity">Capacity</Label>
                          <Input id="capacity" type="number" min="1" placeholder="45" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="driver">Driver Name</Label>
                          <Input id="driver" placeholder="e.g., Ajay Verma" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="contact">Contact Number</Label>
                          <Input id="contact" placeholder="e.g., 9876543215" />
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="assignRoute">Assign Route</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select route" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north">North Route</SelectItem>
                            <SelectItem value="south">South Route</SelectItem>
                            <SelectItem value="east">East Route</SelectItem>
                            <SelectItem value="west">West Route</SelectItem>
                            <SelectItem value="central">Central Route</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="lastServiced">Last Serviced Date</Label>
                        <Input id="lastServiced" type="date" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Bus</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Bus #</TableHead>
                      <TableHead>Capacity</TableHead>
                      <TableHead>Driver</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Route Assigned</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Serviced</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredBuses.map((bus) => (
                      <TableRow key={bus.id}>
                        <TableCell className="font-medium">{bus.busNumber}</TableCell>
                        <TableCell>{bus.capacity} seats</TableCell>
                        <TableCell>{bus.driver}</TableCell>
                        <TableCell>{bus.contact}</TableCell>
                        <TableCell>{bus.routeAssigned}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              bus.status === 'active' ? "bg-green-100 text-green-800 hover:bg-green-100" : 
                              "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {bus.status === 'active' ? "Active" : "Maintenance"}
                          </Badge>
                        </TableCell>
                        <TableCell>{bus.lastServiced}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Bus className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <AlertCircle className="h-4 w-4" />
                            <span className="sr-only">Issue</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="students">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by name, roll number, or stop..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Select value={routeFilter} onValueChange={setRouteFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Route" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Routes</SelectItem>
                    <SelectItem value="North Route">North Route</SelectItem>
                    <SelectItem value="South Route">South Route</SelectItem>
                    <SelectItem value="East Route">East Route</SelectItem>
                    <SelectItem value="West Route">West Route</SelectItem>
                    <SelectItem value="Central Route">Central Route</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Assign Transport
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Assign Transportation</DialogTitle>
                      <DialogDescription>Assign transportation facility to a student.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="student">Student</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select student" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="s001">Aisha Patel (S001)</SelectItem>
                            <SelectItem value="s002">Raj Singh (S002)</SelectItem>
                            <SelectItem value="s003">Sneha Verma (S003)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="route">Route</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select route" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="north">North Route</SelectItem>
                            <SelectItem value="south">South Route</SelectItem>
                            <SelectItem value="east">East Route</SelectItem>
                            <SelectItem value="west">West Route</SelectItem>
                            <SelectItem value="central">Central Route</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="stop">Bus Stop</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select stop" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stop1">Garden Apartments</SelectItem>
                            <SelectItem value="stop2">Hill View Society</SelectItem>
                            <SelectItem value="stop3">Lake View Colony</SelectItem>
                            <SelectItem value="stop4">Park Street</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="fee">Monthly Fee (₹)</Label>
                          <Input id="fee" type="number" placeholder="5000" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input id="startDate" type="date" />
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Assign Transport</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Roll No</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Route</TableHead>
                      <TableHead>Stop Name</TableHead>
                      <TableHead>Pickup Time</TableHead>
                      <TableHead>Drop Time</TableHead>
                      <TableHead>Fee (₹/month)</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">{student.rollNo}</TableCell>
                        <TableCell>{student.studentName}</TableCell>
                        <TableCell>{student.class} - {student.section}</TableCell>
                        <TableCell>{student.routeAssigned}</TableCell>
                        <TableCell>{student.stopName}</TableCell>
                        <TableCell>{student.pickupTime}</TableCell>
                        <TableCell>{student.dropTime}</TableCell>
                        <TableCell>{student.fee}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <User className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MapPin className="h-4 w-4" />
                            <span className="sr-only">Track</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <div className="space-y-6">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Total Routes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5 routes</div>
                      <p className="text-xs text-gray-500">Covering all city areas</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Total Buses</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">5 buses</div>
                      <p className="text-xs text-gray-500">4 active, 1 in maintenance</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Students Enrolled</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">245 students</div>
                      <p className="text-xs text-green-500">19.6% of total students</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Transport Fee Collection</CardTitle>
                    <CardDescription>Fee collection from transportation service over the year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] w-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Chart visualization will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Route Analysis</CardTitle>
                    <CardDescription>Distribution of students by route</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="h-[200px] w-full flex items-center justify-center">
                        <p className="text-gray-500 text-sm">Pie chart visualization will be displayed here</p>
                      </div>
                      <div>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                              <span>North Route</span>
                            </div>
                            <span className="font-medium">64 students (26%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                              <span>South Route</span>
                            </div>
                            <span className="font-medium">58 students (24%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                              <span>East Route</span>
                            </div>
                            <span className="font-medium">42 students (17%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                              <span>West Route</span>
                            </div>
                            <span className="font-medium">52 students (21%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                              <span>Central Route</span>
                            </div>
                            <span className="font-medium">29 students (12%)</span>
                          </div>
                        </div>
                      </div>
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

export default TransportManagement;
