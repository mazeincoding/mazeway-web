interface SecurityMessage {
  type: "error" | "warning";
  timestamp: string;
  message: string;
}

const securityMessages: SecurityMessage[] = [
  {
    type: "error",
    timestamp: "2023-05-17",
    message: "You don't have permissions to access /api/auth/device-sessions",
  },
  {
    type: "warning",
    timestamp: "2023-05-17",
    message: "Security features disabled for unknown device",
  },
  {
    type: "warning",
    timestamp: "2023-05-17",
    message: "Unknown device logged in. Verification needed",
  },
  {
    type: "error",
    timestamp: "2023-05-17",
    message: "You cannot modify 'is_trusted' with the current key.",
  },
  {
    type: "error",
    timestamp: "2023-05-17",
    message: "You cannot modify 'needs_verification' with the current key.",
  },
];

export function SecurityFeatures() {
  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">As secure as it gets</h2>
        <p className="text-lg text-muted-foreground">
          Every possible security hole you can think of is already filled.
        </p>
      </div>

      <div className="bg-zinc-900 rounded-lg overflow-hidden">
        <div className="grid grid-cols-[auto_1fr_2fr] gap-4 p-4 text-sm border-b border-zinc-800">
          <div className="font-medium">Status</div>
          <div className="font-medium">Timestamp</div>
          <div className="font-medium">Message</div>
        </div>
        <div className="divide-y divide-zinc-800">
          {securityMessages.map((msg, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_2fr] gap-4 p-4 text-sm items-center"
            >
              <div>
                <div
                  className={`w-2 h-2 rounded-full ${
                    msg.type === "error" ? "bg-red-500" : "bg-yellow-500"
                  }`}
                />
              </div>
              <div className="text-zinc-400">{msg.timestamp}</div>
              <div>{msg.message}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
