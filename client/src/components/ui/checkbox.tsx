import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      // Базовые стили
      "peer h-4 w-4 shrink-0 rounded-sm border",
      
      // Состояние по умолчанию: бежевая обводка, белый фон
      "border-beige bg-white",
      
      // Состояние при выборе: beige фон, темно-коричневая галочка
      "data-[state=checked]:bg-beige data-[state=checked]:border-beige data-[state=checked]:text-brown-dark",
      
      // Фокус и hover состояния
      "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beige/30 focus-visible:ring-offset-2",
      "hover:border-beige/80 hover:data-[state=checked]:border-beige",
      
      // Отключенное состояние
      "disabled:cursor-not-allowed disabled:opacity-50",
      
      // Анимация
      "transition-all duration-200 ease-out",
      
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-3.5 w-3.5 stroke-[2]" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }