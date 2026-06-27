import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { 
  Lock, Mail, BarChart3, Users, Clock, LogOut, Search, 
  Trash2, Filter, ChevronDown, CheckCircle, RefreshCw, Layers, PieChart
} from "lucide-react";
import { ADMIN } from "../constants/testIds";
import { toast } from "sonner";
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid 
} from "recharts";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "";
const API = `${BACKEND_URL}/api`;

export function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [leads, setLeads] = useState([]);
  const [stats, setStats] = useState({
    total_leads: 0,
    by_status: { New: 0, Contacted: 0, "In Progress": 0, Closed: 0 },
    by_service: {},
    activity: []
  });
  const [leadsLoading, setLeadsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");

  const getAuthHeaders = () => {
    const token = localStorage.getItem("admin_token");
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  };

  const fetchLeadsAndStats = useCallback(async () => {
    setLeadsLoading(true);
    try {
      const headers = getAuthHeaders();
      const params = {};
      if (statusFilter) params.status_filter = statusFilter;
      if (serviceFilter) params.service_filter = serviceFilter;
      if (searchTerm) params.search = searchTerm;

      const [leadsRes, statsRes] = await Promise.all([
        axios.get(`${API}/admin/leads`, { ...headers, params }),
        axios.get(`${API}/admin/stats`, headers)
      ]);

      setLeads(leadsRes.data);
      setStats(statsRes.data);
    } catch (err) {
      console.error(err);
      if (err.response?.status === 401) {
        handleLogout();
        toast.error("Session expired. Please log in again.");
      } else {
        toast.error("Could not retrieve leads dataset.");
      }
    } finally {
      setLeadsLoading(false);
    }
  }, [statusFilter, serviceFilter, searchTerm]);

  // Check existing login
  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data upon authentication or filter adjustments
  useEffect(() => {
    if (isAuthenticated) {
      fetchLeadsAndStats();
    }
  }, [isAuthenticated, fetchLeadsAndStats]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const response = await axios.post(`${API}/admin/login`, { email, password });
      if (response.data?.access_token) {
        localStorage.setItem("admin_token", response.data.access_token);
        setIsAuthenticated(true);
        toast.success("Welcome back, Lead Architect.");
      }
    } catch (err) {
      console.error(err);
      setLoginError(err.response?.data?.detail || "Authentication failed. Try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
    setEmail("");
    setPassword("");
  };

  const handleUpdateStatus = async (leadId, newStatus) => {
    try {
      const headers = getAuthHeaders();
      const response = await axios.patch(
        `${API}/admin/leads/${leadId}/status`,
        { status: newStatus },
        headers
      );
      if (response.status === 200) {
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
        // Refresh stats
        const statsRes = await axios.get(`${API}/admin/stats`, headers);
        setStats(statsRes.data);
        toast.success("Lead status updated.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not update lead status.");
    }
  };

  const handleDeleteLead = async (leadId) => {
    if (!window.confirm("Are you absolutely sure you want to delete this lead? This operation is permanent.")) {
      return;
    }
    try {
      const headers = getAuthHeaders();
      const response = await axios.delete(`${API}/admin/leads/${leadId}`, headers);
      if (response.status === 200) {
        setLeads(prev => prev.filter(l => l.id !== leadId));
        // Refresh stats
        const statsRes = await axios.get(`${API}/admin/stats`, headers);
        setStats(statsRes.data);
        toast.success("Lead record deleted successfully.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Could not delete lead record.");
    }
  };

  // Render Login page if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 relative py-12 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
        
        <div className="max-w-md w-full bg-white border border-zinc-200 rounded-xl p-8 md:p-10 shadow-lg relative z-10 text-left">
          <div className="text-center space-y-3 mb-8">
            <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center text-white font-bold text-xl mx-auto shadow-sm">E</div>
            <h1 className="text-2xl font-heading font-semibold text-zinc-950">E26 Admin Panel</h1>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400">Restricted Enterprise Access</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@e26media.com"
                  required
                  className="w-full bg-white border border-zinc-200 rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                  data-testid={ADMIN.loginEmailInput}
                />
                <Mail className="absolute left-3.5 top-3 w-4.5 h-4.5 text-zinc-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono uppercase text-zinc-500 tracking-wider">Security Password</label>
              <div className="relative">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-white border border-zinc-200 rounded-md pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all placeholder:text-zinc-400"
                  data-testid={ADMIN.loginPasswordInput}
                />
                <Lock className="absolute left-3.5 top-3 w-4.5 h-4.5 text-zinc-400" />
              </div>
            </div>

            {loginError && (
              <div className="p-3 bg-red-50 border border-red-200 rounded text-red-800 text-xs font-medium">
                {loginError}
              </div>
            )}

            <button
              type="submit"
              disabled={loginLoading}
              className="w-full bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-800/80 text-white rounded-md py-3 text-sm font-body font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              data-testid={ADMIN.loginSubmitButton}
            >
              {loginLoading ? "Authenticating Master..." : "Unlock Dashboard"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Dashboard
  return (
    <div 
      className="min-h-screen bg-zinc-50 flex flex-col text-left font-body"
      data-testid={ADMIN.dashboardContainer}
    >
      {/* Header bar */}
      <header className="bg-white border-b border-zinc-200 fixed top-0 w-full z-20 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded bg-green-600 flex items-center justify-center text-white font-heading font-bold text-sm">
            E
          </div>
          <span className="font-heading font-semibold text-lg tracking-tight text-zinc-950">
            E26 <span className="text-zinc-500 font-normal">Command Deck</span>
          </span>
          <span className="bg-zinc-100 text-zinc-500 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full uppercase ml-2 border border-zinc-200">
            Prod Node
          </span>
        </div>

        <button
          onClick={handleLogout}
          className="bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 hover:text-zinc-950 rounded-md px-4 py-2 text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
          data-testid={ADMIN.logoutButton}
        >
          <LogOut className="w-3.5 h-3.5" />
          Logout Command
        </button>
      </header>

      {/* Main Container */}
      <main className="flex-1 pt-[72px] pb-12 px-6 max-w-7xl mx-auto w-full space-y-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-heading font-medium text-zinc-950 tracking-tight">Lead Database Overview</h1>
            <p className="text-sm text-zinc-500">Track, analyze, and manage incoming enterprise consultation workflows.</p>
          </div>
          <button 
            onClick={fetchLeadsAndStats}
            className="self-start md:self-auto bg-white border border-zinc-200 hover:bg-zinc-50 text-zinc-700 p-2.5 rounded-md shadow-sm transition-all flex items-center gap-1.5 text-xs font-semibold"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${leadsLoading ? "animate-spin" : ""}`} />
            Sync Ledger
          </button>
        </div>

        {/* Dense KPI Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider">Gross Ledger</span>
              <Users className="w-4.5 h-4.5 text-zinc-500" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-zinc-950">{stats.total_leads}</p>
            <p className="text-xs text-zinc-400 mt-1">Total incoming submissions</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-green-600">Pending</span>
              <Clock className="w-4.5 h-4.5 text-green-500" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-green-600">{stats.by_status.New || 0}</p>
            <p className="text-xs text-zinc-400 mt-1">Awaiting architectural audit</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-600">Contacted</span>
              <BarChart3 className="w-4.5 h-4.5 text-blue-500" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-blue-600">{stats.by_status.Contacted || 0}</p>
            <p className="text-xs text-zinc-400 mt-1">Initial follow-ups dispatched</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-purple-600">In Progress</span>
              <Layers className="w-4.5 h-4.5 text-purple-500" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-purple-600">{stats.by_status["In Progress"] || 0}</p>
            <p className="text-xs text-zinc-400 mt-1">Active architectural scoping</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-zinc-400 mb-3">
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600">Secured</span>
              <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
            </div>
            <p className="text-2xl md:text-3xl font-heading font-semibold text-emerald-600">{stats.by_status.Closed || 0}</p>
            <p className="text-xs text-zinc-400 mt-1">Successfully scoped/closed</p>
          </div>
        </div>

        {/* Chart Layout: scannable Dense volume graph */}
        {stats.activity && stats.activity.length > 0 && (
          <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading font-medium text-zinc-900 text-base">Consulation Ingress (Past 7 Days)</h3>
                <p className="text-xs text-zinc-400">Daily submission volumes</p>
              </div>
              <BarChart3 className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={stats.activity}>
                  <defs>
                    <linearGradient id="leadVolumeGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16A34A" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#16A34A" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" />
                  <XAxis dataKey="date" stroke="#a1a1aa" fontSize={10} tickLine={false} />
                  <YAxis stroke="#a1a1aa" fontSize={10} tickLine={false} allowDecimals={false} />
                  <Tooltip 
                    contentStyle={{ background: "#ffffff", border: "1px solid #e4e4e7", borderRadius: "8px", fontSize: "12px" }} 
                  />
                  <Area type="monotone" dataKey="leads" stroke="#16A34A" strokeWidth={2} fillOpacity={1} fill="url(#leadVolumeGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Leads Filtration Command Bar */}
        <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by client, company, email..."
              className="w-full bg-zinc-50 border border-zinc-200 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/15 focus:border-green-600 transition-all placeholder:text-zinc-400"
              data-testid={ADMIN.searchInput}
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
          </div>

          {/* Dual Filtration Selects */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-zinc-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-white border border-zinc-200 rounded-md px-3 py-1.5 text-xs font-semibold focus:outline-none text-zinc-700"
                data-testid={ADMIN.filterSelect}
              >
                <option value="">All Statuses</option>
                <option value="New">Status: New</option>
                <option value="Contacted">Status: Contacted</option>
                <option value="In Progress">Status: In Progress</option>
                <option value="Closed">Status: Closed</option>
              </select>
            </div>

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="bg-white border border-zinc-200 rounded-md px-3 py-1.5 text-xs font-semibold focus:outline-none text-zinc-700"
            >
              <option value="">All Service Streams</option>
              <option value="Web Design & Development">Web Design & Dev</option>
              <option value="Software Development">Software Dev</option>
              <option value="Mobile App Development">Mobile App Dev</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

        </div>

        {/* Lead Records Table */}
        <div className="bg-white border border-zinc-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table 
              className="w-full text-sm text-left border-collapse"
              data-testid={ADMIN.leadsTable}
            >
              <thead>
                <tr className="bg-zinc-50 border-b border-zinc-200 text-xs font-mono uppercase tracking-wider text-zinc-500">
                  <th className="px-6 py-4 font-semibold">Ingress Date</th>
                  <th className="px-6 py-4 font-semibold">Client Name</th>
                  <th className="px-6 py-4 font-semibold">Company</th>
                  <th className="px-6 py-4 font-semibold">Coordinates</th>
                  <th className="px-6 py-4 font-semibold">Capability Need</th>
                  <th className="px-6 py-4 font-semibold">Message Parameters</th>
                  <th className="px-6 py-4 font-semibold">Scope Status</th>
                  <th className="px-6 py-4 font-semibold text-right">Ledger Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 font-body">
                {leadsLoading ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-zinc-400">
                      <LoaderElement />
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-zinc-400">
                      No matching leads found in current ledger segment.
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-zinc-50/50 transition-colors">
                      {/* Date */}
                      <td className="px-6 py-4 whitespace-nowrap text-xs text-zinc-500 font-mono">
                        {new Date(lead.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit"
                        })}
                      </td>

                      {/* Name */}
                      <td className="px-6 py-4 font-medium text-zinc-950 whitespace-nowrap">
                        {lead.name}
                      </td>

                      {/* Company */}
                      <td className="px-6 py-4 whitespace-nowrap text-zinc-700">
                        {lead.company}
                      </td>

                      {/* Coordinates (Email & Phone) */}
                      <td className="px-6 py-4 text-xs text-zinc-600">
                        <div className="font-semibold">{lead.email}</div>
                        <div className="text-[10px] text-zinc-400 font-mono mt-0.5">{lead.phone}</div>
                      </td>

                      {/* Requested capability */}
                      <td className="px-6 py-4 whitespace-nowrap text-xs">
                        <span className="px-2 py-1 bg-green-50 border border-green-100 text-green-700 rounded-md font-semibold">
                          {lead.service}
                        </span>
                      </td>

                      {/* Message */}
                      <td className="px-6 py-4 max-w-xs text-xs text-zinc-500 truncate" title={lead.message}>
                        {lead.message}
                      </td>

                      {/* Status select dropdown */}
                      <td className="px-6 py-4 whitespace-nowrap">
                        <select
                          value={lead.status}
                          onChange={(e) => handleUpdateStatus(lead.id, e.target.value)}
                          className={`text-xs font-semibold px-2.5 py-1.5 border rounded-md focus:outline-none ${
                            lead.status === "New" 
                              ? "bg-red-50 text-red-700 border-red-200"
                              : lead.status === "Contacted"
                                ? "bg-blue-50 text-blue-700 border-blue-200"
                                : lead.status === "In Progress"
                                  ? "bg-purple-50 text-purple-700 border-purple-200"
                                  : "bg-emerald-50 text-emerald-700 border-emerald-200"
                          }`}
                          data-testid={ADMIN.statusSelect}
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <button
                          onClick={() => handleDeleteLead(lead.id)}
                          className="p-1.5 text-zinc-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors inline-flex items-center"
                          data-testid={ADMIN.deleteButton}
                          title="Delete Record"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

function LoaderElement() {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <RefreshCw className="w-6 h-6 animate-spin text-zinc-400" />
      <span className="font-mono text-xs text-zinc-400">Synchronizing Ledger Dataset...</span>
    </div>
  );
}
