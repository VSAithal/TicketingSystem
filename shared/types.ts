type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export type Ticket = {
  id: number;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  status: string;
  userId: string;
  user: User;
};
