import React, { useState } from 'react';
import { 
  X, 
  Database, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  ShieldCheck, 
  LogOut, 
  LogIn, 
  Filter, 
  FileText, 
  ExternalLink,
  ChevronRight,
  Sparkles,
  Building2,
  Mail,
  Phone
} from 'lucide-react';
import { useFirebase } from '../context/FirebaseContext';
import { type SubmissionRecord } from '../services/firebaseService';
import { inquiriesApi } from '../services/api';

export const FirebasePortalModal: React.FC = () => {
  const { 
    user, 
    isAdmin, 
    submissions, 
    refreshSubmissions,
    isPortalOpen, 
    closePortal, 
    loginWithGoogle, 
    logout,
    adminEmail 
  } = useFirebase();

  const [activeFilter, setActiveFilter] = useState<'all' | 'contact' | 'partner' | 'manufacturing'>('all');
  const [selectedItem, setSelectedItem] = useState<SubmissionRecord | null>(null);
  const [statusUpdateLoading, setStatusUpdateLoading] = useState(false);
  const [newStatus, setNewStatus] = useState<string>('');
  const [adminNoteInput, setAdminNoteInput] = useState('');

  if (!isPortalOpen) return null;

  const filteredSubmissions = submissions.filter(item => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  const handleUpdateStatus = async () => {
    if (!selectedItem || !newStatus) return;
    setStatusUpdateLoading(true);
    try {
      await inquiriesApi.updateStatus(
        selectedItem.type as any,
        Number(selectedItem.id),
        newStatus,
        adminNoteInput || undefined
      );
      await refreshSubmissions();
      setSelectedItem(prev => prev ? { ...prev, status: newStatus as any, adminNotes: adminNoteInput || prev.adminNotes } : null);
      setNewStatus('');
      setAdminNoteInput('');
    } catch (err) {
      console.error('Failed to update status:', err);
    } finally {
      setStatusUpdateLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'approved':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">APPROVED</span>;
      case 'scheduled':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-800 border border-blue-200">SCHEDULED</span>;
      case 'under_review':
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800 border border-amber-200">UNDER REVIEW</span>;
      default:
        return <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200">PENDING</span>;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'contact': return 'General Contact Form';
      case 'partner': return 'Partner & Licensing Modal';
      case 'manufacturing': return 'CDMO Biomanufacturing RFP';
      default: return 'Inquiry';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-4xl bg-white text-[#0A192F] border border-slate-200 rounded-3xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-[#0A192F]">
                  Enterprise Inquiries & Submissions Portal
                </h2>
                <span className="flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Active Enterprise Sync
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Business: Bedfordshire Biotech is registered as BIOTECH RESEARCH PARK · Registered Company Name: BIOTECH RESEARCH PARK · Company number 11399495
              </p>
            </div>
          </div>
          
          <button
            onClick={closePortal}
            className="p-2 rounded-full bg-slate-200/60 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Auth Bar */}
        <div className="px-6 py-3 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
                  {user.displayName ? user.displayName.charAt(0) : user.email?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <span className="font-semibold text-slate-800">{user.displayName || user.email}</span>
                  {isAdmin && (
                    <span className="ml-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-600 text-white">
                      EXECUTIVE ADMIN
                    </span>
                  )}
                </div>
              </div>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 font-mono text-[11px]">
                {isAdmin ? `Full Registry Access (${submissions.length} Total Submissions)` : `Tracking ${submissions.length} Active Inquiries`}
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-2 text-slate-600">
              <ShieldAlert className="w-4 h-4 text-amber-500" />
              <span>Sign in to review your saved submissions and receive status notifications.</span>
            </div>
          )}

          <div className="flex items-center gap-2">
            {user ? (
              <button
                onClick={logout}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out
              </button>
            ) : (
              <button
                onClick={loginWithGoogle}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold shadow-sm"
              >
                <LogIn className="w-3.5 h-3.5" />
                Sign in with Google
              </button>
            )}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {!user ? (
            <div className="text-center py-12 px-4 max-w-md mx-auto space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mx-auto shadow-inner">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-[#0A192F]">Enterprise Submissions Portal</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Review and track your submissions, technical consultations, CDMO batch reservations, and partnership inquiries in real time.
              </p>
              <div className="pt-2">
                <button
                  onClick={loginWithGoogle}
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                  <LogIn className="w-4 h-4" />
                  Sign In with Google to Track Submissions
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                Are you an executive reviewer ({adminEmail})? Sign in to manage and inspect all form payloads live.
              </p>
            </div>
          ) : (
            <>
              {/* Filter Tabs */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-1.5">
                  <Filter className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">Filter By Source:</span>
                </div>
                <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl text-xs font-semibold">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-3 py-1 rounded-lg transition-all ${activeFilter === 'all' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    All ({submissions.length})
                  </button>
                  <button
                    onClick={() => setActiveFilter('contact')}
                    className={`px-3 py-1 rounded-lg transition-all ${activeFilter === 'contact' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Contact ({submissions.filter(s => s.type === 'contact').length})
                  </button>
                  <button
                    onClick={() => setActiveFilter('partner')}
                    className={`px-3 py-1 rounded-lg transition-all ${activeFilter === 'partner' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Licensing / Modal ({submissions.filter(s => s.type === 'partner').length})
                  </button>
                  <button
                    onClick={() => setActiveFilter('manufacturing')}
                    className={`px-3 py-1 rounded-lg transition-all ${activeFilter === 'manufacturing' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    CDMO RFP ({submissions.filter(s => s.type === 'manufacturing').length})
                  </button>
                </div>
              </div>

              {/* Submissions List */}
              {filteredSubmissions.length === 0 ? (
                <div className="text-center py-12 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <FileText className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <h4 className="text-sm font-bold text-slate-700">No submissions found in this category</h4>
                  <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                    Submit any form across the website (Contact section, Partner modal, or CDMO Biomanufacturing page) to see it appear here dynamically in real-time.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredSubmissions.map((item) => (
                    <div 
                      key={item.id}
                      onClick={() => setSelectedItem(item)}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between space-y-3 group"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            {getTypeLabel(item.type)}
                          </span>
                          {getStatusBadge(item.status)}
                        </div>
                        <h4 className="text-sm font-bold text-[#0A192F] group-hover:text-blue-600 transition-colors line-clamp-1">
                          {item.title}
                        </h4>
                        <div className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                          <span className="font-semibold text-slate-700">{item.name}</span>
                          {item.company && (
                            <>
                              <span>·</span>
                              <span className="truncate">{item.company}</span>
                            </>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                          {item.details}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                        <span>ID: {item.id.slice(0, 10)}...</span>
                        <span className="flex items-center gap-1 text-blue-600 font-sans font-semibold group-hover:translate-x-0.5 transition-transform">
                          Details <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}

          {/* Selected Item Detail Modal */}
          {selectedItem && (
            <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800 space-y-4 shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-[10px] font-mono uppercase text-blue-400 font-bold">
                    {getTypeLabel(selectedItem.type)}
                  </span>
                  <h3 className="text-base font-bold text-white mt-0.5">{selectedItem.title}</h3>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusBadge(selectedItem.status)}
                  <button 
                    onClick={() => setSelectedItem(null)}
                    className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-slate-400 block text-[11px]">Contact Name:</span>
                  <span className="font-semibold text-slate-200">{selectedItem.name}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px]">Email Address:</span>
                  <span className="font-semibold text-blue-400">{selectedItem.email}</span>
                </div>
                {selectedItem.company && (
                  <div>
                    <span className="text-slate-400 block text-[11px]">Organization:</span>
                    <span className="font-semibold text-slate-200">{selectedItem.company}</span>
                  </div>
                )}
                {selectedItem.phone && (
                  <div>
                    <span className="text-slate-400 block text-[11px]">Telephone:</span>
                    <span className="font-semibold text-slate-200">{selectedItem.phone}</span>
                  </div>
                )}
              </div>

              <div>
                <span className="text-slate-400 block text-[11px] mb-1">Inquiry / RFP Specification:</span>
                <div className="p-3 bg-slate-800/80 rounded-xl text-xs text-slate-200 leading-relaxed font-sans border border-slate-700/60 whitespace-pre-wrap">
                  {selectedItem.details}
                </div>
              </div>

              {selectedItem.adminNotes && (
                <div>
                  <span className="text-amber-400 block text-[11px] mb-1">Executive Review Notes:</span>
                  <div className="p-2.5 bg-amber-950/30 border border-amber-900/50 rounded-xl text-xs text-amber-200">
                    {selectedItem.adminNotes}
                  </div>
                </div>
              )}

              {/* Admin Action Controls */}
              {isAdmin && (
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <div className="text-xs font-mono uppercase text-blue-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Admin Status Management
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Change Status:</label>
                      <select
                        value={newStatus || selectedItem.status}
                        onChange={(e) => setNewStatus(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="pending">Pending</option>
                        <option value="under_review">Under Review</option>
                        <option value="scheduled">Scheduled</option>
                        <option value="approved">Approved</option>
                        <option value="archived">Archived</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Executive Notes:</label>
                      <input
                        type="text"
                        value={adminNoteInput}
                        onChange={(e) => setAdminNoteInput(e.target.value)}
                        placeholder="Add review notes..."
                        className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleUpdateStatus}
                    disabled={statusUpdateLoading}
                    className="py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-all disabled:opacity-50"
                  >
                    {statusUpdateLoading ? 'Updating Firestore...' : 'Save Status Update to Firestore'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-mono text-[11px]">Firestore Collection Security: Active & Rules Enforced</span>
          </div>
          <button
            onClick={closePortal}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold rounded-lg transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
