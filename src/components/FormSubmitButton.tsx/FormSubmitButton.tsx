'use client'

import React from "react"
import { useFormStatus } from "react-dom"

import { Button } from "../ui/button"
import { Loader2 } from "lucide-react"

function FormSubmitButton(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { pending } = useFormStatus()
    
    return <Button {...props} type="submit" disabled={props.disabled || pending} >
        <div className="flex items-center justify-center gap-1">
            {pending && <Loader2 size={14} className="animate-spin" />}
            {props.children}
        </div>
    </Button>
}

export default FormSubmitButton