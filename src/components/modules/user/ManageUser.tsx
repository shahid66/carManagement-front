"use client";

import { BFTable } from "@/components/ui/core/BFTable/index";

import TablePagination from "@/components/ui/core/BFTable/TablePagination";
import { IMeta } from "@/types/meta";
import { IUser } from "@/types/user";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import ActionStatus from "./Action";

const ManageUser = ({ users, meta }: { users: IUser[]; meta: IMeta }) => {
  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "images",
      header: "Image",
      cell: ({ row }) => (
        <div className="flex juc items-center space-x-3">
          <Image
            src={row.original.image || ""}
            alt={row.original.name}
            width={100}
            height={100}
            className="w-30 h-20 "
          />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: ({ row }) => (
        <span className="flex justify-center items-center">
          {row.original.name}
        </span>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <span>{row.original.email}</span>,
    },
    {
      accessorKey: "role",
      header: "Role",
      cell: ({ row }) => <span>{row.original.role}</span>,
    },

    {
      accessorKey: "action",
      header: "Action",
      cell: ({ row }) => <ActionStatus row={row} />,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage Users</h1>
      </div>
      <BFTable columns={columns} data={users || []} />
      <TablePagination totalPage={meta?.totalPage} />
    </div>
  );
};

export default ManageUser;
