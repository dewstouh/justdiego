import { createStaticDocumentPage } from "../../../lib/createDocumentPage";

const { generateMetadata, Page } = createStaticDocumentPage({
    slug: "about",
    path: "/guides/about"
});

export { generateMetadata };
export default Page;