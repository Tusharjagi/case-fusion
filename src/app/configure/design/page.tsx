import { db } from "../../../db/index";
import { notFound } from "next/navigation";
import DesignConfigurator from "./DesignConfigurator";

type PageProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

const Page = async ({ searchParams }: PageProps) => {
  const { id } = searchParams;
  console.log(id);

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  const { imageUrl, width, height } = configuration;

  return <DesignConfigurator configId={configuration.id} imageDimensions={{ width, height }} imageUrl={imageUrl} />;
};

export default Page;
