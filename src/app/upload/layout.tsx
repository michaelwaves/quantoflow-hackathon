import { CircleUser, FileText, CreditCard } from "lucide-react";

function DashboardLayout({ children }: { children: React.ReactNode }) {

    const navdata = [
        {
            href: "/upload/entities",
            name: "Entities",
            icon: CircleUser
        },
        {
            href: "/upload/accounts",
            name: "Accounts",
            icon: CreditCard
        },
        {
            href: "/upload/transactions",
            name: "Transactions",
            icon: FileText
        }
    ];


    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div>

            </div>
            <div className="text-center text-xl">
                <br></br>
                Please upload your Customers, Accounts, Transactions data below in the exact order.
                <br></br>
                Accounts must have an entity_id column, and transactions must have an account_id column
                {/* Navbar */}
                <nav className="bg-gray-800 text-white shadow-md p-4">
                    <div className="flex items-center space-x-4">
                        {navdata.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="flex items-center space-x-2 hover:bg-gray-700 px-3 py-2 rounded-md"
                            >
                                <item.icon size={20} />
                                <span>{item.name}</span>
                            </a>
                        ))}
                    </div>
                </nav>
                {children}
            </div>
        </div>
    );
}

export default DashboardLayout;