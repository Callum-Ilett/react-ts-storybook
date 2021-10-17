interface Task {
  id: string;
  title?: string;
  completed?: boolean;
  removeTask?: (id: string) => void;
  toggleTask?: (id: string) => void;
}

type Tasks = Task[];
