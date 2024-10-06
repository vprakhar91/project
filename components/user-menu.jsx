"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesColumn } from "lucide-react";

const UserMenu = () => {
  return (
    <div>
      <UserButton
        appeareance={{
          elemets: {
            avatarBox: "w-10 h-10",
          },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            label="My Events"
            labelIcon={<ChartNoAxesColumn size={15} />}
            href="/events"
          />
          <UserButton.Action label="manageAccount"/>
        </UserButton.MenuItems>
      </UserButton>
    </div>
  );
};

export default UserMenu;
