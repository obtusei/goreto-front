import AccountSubscription from "@/components/subcription";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy } from "lucide-react";
import BasicProfile from "./BasicProfile";

type Props = {};

export default function AccountPage({}: Props) {
  return (
    <div className="p-4 md:p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Account</h1>
        <div className="flex gap-2 items-center opacity-70j">
          <Trophy size={18} />
          <p>415 points</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="flex items-center justify-center">
        <Tabs defaultValue="account" className="w-1/2 h-1/2">
          <TabsList className="">
            <TabsTrigger value="account">Basic Profile</TabsTrigger>
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="py-6">
            <BasicProfile />
          </TabsContent>
          <TabsContent value="subscription" className="py-6">
            <AccountSubscription />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
