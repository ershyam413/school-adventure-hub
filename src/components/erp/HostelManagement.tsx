
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, Plus, Download, Filter, BedDouble, UserPlus, Users, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const HostelManagement = () => {
  const [hostelFilter, setHostelFilter] = useState<string>("all");
  const [blockFilter, setBlockFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mock data for hostel rooms
  const hostelRooms = [
    { id: 1, hostelName: "Boys Hostel", block: "A", roomNumber: "A-101", capacity: 4, occupied: 3, type: "Standard", floor: 1 },
    { id: 2, hostelName: "Boys Hostel", block: "A", roomNumber: "A-102", capacity: 4, occupied: 4, type: "Standard", floor: 1 },
    { id: 3, hostelName: "Boys Hostel", block: "B", roomNumber: "B-201", capacity: 2, occupied: 2, type: "Premium", floor: 2 },
    { id: 4, hostelName: "Girls Hostel", block: "C", roomNumber: "C-101", capacity: 4, occupied: 2, type: "Standard", floor: 1 },
    { id: 5, hostelName: "Girls Hostel", block: "C", roomNumber: "C-102", capacity: 4, occupied: 3, type: "Standard", floor: 1 },
    { id: 6, hostelName: "Girls Hostel", block: "D", roomNumber: "D-201", capacity: 2, occupied: 1, type: "Premium", floor: 2 },
  ];

  // Mock data for hostel residents
  const hostelResidents = [
    { id: 1, studentName: "Aisha Patel", rollNo: "S001", class: "10", section: "A", hostelName: "Girls Hostel", block: "C", roomNumber: "C-101", joiningDate: "2023-04-10" },
    { id: 2, studentName: "Raj Singh", rollNo: "S002", class: "10", section: "A", hostelName: "Boys Hostel", block: "A", roomNumber: "A-101", joiningDate: "2023-04-12" },
    { id: 3, studentName: "Sneha Verma", rollNo: "S003", class: "10", section: "A", hostelName: "Girls Hostel", block: "C", roomNumber: "C-102", joiningDate: "2023-04-10" },
    { id: 4, studentName: "Ahmed Khan", rollNo: "S004", class: "10", section: "B", hostelName: "Boys Hostel", block: "A", roomNumber: "A-101", joiningDate: "2023-04-15" },
    { id: 5, studentName: "Priya Gupta", rollNo: "S005", class: "10", section: "B", hostelName: "Girls Hostel", block: "C", roomNumber: "C-102", joiningDate: "2023-04-18" },
    { id: 6, studentName: "Vikram Choudhary", rollNo: "S006", class: "9", section: "A", hostelName: "Boys Hostel", block: "A", roomNumber: "A-102", joiningDate: "2023-04-20" },
  ];

  // Filter rooms based on hostel, block and search query
  const filteredRooms = hostelRooms.filter(room => {
    if (hostelFilter !== "all" && room.hostelName !== hostelFilter) return false;
    if (blockFilter !== "all" && room.block !== blockFilter) return false;
    if (searchQuery && !room.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Filter residents based on hostel, block and search query
  const filteredResidents = hostelResidents.filter(resident => {
    if (hostelFilter !== "all" && resident.hostelName !== hostelFilter) return false;
    if (blockFilter !== "all" && resident.block !== blockFilter) return false;
    if (searchQuery && 
        !resident.studentName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !resident.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !resident.roomNumber.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Hostel Management</CardTitle>
          <CardDescription>Manage hostel rooms, residents, and facilities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="rooms">
            <TabsList className="mb-4">
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="residents">Residents</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="rooms">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by room number..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Select value={hostelFilter} onValueChange={setHostelFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Hostel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Hostels</SelectItem>
                    <SelectItem value="Boys Hostel">Boys Hostel</SelectItem>
                    <SelectItem value="Girls Hostel">Girls Hostel</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={blockFilter} onValueChange={setBlockFilter}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Block" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Blocks</SelectItem>
                    <SelectItem value="A">Block A</SelectItem>
                    <SelectItem value="B">Block B</SelectItem>
                    <SelectItem value="C">Block C</SelectItem>
                    <SelectItem value="D">Block D</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Room</DialogTitle>
                      <DialogDescription>Create a new hostel room.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="hostelName">Hostel</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hostel" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="boys">Boys Hostel</SelectItem>
                              <SelectItem value="girls">Girls Hostel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="block">Block</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select block" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="A">Block A</SelectItem>
                              <SelectItem value="B">Block B</SelectItem>
                              <SelectItem value="C">Block C</SelectItem>
                              <SelectItem value="D">Block D</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="roomNumber">Room Number</Label>
                          <Input id="roomNumber" placeholder="e.g., A-101" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="floor">Floor</Label>
                          <Input id="floor" type="number" min="1" placeholder="1" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="capacity">Capacity</Label>
                          <Input id="capacity" type="number" min="1" placeholder="4" />
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="type">Room Type</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="standard">Standard</SelectItem>
                              <SelectItem value="premium">Premium</SelectItem>
                              <SelectItem value="deluxe">Deluxe</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Room</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Room Number</TableHead>
                      <TableHead>Hostel</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Floor</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Capacity</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredRooms.map((room) => (
                      <TableRow key={room.id}>
                        <TableCell className="font-medium">{room.roomNumber}</TableCell>
                        <TableCell>{room.hostelName}</TableCell>
                        <TableCell>Block {room.block}</TableCell>
                        <TableCell>Floor {room.floor}</TableCell>
                        <TableCell>{room.type}</TableCell>
                        <TableCell>{room.occupied}/{room.capacity}</TableCell>
                        <TableCell>
                          <Badge 
                            className={
                              room.occupied === 0 ? "bg-green-100 text-green-800 hover:bg-green-100" : 
                              room.occupied < room.capacity ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100" : 
                              "bg-red-100 text-red-800 hover:bg-red-100"
                            }
                          >
                            {room.occupied === 0 ? "Empty" : 
                             room.occupied < room.capacity ? "Partially Filled" : 
                             "Full"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <BedDouble className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={room.occupied === room.capacity}>
                            <UserPlus className="h-4 w-4" />
                            <span className="sr-only">Assign</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="residents">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by name, roll number, or room..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <Select value={hostelFilter} onValueChange={setHostelFilter}>
                  <SelectTrigger className="w-full md:w-[180px]">
                    <SelectValue placeholder="Hostel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Hostels</SelectItem>
                    <SelectItem value="Boys Hostel">Boys Hostel</SelectItem>
                    <SelectItem value="Girls Hostel">Girls Hostel</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={blockFilter} onValueChange={setBlockFilter}>
                  <SelectTrigger className="w-full md:w-[150px]">
                    <SelectValue placeholder="Block" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Blocks</SelectItem>
                    <SelectItem value="A">Block A</SelectItem>
                    <SelectItem value="B">Block B</SelectItem>
                    <SelectItem value="C">Block C</SelectItem>
                    <SelectItem value="D">Block D</SelectItem>
                  </SelectContent>
                </Select>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Assign Room
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Assign Hostel Room</DialogTitle>
                      <DialogDescription>Assign a hostel room to a student.</DialogDescription>
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
                      <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                          <Label htmlFor="hostelName">Hostel</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select hostel" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="boys">Boys Hostel</SelectItem>
                              <SelectItem value="girls">Girls Hostel</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-2">
                          <Label htmlFor="block">Block</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select block" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="A">Block A</SelectItem>
                              <SelectItem value="B">Block B</SelectItem>
                              <SelectItem value="C">Block C</SelectItem>
                              <SelectItem value="D">Block D</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="room">Room</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select room" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="a101">A-101 (1 bed available)</SelectItem>
                            <SelectItem value="c101">C-101 (2 beds available)</SelectItem>
                            <SelectItem value="d201">D-201 (1 bed available)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="joiningDate">Joining Date</Label>
                        <Input id="joiningDate" type="date" />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Assign Room</Button>
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
                      <TableHead>Hostel</TableHead>
                      <TableHead>Block</TableHead>
                      <TableHead>Room</TableHead>
                      <TableHead>Joining Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredResidents.map((resident) => (
                      <TableRow key={resident.id}>
                        <TableCell className="font-medium">{resident.rollNo}</TableCell>
                        <TableCell>{resident.studentName}</TableCell>
                        <TableCell>{resident.class} - {resident.section}</TableCell>
                        <TableCell>{resident.hostelName}</TableCell>
                        <TableCell>Block {resident.block}</TableCell>
                        <TableCell>{resident.roomNumber}</TableCell>
                        <TableCell>{resident.joiningDate}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Users className="h-4 w-4" />
                            <span className="sr-only">View Roommates</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
            
            <TabsContent value="facilities">
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Mess Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Breakfast: 7:00 AM - 8:30 AM
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Lunch: 12:30 PM - 2:00 PM
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Dinner: 7:30 PM - 9:00 PM
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Separate vegetarian options available
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">View Mess Menu</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Laundry Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Collection days: Monday, Wednesday, Friday
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Delivery days: Tuesday, Thursday, Saturday
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Charges: ₹500/month (unlimited clothes)
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">View Schedule</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Recreation Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Common room with TV and games
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Indoor games: Table tennis, carrom, chess
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Outdoor courts for badminton and basketball
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Reading room with newspapers and magazines
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">Book Facility</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">WiFi & Internet</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        High-speed internet available 24/7
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Login credentials provided to each resident
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Daily data limit: 2GB per student
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">Check Usage</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Medical Facilities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        First aid available 24/7
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Doctor visit: Mon, Wed, Fri (6-8 PM)
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Ambulance service on call
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Tie-up with nearby hospital
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">Contact Medical Staff</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        24/7 security guards
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        CCTV surveillance in common areas
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Biometric entry system
                      </li>
                      <li className="flex items-center text-sm">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        Visitor registration mandatory
                      </li>
                    </ul>
                    <Button variant="outline" size="sm" className="mt-4 w-full">Report Issue</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="reports">
              <div className="space-y-6">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Total Capacity</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">450 beds</div>
                      <p className="text-xs text-gray-500">Across all hostels</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Current Occupancy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">375 students</div>
                      <p className="text-xs text-green-500">83% occupancy rate</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Available Beds</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">75 beds</div>
                      <p className="text-xs text-gray-500">Available for new allocations</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Occupancy Trends</CardTitle>
                    <CardDescription>Hostel occupancy over the academic year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] w-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Chart visualization will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Hostel Occupancy Breakdown</CardTitle>
                    <CardDescription>Distribution by hostel and block</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Hostel</TableHead>
                            <TableHead>Block</TableHead>
                            <TableHead>Total Capacity</TableHead>
                            <TableHead>Occupied</TableHead>
                            <TableHead>Available</TableHead>
                            <TableHead>Occupancy Rate</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell rowSpan={2}>Boys Hostel</TableCell>
                            <TableCell>Block A</TableCell>
                            <TableCell>120</TableCell>
                            <TableCell>110</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>92%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Block B</TableCell>
                            <TableCell>100</TableCell>
                            <TableCell>85</TableCell>
                            <TableCell>15</TableCell>
                            <TableCell>85%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell rowSpan={2}>Girls Hostel</TableCell>
                            <TableCell>Block C</TableCell>
                            <TableCell>120</TableCell>
                            <TableCell>98</TableCell>
                            <TableCell>22</TableCell>
                            <TableCell>82%</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Block D</TableCell>
                            <TableCell>110</TableCell>
                            <TableCell>82</TableCell>
                            <TableCell>28</TableCell>
                            <TableCell>75%</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
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

export default HostelManagement;
