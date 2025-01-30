import type { IResourceItem } from "@refinedev/core";

import {
  DashboardOutlined,
  ProjectOutlined,
  ShopOutlined,
} from "@ant-design/icons";

export const resources: IResourceItem[] = [
  {
    name: "dashboard",
    list: "/",
    meta: {
      label: "Dashboard",
      icon: <DashboardOutlined />,
    },
  },
  {
    name: "My Level",
    list: "/my-level",
    show: "/my-level/:id",
    create: "/my-level/new",
    edit: "/my-level/edit/:id",
    meta: {
      label: "My Level",
      icon: <ShopOutlined />,
    },
  },
  {
    name: "User Management",
    list: "/user-management",
    create: "/user-management/new",
    edit: "/user-management/edit/:id",
    meta: {
      label: "User Management",
      icon: <ProjectOutlined />,
    },
  },
];