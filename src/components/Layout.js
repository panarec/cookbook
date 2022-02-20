import { Container } from 'reactstrap';

import { Footer } from './Footer';
import { Header } from './Header';

export function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="main-content">
        <Container>{children}</Container>
      </div>
      <Footer />
    </>
  );
}
