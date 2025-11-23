import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Search, Filter, Eye, Loader2 } from 'lucide-react';

interface Ticket {
  id: string;
  ticket_number: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  priority: string;
  category: string;
  subject: string;
  description: string;
  status: string;
  created_at: string;
  updated_at: string;
}

const priorityColors = {
  low: 'bg-blue-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  urgent: 'bg-red-500',
};

const statusColors = {
  open: 'bg-green-500',
  'in-progress': 'bg-blue-500',
  resolved: 'bg-purple-500',
  closed: 'bg-gray-500',
};

export default function TicketsDashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const { isAdmin, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && !isAdmin) {
      toast({
        title: 'Access Denied',
        description: 'You do not have permission to access this page.',
        variant: 'destructive',
      });
      navigate('/');
    }
  }, [isAdmin, authLoading, navigate, toast]);

  useEffect(() => {
    if (isAdmin) {
      fetchTickets();

      // Set up real-time subscription
      const channel = supabase
        .channel('tickets-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'tickets'
          },
          (payload) => {
            console.log('Real-time ticket change:', payload);
            
            if (payload.eventType === 'INSERT') {
              setTickets((current) => [payload.new as Ticket, ...current]);
              toast({
                title: 'New Ticket',
                description: `Ticket ${(payload.new as Ticket).ticket_number} created`,
              });
            } else if (payload.eventType === 'UPDATE') {
              setTickets((current) =>
                current.map((ticket) =>
                  ticket.id === payload.new.id ? (payload.new as Ticket) : ticket
                )
              );
            } else if (payload.eventType === 'DELETE') {
              setTickets((current) =>
                current.filter((ticket) => ticket.id !== payload.old.id)
              );
            }
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [isAdmin, toast]);

  useEffect(() => {
    filterTickets();
  }, [tickets, searchQuery, statusFilter, priorityFilter, categoryFilter]);

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from('tickets')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to fetch tickets',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const filterTickets = () => {
    let filtered = [...tickets];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (ticket) =>
          ticket.ticket_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ticket.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter((ticket) => ticket.status === statusFilter);
    }

    // Priority filter
    if (priorityFilter !== 'all') {
      filtered = filtered.filter((ticket) => ticket.priority === priorityFilter);
    }

    // Category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((ticket) => ticket.category === categoryFilter);
    }

    setFilteredTickets(filtered);
  };

  const updateTicketStatus = async (ticketId: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('tickets')
        .update({ status: newStatus })
        .eq('id', ticketId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Ticket status updated successfully',
      });

      fetchTickets();
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to update ticket status',
        variant: 'destructive',
      });
    }
  };

  const resetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setPriorityFilter('all');
    setCategoryFilter('all');
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Admin Ticket Dashboard</h1>
          <p className="text-muted-foreground">View and manage all support tickets</p>
          <div className="mt-2 flex items-center gap-2 text-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-muted-foreground">Real-time updates enabled</span>
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-5 h-5" />
              Filters
            </CardTitle>
            <CardDescription>Filter and search through tickets</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search tickets..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>

              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="open">Open</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="technical">Technical Issue</SelectItem>
                  <SelectItem value="billing">Billing/Payment</SelectItem>
                  <SelectItem value="feature">Feature Request</SelectItem>
                  <SelectItem value="bug">Bug Report</SelectItem>
                  <SelectItem value="account">Account Support</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Showing {filteredTickets.length} of {tickets.length} tickets
              </p>
              <Button variant="outline" onClick={resetFilters}>
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ticket #</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Priority</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Created</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={8} className="text-center py-8 text-muted-foreground">
                        No tickets found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredTickets.map((ticket) => (
                      <TableRow key={ticket.id}>
                        <TableCell className="font-mono text-sm">
                          {ticket.ticket_number}
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium">{ticket.name}</p>
                            <p className="text-sm text-muted-foreground">{ticket.email}</p>
                          </div>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{ticket.subject}</TableCell>
                        <TableCell>
                          <Badge className={priorityColors[ticket.priority as keyof typeof priorityColors]}>
                            {ticket.priority}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm capitalize">{ticket.category.replace('-', ' ')}</span>
                        </TableCell>
                        <TableCell>
                          <Select
                            value={ticket.status}
                            onValueChange={(value) => updateTicketStatus(ticket.id, value)}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue>
                                <Badge className={statusColors[ticket.status as keyof typeof statusColors]}>
                                  {ticket.status}
                                </Badge>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="open">Open</SelectItem>
                              <SelectItem value="in-progress">In Progress</SelectItem>
                              <SelectItem value="resolved">Resolved</SelectItem>
                              <SelectItem value="closed">Closed</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                        <TableCell>
                          {new Date(ticket.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setSelectedTicket(ticket)}
                              >
                                <Eye className="w-4 h-4" />
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle>Ticket Details</DialogTitle>
                                <DialogDescription>
                                  {selectedTicket?.ticket_number}
                                </DialogDescription>
                              </DialogHeader>
                              {selectedTicket && (
                                <div className="space-y-4">
                                  <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                      <p className="text-sm font-medium text-muted-foreground">Customer Name</p>
                                      <p>{selectedTicket.name}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-muted-foreground">Email</p>
                                      <p>{selectedTicket.email}</p>
                                    </div>
                                    {selectedTicket.phone && (
                                      <div>
                                        <p className="text-sm font-medium text-muted-foreground">Phone</p>
                                        <p>{selectedTicket.phone}</p>
                                      </div>
                                    )}
                                    {selectedTicket.company && (
                                      <div>
                                        <p className="text-sm font-medium text-muted-foreground">Company</p>
                                        <p>{selectedTicket.company}</p>
                                      </div>
                                    )}
                                    <div>
                                      <p className="text-sm font-medium text-muted-foreground">Priority</p>
                                      <Badge className={priorityColors[selectedTicket.priority as keyof typeof priorityColors]}>
                                        {selectedTicket.priority}
                                      </Badge>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium text-muted-foreground">Category</p>
                                      <p className="capitalize">{selectedTicket.category.replace('-', ' ')}</p>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Subject</p>
                                    <p className="font-medium">{selectedTicket.subject}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-muted-foreground mb-2">Description</p>
                                    <p className="whitespace-pre-wrap">{selectedTicket.description}</p>
                                  </div>
                                  <div className="flex gap-4 text-sm text-muted-foreground pt-4 border-t">
                                    <div>
                                      <span className="font-medium">Created:</span>{' '}
                                      {new Date(selectedTicket.created_at).toLocaleString()}
                                    </div>
                                    <div>
                                      <span className="font-medium">Updated:</span>{' '}
                                      {new Date(selectedTicket.updated_at).toLocaleString()}
                                    </div>
                                  </div>
                                </div>
                              )}
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}