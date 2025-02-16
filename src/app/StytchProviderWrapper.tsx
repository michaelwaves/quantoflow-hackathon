"use client"
import StytchProvider from '../components/StytchProvider';
import Link from 'next/link';
import { useStytchB2BClient, useStytchMemberSession } from '@stytch/nextjs/b2b';
import { useRouter } from 'next/navigation';


function StytchProviderWrapper({ children }: { children: React.ReactNode }) {
    return (
        <StytchProvider>
            <body>
                <div className="page-container">
                    <SideNav />
                    <main className="content-container">{children}</main>
                </div>
            </body>
        </StytchProvider>
    );
}

export default StytchProviderWrapper;


const SideNav = () => {
    const stytch = useStytchB2BClient();
    const { session } = useStytchMemberSession();
    const router = useRouter();

    const handleLogOut = () => {
        stytch.session.revoke().then(() => {
            router.replace('/');
        });
    };

    if (!session) {
        return null;
    }
    return (
        <nav className="sidebar">
            <div className="sidebar-top-links">
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/members">Members</Link>
                <Link href="/settings">Settings</Link>
                <Link href="/sso">SSO</Link>
                <Link href="/scim">SCIM</Link>
            </div>
            <div className="logout-link" onClick={handleLogOut}>
                Log out
            </div>
        </nav>
    );
};
