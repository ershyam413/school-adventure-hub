
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SearchIcon, Plus, Download, Filter, CreditCard, Check, X, ArrowUpDown } from "lucide-react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const FeesManagement = () => {
  const [selectedClass, setSelectedClass] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Mock data for fee transactions
  const feeTransactions = [
    { id: 1, studentName: "Aisha Patel", rollNo: "S001", class: "10", section: "A", feeType: "Tuition", amount: 15000, status: "paid", date: "2023-10-15" },
    { id: 2, studentName: "Raj Singh", rollNo: "S002", class: "10", section: "A", feeType: "Transportation", amount: 5000, status: "paid", date: "2023-10-14" },
    { id: 3, studentName: "Sneha Verma", rollNo: "S003", class: "10", section: "A", feeType: "Hostel", amount: 25000, status: "pending", date: "" },
    { id: 4, studentName: "Ahmed Khan", rollNo: "S004", class: "10", section: "B", feeType: "Tuition", amount: 15000, status: "paid", date: "2023-10-10" },
    { id: 5, studentName: "Priya Gupta", rollNo: "S005", class: "10", section: "B", feeType: "Tuition", amount: 15000, status: "overdue", date: "" },
    { id: 6, studentName: "Vikram Choudhary", rollNo: "S006", class: "9", section: "A", feeType: "Transportation", amount: 5000, status: "paid", date: "2023-10-05" },
  ];

  // Mock data for fee structures
  const feeStructures = [
    { id: 1, class: "10", feeType: "Tuition", amount: 15000, frequency: "Quarterly" },
    { id: 2, class: "10", feeType: "Transportation", amount: 5000, frequency: "Monthly" },
    { id: 3, class: "10", feeType: "Hostel", amount: 25000, frequency: "Quarterly" },
    { id: 4, class: "9", feeType: "Tuition", amount: 14000, frequency: "Quarterly" },
    { id: 5, class: "9", feeType: "Transportation", amount: 5000, frequency: "Monthly" },
    { id: 6, class: "9", feeType: "Hostel", amount: 23000, frequency: "Quarterly" },
  ];

  // Filter transactions based on class and search query
  const filteredTransactions = feeTransactions.filter(transaction => {
    if (selectedClass !== "all" && transaction.class !== selectedClass) return false;
    if (searchQuery && !transaction.studentName.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !transaction.rollNo.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  // Filter fee structures based on class
  const filteredFeeStructures = feeStructures.filter(structure => {
    if (selectedClass !== "all" && structure.class !== selectedClass) return false;
    return true;
  });

  return (
    <div>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Fee Management</CardTitle>
          <CardDescription>Manage student fees, payments, and fee structures</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="payments">
            <TabsList className="mb-4">
              <TabsTrigger value="payments">Fee Payments</TabsTrigger>
              <TabsTrigger value="structure">Fee Structure</TabsTrigger>
              <TabsTrigger value="reports">Reports</TabsTrigger>
            </TabsList>
            
            <TabsContent value="payments">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
                <div className="relative w-full md:w-auto flex-1">
                  <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                  <Input 
                    placeholder="Search by name or roll number..." 
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      New Payment
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Record New Payment</DialogTitle>
                      <DialogDescription>Enter payment details for a student.</DialogDescription>
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
                        <Label htmlFor="feeType">Fee Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select fee type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tuition">Tuition Fee</SelectItem>
                            <SelectItem value="transport">Transportation Fee</SelectItem>
                            <SelectItem value="hostel">Hostel Fee</SelectItem>
                            <SelectItem value="exam">Examination Fee</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="amount">Amount (₹)</Label>
                        <Input id="amount" type="number" placeholder="0.00" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="paymentDate">Payment Date</Label>
                        <Input id="paymentDate" type="date" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="paymentMethod">Payment Method</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select payment method" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cash">Cash</SelectItem>
                            <SelectItem value="card">Credit/Debit Card</SelectItem>
                            <SelectItem value="upi">UPI</SelectItem>
                            <SelectItem value="netbanking">Net Banking</SelectItem>
                            <SelectItem value="cheque">Cheque</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Record Payment</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="w-full md:w-auto md:ml-auto">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" className="w-full md:w-auto">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Roll No</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Class</TableHead>
                      <TableHead>Fee Type</TableHead>
                      <TableHead className="text-right">Amount (₹)</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.rollNo}</TableCell>
                        <TableCell>{transaction.studentName}</TableCell>
                        <TableCell>{transaction.class} - {transaction.section}</TableCell>
                        <TableCell>{transaction.feeType}</TableCell>
                        <TableCell className="text-right">{transaction.amount.toLocaleString()}</TableCell>
                        <TableCell>
                          <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                            ${transaction.status === 'paid' ? 'bg-green-100 text-green-800' : 
                              transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-red-100 text-red-800'}`}>
                            {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                          </div>
                        </TableCell>
                        <TableCell>{transaction.date || "-"}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0" disabled={transaction.status === 'paid'}>
                            <CreditCard className="h-4 w-4" />
                            <span className="sr-only">Pay</span>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="structure">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center mb-6">
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

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full md:w-auto">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Fee Type
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Add New Fee Type</DialogTitle>
                      <DialogDescription>Define a new fee structure for students.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <Label htmlFor="className">Class</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select class" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10">Class 10</SelectItem>
                            <SelectItem value="9">Class 9</SelectItem>
                            <SelectItem value="8">Class 8</SelectItem>
                            <SelectItem value="7">Class 7</SelectItem>
                            <SelectItem value="6">Class 6</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="feeType">Fee Type</Label>
                        <Input id="feeType" placeholder="e.g., Tuition Fee, Lab Fee" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="amount">Amount (₹)</Label>
                        <Input id="amount" type="number" placeholder="0.00" />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="frequency">Frequency</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="quarterly">Quarterly</SelectItem>
                            <SelectItem value="halfyearly">Half-Yearly</SelectItem>
                            <SelectItem value="annual">Annual</SelectItem>
                            <SelectItem value="onetime">One Time</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Fee Type</Button>
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
                      <TableHead>Class</TableHead>
                      <TableHead>Fee Type</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead className="text-right">Amount (₹)</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredFeeStructures.map((structure) => (
                      <TableRow key={structure.id}>
                        <TableCell>Class {structure.class}</TableCell>
                        <TableCell>{structure.feeType}</TableCell>
                        <TableCell>{structure.frequency}</TableCell>
                        <TableCell className="text-right">{structure.amount.toLocaleString()}</TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
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
                      <CardTitle className="text-md">Total Collected</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹47,50,000</div>
                      <p className="text-xs text-green-500">92% of expected</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Pending Amount</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">₹4,25,000</div>
                      <p className="text-xs text-yellow-500">8% of expected</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-md">Defaulters</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">47 students</div>
                      <p className="text-xs text-red-500">3.8% of total students</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Collection Trends</CardTitle>
                    <CardDescription>Fee collection over the current academic year</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] w-full flex items-center justify-center">
                      <p className="text-gray-500 text-sm">Chart visualization will be displayed here</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Fee Collection Breakdown</CardTitle>
                    <CardDescription>Distribution by fee type</CardDescription>
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
                              <span>Tuition Fee</span>
                            </div>
                            <span className="font-medium">₹32,40,000 (68%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                              <span>Transportation Fee</span>
                            </div>
                            <span className="font-medium">₹8,50,000 (18%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                              <span>Hostel Fee</span>
                            </div>
                            <span className="font-medium">₹5,20,000 (11%)</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                              <span>Other Fees</span>
                            </div>
                            <span className="font-medium">₹1,40,000 (3%)</span>
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

export default FeesManagement;
