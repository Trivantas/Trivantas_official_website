import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, LogOut, RefreshCw, Calendar, User, Mail, Phone, Box, FileText, CheckCircle2, Key, Lock } from 'lucide-react';

interface Query {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  productId: string;
  productName: string;
  message: string;
  status: 'New' | 'Contacted' | 'Resolved';
  createdAt: string;
  updatedAt: string;
}

export default function AdminDashboard() {
  const [queries, setQueries] = useState<Query[]>([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedQuery, setSelectedQuery] = useState<Query | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const navigate = useNavigate();

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [pwdError, setPwdError] = useState('');
  const [pwdSuccess, setPwdSuccess] = useState('');
  const [pwdLoading, setPwdLoading] = useState(false);

  const handlePasswordChangeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentPassword || !newPassword || !confirmPassword) {
      setPwdError('All fields are required.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwdError('New passwords do not match.');
      return;
    }
    if (newPassword.length < 6) {
      setPwdError('New password must be at least 6 characters long.');
      return;
    }

    setPwdError('');
    setPwdSuccess('');
    setPwdLoading(true);

    const token = localStorage.getItem('admin_token');
    try {
      const response = await fetch(`${apiBaseUrl}/auth/change-password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setPwdSuccess('Password updated successfully!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        setTimeout(() => {
          setShowPasswordModal(false);
          setPwdSuccess('');
        }, 1500);
      } else {
        setPwdError(data.message || 'Failed to update password.');
      }
    } catch (error) {
      console.error('Password change error:', error);
      setPwdError('Server connection error.');
    } finally {
      setPwdLoading(false);
    }
  };

  const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

  const fetchQueries = async () => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${apiBaseUrl}/queries`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        return;
      }

      const data = await response.json();
      if (response.ok && data.success) {
        setQueries(data.queries);
      } else {
        setErrorMsg(data.message || 'Failed to fetch queries.');
      }
    } catch (error) {
      console.error('Fetch queries error:', error);
      setErrorMsg('Unable to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQueries();
  }, [navigate]);

  const handleStatusChange = async (queryId: string, newStatus: string) => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      navigate('/admin/login');
      return;
    }

    setUpdateLoading(true);

    try {
      const response = await fetch(`${apiBaseUrl}/queries/${queryId}/status`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.status === 401) {
        localStorage.removeItem('admin_token');
        navigate('/admin/login');
        return;
      }

      const data = await response.json();
      if (response.ok && data.success) {
        // Update queries local state
        const updated = queries.map((q) => (q._id === queryId ? data.query : q));
        setQueries(updated);
        // Update selected query detail
        if (selectedQuery && selectedQuery._id === queryId) {
          setSelectedQuery(data.query);
        }
      } else {
        alert(data.message || 'Failed to update status.');
      }
    } catch (error) {
      console.error('Update status error:', error);
      alert('Error updating status.');
    } finally {
      setUpdateLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/admin/login');
  };

  // Compute status statistics
  const stats = {
    total: queries.length,
    new: queries.filter((q) => q.status === 'New').length,
    contacted: queries.filter((q) => q.status === 'Contacted').length,
    resolved: queries.filter((q) => q.status === 'Resolved').length,
  };

  // Filter queries locally by search and status filter
  const filteredQueries = queries.filter((q) => {
    const matchStatus = statusFilter === 'All' || q.status === statusFilter;
    const nameVal = q.name || '';
    const emailVal = q.email || '';
    const phoneVal = q.phone || '';
    const productVal = q.productName || '';
    const matchSearch =
      nameVal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emailVal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      phoneVal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      productVal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'New':
        return <Badge className="bg-blue-500 hover:bg-blue-600 text-white font-semibold">New</Badge>;
      case 'Contacted':
        return <Badge className="bg-amber-500 hover:bg-amber-600 text-white font-semibold">Contacted</Badge>;
      case 'Resolved':
        return <Badge className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-muted/20 font-sans pb-12 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-border pb-5 gap-4">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">Admin Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage and respond to customer queries received through the website chatbot.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={fetchQueries} className="h-10">
              <RefreshCw className="w-4 h-4 mr-2" /> Refresh
            </Button>
            <Button variant="outline" size="sm" onClick={() => setShowPasswordModal(true)} className="h-10 border-border">
              <Key className="w-4 h-4 mr-2 text-primary" /> Change Password
            </Button>
            <Button variant="destructive" size="sm" onClick={handleLogout} className="h-10">
              <LogOut className="w-4 h-4 mr-2" /> Logout
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-border shadow-sm">
            <CardContent className="p-5">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Queries</p>
              <h3 className="text-3xl font-extrabold text-foreground mt-1">{stats.total}</h3>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="p-5 border-l-4 border-l-blue-500 rounded-l-none">
              <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">New</p>
              <h3 className="text-3xl font-extrabold text-foreground mt-1">{stats.new}</h3>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="p-5 border-l-4 border-l-amber-500 rounded-l-none">
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Contacted</p>
              <h3 className="text-3xl font-extrabold text-foreground mt-1">{stats.contacted}</h3>
            </CardContent>
          </Card>
          <Card className="border-border shadow-sm">
            <CardContent className="p-5 border-l-4 border-l-emerald-600 rounded-l-none">
              <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Resolved</p>
              <h3 className="text-3xl font-extrabold text-foreground mt-1">{stats.resolved}</h3>
            </CardContent>
          </Card>
        </div>

        {/* Main Work Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Query List Panel (Left/Center) */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="border-border shadow-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold">Customer Enquiries</CardTitle>
                <CardDescription>Search and filter customer submissions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                
                {/* Search & Filter Controls */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search name, email, product..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 h-10 border-border bg-background"
                    />
                  </div>
                  <div className="flex gap-2">
                    {['All', 'New', 'Contacted', 'Resolved'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setStatusFilter(filter)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                          statusFilter === filter
                            ? 'bg-primary text-white border-primary'
                            : 'bg-background hover:bg-accent border-border text-foreground'
                        }`}
                      >
                        {filter}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Table */}
                {loading ? (
                  <div className="flex items-center justify-center py-12">
                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : errorMsg ? (
                  <div className="text-center py-12 text-destructive font-semibold">{errorMsg}</div>
                ) : filteredQueries.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">No queries match filters.</div>
                ) : (
                  <div className="overflow-x-auto border border-border rounded-xl">
                    <table className="w-full text-left text-sm border-collapse">
                      <thead>
                        <tr className="bg-muted/40 border-b border-border text-xs font-bold text-muted-foreground uppercase">
                          <th className="p-4">Customer</th>
                          <th className="p-4">Product</th>
                          <th className="p-4">Status</th>
                          <th className="p-4 text-right">Date</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {filteredQueries.map((q) => (
                          <tr
                            key={q._id}
                            onClick={() => setSelectedQuery(q)}
                            className={`hover:bg-accent/40 cursor-pointer transition-colors ${
                              selectedQuery?._id === q._id ? 'bg-primary/5 hover:bg-primary/5' : ''
                            }`}
                          >
                            <td className="p-4">
                              <div className="font-bold text-foreground">{q.name}</div>
                              <div className="text-xs text-muted-foreground">{q.email}</div>
                            </td>
                            <td className="p-4 max-w-[150px] truncate">
                              <span className="font-semibold">{q.productName}</span>
                            </td>
                            <td className="p-4">{getStatusBadge(q.status)}</td>
                            <td className="p-4 text-right text-xs text-muted-foreground font-medium">
                              {new Date(q.createdAt).toLocaleDateString(undefined, {
                                month: 'short',
                                day: 'numeric',
                              })}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Query Details Panel (Right) */}
          <div className="lg:col-span-1">
            <AnimatePresence mode="wait">
              {selectedQuery ? (
                <motion.div
                  key={selectedQuery._id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-border shadow-md sticky top-24 overflow-hidden">
                    <CardHeader className="bg-muted/30 border-b border-border p-5">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-bold flex items-center gap-2">
                          <FileText className="w-5 h-5 text-primary" /> Query Details
                        </CardTitle>
                        {getStatusBadge(selectedQuery.status)}
                      </div>
                      <CardDescription className="mt-1">
                        Received on {new Date(selectedQuery.createdAt).toLocaleDateString(undefined, {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-5 space-y-5">
                      
                      {/* Name */}
                      <div className="flex items-start gap-3">
                        <User className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Name</p>
                          <p className="text-sm font-semibold text-foreground mt-0.5">{selectedQuery.name}</p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Email</p>
                          <a
                            href={`mailto:${selectedQuery.email}`}
                            className="text-sm font-semibold text-primary hover:underline mt-0.5 block"
                          >
                            {selectedQuery.email}
                          </a>
                        </div>
                      </div>

                      {/* Phone */}
                      {selectedQuery.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                          <div>
                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Mobile Number</p>
                            <a
                              href={`tel:${selectedQuery.phone}`}
                              className="text-sm font-semibold text-primary hover:underline mt-0.5 block"
                            >
                              {selectedQuery.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      {/* Product */}
                      <div className="flex items-start gap-3">
                        <Box className="w-4 h-4 text-muted-foreground mt-1 shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Product</p>
                          <p className="text-sm font-semibold text-foreground mt-0.5">
                            {selectedQuery.productName} <span className="text-xs text-muted-foreground">({selectedQuery.productId})</span>
                          </p>
                        </div>
                      </div>

                      {/* Query Message */}
                      <div className="border-t border-border pt-4">
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide mb-1.5">Query Message</p>
                        <div className="bg-muted/40 border border-border p-3.5 rounded-xl text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                          {selectedQuery.message}
                        </div>
                      </div>

                      {/* Status Update Controls */}
                      <div className="border-t border-border pt-4 space-y-2">
                        <p className="text-xs text-muted-foreground font-bold uppercase tracking-wide">Update Status</p>
                        <div className="flex gap-2">
                          {['New', 'Contacted', 'Resolved'].map((status) => (
                            <Button
                              key={status}
                              variant={selectedQuery.status === status ? 'default' : 'outline'}
                              size="sm"
                              disabled={updateLoading}
                              onClick={() => handleStatusChange(selectedQuery._id, status)}
                              className="flex-1 font-semibold text-xs py-1"
                            >
                              {status}
                            </Button>
                          ))}
                        </div>
                      </div>

                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <Card className="border-dashed border-2 border-border p-8 text-center text-muted-foreground shadow-none">
                  <div className="flex flex-col items-center py-12 space-y-3">
                    <FileText className="w-10 h-10 text-muted-foreground/50" />
                    <p className="text-sm font-semibold">No Enquiry Selected</p>
                    <p className="text-xs max-w-[200px]">
                      Click a customer query on the left to view complete details and update their status.
                    </p>
                  </div>
                </Card>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Password Change Modal Overlay */}
      <AnimatePresence>
        {showPasswordModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="bg-card text-card-foreground w-full max-w-md p-6 rounded-2xl shadow-2xl border border-border space-y-4"
            >
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  <Lock className="w-5 h-5 text-primary" /> Change Admin Password
                </h3>
                <button
                  onClick={() => {
                    setShowPasswordModal(false);
                    setPwdError('');
                    setPwdSuccess('');
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-semibold"
                >
                  ✕
                </button>
              </div>

              {pwdError && (
                <div className="p-3 text-xs bg-destructive/10 border border-destructive/20 text-destructive rounded-lg font-semibold text-center">
                  {pwdError}
                </div>
              )}

              {pwdSuccess && (
                <div className="p-3 text-xs bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-semibold text-center">
                  {pwdSuccess}
                </div>
              )}

              <form onSubmit={handlePasswordChangeSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    Current Password
                  </label>
                  <Input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    placeholder="Enter current password"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    New Password
                  </label>
                  <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    placeholder="Min 6 characters"
                    className="bg-background border-border"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wide">
                    Confirm New Password
                  </label>
                  <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="Re-type new password"
                    className="bg-background border-border"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowPasswordModal(false);
                      setPwdError('');
                      setPwdSuccess('');
                    }}
                    disabled={pwdLoading}
                    className="flex-1 font-semibold"
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={pwdLoading} className="flex-1 font-semibold">
                    {pwdLoading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      'Update Password'
                    )}
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
