import React from "react";
import SubscriptionSelection from "./selection";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

export default function AccountSubscription({}: Props) {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-2">Subcriptions</h1>
      <hr />
      <br />
      <div className="border rounded-md p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl">Current Plan: Free</h1>
          <p>You have 1 trial left to use</p>
        </div>
        <div className="text-right">
          <p>
            Reward Point: <b>412</b>
          </p>
          <Button variant={"link"} className="gap-2">
            Use Reward Points for more trails <ArrowRight size={14} />
          </Button>
        </div>
      </div>
      <br />
      <h1 className="text-xl font-medium">Upgrade your plan</h1>
      <br />
      <SubscriptionSelection />
    </div>
  );
}
