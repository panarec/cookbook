import { Table } from 'reactstrap';
import { FaRegTrashAlt } from 'react-icons/fa';

export function IngredientTable({ ingredients, editMode, onDeleteIngredient }) {
  return (
    <Table className="ingredient-list">
      <tbody>
        {ingredients.map((ingredient) => {
          return (
            <tr key={ingredient.name} className="ingredient-item">
              <td className="amount">{ingredient.amount}</td>
              <td className="amount-unit">{ingredient.amountUnit}</td>
              <td className="name">{ingredient.name}</td>
              {editMode && (
                <td>
                  <button
                    className="trashcan-btn"
                    onClick={() => onDeleteIngredient(ingredient.name)}
                  >
                    <FaRegTrashAlt />
                  </button>
                </td>
              )}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
