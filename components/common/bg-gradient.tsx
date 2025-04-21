// export default function BgGradient() {
//   return (
//     <div className="fixed inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />
//   );
// }

import * as React from "react"
import { cn } from "@/lib/utils"

export default function BgGradient({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("relative isolate", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-30"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg]
          bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500
          opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
          style={{
            clipPath:
              "polygon(0% 0%, 61% 35%, 90% 58%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 24% 35%, 39% 35%)",
          }}
        />
      </div>

      {children}
    </div>
  )
}
