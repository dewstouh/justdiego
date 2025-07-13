import { getSolutions } from '@justdiego/react-utils';
import BackHomeButton from './_components/BackHomeButton';
import Header from './_components/Header';
import SolutionsGrid from './_components/SolutionsGrid';
import AutoBreadcrumb from '../../../components/AutoBreadcrumb';

export default function SolutionsPage() {
    const solutions = getSolutions();
  return (
    <>
      {/* Breadcrumb */}
      <AutoBreadcrumb />

      {/* Header */}
      <Header />

      {/* Solutions Grid */}
      <SolutionsGrid solutions={solutions} />

      {/* Back to Home */}
      <BackHomeButton />
    </>
  );
}
