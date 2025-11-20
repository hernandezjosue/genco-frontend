import type {Metadata} from "next";
import "@/styles/globals.css";
import {fontVariables} from "@/lib/font";

import {siteConfig} from "@/lib/config";
import React from "react";

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name}`,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${fontVariables} antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
