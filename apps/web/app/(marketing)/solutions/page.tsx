import { getSolutions } from '@justdiego/react-utils';
import Page from '../_components/Page';
import SolutionsGrid from './_components/SolutionsGrid';

export default function SolutionsPage() {
    const solutions = getSolutions();
  return (
    <Page>
      <Page.Header 
        title="All Solutions"
        description="Detailed case studies of problems solved, solutions delivered, and outcomes automated."
        note="Each solution includes technical implementation details, results metrics, and client testimonials."
      />
      
      <Page.Content>
        <SolutionsGrid solutions={solutions} />
      </Page.Content>
    </Page>
  );
}
