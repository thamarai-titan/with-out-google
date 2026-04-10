'use client';
import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-(--text-primary) text-sm font-bold">
            {time}
        </div>
    );
}