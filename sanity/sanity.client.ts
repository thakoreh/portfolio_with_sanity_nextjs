
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "rqj6hx4f",
  dataset: "production",
  apiVersion: "2023-07-29",
  useCdn: false,
};

const client = createClient(config);

export default client;