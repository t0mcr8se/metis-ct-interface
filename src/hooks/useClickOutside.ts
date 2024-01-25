import { useEffect } from "react";

export function useClickOutside(ref, setState) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                ref.current.blur()
                setState(false)
                document.body.style.overflow = 'auto'
            }
        }
        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [ref, setState])
}