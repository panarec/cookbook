import { Container } from 'reactstrap';

export function Footer() {
  return (
    <div className="footer">
      <Container as="footer">
        <hr />
        <p>&copy; {new Date().getFullYear()} &middot; CN Group CZ a.s.</p>
      </Container>
    </div>
  );
}
