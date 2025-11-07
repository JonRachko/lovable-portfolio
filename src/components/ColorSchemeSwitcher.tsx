import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";

type ColorScheme = "blue" | "purple" | "purple-dark" | "purple-gradient" | "dark-blue" | "sunrise" | "mint";

const schemes = [
  { id: "dark-blue" as ColorScheme, name: "Dark Blue", color: "#020c45", description: "Dark Mode, But Lighter" },
  { id: "blue" as ColorScheme, name: "Ocean Blue", color: "#0BA5EC", description: "Techy Vibes" },
  { id: "purple" as ColorScheme, name: "Lavender Light", color: "#F5F0FF", description: "Soft and Dreamy" },
  { id: "purple-dark" as ColorScheme, name: "Purple Dark", color: "#1A0B2E", description: "Deep and Mysterious" },
  { id: "purple-gradient" as ColorScheme, name: "Very Purple", color: "#3D0066", description: "If You Like Purple" },
  { id: "sunrise" as ColorScheme, name: "Sunrise Yellow", color: "#FDB930", description: "For the Optimists" },
  { id: "mint" as ColorScheme, name: "Mint Green", color: "#10B981", description: "Made From 100% Recycled Pixels" },
];

const ColorSchemeSwitcher = () => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>("dark-blue");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("colorScheme") as ColorScheme;
    if (saved && schemes.find((s) => s.id === saved)) {
      setCurrentScheme(saved);
      applyScheme(saved);
    } else {
      // Apply default theme
      applyScheme("dark-blue");
    }
  }, []);

  const applyScheme = (scheme: ColorScheme) => {
    const root = document.documentElement;
    if (scheme === "dark-blue") {
      root.setAttribute("data-theme", "dark-blue");
    } else if (scheme === "blue") {
      root.removeAttribute("data-theme");
    } else {
      root.setAttribute("data-theme", scheme);
    }
  };

  const handleSchemeChange = (scheme: ColorScheme) => {
    setCurrentScheme(scheme);
    applyScheme(scheme);
    localStorage.setItem("colorScheme", scheme);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="mb-4 shadow-xl animate-fade-in">
          <CardContent className="p-4 space-y-3 w-64">
            <div className="flex items-center gap-2 mb-2">
              <Palette size={16} className="text-primary" />
              <span className="font-semibold text-sm">Choose Color Scheme</span>
            </div>
            {schemes.map((scheme) => (
              <button
                key={scheme.id}
                onClick={() => handleSchemeChange(scheme.id)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all hover:shadow-md ${
                  currentScheme === scheme.id ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: scheme.color }} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{scheme.name}</div>
                    <div className="text-xs text-muted-foreground">{scheme.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-3">
        <Button size="lg" onClick={() => setIsOpen(!isOpen)} className="rounded-full w-14 h-14 shadow-lg">
          {isOpen && (
            <span className="text-sm font-medium text-foreground bg-card px-3 py-2 rounded-lg shadow-md animate-fade-in">
              Choose a theme!
            </span>
          )}
          <Palette size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ColorSchemeSwitcher;
