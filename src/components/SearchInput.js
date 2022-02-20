import { Input } from 'reactstrap';

export function SearchInput({ setValue, ...rest }) {
  return (
    <Input
      onChange={(e) => setValue(e.target.value)}
      className="mb-4"
      {...rest}
    />
  );
}
