// AdminLayout.jsx (create this in src/components/)
import { Outlet } from 'react-router-dom';
import AdminNavbar from './AdminNavbar'; // Optional: separate navbar for admin

const AdminLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Optional: Admin-specific navbar */}
      {/* <AdminNavbar /> */}
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;