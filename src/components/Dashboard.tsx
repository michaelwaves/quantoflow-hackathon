"use client"
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  useStytchMemberSession,
  useStytchOrganization,
} from '@stytch/nextjs/b2b';
import './Dashboard.css';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
buttonVariants

const Dashboard = () => {
  const { session, isInitialized } = useStytchMemberSession();
  const { organization } = useStytchOrganization();
  const router = useRouter();

  const role = useMemo(() => {
    return session?.roles.includes('stytch_admin') ? 'admin' : 'member';
  }, [session?.roles]);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (isInitialized && !session) {
    router.push("/")
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        Hello! You&apos;re logged into{' '}
        <strong>{organization?.organization_name}</strong> with{' '}
        <strong>{role}</strong> permissions.
        <br></br>
        Please upload your data to catch Money Launderers 💸
        <Link
          className={buttonVariants({ variant: "default" })}
          href="/upload/entities"> Upload Center</Link>
      </div>

    </div>
  );
};

export default Dashboard;
