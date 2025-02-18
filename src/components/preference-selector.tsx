import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Slider } from "@/components/ui/slider";

interface PreferenceSelectorProps {
  onPreferencesSubmit: (preferences: {
    strength: number;
    bitterness: number;
    acidity: number;
  }) => void;
}

export function PreferenceSelector({ onPreferencesSubmit }: PreferenceSelectorProps) {
  const [preferences, setPreferences] = useState({
    strength: 3,
    bitterness: 3,
    acidity: 3,
  });

  const handleSubmit = () => {
    onPreferencesSubmit(preferences);
  };

  return (
    <Card className="w-full max-w-xl">
      <CardHeader>
        <CardTitle>Coffee Preferences</CardTitle>
        <Typography.P className="text-muted-foreground">
          Tell us your taste preferences to get personalized recommendations
        </Typography.P>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Typography.Small>Strength Preference</Typography.Small>
            <Slider
              value={[preferences.strength]}
              min={1}
              max={5}
              step={1}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, strength: value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Typography.Small>Bitterness Level</Typography.Small>
            <Slider
              value={[preferences.bitterness]}
              min={1}
              max={5}
              step={1}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, bitterness: value }))
              }
            />
          </div>

          <div className="space-y-2">
            <Typography.Small>Acidity Level</Typography.Small>
            <Slider
              value={[preferences.acidity]}
              min={1}
              max={5}
              step={1}
              onValueChange={([value]) =>
                setPreferences((prev) => ({ ...prev, acidity: value }))
              }
            />
          </div>
        </div>

        <Button onClick={handleSubmit} className="w-full">
          Get Recommendations
        </Button>
      </CardContent>
    </Card>
  );
}