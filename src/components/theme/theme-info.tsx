"use client";

import { useContext } from "react";

import { ThemeContext } from "./theme-provider.js";
import { BodyText, Heading } from "../typography/index.js";
import { Card } from "../ui/index.js";

const ThemeInfo = (): React.ReactElement | null => {
  const context = useContext(ThemeContext);

  if (!context) return null;

  return (
    <Card
      backgroundColor="var(--color-accent)"
      color="text-center text-primary-color"
      gap="gap-2"
    >
      <Heading type="h2">Thème « {context.currentTheme.name} »</Heading>

      {context.currentTheme.author && (
        <BodyText className="mx-auto">
          Par{" "}
          {context.currentTheme.authorUrl ? (
            <a
              href={context.currentTheme.authorUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {context.currentTheme.author}
            </a>
          ) : (
            context.currentTheme.author
          )}
        </BodyText>
      )}
    </Card>
  );
};

export default ThemeInfo;
