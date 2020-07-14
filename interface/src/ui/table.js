import React from "react";
import MaterialTable from "material-table";
import tableIcons from "./ui/table-icons";

const Table = ({ columns, data, title }) => {
  <MaterialTable
    icons={tableIcons}
    columns={columns}
    data={data}
    title={title}
  />;
};

export default Table;
