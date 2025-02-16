"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
function DataUpload() {
    return (
        <div>
            <Tabs>
                <TabsList>
                    <TabsTrigger value="customers">Customers</TabsTrigger>
                    <TabsTrigger value="accounts">Accounts</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                </TabsList>
                {/*  <TabsContent value="customers">
                    <EntitiesUpload />
                </TabsContent>
                <TabsContent value="accounts">
                    <AccountsUpload />
                </TabsContent> */}
            </Tabs>
        </div>
    );
}

export default DataUpload;