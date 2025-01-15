"use client";
import * as React from "react";
import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

export function CommandSearch() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="">
      <p className="text-sm text-gray-400 cursor-pointer">
        <Search onClick={() => setOpen(true)} size={20} />
      </p>
      <CommandDialog
        className=""
        open={open}
        onOpenChange={setOpen}
      >
        <CommandInput
          placeholder="Search..."
          className="text-gray-200 placeholder:text-gray-500 bg-gray-900"
        />
        <CommandList className="bg-gray-900 text-gray-200 pb-2">
          <CommandEmpty className="text-gray-400 p-3">
            No results found.
          </CommandEmpty>
          <CommandGroup heading="Suggestions" className="text-gray-400">
            <CommandItem className="hover:bg-gray-800 bg-gray-800   hover:text-gray-200">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem className="hover:bg-gray-800 hover:text-gray-200">
              <Smile className="w-4 h-4 mr-2 text-gray-400" />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem className="hover:bg-gray-800 hover:text-gray-200">
              <Calculator className="w-4 h-4 mr-2 text-gray-400" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator className="bg-gray-800" />
          <CommandGroup heading="Settings" className="text-gray-400">
            <CommandItem className="hover:bg-gray-800 hover:text-gray-200">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              <span>Profile</span>
              <CommandShortcut className="text-gray-500">⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:bg-gray-800 hover:text-gray-200">
              <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
              <span>Billing</span>
              <CommandShortcut className="text-gray-500">⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem className="hover:bg-gray-800 hover:text-gray-200">
              <Settings className="w-4 h-4 mr-2 text-gray-400" />
              <span>Settings</span>
              <CommandShortcut className="text-gray-500">⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  );
}
