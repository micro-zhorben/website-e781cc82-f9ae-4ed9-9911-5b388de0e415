import { Coffee } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";

export function RecommendationLoading() {
  return (
    <Card className="w-full max-w-xl">
      <CardContent className="flex flex-col items-center justify-center space-y-4 p-8">
        <Coffee className="h-12 w-12 animate-pulse text-primary" />
        <Typography.H3 className="text-center">
          Brewing Your Perfect Match
        </Typography.H3>
        <Typography.P className="text-center text-muted-foreground">
          Our AI is analyzing your preferences to find the perfect coffee recommendations...
        </Typography.P>
        <div className="flex gap-2">
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
          <div className="h-2 w-2 animate-bounce rounded-full bg-primary" />
        </div>
      </CardContent>
    </Card>
  );
}