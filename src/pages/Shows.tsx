import { Footer } from '../components/Footer/Footer.styled';
import { Loader } from '../components/Loader/Loader';
import { PageContaner } from '../components/PageContainer/PageContainer.styled';
import { PageHeader } from '../components/PageHeader/PageHeader';
import { ShowsTable } from '../components/ShowsTable/ShowsTable';

export function Shows() {
  return (
    <PageContaner>
      <PageHeader />
      <ShowsTable />
      <Footer />
      <Loader />
    </PageContaner>
  );
}
