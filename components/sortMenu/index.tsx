import { FC, useCallback, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import SortIcon from "@mui/icons-material/Sort";

import { SortMenuProps } from "./sortMenuTypes";
import { MainContainer, MyMenu } from "./sortMenu.style";
import { SortMenuItem } from "./SortMenuItem";
import Tooltip from "@mui/material/Tooltip";

const SortMenu: FC<SortMenuProps> = (props) => {
  const { sortOptions, onSort } = props;
  const [sortCriteria, setSortCriteria] = useState<{
    [key: string]: "asc" | "desc" | null;
  }>({});

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [clear, setClear] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleToggleOrder = (criteria: string) => {
    const newSortCriteria = { ...sortCriteria };
    newSortCriteria[criteria] =
      sortCriteria[criteria] === null
        ? "asc"
        : sortCriteria[criteria] === "asc"
        ? "desc"
        : null;
    setSortCriteria(newSortCriteria);
  };

  const applySortOrder = useCallback(() => {
    onSort(sortCriteria, handleClose);
  }, [Object.values(sortCriteria)]);

  const clearSortOrder = () => {
    Object.keys(sortCriteria).forEach((key) => {
      sortCriteria[key] = null;
    });
    setClear((clear) => !clear);
    onSort(sortCriteria, handleClose);
  };
  useEffect(() => {
    let temp = {};
    sortOptions.forEach((option) => {
      temp = { ...temp, [option]: null };
    });
    setSortCriteria({ ...temp });
  }, []);

  return (
    <MainContainer>
      <Tooltip title="Sort">
        <IconButton
          onClick={handleClick}
          className={Boolean(anchorEl) ? "sortIconActive" : "sortIcon"}
        >
          <SortIcon />
        </IconButton>
      </Tooltip>

      <MyMenu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="menu"
      >
        {sortOptions.map((option) => (
          <SortMenuItem
            key={option}
            name={option}
            order={sortCriteria[option]}
            onToggleOrder={handleToggleOrder}
          />
        ))}
        <div className="sortActionsContainer">
          <Button
            variant="contained"
            onClick={clearSortOrder}
            className="sortMenuAction"
            size="small"
          >
            Clear
          </Button>
          <Button
            variant="contained"
            className="sortMenuAction"
            size="small"
            onClick={applySortOrder}
          >
            Apply
          </Button>
        </div>
      </MyMenu>
    </MainContainer>
  );
};

export default SortMenu;
