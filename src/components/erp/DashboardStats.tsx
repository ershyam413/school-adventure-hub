
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, UserCheck, CreditCard, Building, Bus } from "lucide-react";

const DashboardStats = () => {
  // Mock data for demonstration
  const stats = [
    { 
      title: "Total Students", 
      value: "1,248", 
      icon: <Users className="h-8 w-8 text-blue-500" />,
      change: "+12%",
      changeType: "positive"
    },
    { 
      title: "Total Teachers", 
      value: "64", 
      icon: <GraduationCap className="h-8 w-8 text-indigo-500" />,
      change: "+4",
      changeType: "positive"
    },
    { 
      title: "Attendance Today", 
      value: "92%", 
      icon: <UserCheck className="h-8 w-8 text-green-500" />,
      change: "-2%",
      changeType: "negative"
    },
    { 
      title: "Fees Collected", 
      value: "₹42.5L", 
      icon: <CreditCard className="h-8 w-8 text-yellow-500" />,
      change: "+18%",
      changeType: "positive"
    },
    { 
      title: "Hostel Occupancy", 
      value: "87%", 
      icon: <Building className="h-8 w-8 text-orange-500" />,
      change: "+5%",
      changeType: "positive"
    },
    { 
      title: "Transportation", 
      value: "18 Routes", 
      icon: <Bus className="h-8 w-8 text-red-500" />,
      change: "+2",
      changeType: "positive"
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change} from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b pb-2">
                <span>Fee collected from Class 9 students</span>
                <span className="text-sm text-gray-500">2 hours ago</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>Bus #5 maintenance completed</span>
                <span className="text-sm text-gray-500">5 hours ago</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>New timetable published for Class 7</span>
                <span className="text-sm text-gray-500">Yesterday</span>
              </li>
              <li className="flex justify-between items-center">
                <span>Teacher's meeting scheduled for Friday</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b pb-2">
                <span>Annual Sports Day</span>
                <span className="text-sm text-gray-500">Nov 15, 2023</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>Parent-Teacher Meeting</span>
                <span className="text-sm text-gray-500">Nov 20, 2023</span>
              </li>
              <li className="flex justify-between items-center border-b pb-2">
                <span>Winter Break Begins</span>
                <span className="text-sm text-gray-500">Dec 22, 2023</span>
              </li>
              <li className="flex justify-between items-center">
                <span>School Reopens</span>
                <span className="text-sm text-gray-500">Jan 5, 2024</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
