import { ReactNode } from 'react';
import AutoBreadcrumb from '@/components/AutoBreadcrumb';
import DefaultSuspense from '@/components/DefaultSuspense';
import AdminNav from './_components/AdminNav';
import AdminAuth from './_components/AdminAuth';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <AdminAuth>
      <AutoBreadcrumb />
      <AdminNav />
      <DefaultSuspense>
        {children}
      </DefaultSuspense>
    </AdminAuth>
  );
}
