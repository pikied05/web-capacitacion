import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../../components/builder";
import type { AppProps } from "next/app";
import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic'
 


// Builder Public API Key set in .env file
builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface PageProps {
  params: {
    page: string[];
    
  };
}

export default async function App(props: PageProps) {
  const builderModelName = "figma-imports";

  const content = await builder
    // Get the page content from Builder with the specified options
    .get(builderModelName, {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />
    </>
  );
}
