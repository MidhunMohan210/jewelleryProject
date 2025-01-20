/* eslint-disable react/prop-types */

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

function Alert({ triggerText, title, description, onConfirm, theme }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{triggerText || "Open"}</AlertDialogTrigger>
      <AlertDialogContent
        className={`bg-${theme?.background || "gray-800"} text-${theme?.text || "white"} rounded-lg shadow-lg`}
      >
        <AlertDialogHeader>
          <AlertDialogTitle className={`text-${theme?.title || "white"}`}>
            {title || "Are you sure?"}
          </AlertDialogTitle>
          <AlertDialogDescription className={`text-${theme?.description || "gray-400"}`}>
            {description || "This action cannot be undone."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={`py-2 px-4 bg-${theme?.cancelBg || "gray-700"} text-${theme?.cancelText || "white"} rounded`}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={onConfirm}
            className={`py-2 px-4 bg-${theme?.confirmBg || "red-500"} text-${theme?.confirmText || "white"} rounded`}
          >
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
