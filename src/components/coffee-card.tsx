import { Coffee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  name: string;
  description: string;
  strength: number;
  roastLevel: string;
  onSelect?: () => void;
}

export function CoffeeCard({
  name,
  description,
  strength,
  roastLevel,
  onSelect,
}: CoffeeCardProps) {
  return (
    <Card className="group overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <CardTitle className="line-clamp-1">{name}</CardTitle>
          <Coffee className="text-primary" />
        </div>
        <div className="flex gap-2">
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
            Strength: {strength}/5
          </span>
          <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors">
            {roastLevel} Roast
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <Typography.P className="line-clamp-2 text-muted-foreground">
          {description}
        </Typography.P>
        <Button
          onClick={onSelect}
          className="w-full transition-transform hover:scale-[1.02]"
        >
          Select This Blend
        </Button>
      </CardContent>
    </Card>
  );
}