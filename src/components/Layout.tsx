import Head from "next/head";
import React, { FC, ReactNode } from "react";
type Props = {
  title: string;
  children: ReactNode;
};

export const Layout: FC<Props> = ({ title = "t3 stack", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className="item-center container mx-auto flex min-h-screen flex-col justify-center">
        {children}
      </main>
    </>
  );
};