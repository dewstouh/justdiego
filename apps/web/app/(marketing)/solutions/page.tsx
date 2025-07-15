import { Suspense } from 'react';
import Page from '../_components/Page';
import SolutionsList from './_components/SolutionsList';

export default async function SolutionsPage() {
  return (
    <Page>
      <Page.Header 
        title="All Solutions"
        description="Detailed case studies of problems solved, solutions delivered, and outcomes automated."
        note="Each solution includes technical implementation details, results metrics, and client testimonials."
      />
      
      <Page.Content>
        <Suspense fallback={<div className="animate-pulse bg-gray-200 h-96 rounded m-4"></div>}>
          <SolutionsList />
        </Suspense>
      </Page.Content>
    </Page>
  );
}
