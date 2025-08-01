# Changelog

## [1.3.0](https://github.com/dewstouh/justdiego/compare/v1.2.0...v1.3.0) (2025-07-17)


### Features

* **web:** add api endpoint to get and update documents ([52acca8](https://github.com/dewstouh/justdiego/commit/52acca8e62a7cf2fcec8445a2e904c35b074f4d9))
* **web:** add api endpoint to get, update and delete document ([629233b](https://github.com/dewstouh/justdiego/commit/629233b90b51ad4d5a1dad5039c6bf8990b96c5f))
* **web:** add docuent dashboard to manage the documents ([bad0cfc](https://github.com/dewstouh/justdiego/commit/bad0cfc585c102f075ddacbeb364428f54dfd494))
* **web:** add documents link to admin nav ([c345687](https://github.com/dewstouh/justdiego/commit/c345687758b5ab1aeba89a4d03904da3fd6dc08c))

## [1.2.0](https://github.com/dewstouh/justdiego/compare/v1.1.0...v1.2.0) (2025-07-17)


### Features

* **web/admin:** add navigation href to manage users, companies, and technologies ([27f8188](https://github.com/dewstouh/justdiego/commit/27f818846c55bd3a54812acf7a582e9402f7fc6d))
* **web:** add API endpoints to manage companies, solutions, tags, technologies and users ([691d543](https://github.com/dewstouh/justdiego/commit/691d5434b152e732ad85be8b372e344b05ce23cf))
* **web:** add dashboard forms to manage companies, tags, technologies and users ([5f43822](https://github.com/dewstouh/justdiego/commit/5f43822ac0414a9e8330a6e395f703bb0e5bdbef))
* **web:** display review attachments ([c2923a9](https://github.com/dewstouh/justdiego/commit/c2923a9e9c224c4d6b93dd21c6ebeed953a9fcd1))
* **web:** increase displayed solutions from 2 to 3 in SolutionsList ([09ee757](https://github.com/dewstouh/justdiego/commit/09ee7571814e13d6738e2ef63c3b11fa57d1caae))


### Bug Fixes

* **web:** await params in api endpoints ([b177256](https://github.com/dewstouh/justdiego/commit/b17725620bdc411797622e2c84ea59963c8ea94a))
* **web:** client review was using normal attachemnts instead of review attachments ([02dd9f1](https://github.com/dewstouh/justdiego/commit/02dd9f11537217bd294a1979b203a26b566dd0bf))
* **web:** prevent rendering components with empty technicalDetails, challenges or outcomes ([1f186b4](https://github.com/dewstouh/justdiego/commit/1f186b4651671a716aac9c6e83b17357330c85bb))

## [1.1.0](https://github.com/dewstouh/justdiego/compare/v1.0.0...v1.1.0) (2025-07-16)


### Features

* add build script for each package and set build path to dist on base.json ([1750b52](https://github.com/dewstouh/justdiego/commit/1750b5268ea4b9e16c5d1b6fb732990c0f0d7986))
* add build script for each package and set build path to dist on… ([672c337](https://github.com/dewstouh/justdiego/commit/672c3378bf474acfd376ef4678ac47e2a86693e3))
* **turbo:** add DATABASE_URL on globalEnv ([9b09b88](https://github.com/dewstouh/justdiego/commit/9b09b88002c7c9a0ae0227bbde7f4665c086909f))
* **turbo:** add environment variables as global environment ([2638c70](https://github.com/dewstouh/justdiego/commit/2638c70263b68d60515060a3c35d5094dc42d83a))
* **turbo:** add start task ([4347248](https://github.com/dewstouh/justdiego/commit/4347248414da818f1afd6f877eea084b39e81c24))


### Bug Fixes

* **db:** handle missing technology description in search filter ([ce6368a](https://github.com/dewstouh/justdiego/commit/ce6368a6c367794abb55fe734eb506f88c1df376))
* **eslint-config:** remove unneeded build script on eslint-config ([7ea45fb](https://github.com/dewstouh/justdiego/commit/7ea45fb558ea438a8472f5e1925052584c0e3623))
* initialize resend lazily to avoid build time errors and add DATABASE_URL to global env config in turbo.json ([f73cc9f](https://github.com/dewstouh/justdiego/commit/f73cc9f918ff93d58d30f9012e60f945cd477d54))
* initialize resend lazily to avoid build time errors and add DATABASE_URL to global env config in turbo.json ([f73cc9f](https://github.com/dewstouh/justdiego/commit/f73cc9f918ff93d58d30f9012e60f945cd477d54))
* **react-utils:** move build script to scripts instead of devdependencies ([4a10a8a](https://github.com/dewstouh/justdiego/commit/4a10a8ac5135da63632efeb46a2143affa8b3b32))
* **types:** make GuidePageProps.params a Promise to match async params usage ([3edf43d](https://github.com/dewstouh/justdiego/commit/3edf43df2a3c7af914b89b11b85bb4fc3f1480d7))
* **web:** add environment variables in turbo config ([5971f7f](https://github.com/dewstouh/justdiego/commit/5971f7f55b07bea1a1a4ab8cba232ea7ba84c817))
* **web:** add use client to countrysearchexample component ([ee214e8](https://github.com/dewstouh/justdiego/commit/ee214e83cf46e49be4599296a7e331327511447d))
* **web:** duplicated view study solution button ([39e634e](https://github.com/dewstouh/justdiego/commit/39e634e666faa75c408520e380d3d6a085e32f0e))
* **web:** duplicated view study solution button ([fc09067](https://github.com/dewstouh/justdiego/commit/fc090673ba02ca341115a6cea40a370c7d5596c9))
* **web:** sent email alert not showing due to form reset applying before alert ([84a57c4](https://github.com/dewstouh/justdiego/commit/84a57c46601d0306122e912e8e7e326979555fbf))
* **web:** sent email alert not showing due to form reset applying before alert ([b47fabb](https://github.com/dewstouh/justdiego/commit/b47fabbff3ce9ad7de6272ae851df5575868ce41))
* **web:** serve unoptimized images to ensure loading from external sources ([90208e6](https://github.com/dewstouh/justdiego/commit/90208e60daa1ce499a05d3644d19888a6c59eebe))
* **web:** serve unoptimized images to ensure loading from external sources ([90208e6](https://github.com/dewstouh/justdiego/commit/90208e60daa1ce499a05d3644d19888a6c59eebe))
* **web:** serve unoptimized images to ensure loading from external sources ([f115856](https://github.com/dewstouh/justdiego/commit/f1158564e7d90acccf662333689306a21085bc20))

## 1.0.0 (2025-07-16)


### Features

* add assets for docs (preview.png) ([64359d1](https://github.com/dewstouh/justdiego/commit/64359d18c3d4d49ee5a09099e1f321fbc95eb4ec))
* **assets:** add before and after cache strat ([88a5d3b](https://github.com/dewstouh/justdiego/commit/88a5d3bd0855156f7353033381f796abdc66851e))
* **constants:** add default website data information ([0c89962](https://github.com/dewstouh/justdiego/commit/0c899627f5274a4f4b986cd85603b9a360854057))
* **create-turbo:** apply official-starter transform ([2e15a79](https://github.com/dewstouh/justdiego/commit/2e15a799ae364af9f36da3020d527fa8dc8c6080))
* **create-turbo:** apply pnpm-eslint transform ([0fcbb7e](https://github.com/dewstouh/justdiego/commit/0fcbb7e79f72f88cddc50984383a9b846f070aab))
* **create-turbo:** create basic ([fa2d034](https://github.com/dewstouh/justdiego/commit/fa2d034b2c11f71cefef16274a5e7c132d9f44b3))
* **create-turbo:** install dependencies ([5e0725d](https://github.com/dewstouh/justdiego/commit/5e0725d9229206f040bd403eed394f06247104e5))
* **db/mock:** add 'home' path in navigations mock ([3c71e60](https://github.com/dewstouh/justdiego/commit/3c71e606daf515ebcf1b4545f9dd4b67fb6a9aa5))
* **db/mocks:** add avatar urls to user mocks ([afe778b](https://github.com/dewstouh/justdiego/commit/afe778b901ad3114de70a8fc8ebed6a00b44ae2a))
* **db/prisma:** add zod generators ([d0325f5](https://github.com/dewstouh/justdiego/commit/d0325f5c455819921c9ccd1ae542fb3ad536722d))
* **db/seed:** add solutions mock import inside seed script ([8ed3c93](https://github.com/dewstouh/justdiego/commit/8ed3c931140c875145c61f3a495e8160feeae0be))
* **db:** add avatarUrl to user model ([6cb2cb4](https://github.com/dewstouh/justdiego/commit/6cb2cb4c965c19e1821f809d554603937b022285))
* **db:** add seed script to seed mock data ([95c068e](https://github.com/dewstouh/justdiego/commit/95c068e3926f5d401d2369fc6b2a53c608bb35f6))
* **db:** database ORM wrapper to ease the usage and orm swapping ([fd7552e](https://github.com/dewstouh/justdiego/commit/fd7552ec51256423f1a7afb7b80a7b2be83ffa4c))
* **db:** prepare prisma models for data ([9f13b4d](https://github.com/dewstouh/justdiego/commit/9f13b4dd147741d278da01704f733f3d22a031b0))
* **deps:** add db:migrate:reset command to reset migrations ([9028bce](https://github.com/dewstouh/justdiego/commit/9028bce1d2c1c7ba40e43ece12dfa4f0cfa86563))
* initial commit ([13f0e5a](https://github.com/dewstouh/justdiego/commit/13f0e5afeac2ee08df489d188ce300642a6accf2))
* **marketing:** add reusable Section template component ([cae1f9c](https://github.com/dewstouh/justdiego/commit/cae1f9c338181b97e74fea7d8768ae5a4f735ff3))
* **mocks:** add legal document mocks ([29f9598](https://github.com/dewstouh/justdiego/commit/29f95986c51edcf61df6c4536f67713741be6c5c))
* **mocks:** add mocks for countries, customers, projects, reviews, tags and technologies ([3dd91ef](https://github.com/dewstouh/justdiego/commit/3dd91efad498d12e56c4f943c47d109d262d9723))
* **mocks:** add website social medias ([e70d360](https://github.com/dewstouh/justdiego/commit/e70d3609d93b22d8766b27af68e5aaabbbf72896))
* **packages/mocks:** add dedicated package for data mocking ([20c3cfa](https://github.com/dewstouh/justdiego/commit/20c3cfa80c1a0913a32a462faba4568f60e451b3))
* **packages:** add constants package with mock solutions and typings ([3b6643a](https://github.com/dewstouh/justdiego/commit/3b6643ac73c527559e0ce6298e54dc311a2fa547))
* **packages:** add types package @justdiego/types ([6bfdc08](https://github.com/dewstouh/justdiego/commit/6bfdc0878f344446894f98eecda90ece998a4150))
* **packages:** add utils package with time utils ([f310f21](https://github.com/dewstouh/justdiego/commit/f310f21dbeab649f547d0a76cf059563ea64cd20))
* **packages:** react-utils global react utils, data fetching and caching using react-cache and other methods ([33ba71a](https://github.com/dewstouh/justdiego/commit/33ba71a92abc1b777fc58a5020cd8de390c24c9f))
* **react-utils:** add data fetching utilities for all entities (countries, customers, projects, reviews, solutions, tags, technologies) ([7fdc437](https://github.com/dewstouh/justdiego/commit/7fdc4372bff5e909c4a6dfba6f6e9dcaf36adf7c))
* **react-utils:** add legal document getters with caching ([52e194f](https://github.com/dewstouh/justdiego/commit/52e194f4ef72692bfa98f0f136860b63dae66e3f))
* **react-utils:** add renderers for markdown and heading ([05c0f19](https://github.com/dewstouh/justdiego/commit/05c0f19ea058bf4af37f39268a422d5d87369e51))
* **react-utils:** add string utils to extract text and slugify heading ([171c36c](https://github.com/dewstouh/justdiego/commit/171c36c6979ea33922b68589eb59677db322cd21))
* **react-utils:** add useActiveHeading hook to highlight the active heading ([af7150b](https://github.com/dewstouh/justdiego/commit/af7150baac399c1ef26633fc455891731d43f952))
* **react-utils:** create avatar component ([327677b](https://github.com/dewstouh/justdiego/commit/327677bdef945eda2214034e44e0696d28cffd7f))
* **react-utils:** utilities to get social medias ([76de0be](https://github.com/dewstouh/justdiego/commit/76de0beafcccffd9ed3fe0d82df3cf97ec546ccb))
* **types/Solution:** add title identifier in Solution model ([ada954b](https://github.com/dewstouh/justdiego/commit/ada954b3b5c0553514a8fca718dc911668a8c1eb))
* **types:** add LegalDocument interface ([4b81a0f](https://github.com/dewstouh/justdiego/commit/4b81a0f9246d4813d18bc981e5f15dc15b672d24))
* **types:** add QueryParams typing ([6624fa8](https://github.com/dewstouh/justdiego/commit/6624fa834ae490fb0debe3d38973096331333862))
* **typescript-config:** add @ paths to the typescript configuration compiler options ([fd24fd8](https://github.com/dewstouh/justdiego/commit/fd24fd8e95be8ad1b9b90586b6618f8f4f5dff25))
* **types:** export Customer interface from types ([b1a877f](https://github.com/dewstouh/justdiego/commit/b1a877f8231b52af94f9dce913d41b10412a123e))
* **ui:** add CTAButton component with variant styles for hero section ([3ffd1bb](https://github.com/dewstouh/justdiego/commit/3ffd1bb443d4be07c29ae9ce05950dbb9c164c8e))
* **utils:** add object util matchesfilter with &lt;T&gt; type for query filtering in objects ([484e10d](https://github.com/dewstouh/justdiego/commit/484e10d2714e33806f57d923e591e9a696d11787))
* **utils:** add string utils for transforming slugs to titles and viceversa, and extract markdown headings for markdown documents rendering ([bed8245](https://github.com/dewstouh/justdiego/commit/bed8245132f5b5463546d0969dd6f79132fb56a4))
* **web/admin:** add tags in solution dashboard ([a5330a3](https://github.com/dewstouh/justdiego/commit/a5330a37aef1ea227014b61ceb905d775119fb9e))
* **web/components:** add author to document page if exists ([cc3ebd9](https://github.com/dewstouh/justdiego/commit/cc3ebd904df237322112c823f12e3b3ba754cb98))
* **web/dashboard:** add country search for solutions form ([afeaef3](https://github.com/dewstouh/justdiego/commit/afeaef3822c89eedf27f4a4621a9385b3c105273))
* **web/hero:** add href to CTAButton for navigation to solutions page in hero ([b3240f1](https://github.com/dewstouh/justdiego/commit/b3240f102021e438259140c7d5faeef959849776))
* **web/hero:** display process steps and ghost link to scroll ([7d12e8c](https://github.com/dewstouh/justdiego/commit/7d12e8c9173d2a342a006c652eb9c290c76aa674))
* **web/marketing:** add /legal/&lt;legal-document&gt; path page ([a9c4bb2](https://github.com/dewstouh/justdiego/commit/a9c4bb2e85f16d254f16f3dbf926e15fd603d9d6))
* **web/marketing:** add contact page with form and calendly ([959040c](https://github.com/dewstouh/justdiego/commit/959040cc9584a0840a9a2025f4c749f3eec6fb63))
* **web/marketing:** add legal main page displaying all available legal documents ([dc10f28](https://github.com/dewstouh/justdiego/commit/dc10f281b67e69c132dcb0e808d0a91999cf10af))
* **web/marketing:** add PDF report studio for solutions ([3fc0958](https://github.com/dewstouh/justdiego/commit/3fc09585d9969cd0455e86d1b26981ebeaf0e5f6))
* **web/marketing:** add unique suspense in layout and remove dedicated SolutionList suspense ([2942ad8](https://github.com/dewstouh/justdiego/commit/2942ad876a7c44952a797c95ebe698c6593a5252))
* **web/solutions:** add id "solutions" to section for scroll on click "take a look" ([f94b29e](https://github.com/dewstouh/justdiego/commit/f94b29e90dbb5040630956e36d9ea065bde67508))
* **web/solutions:** implement AutoBreadcrumb component ([167dba3](https://github.com/dewstouh/justdiego/commit/167dba37fc00b3c6bf94076444f4060e3c3aa703))
* **web/utiles:** add generateMetadata function to generate metadata with base configuration ([441cf99](https://github.com/dewstouh/justdiego/commit/441cf99168c7739f569ef09e9ec1db1d1eeec76c))
* **web:** add "use cache" for solution slug and legal documents slug ([928f9f5](https://github.com/dewstouh/justdiego/commit/928f9f561a2ea50f68e98a19fdd6c2deff2d72d0))
* **web:** add admin api endpoints for dashboard ([e401d2b](https://github.com/dewstouh/justdiego/commit/e401d2b7ca0d6afa2caece2c62c4c31a385c8056))
* **web:** add admin dashboard components ([53c4e27](https://github.com/dewstouh/justdiego/commit/53c4e279212cd0855fb16ebc1b78861d5f0fe3ed))
* **web:** add admin dashboard layout and page to add solutions ([56157bf](https://github.com/dewstouh/justdiego/commit/56157bf1d621a969f9e7f62dc462bb19bed1e87f))
* **web:** add admin-auth verification lib ([d550d49](https://github.com/dewstouh/justdiego/commit/d550d49b4abfc7ce01d919eea434eaa0edffeb8f))
* **web:** add attachments in solution slug ([64c4e87](https://github.com/dewstouh/justdiego/commit/64c4e87353fae2e9976c9898b21abd0b8f4aa243))
* **web:** add color constants for color configuration ([1e8bc46](https://github.com/dewstouh/justdiego/commit/1e8bc46cc976bbade6d4d111bbfb6ebec78e4ec3))
* **web:** add consistent layout for marketing pages ([503e604](https://github.com/dewstouh/justdiego/commit/503e604dbec46b086b01853ff42f1b5e8d47cfa6))
* **web:** add CTA component ([12dc5c3](https://github.com/dewstouh/justdiego/commit/12dc5c37f0ca6fb1a6d61b90a888578647e152eb))
* **web:** add DefaultSuspense component and implement it in components that were using Suspense with same div ([1d2bef3](https://github.com/dewstouh/justdiego/commit/1d2bef3023fcfdcd883a3cfb09124b3e2d9ba1d7))
* **web:** add dynamic solution detail page ([slug]) ([94624ba](https://github.com/dewstouh/justdiego/commit/94624bae6fa9c084c6356486ce7e30f8e8aa1150))
* **web:** add footer, hero and navbar components ([2da8ba7](https://github.com/dewstouh/justdiego/commit/2da8ba7fe2314988141deb389891bd398fcbe949))
* **web:** add getSolutions action to get all solutionCases ([7dff704](https://github.com/dewstouh/justdiego/commit/7dff7042599046552ecb22e9f3b02b721838122c))
* **web:** add homepage with components, remove stylings ([e988c04](https://github.com/dewstouh/justdiego/commit/e988c045031dab90bbd0404b81ccf9fd72fc773f))
* **web:** add lib for data fetching with react-cache ([53129a7](https://github.com/dewstouh/justdiego/commit/53129a773f8d0d9e45394183491704f1f5c5cb4e))
* **web:** add middleware for localization path site.com/locale/page ([9ff10c3](https://github.com/dewstouh/justdiego/commit/9ff10c3aac523fd04035b0b260ceb3c8d4394acb))
* **web:** add navbar skeleton ([91b41fa](https://github.com/dewstouh/justdiego/commit/91b41fab65f48c1c2dcba2fc346aeb6202daeb8b))
* **web:** add Page component template for marketing pages ([1f97059](https://github.com/dewstouh/justdiego/commit/1f970596b0829e779f96a0c615d12992d92a6876))
* **web:** add solutions list in admin dashboard and edit solutions ([8620a7f](https://github.com/dewstouh/justdiego/commit/8620a7f6ad8d76477744737653b90e90a00fe6ab))
* **web:** add solutions section featuring work done, results and reviews ([9da9c2f](https://github.com/dewstouh/justdiego/commit/9da9c2fc97b35d18427012425c132caf7471bde5))
* **web:** add suspense fallback to solution detail page ([7c9c1f0](https://github.com/dewstouh/justdiego/commit/7c9c1f07df2391e12d9382771dbcca2fa96c263d))
* **web:** add tags for solution request in endpoints ([d6e1df5](https://github.com/dewstouh/justdiego/commit/d6e1df51f933da7c798f9912e65a2975b6abce8f))
* **web:** add tags in document page ([94c2d23](https://github.com/dewstouh/justdiego/commit/94c2d233166c9b15de07f0f9a8e5d7c4ed6de451))
* **web:** add tools page placeholder ([204a583](https://github.com/dewstouh/justdiego/commit/204a583e4c433e5de370a71561cfc80fb28363ac))
* **web:** add user's country on review card ([9b88152](https://github.com/dewstouh/justdiego/commit/9b88152659822ebaafeb5298ed7c02e9d11dcd16))
* **web:** add video previews compatibility for attachments from youtube, imgur and other sources ([7d36480](https://github.com/dewstouh/justdiego/commit/7d3648023aba0450c634aacaf6728ec69471cd6b))
* **web:** added pixelated backdrop for attachments and konami easter egg ([e0c2a72](https://github.com/dewstouh/justdiego/commit/e0c2a722ad291ec1ece103269773bfb1393907cc))
* **web:** added tag search for admin dashboard solutions ([4b0c017](https://github.com/dewstouh/justdiego/commit/4b0c0172e843ca13223048f71c12bff421e75b59))
* **web:** Broadcrumb component to generate it automatically or customize ([d916536](https://github.com/dewstouh/justdiego/commit/d9165364b9f5df294357053d56bc9512d093bc96))
* **web:** cache footer content ([5918fe7](https://github.com/dewstouh/justdiego/commit/5918fe79cb2c725dcc8ec6aa6310e5891ece10ae))
* **web:** implement Avatar component in ClientReview, DocumentPage and ReviewCard ([4e1fb79](https://github.com/dewstouh/justdiego/commit/4e1fb79046bd6627e02629a0f5f9a3e75bfe6025))
* **web:** new createStaticDocumentPage function to create document pages with two lines of code ([f240e18](https://github.com/dewstouh/justdiego/commit/f240e18c202c805f08916ac73b7b1b78c0c695ed))
* **web:** prepare web for i18n localization ([372f7cb](https://github.com/dewstouh/justdiego/commit/372f7cb7d4830d37d7bbd1eed4f7348bccd9f45b))
* **web:** solution page showing all solution data ([fa29358](https://github.com/dewstouh/justdiego/commit/fa293580a6b8be04ecc232bf6b004a7ec6ea717b))


### Bug Fixes

* **db:** change prisma client path to generated/prisma ([eb5b797](https://github.com/dewstouh/justdiego/commit/eb5b7976f2b4e86b2360f64e6d2f0a72facbe42f))
* **deps/web:** add @justdiego/mocks in web dependencies ([fea2dba](https://github.com/dewstouh/justdiego/commit/fea2dbaf9835c91efb500df2f582fa769585b0cf))
* **exports:** export .ts file instead of .tsx in utils, constants and mock ([3286fe4](https://github.com/dewstouh/justdiego/commit/3286fe4534feb5b9f07c7b4e19e8b14c871836cc))
* **ui:** shrink CTA button padding (py-4) ([3b48e1b](https://github.com/dewstouh/justdiego/commit/3b48e1b74cdecb1b267a7655b9eb910f86eb03d1))
* **web/components:** navbar transparency on page refresh ([8d743ad](https://github.com/dewstouh/justdiego/commit/8d743ad6e35ba8e448caf17e7e6b629f1877993f))
* **web/navbar:** use absolute paths in nav links ([4b3aa1e](https://github.com/dewstouh/justdiego/commit/4b3aa1e9e0187c188cdf2acbd79a4d9c162be4f9))
* **web:** admin panel not redirecting to manage solutions ([9cff7c4](https://github.com/dewstouh/justdiego/commit/9cff7c464520e9d85c9896b48f233c2eaa2dbf36))
* **web:** await slug params before using them in guide ([6625e2a](https://github.com/dewstouh/justdiego/commit/6625e2aaa8a5b01fcb45da7d93da8dbe0ce508c7))
* **web:** min-h-screen not applied in hero component ([b539f47](https://github.com/dewstouh/justdiego/commit/b539f475393dc47d508c3c3a0d196a9f43a2a6f2))
* **web:** redirect CTA main button to /tools instead of /solutions ([7019353](https://github.com/dewstouh/justdiego/commit/70193530285618f88d90a042506d7981092148c3))
* **web:** tailwind config not applying to ui package ([e14f886](https://github.com/dewstouh/justdiego/commit/e14f8869ee98e2562b93d31576b06c828c64c2c9))


### Reverts

* **web:** add view full study case button back on solution card ([6880800](https://github.com/dewstouh/justdiego/commit/6880800388da0efb9c9d37fc177037772c8c3376))
