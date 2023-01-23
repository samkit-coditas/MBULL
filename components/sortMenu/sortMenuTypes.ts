export interface SortMenuProps {
  sortOptions: string[];
  initialCriteria?: string[];
  initialOrder?: "asc" | "desc" | "null";
  // onSort: (criteria: { [key: string]: "asc" | "desc" | null }) => void;
  onSort: (
    criteria: { [key: string]: "asc" | "desc" | null },
    closeSortMenuCallBack: () => void
  ) => void;
}
