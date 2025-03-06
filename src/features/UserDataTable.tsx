import React, { useState, useEffect } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, MenuItem, Select, FormControl, InputLabel, TablePagination, Skeleton,
  SelectChangeEvent,
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
}

const fetchUsers = async (page: number, token: string | null): Promise<{ users: User[], nextToken: string | null }> => {
  // Simulate an API call
  const response = await new Promise<{ users: User[], nextToken: string | null }>((resolve) => {
    setTimeout(() => {
      const users = Array.from({ length: 10 }, (_, index) => ({
        id: page * 10 + index + 1,
        name: `User ${page * 10 + index + 1}`,
        email: `user${page * 10 + index + 1}@example.com`,
        phoneNumber: `123-456-789${index}`
      }));
      const nextToken = page < 5 ? `token-${page + 1}` : null; // Simulate continuation token
      resolve({ users, nextToken });
    }, 1000);
  });
  return response;
};

const UserDataTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [nextToken, setNextToken] = useState<string | null>(null);
  const [cachedToken, setCachedToken] = useState<{ [key: string]: User[] }>({});
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      if (cachedToken[page]) {
        setUsers(cachedToken[page]);
        setLoading(false);
      } else {
        const { users: newUsers, nextToken: newToken } = await fetchUsers(page, nextToken);
        setUsers(newUsers);
        setNextToken(newToken);
        setCachedToken((prev) => ({ ...prev, [page]: newUsers }));
        setLoading(false);
      }
    };
    loadUsers();
  }, [page, nextToken, cachedToken]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <Paper>
      <Box textAlign="center" m={5}>
        <Typography 
          variant={isMobile ? 'h6' : 'h4'} 
          gutterBottom 
          sx={{ fontWeight: 700, color: '#e5d5df5' }}
        >
          User Data Table
        </Typography>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
        <TextField label="Search" variant="outlined" value={search} onChange={handleSearchChange} />
        <FormControl variant="outlined">
          <InputLabel>Filter</InputLabel>
          <Select value={filter} onChange={handleFilterChange} label="Filter">
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="email">Email</MenuItem>
            <MenuItem value="phoneNumber">Phone Number</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>Add User</Button>
      </div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>Name</TableCell>
              <TableCell style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>Email</TableCell>
              <TableCell style={{ backgroundColor: 'lightgray', fontWeight: 'bold' }}>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              Array.from(new Array(rowsPerPage)).map((_, index) => (
                <TableRow key={index}>
                  <TableCell colSpan={4}>
                    <Skeleton variant="rectangular" width="100%" height={40} />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phoneNumber}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UserDataTable;