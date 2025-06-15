
import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="text-white">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      {/* Move viewport to bottom right, full width on mobile */}
      <ToastViewport className="fixed bottom-0 right-0 z-[100] flex flex-col max-h-screen w-full p-4 sm:w-[420px] sm:bottom-0 sm:right-0 sm:left-auto sm:top-auto" />
    </ToastProvider>
  )
}
