import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Palette } from "lucide-react";

type ColorScheme = "blue" | "purple" | "coral" | "mint";

const schemes = [
  { id: "blue" as ColorScheme, name: "Blue/Teal", color: "#0BA5EC", description: "Professional & Tech-friendly" },
  { id: "purple" as ColorScheme, name: "Purple/Violet", color: "#8B5CF6", description: "Creative & Artistic" },
  { id: "coral" as ColorScheme, name: "Coral/Orange", color: "#F97316", description: "Energetic & Approachable" },
  { id: "mint" as ColorScheme, name: "Mint/Green", color: "#10B981", description: "Modern & Clean" },
];

const ColorSchemeSwitcher = () => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>("blue");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("colorScheme") as ColorScheme;
    if (saved && schemes.find(s => s.id === saved)) {
      setCurrentScheme(saved);
      applyScheme(saved);
    }
  }, []);

  const applyScheme = (scheme: ColorScheme) => {
    const root = document.documentElement;
    if (scheme === "blue") {
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
                  currentScheme === scheme.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full"
                    style={{ backgroundColor: scheme.color }}
                  />
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
      
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full w-14 h-14 shadow-lg"
      >
        <Palette size={24} />
      </Button>
    </div>
  );
};

export default ColorSchemeSwitcher;
