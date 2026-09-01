import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSettings } from "@/contexts/SettingsContext";
import { brand } from "@/config/brand";

type Props = {
  firstName?: string;
};

export const WelcomeDialog = ({ firstName }: Props) => {
  const settings = useSettings();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem("show_welcome") === "1") {
        setOpen(true);
        localStorage.removeItem("show_welcome");
      }
    } catch {}
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg p-0 overflow-hidden">
        <div className="relative aspect-[4/3] w-full bg-muted">
          {settings.images?.welcome || brand.logo ? (
            <img
              src={settings.images?.welcome || brand.logo}
              alt={`Bem-vindo à ${brand.name}`}
              className="w-full h-full object-cover object-top"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-background to-muted">
              <span className="text-4xl font-display font-bold tracking-tighter text-brand">
                {brand.shortName
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent h-24" />
        </div>

        <div className="px-6 pb-6 pt-2 space-y-4">
          <div className="text-center">
            <p className="text-xs uppercase tracking-widest text-brand font-semibold">Bem-vindo à comunidade</p>
            <h2 className="font-display text-2xl font-bold mt-1">
              {firstName ? `Que bom ter você aqui, ${firstName}!` : "Que bom ter você aqui!"}
            </h2>
          </div>

          <div className="text-sm text-foreground/80 leading-relaxed space-y-3">
            <p>
              É um enorme prazer receber você na {brand.name}. Aqui você não é mais um número: é parte de uma comunidade que corre junto, vibra junto e cresce junto.
            </p>
            <p>
              Nosso compromisso é conectar pessoas através do movimento esportivo de rua. Encontre eventos, desafios e uma tribo que te impulsionam a ir mais longe.
            </p>
            <p className="font-medium text-foreground">
              Vamos juntos? O ritmo é seu, a comunidade é nossa.
            </p>
          </div>

          <div className="pt-2 border-t border-border">
            <p className="text-sm font-display font-semibold">{brand.name}</p>
            <p className="text-xs text-muted-foreground">{brand.slogan}</p>
          </div>

          <Button variant="brand" className="w-full" onClick={() => setOpen(false)}>
            Vamos lá
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
