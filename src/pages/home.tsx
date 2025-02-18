import { useState } from "react";
import { CoffeeHeader } from "@/components/coffee-header";
import { Typography } from "@/components/ui/typography";
import { PreferenceSelector } from "@/components/preference-selector";
import { RecommendationLoading } from "@/components/recommendation-loading";
import { CoffeeCard } from "@/components/coffee-card";

// Mock data for coffee recommendations
const COFFEE_RECOMMENDATIONS = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Bright and complex with floral notes, bergamot, and citrus. A light-bodied coffee with wine-like acidity.",
    strength: 3,
    roastLevel: "Light",
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced with caramel sweetness, nutty undertones, and a smooth chocolate finish.",
    strength: 4,
    roastLevel: "Medium",
  },
  {
    id: 3,
    name: "Sumatra Mandheling",
    description: "Full-bodied with earthy, herbal notes and a spicy finish. Low acidity with a rich, smooth texture.",
    strength: 5,
    roastLevel: "Dark",
  },
];

export function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handlePreferencesSubmit = (preferences: {
    strength: number;
    bitterness: number;
    acidity: number;
  }) => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setShowRecommendations(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen">
      <CoffeeHeader />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl space-y-8">
          {!showRecommendations && !isLoading && (
            <div className="space-y-4 text-center">
              <Typography.H1>Find Your Perfect Coffee Match</Typography.H1>
              <Typography.Lead>
                Let our AI guide you to your ideal coffee blend based on your taste preferences
              </Typography.Lead>
            </div>
          )}

          {!showRecommendations && !isLoading && (
            <div className="flex justify-center">
              <PreferenceSelector onPreferencesSubmit={handlePreferencesSubmit} />
            </div>
          )}

          {isLoading && (
            <div className="flex justify-center">
              <RecommendationLoading />
            </div>
          )}

          {showRecommendations && !isLoading && (
            <div className="space-y-6">
              <div className="text-center">
                <Typography.H2>Your Personalized Coffee Recommendations</Typography.H2>
                <Typography.Muted>
                  Based on your preferences, we think you'll love these coffee blends
                </Typography.Muted>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {COFFEE_RECOMMENDATIONS.map((coffee) => (
                  <CoffeeCard
                    key={coffee.id}
                    name={coffee.name}
                    description={coffee.description}
                    strength={coffee.strength}
                    roastLevel={coffee.roastLevel}
                    onSelect={() => {
                      // Handle selection
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}