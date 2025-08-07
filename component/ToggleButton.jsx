import { useState, useEffect } from "react";

export const ToggleButton = ({ estado }) => {
    const [enabled, setEnabled] = useState(estado);
    useEffect(() => {
        setEnabled(estado);
    }, [estado]);

    const change = () => {
        setEnabled(!enabled)
    }
    return (
        <button
            onClick={change}
            className={`relative inline-flex items-center h-6 w-11 rounded-full transition-colors duration-300 ${enabled ? "bg-p-red-700" : "bg-gray-400"
                }`}
        >
            <span
                className={`inline-block w-5 h-5 transform bg-white rounded-full transition-transform duration-300 ${enabled ? "translate-x-5" : "translate-x-1"
                    }`}
            />
        </button>
    );
}