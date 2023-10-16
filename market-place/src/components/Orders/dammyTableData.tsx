import { ColumnsType } from "antd/es/table";

interface DataType {
    key: string;
    status: string;
    total: string;
    note: string;
    dueOn: string;
    deliver: string;
    gig: string;
}

export const columns: ColumnsType<DataType> = [
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (text) => <div style={{ color: text == "Pending" ? "#ED8A19" : "#069425" }}>{text}</div>,
    },
    {
        title: 'Total',
        dataIndex: 'total',
        key: 'total',
    },
    {
        title: 'Note',
        dataIndex: 'note',
        key: 'note',
    },
    {
        title: 'Due on',
        dataIndex: 'dueOn',
        key: 'dueOn',
    },
    {
        title: 'Deliver',
        dataIndex: 'deliver',
        key: 'deliver',
    },
    {
        title: 'GIG',
        dataIndex: 'gig',
        key: 'gig',
    },
];

export const data: DataType[] = [
    {
        key: '1',
        status: 'Complete',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '2',
        status: 'Pending',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '3',
        status: 'Complete',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '4',
        status: 'Pending',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '5',
        status: 'Complete',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '6',
        status: 'Pending',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '7',
        status: 'Complete',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '8',
        status: 'Pending',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
    {
        key: '9',
        status: 'Complete',
        total: "$20",
        note: 'No',
        dueOn: "Jan 02",
        deliver: "Jan 12",
        gig: "Build agency, clinic, dental, health,dfedf"
    },
];