import './Todo.scss';

export const Todo = ({
 onClick, checked, onDelete, title, onKeyUp,
}: { 
    onClick: any,
    checked: boolean, 
    onDelete: any, 
    title: string, 
    onKeyUp: React.KeyboardEventHandler<HTMLDivElement> 
}) => (
  <div className="checkbox">
    <div
      tabIndex={0}
      role="checkbox"
      aria-checked
      className="checkbox-content"
      onClick={onClick}
      onKeyUp={onKeyUp}
    >
      <input tabIndex={-1} type="checkbox" checked={checked} onChange={onClick} />
      <span className={checked ? 'checkbox-checked' : ''}>{title}</span>
    </div>
    <button type="button" className="checkbox-delete" onClick={onDelete}>
      x
    </button>
  </div>
);