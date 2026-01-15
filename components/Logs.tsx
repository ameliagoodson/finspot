"use client";

import { useEffect, useState } from "react";
import { Log } from "@/generated/prisma/browser";

const Logs = () => {
  // Define state
  const [logs, setLogs] = useState<Log[]>([]);

  // Fetch logs
  useEffect(() => {
    const fetchLogs = async () => {
      const url = "/api/logs";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

        setLogs(result);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div>
      {logs.map((log) => {
        return (
          <div key={log.id}>
            <p>{log.notes}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Logs;
