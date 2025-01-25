import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Highlight, themes } from "prism-react-renderer";
import { Button } from "@/components/ui/button";

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
      <CardHeader className="flex-col space-y-3 p-4 px-6 pb-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <span className="text-sm text-muted-foreground">Project</span>
        </div>
        <div className="flex gap-2">
          <Button variant="default" size="sm" className="h-7 text-xs">
            auth.ts
          </Button>
          <Button variant="secondary" size="sm" className="h-7 text-xs">
            middleware.ts
          </Button>
        </div>
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
          {({ style, tokens, getLineProps, getTokenProps }) => (
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
