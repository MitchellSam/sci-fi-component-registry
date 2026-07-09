import * as React from 'react';

export interface TableColumn<Row = any> {
  /** Row-object key this column reads. */
  key: string;
  /** Header label. */
  header: React.ReactNode;
  /** CSS width (e.g. 120, "30%"). */
  width?: number | string;
  /** Cell alignment. @default "left" */
  align?: 'left' | 'center' | 'right';
  /** Render the cell in the numeric face with tight tracking. */
  numeric?: boolean;
  /** Show a sort affordance on the header (requires onSort). */
  sortable?: boolean;
  /** Custom cell renderer. */
  render?: (value: any, row: Row) => React.ReactNode;
}

/**
 * Angular data table — hairline grid, uppercase tracked header, hover
 * highlight, optional sortable headers and active-row gold edge.
 *
 * @startingPoint section="Data" subtitle="Declarative data table with sorting" viewport="760x320"
 */
export interface TableProps<Row = any> {
  columns: TableColumn<Row>[];
  rows: Row[];
  /** Field used as React key / active comparison. */
  rowKey?: string;
  /** Value of the currently-active row (gold edge + tint). */
  activeKey?: string | number;
  onRowClick?: (row: Row) => void;
  /** Current sort, e.g. { key: 'power', dir: 'desc' }. */
  sort?: { key: string; dir: 'asc' | 'desc' };
  onSort?: (sort: { key: string; dir: 'asc' | 'desc' }) => void;
  /** Tighter row padding. */
  dense?: boolean;
  style?: React.CSSProperties;
}

export function Table<Row = any>(props: TableProps<Row>): JSX.Element;
