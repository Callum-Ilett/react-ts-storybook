import { FC, useState } from "react";
import "./styles.css";
import {
  MdDelete,
  MdCheckCircle,
  MdRadioButtonUnchecked,
} from "react-icons/md";

interface Props extends Task {}

const Task: FC<Props> = ({ id, title, completed, removeTask, toggleTask }) => {
  const [checked, setChecked] = useState(completed);

  const handleChange = () => {
    setChecked(!checked);
    toggleTask && toggleTask(id);
  };

  return (
    <li className={`task ${checked ? "complete" : "active"}`}>
      <div className="checkbox-wrapper">
        <button type="button" className="checkbox" onClick={handleChange}>
          {checked ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}

          <input
            id={`checkbox-input-${id}`}
            type="checkbox"
            onChange={handleChange}
            checked={checked}
          />
        </button>

        <label htmlFor={`checkbox-input-${id}`}>{title}</label>
      </div>

      <button
        className="danger"
        type="button"
        onClick={() => removeTask && removeTask(id)}
      >
        <MdDelete />
      </button>
    </li>
  );
};

export { Task };
