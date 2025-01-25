import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Highlight, themes } from "prism-react-renderer";

const codeString = `import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";
  
  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    
    if (error) {
      return NextResponse.redirect(
        \`\${origin}/auth/error?error=\${encodeURIComponent(error.message)}\`
      );
    }
  }
  
  return NextResponse.redirect(
    \`/api/auth/complete?provider=google&next=\${next}\`
  );
}`;

export function CodePreview() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between p-4 px-6 pb-0">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
        </div>
        <span className="ml-2 text-sm text-muted-foreground">Project</span>
      </CardHeader>
      <CardContent className="p-0">
        <Highlight
          theme={{
            ...themes.dracula,
            plain: {
              ...themes.dracula.plain,
              backgroundColor: "transparent",
            },
          }}
          code={codeString}
          language="typescript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className="overflow-x-auto p-4"
              style={{ ...style, background: "transparent" }}
            >
              {tokens.map((line, i) => (
                <div
                  key={i}
                  {...getLineProps({
                    line,
                    style: { background: "transparent" },
                  })}
                >
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </CardContent>
    </Card>
  );
}
