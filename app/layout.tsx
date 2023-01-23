"use client";

import { LanguageProvider } from "../hoc/languageProvider";
import ErrorBoundary from "../hoc/errorBoundary";
import { SignInProvider } from "../hoc/signInProvider";
import { ToasterProvider } from "../hoc/toasterProvider";

import MuiThemeProvider from "../theme/ThemeProvider";

import "./layout.css";
import { ILayoutTypes } from "./layout.types";

export default function Layout({ children }: ILayoutTypes) {
  return (
    <html lang="en">
      <body>
        <>
          <MuiThemeProvider>
            <SignInProvider>
              <LanguageProvider>
                <ErrorBoundary>
                  <ToasterProvider>{children}</ToasterProvider>
                </ErrorBoundary>
              </LanguageProvider>
            </SignInProvider>
          </MuiThemeProvider>
        </>
      </body>
    </html>
  );
}
