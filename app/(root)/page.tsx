"use client";

import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
  return (
    <>
      <div className="p-4">
        {/* Mount the UserButton component */}
        <Modal title="Test" description="Desc" isOpen={true} onClose={() => {}}>
          Children
        </Modal>
        <UserButton />
      </div>
    </>
  );
};

export default SetupPage;
