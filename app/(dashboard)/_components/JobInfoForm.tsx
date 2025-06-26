"use client";

import { AutosizeTextarea, AutosizeTextAreaRef } from "@/components/ui/autosize-textarea";
import { Button } from "@/components/ui/button";
import { useUser, useSignIn } from "@clerk/nextjs";
import { SendIcon } from "lucide-react";
import React, { useRef, useState } from "react";

const JobInfoForm = () => {
  const { isSignedIn, user } = useUser();
  const { openSignIn } = useSignIn();
  const [jobDescription, setJobDescription] = useState("");
  const textareaRef = useRef<AutosizeTextAreaRef>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJobDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault();

    if (!isSignedIn || !user) {
        openSignInModal();   // This will open Clerk's sign-in modal
      return;
    }

    // Proceed with job submission logic
    console.log("Submitted job:", jobDescription);
  };

  return (
    <div className="pt-3 mb-3 z-10 mx-auto w-full max-w-2xl">
      <div
        className="flex flex-col border-[0.5px]
        border-zinc-300 mx-2 md:mx-0 items-stretch
        transition-all duration-200
        relative shadow-md
        rounded-2xl bg-white"
      >
        <div className="flex flex-col gap-3.5 m-3.5">
          <AutosizeTextarea
            ref={textareaRef}
            rows={3}
            maxHeight={180}
            minHeight={100}
            value={jobDescription}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                handleSubmit(e);
                textareaRef?.current?.textArea?.focus();
              }
            }}
            placeholder="Past job title & description"
            className="resize-none pr-12 text-base !border-0
              font-normal !shadow-none !ring-0
              focus-visible:!ring-offset-0
              focus-visible:!ring-0"
          />
        </div>
        <div className="flex w-full items-center justify-end px-5 py-2">
          <Button
            className="icon"
            onClick={handleSubmit}
            disabled={!jobDescription?.trim()}
          >
            <SendIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobInfoForm;
