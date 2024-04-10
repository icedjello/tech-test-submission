import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import data from "../../data.json";
import { useState, useRef, useMemo, useCallback } from "react";
import { ColDef } from "ag-grid-community";
import Search from "../Search/Search";
import CheckboxDropdown, { Options, Option } from "../CheckboxDropdown";
import { MultiValue } from "react-select";
import styles from "./styles.module.css";

type RowData = {
  id: number;
  fundName: string;
  primaryTicket: string;
  incomeTreatment: string;
  shareClassCurrency: string;
  ISIN: string;
  strategy: string;
  assetClass: { category: string; subCategory: string };
  region: string;
  style: string;
};

const strategyOptions: Options = data.strategyFilterValues.map((v) => ({
  value: v,
  label: v,
}));

const assetClassOptions: Options = (() => {
  const result = [];
  for (const [key, values] of Object.entries(data.assetClassFilterValues)) {
    result.push({
      label: key,
      options: values.map((v) => ({ value: v, label: v })),
    });
  }
  return result;
})();

export default function ProductFinder() {
  const [rowData] = useState<RowData[]>(data.rowData);
  const [defaultColDef] = useState<ColDef>({
    resizable: false,
    suppressMovable: true,
    suppressHeaderMenuButton: true,
    filterParams: {
      maxNumConditions: 10,
    },
  });
  const [colDefs] = useState<ColDef[]>([
    {
      field: "fundName",
      filter: true,
      filterParams: {
        debounce: 200,
      },
    },
    {
      field: "primaryTicket",
      filter: true,
    },
    { field: "incomeTreatment" },
    { field: "shareClassCurrency" },
    { field: "strategy", filter: true },
    {
      field: "assetClass",
      filter: true,
      valueFormatter: (r) => r.data.assetClass.category,
      valueGetter: (r) => r.data.assetClass.subCategory,
      filterParams: {},
    },
    { field: "region", filter: true },
    { field: "style", filter: true },
  ]);

  const styleOptions = useMemo(() => {
    const styleOptions = new Set<string>();
    for (const { style } of rowData) {
      styleOptions.add(style);
    }
    return Array.from(styleOptions).map((v) => ({ value: v, label: v }));
  }, [rowData]);

  const gridRef = useRef<AgGridReact<RowData>>(null);

  // The two handlers below would be refactored into one if I had more time.
  const handleDropdownFilterChange = useCallback((columnName: string) => {
    return (filterValues: MultiValue<Option>) => {
      const previousModel = gridRef.current!.api.getFilterModel();
      const conditions = filterValues.map(({ value }) => ({
        filterType: "text",
        type: "contains",
        filter: value,
      }));

      gridRef.current!.api.setFilterModel({
        ...previousModel,
        [columnName]: {
          filterType: "text",
          type: "contains",
          operator: "OR",
          conditions,
        },
      });
    };
  }, []);

  const handleSearchFilterChange = useCallback((value: string) => {
    const currentModel = gridRef.current!.api.getFilterModel();
    const nextModel = {
      ...currentModel,
      fundName: {
        filterType: "text",
        type: "contains",
        filter: value,
      },
    };
    gridRef.current!.api.setFilterModel(nextModel);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.filterPanelContainer}>
        <div className={styles.filterPanel}>
          <h2 className={styles.h2gap}>Product Finder</h2>
          <Search
            placeHolder="Enter fund name"
            handleChange={handleSearchFilterChange}
          />
          <div className={styles.checkboxPanel}>
            <CheckboxDropdown
              options={strategyOptions}
              handleChange={handleDropdownFilterChange("strategy")}
              placeholder="Strategy"
            />
            <CheckboxDropdown
              isGrouped
              options={assetClassOptions}
              handleChange={handleDropdownFilterChange("assetClass")}
              placeholder="Asset Class"
            />
            <CheckboxDropdown
              isGrouped
              options={data.marketAndRegionOptions}
              handleChange={handleDropdownFilterChange("region")}
              placeholder="Market & Region"
            />
            <CheckboxDropdown
              options={styleOptions}
              handleChange={handleDropdownFilterChange("style")}
              placeholder="Style"
            />
          </div>
        </div>
      </div>

      <div className={styles.gridContainer + " ag-theme-quartz"}>
        <AgGridReact
          defaultColDef={defaultColDef}
          rowData={rowData}
          columnDefs={colDefs}
          ref={gridRef}
        />
      </div>
    </div>
  );
}
