
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, CreditCard, Users, Building, Bus, BookOpen, BarChart4 } from "lucide-react";
import AttendanceManagement from "@/components/erp/AttendanceManagement";
import FeesManagement from "@/components/erp/FeesManagement";
import HostelManagement from "@/components/erp/HostelManagement";
import TransportManagement from "@/components/erp/TransportManagement";
import TimetableManagement from "@/components/erp/TimetableManagement";
import DashboardStats from "@/components/erp/DashboardStats";

const ERPPortalPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-school-primary text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
                School Management Portal
              </h1>
              <p className="text-lg opacity-90">
                Comprehensive solution for managing attendance, fees, scheduling, and resources
              </p>
            </div>
          </div>
        </section>
        
        {/* ERP Dashboard */}
        <section className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="dashboard" onValueChange={setActiveTab} className="w-full">
              <div className="bg-white rounded-lg shadow-sm p-2 mb-6 overflow-x-auto">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2">
                  <TabsTrigger value="dashboard" className="flex items-center gap-2">
                    <BarChart4 className="h-4 w-4" /> 
                    <span className="hidden md:inline">Dashboard</span>
                  </TabsTrigger>
                  <TabsTrigger value="attendance" className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" /> 
                    <span className="hidden md:inline">Attendance</span>
                  </TabsTrigger>
                  <TabsTrigger value="fees" className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4" /> 
                    <span className="hidden md:inline">Fees</span>
                  </TabsTrigger>
                  <TabsTrigger value="hostel" className="flex items-center gap-2">
                    <Building className="h-4 w-4" /> 
                    <span className="hidden md:inline">Hostel</span>
                  </TabsTrigger>
                  <TabsTrigger value="transport" className="flex items-center gap-2">
                    <Bus className="h-4 w-4" /> 
                    <span className="hidden md:inline">Transport</span>
                  </TabsTrigger>
                  <TabsTrigger value="timetable" className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> 
                    <span className="hidden md:inline">Timetable</span>
                  </TabsTrigger>
                  <TabsTrigger value="subjects" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" /> 
                    <span className="hidden md:inline">Subjects</span>
                  </TabsTrigger>
                </TabsList>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
                <TabsContent value="dashboard">
                  <DashboardStats />
                </TabsContent>
                
                <TabsContent value="attendance">
                  <AttendanceManagement />
                </TabsContent>
                
                <TabsContent value="fees">
                  <FeesManagement />
                </TabsContent>
                
                <TabsContent value="hostel">
                  <HostelManagement />
                </TabsContent>
                
                <TabsContent value="transport">
                  <TransportManagement />
                </TabsContent>
                
                <TabsContent value="timetable">
                  <TimetableManagement />
                </TabsContent>
                
                <TabsContent value="subjects">
                  <Card>
                    <CardHeader>
                      <CardTitle>Subject Management</CardTitle>
                      <CardDescription>Assign and manage subjects for different classes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>Subject management module will be implemented here</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ERPPortalPage;
