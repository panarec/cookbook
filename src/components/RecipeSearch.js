import { SearchInput } from './SearchInput';

export function RecipeSearch({ filter, onSetFilter, heading, placeholder }) {
  return (
    <div className="recipes-search">
      <h1>{heading}</h1>
      <SearchInput
        value={filter}
        setValue={onSetFilter}
        placeholder={placeholder}
      />
      <span className="separator" />
    </div>
  );
}
